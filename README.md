# Mushaf · Kur'an Yaşam Rehberi

> Kur'an-ı Kerim'in insana yönelik tüm emir, tavsiye, yasak ve ibadetlerini A'dan Z'ye kategorize eden, aranabilir, ultra modern ve kullanıcı dostu bir **Kur'an Yaşam Rehberi** Web Uygulaması (PWA uyumlu).

## Özellikler

- **73 Konu** — A'dan Z'ye tüm İslami prensipler eksiksiz yüklendi
- **Akıllı Arama** — `fuse.js` ile yazarken anında fuzzy search
- **Kategori Filtreleri** — Emir/Tavsiye, Yasaklar, İbadetler
- **A-Z Navigasyon** — Harf bazlı hızlı gezinme
- **Accordion Kartlar** — Framer Motion animasyonlu açılır/kapanır kartlar
- **Dark/Light Mode** — `next-themes` ile kusursuz tema desteği
- **PWA Uyumlu** — Manifest ve meta etiketler hazır
- **Mobile First** — Responsive, dokunma dostu tasarım

## Renk Kodlaması

| Tür | Renk | Açıklama |
|-----|------|----------|
| 🟢 Emir ve Tavsiyeler | Emerald (Zümrüt Yeşili) | Yapılması gereken eylemler |
| 🔴 Yasaklar | Rose (Pastel Kırmızı) | Kaçınılması gereken davranışlar |
| 🕌 İbadetler | Amber (Altın Sarısı) | İbadet ve kulluk eylemleri |

## Teknoloji Yığını

- **Framework**: Next.js 16 (App Router, React 18+)
- **Dil**: TypeScript (Strict mode)
- **Stil**: Tailwind CSS v4
- **UI Bileşenleri**: Shadcn UI / Radix UI
- **İkonlar**: Lucide React
- **Animasyonlar**: Framer Motion
- **Arama**: Fuse.js (client-side fuzzy search)
- **Tema**: next-themes

## Kurulum

```bash
# Bağımlılıkları kur
npm install

# Geliştirme sunucusunu başlat
npm run dev

# Production build
npm run build
npm run start
```

## Veri Yapısı

```typescript
export type Topic = {
  id: string;
  letter: string;
  title: string;
  type: 'command' | 'prohibition' | 'worship';
  description: string;
};
```

Tüm veriler `src/data/quranGuide.ts` dosyasında sabit olarak tutulmaktadır (Zero-latency, harici veritabanı gerektirmez).

## Lisans

Bu proje bilgilendirme amaçlıdır. Dini konularda uzman görüşü alınması tavsiye edilir.
