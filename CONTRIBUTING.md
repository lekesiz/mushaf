# 🤝 Katkı Rehberi — Mushaf Projesi

Mushaf projesine katkıda bulunmak istediğiniz için teşekkür ederiz! Bu rehber, katkı sürecini adım adım açıklamaktadır.

---

## 📋 İçindekiler

- [Davranış Kuralları](#davranış-kuralları)
- [Nasıl Katkıda Bulunabilirim?](#nasıl-katkıda-bulunabilirim)
- [Yeni Konu Ekleme](#yeni-konu-ekleme)
- [Hata Bildirme](#hata-bildirme)
- [Özellik Önerme](#özellik-önerme)
- [Pull Request Süreci](#pull-request-süreci)
- [İletişim](#iletişim)

---

## 🌿 Davranış Kuralları

Bu proje İslami değerlere ve saygılı bir topluluk anlayışına dayanmaktadır. Katkıda bulunan herkesin:

- Saygılı ve yapıcı bir dil kullanması
- Farklı görüşlere açık olması
- İçeriklerin Kur'an-ı Kerim'e dayalı ve doğru olmasına özen göstermesi

beklenmektedir.

---

## 🛠️ Nasıl Katkıda Bulunabilirim?

### 1. Yeni Konu Eklemek
Kur'an'da geçen ancak sitede yer almayan bir konu fark ettiyseniz, yeni bir konu ekleyebilirsiniz.

### 2. Mevcut Konuları Düzeltmek
Yanlış kategori, eksik ayet referansı veya hatalı açıklama gibi sorunları düzeltebilirsiniz.

### 3. Çeviri Yapmak
Uygulamayı farklı dillere (Arapça, İngilizce, Fransızca vb.) çevirebilirsiniz.

### 4. Arayüz İyileştirmeleri
UI/UX iyileştirmeleri, erişilebilirlik düzeltmeleri veya yeni özellikler ekleyebilirsiniz.

### 5. Hata Bildirmek
Karşılaştığınız hataları [Issues](https://github.com/lekesiz/mushaf/issues) sayfasından bildirebilirsiniz.

---

## 📝 Yeni Konu Ekleme

### Adım 1: Depoyu Fork'layın

```bash
# GitHub'da "Fork" butonuna tıklayın, ardından:
git clone https://github.com/KULLANICI_ADINIZ/mushaf.git
cd mushaf
git checkout -b yeni-konu/konu-adi
```

### Adım 2: Veri Dosyasını Düzenleyin

`src/data/quranGuide.ts` dosyasını açın ve uygun alfabetik sıraya yeni konuyu ekleyin:

```typescript
{
  id: 'konu-id',           // Benzersiz, küçük harf, Türkçe karakter yok, tire ile
  letter: 'K',             // Türkçe alfabedeki ilk harfi (büyük)
  title: 'Konu Başlığı',   // Türkçe başlık
  type: 'command',         // Kategori (aşağıya bakın)
  description: 'Açıklama ve ayet referansları. (Sure Adı Sure:Ayet)',
},
```

### Kategori Türleri

| Tür | Açıklama | Örnek |
|-----|----------|-------|
| `'command'` | Emir ve Tavsiyeler | Namaz, Sadaka, Adalet |
| `'prohibition'` | Yasaklar | Faiz, Yalan, Gıybet |
| `'worship'` | İbadetler | Hac, Oruç, Zekât |

### Açıklama Yazma Kuralları

- Açıklama **Kur'an-ı Kerim'e dayalı** olmalıdır
- Ayet referansları şu formatta verilmelidir: `(Sure Adı Sure_No:Ayet_No)`
- Örnek: `(Bakara 2:183)`, `(Nisa 4:11-12)`
- Açıklama **50-200 kelime** arasında olmalıdır
- Sade, anlaşılır Türkçe kullanılmalıdır

### Adım 3: Test Edin

```bash
npm install
npm run dev
# http://localhost:3000 adresinde konunun doğru göründüğünü kontrol edin
npm run build
# Build hatası olmadığını doğrulayın
```

### Adım 4: Pull Request Açın

```bash
git add .
git commit -m "feat: [Konu Adı] konusu eklendi"
git push origin yeni-konu/konu-adi
```

GitHub'da "New Pull Request" butonuna tıklayın ve şu bilgileri ekleyin:
- Eklenen konunun adı ve kategorisi
- Dayandığı ayet referansları
- Varsa ek notlar

---

## 🐛 Hata Bildirme

[Issues](https://github.com/lekesiz/mushaf/issues/new) sayfasından yeni bir issue açın ve şunları belirtin:

- **Hatanın açıklaması:** Ne oldu?
- **Beklenen davranış:** Ne olması gerekiyordu?
- **Adımlar:** Hatayı nasıl yeniden oluşturabilirim?
- **Ekran görüntüsü:** Varsa ekleyin
- **Ortam:** Tarayıcı, işletim sistemi

---

## 💡 Özellik Önerme

Yeni bir özellik önermek için [Discussions](https://github.com/lekesiz/mushaf/discussions) sayfasını kullanın. Şunları belirtin:

- **Özelliğin açıklaması:** Ne yapmasını istiyorsunuz?
- **Neden gerekli?** Bu özellik projeye nasıl katkı sağlar?
- **Alternatifler:** Başka çözüm yolları düşündünüz mü?

---

## 🔄 Pull Request Süreci

1. Değişikliklerinizi açıklayan net bir başlık yazın
2. PR açıklamasında ne değiştirdiğinizi ve neden değiştirdiğinizi belirtin
3. Varsa ilgili Issue numarasını ekleyin (`Closes #123`)
4. Build'in başarılı olduğundan emin olun (`npm run build`)
5. İnceleme sonrası istenen değişiklikleri yapın

### Commit Mesajı Formatı

```
feat: Yeni özellik açıklaması
fix: Hata düzeltme açıklaması
docs: Dokümantasyon güncellemesi
style: Kod stili değişikliği
refactor: Kod yeniden yapılandırma
```

---

## 📬 İletişim

Herhangi bir sorunuz varsa:

- **GitHub Discussions:** [github.com/lekesiz/mushaf/discussions](https://github.com/lekesiz/mushaf/discussions)
- **GitHub Issues:** [github.com/lekesiz/mushaf/issues](https://github.com/lekesiz/mushaf/issues)

---

Katkınız için şimdiden teşekkürler! Her katkı, bu projeyi daha kapsamlı ve faydalı hale getiriyor. ❤️
