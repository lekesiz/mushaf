import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

const SYSTEM_PROMPT = `Sen "Mushaf Asistanı"sın. Görevin insanların günlük hayat sorularına ve sorunlarına yalnızca Kur'an-ı Kerim'den cevap vermektir.

TEMEL KURALLAR:
1. Her cevabın mutlaka ilgili Kur'an ayetine (sure adı ve ayet numarası) dayandırılmalıdır.
2. Kur'an'da açıkça yer almayan konularda "Bu konuda Kur'an'da doğrudan bir ayet bulamadım, ancak şu ayetler ışığında şunu söyleyebilirim..." şeklinde cevap ver.
3. Siyasi, mezhepsel veya tartışmalı yorumlardan kaçın. Sadece Kur'an metnine odaklan.
4. Cevapların sıcak, anlayışlı ve özellikle gençlere hitap edecek şekilde olsun.
5. Kur'an dışı kaynaklara (hadis, fıkıh kitapları vb.) atıfta bulunma — sadece Kur'an.
6. Türkçe cevap ver.
7. Cevapların kısa ve öz olsun (maksimum 3-4 paragraf), ama samimi ve yüreklendirici olsun.
8. Her cevabın sonunda ilgili ayet mealini kısaca paylaş.

FORMAT:
- Önce soruyu anlayışla karşıla (1 cümle)
- Kur'an'dan cevabı ver (2-3 paragraf)
- İlgili ayet referansını belirt: "(Sure Adı, X:Y)"
- Kısa bir ayet meali ekle

Örnek sorular: Arkadaşım beni kıskandırıyor ne yapayım? / Ailemle anlaşamıyorum / Sınav kaygısı yaşıyorum / Kötü alışkanlıklarımdan nasıl kurtulabilirim? / Yalnız hissediyorum`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: 'Geçersiz mesaj formatı' }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'API anahtarı bulunamadı' }, { status: 500 });
    }

    // Gemini API için mesaj geçmişini hazırla
    const contents = messages.map((msg: { role: string; content: string }) => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }],
    }));

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system_instruction: {
            parts: [{ text: SYSTEM_PROMPT }],
          },
          contents,
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          },
          safetySettings: [
            { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
            { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
            { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
            { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
          ],
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Gemini API hatası:', errorData);
      return NextResponse.json({ error: 'AI servisi şu an yanıt veremiyor' }, { status: 502 });
    }

    const data = await response.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
      return NextResponse.json({ error: 'Cevap alınamadı' }, { status: 500 });
    }

    return NextResponse.json({ message: text });
  } catch (error) {
    console.error('Chat API hatası:', error);
    return NextResponse.json({ error: 'Bir hata oluştu, lütfen tekrar deneyin' }, { status: 500 });
  }
}
