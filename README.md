# Uçak Radar Takip Uygulaması

Bu proje, React ve Vite kullanarak geliştirilmiş bir uçak radar takip uygulamasıdır. Kullanıcılar, harita üzerinde uçakların konumlarını izleyebilir ve uçuş detaylarına ulaşabilirler. Proje, verileri RapidAPI'den almakta ve kullanıcı arayüzünü Bootstrap ile tasarlamaktadır. Durum yönetimi için Redux Toolkit kullanılmıştır.

## Özellikler

- **Harita Görünümü:** Uçakların güncel konumları Leaflet kütüphanesi ile harita üzerinde görüntülenir. Uçakların üzerine tıkladığınızda açılan pop-up'ta detay butonu ile uçuş bilgilerine ulaşabilirsiniz.
- **Detay Modali:** Uçuş bilgileri, kalkış ve varış havaalanları, uçuş saatleri, hava yolu şirketi gibi verilere erişim sağlar.
- **Tablo Görünümü:** Tüm uçuş verileri, tablo halinde sıralanmış olarak görüntülenir. Detay butonuna tıkladığınızda modal üzerinden verilere erişebilirsiniz.
- **Rota Bilgisi:** Harita üzerinde uçuş rotası bilgileri mevcuttur.


## Ekran Görüntüleri

Proje arayüzünün bir önizlemesini görmek için aşağıdaki GIF veya ekran görüntülerine göz atabilirsiniz:

![Uçak Radar Takip Uygulaması GIF](./desktop.gif)


## Proje Kurulumu

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyin:

1. **Projeyi klonlayın:**

   ```bash
   git clone https://github.com/cengo14/react-redux-flight-radar-app-project.git
   ```

2. **Proje dizinine gidin:**

   ```bash
   cd react-redux-flight-radar-app-project
   ```

3. **Gerekli bağımlılıkları yükleyin:**

   ```bash
   npm install
   ```

4. **Uygulamayı başlatın:**

   ```bash
   npm run dev
   ```

5. Tarayıcıda `http://localhost:3000` adresine giderek uygulamayı görüntüleyin.

## Kullanılan Teknolojiler

- **React:** Kullanıcı arayüzü geliştirmek için.
- **Redux Toolkit:** Durum yönetimi için.
- **React Router DOM:** Çok sayfalı yapı için.
- **Axios:** API istekleri yapmak için.
- **RapidAPI:** Uçuş verilerini sağlamak için.
- **Leaflet:** Harita görünümü için.
- **Bootstrap:** Stil düzenlemeleri için.
- **Moment:** Tarih ve saat formatlama için.
- **React Icons:** Kullanıcı arayüzünde ikonlar eklemek için.
- **React Paginate:** Sayfalandırma özelliği için.

## Proje Yapısı

```
flight-tracking-app/
├── public/

│   └── ...
├── src/
│   ├── components/      # React bileşenleri
│   ├── redux/           # Redux Toolkit özellikleri
│   ├── utils/           # Yardımcı dosyalar
│   ├── App.js           # Ana bileşen
│   ├── index.css        # Stil dosyaları 
│   ├── main.jsx         # Giriş noktası
│   └── ...
├── .env                 # Çevresel değişkenler
├── index.html
├── package.json         # Proje bağımlılıkları
└── README.md            # Proje belgeleri
```


## Katkıda Bulunma

Katkıda bulunmak isterseniz, aşağıdaki adımları takip ederek projeye katkıda bulunabilirsiniz:

1. Projeyi fork edin.
2. Yeni bir feature branch oluşturun (`git checkout -b feature/YourFeature`).
3. Değişikliklerinizi yapın ve commit edin (`git commit -m 'Add some feature'`).
4. Branch'i push edin (`git push origin feature/YourFeature`).
5. Pull request oluşturun.

## Lisans

Bu proje MIT lisansı ile lisanslanmıştır. Ayrıntılar için `LICENSE` dosyasına bakın.

---

Bu şablonun projen hakkında net bir bilgi sunduğunu umuyorum. Başka bir konuda yardımcı olabilir miyim?
