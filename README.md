# 📖 Mushaf · Kur'an Yaşam Rehberi

<div align="center">

[![Canlı Site](https://img.shields.io/badge/Canlı%20Site-mushaf--lekesizs--projects.vercel.app-brightgreen?style=for-the-badge&logo=vercel)](https://mushaf-lekesizs-projects.vercel.app)
[![GitHub Stars](https://img.shields.io/github/stars/lekesiz/mushaf?style=for-the-badge&logo=github)](https://github.com/lekesiz/mushaf/stargazers)
[![GitHub Issues](https://img.shields.io/github/issues/lekesiz/mushaf?style=for-the-badge)](https://github.com/lekesiz/mushaf/issues)
[![Lisans: MIT](https://img.shields.io/badge/Lisans-MIT-blue?style=for-the-badge)](LICENSE)

**Kur'an-ı Kerim'deki tüm emir, yasak, tavsiye ve ibadetleri A'dan Z'ye listeleyen,**
**yapay zeka destekli günlük rehber uygulaması.**

[🌐 Canlı Site](https://mushaf-lekesizs-projects.vercel.app) &nbsp;·&nbsp;
[🐛 Hata Bildir](https://github.com/lekesiz/mushaf/issues/new?template=bug_report.md) &nbsp;·&nbsp;
[💡 Konu Öner](https://github.com/lekesiz/mushaf/issues/new?template=konu-onerisi.md) &nbsp;·&nbsp;
[💬 Tartışmalar](https://github.com/lekesiz/mushaf/discussions)

</div>

---

## 🌟 Proje Hakkında

**Mushaf**, Kur'an-ı Kerim'i doğrudan kaynak alarak 140'tan fazla konuyu alfabetik olarak listeleyen, arama ve filtreleme imkânı sunan açık kaynaklı bir web uygulamasıdır.

Projenin temel amacı; gençlerin ve her yaştan insanın günlük hayatta karşılaştığı sorulara Kur'an'ın ışığında cevap bulmasını kolaylaştırmaktır. Yapay zeka asistanı sayesinde kullanıcılar doğrudan soru sorabilir ve yalnızca Kur'an'a dayalı cevaplar alabilir.

---

## ✨ Özellikler

| Özellik | Açıklama |
|---------|----------|
| 📚 **140+ Konu** | Emir, Yasak, Tavsiye ve İbadetler — A'dan Z'ye |
| 🔍 **Anlık Arama** | Fuse.js ile yazarken fuzzy search |
| 🏷️ **Kategori Filtreleri** | Emir & Tavsiyeler · Yasaklar · İbadetler |
| 🔤 **A-Z Navigasyon** | Harf bazlı hızlı erişim |
| 🤖 **Yapay Zeka Asistanı** | Gemini AI ile Kur'an odaklı sohbet |
| 🌙 **Dark / Light Mode** | Sistem teması + manuel geçiş |
| 📱 **Responsive Tasarım** | Mobil öncelikli, her ekranda mükemmel |
| ⚡ **PWA Desteği** | Manifest ile uygulama gibi kurulabilir |

---

## 🛠️ Teknoloji Yığını

- **Framework:** [Next.js 16](https://nextjs.org/) + TypeScript
- **Stil:** [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Bileşenleri:** [shadcn/ui](https://ui.shadcn.com/)
- **Animasyon:** [Framer Motion](https://www.framer.com/motion/)
- **Arama:** [Fuse.js](https://fusejs.io/)
- **Yapay Zeka:** [Google Gemini 2.0 Flash](https://ai.google.dev/)
- **Deploy:** [Vercel](https://vercel.com/)

---

## 🚀 Yerel Geliştirme

```bash
# Depoyu klonlayın
git clone https://github.com/lekesiz/mushaf.git
cd mushaf

# Bağımlılıkları yükleyin
npm install

# Ortam değişkenlerini ayarlayın
echo "GEMINI_API_KEY=your_api_key_here" > .env.local

# Geliştirme sunucusunu başlatın
npm run dev
```

Tarayıcıda [http://localhost:3000](http://localhost:3000) adresini açın.

> **Not:** Yapay zeka sohbet özelliği için [Google AI Studio](https://aistudio.google.com/)'dan ücretsiz bir `GEMINI_API_KEY` alabilirsiniz.

---

## 🤝 Katkıda Bulunun

Bu proje topluluk katkısına tamamen açıktır ve her türlü katkı değerlidir!

### Nasıl Katkıda Bulunabilirim?

- **📝 Yeni konu eklemek** → `src/data/quranGuide.ts` dosyasını düzenleyip PR gönderin
- **🐛 Hata bildirmek** → [Issues](https://github.com/lekesiz/mushaf/issues) sayfasından bildirin
- **💡 Özellik önermek** → [Discussions](https://github.com/lekesiz/mushaf/discussions) üzerinden tartışın
- **🌍 Çeviri yapmak** → Farklı dil desteği ekleyin (Arapça, İngilizce, Fransızca...)
- **🎨 Tasarım iyileştirmek** → UI/UX önerileri için PR açın
- **⭐ Destek olmak** → Projeyi yıldızlayın ve çevrenizle paylaşın

Detaylı katkı rehberi için [CONTRIBUTING.md](CONTRIBUTING.md) dosyasını inceleyin.

### Veri Yapısı

Yeni konu eklemek için `src/data/quranGuide.ts` dosyasındaki yapıyı kullanın:

```typescript
{
  id: 'konu-id',          // benzersiz, küçük harf, tire ile
  letter: 'A',            // Türkçe alfabedeki ilk harfi
  title: 'Konu Başlığı',  // Türkçe başlık
  type: 'command',        // 'command' | 'prohibition' | 'worship'
  description: 'Kur\'an-ı Kerim\'de bu konuya dair açıklama ve ayet referansları...',
}
```

---

## 📬 İletişim

Sorularınız, önerileriniz veya iş birliği teklifleriniz için bizimle iletişime geçin:

| Kanal | Bağlantı |
|-------|---------|
| 💬 **GitHub Discussions** | [Tartışma başlatın](https://github.com/lekesiz/mushaf/discussions) |
| 🐛 **GitHub Issues** | [Sorun bildirin](https://github.com/lekesiz/mushaf/issues) |
| ⭐ **GitHub Profil** | [github.com/lekesiz](https://github.com/lekesiz) |

---

## 📄 Lisans

Bu proje [MIT Lisansı](LICENSE) ile lisanslanmıştır. Özgürce kullanabilir, değiştirebilir ve dağıtabilirsiniz.

> Bu uygulama bilgilendirme amaçlıdır. Dini konularda uzman görüşü alınması tavsiye edilir.

---

<div align="center">

Topluluk katkısıyla geliştirilmektedir ❤️

**[mushaf-lekesizs-projects.vercel.app](https://mushaf-lekesizs-projects.vercel.app)**

</div>
