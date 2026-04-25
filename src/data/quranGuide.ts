export type TopicType = 'command' | 'prohibition' | 'worship';

export interface Topic {
  id: string;
  letter: string;
  title: string;
  type: TopicType;
  description: string;
}

export const topics: Topic[] = [
  // A
  {
    id: 'adalet',
    letter: 'A',
    title: 'Adalet',
    type: 'command',
    description:
      'Kendi aleyhine, anne-babanın veya zenginin/fakirin aleyhine bile olsa adaletten asla şaşmamak.',
  },
  {
    id: 'affedicilik',
    letter: 'A',
    title: 'Affedicilik',
    type: 'command',
    description:
      'İnsanların kusurlarını bağışlamak, kötülüğe gücü yettiğince iyilikle mukabelede bulunmak.',
  },
  {
    id: 'ahde-vefa',
    letter: 'A',
    title: 'Ahde Vefa',
    type: 'command',
    description:
      'Verilen sözleri, yeminleri ve yapılan sözleşmeleri ne pahasına olursa olsun tutmak.',
  },
  {
    id: 'akli-kullanmak',
    letter: 'A',
    title: 'Aklı Kullanmak (Tefekkür)',
    type: 'command',
    description:
      'Kâinatı, yaratılışı, olayları ve ayetleri sürekli sorgulamak; aklı kiraya vermemek.',
  },
  {
    id: 'akrabayi-gozetmek',
    letter: 'A',
    title: 'Akrabayı Gözetmek',
    type: 'command',
    description:
      'Yakınları arayıp sormak, ihtiyaç anında onlara maddi/manevi destek olmak.',
  },
  {
    id: 'alay-etmek',
    letter: 'A',
    title: 'Alay Etmek',
    type: 'prohibition',
    description:
      'İnsanları dış görünüşü veya statüsüyle küçümsemek, onlarla dalga geçmek.',
  },
  {
    id: 'anne-babaya-iyilik',
    letter: 'A',
    title: 'Anne-Babaya İyilik',
    type: 'command',
    description:
      'Ebeveyne merhamet kanatlarını germek, özellikle yaşlandıklarında "öf" dahi dememek.',
  },
  {
    id: 'arastirmak',
    letter: 'A',
    title: 'Araştırmak (Teyitçilik)',
    type: 'command',
    description:
      'Özellikle güvenilmeyen (fasık) kaynaklardan gelen haberleri körü körüne kabul etmeyip doğruluğunu mutlaka teyit etmek.',
  },

  // B
  {
    id: 'bagnazlik',
    letter: 'B',
    title: 'Bağnazlık',
    type: 'prohibition',
    description:
      'Aklı kullanmadan sırf atalarımızdan, büyüklerimizden böyle gördük diyerek yanlış gelenekleri din edinmek.',
  },
  {
    id: 'baristiricilik',
    letter: 'B',
    title: 'Barıştırıcılık',
    type: 'command',
    description:
      'Küslerin, anlaşmazlığa düşen eşlerin veya grupların arasını adaletle bularak barışı tesis etmek.',
  },
  {
    id: 'borclari-yaziya-dokmek',
    letter: 'B',
    title: 'Borçları Yazıya Dökmek',
    type: 'command',
    description:
      'İleride anlaşmazlık çıkmaması için borçları ve ticari antlaşmaları şahitlerle yazılı hale getirmek.',
  },
  {
    id: 'bolucüluk',
    letter: 'B',
    title: 'Bölücülük',
    type: 'prohibition',
    description:
      'Dinde ve toplumda fırkalara, cemaatlere, hiziplere ayrılarak kardeşliği yok etmek.',
  },

  // C
  {
    id: 'buyu-ve-falcilik',
    letter: 'C',
    title: 'Büyü ve Falcılık',
    type: 'prohibition',
    description:
      'İnsanların iradesini manipüle etmeye çalışmak (sihir) ve gaybı (geleceği) okuma iddiasında bulunmak.',
  },
  {
    id: 'cana-kiymak',
    letter: 'C',
    title: 'Cana Kıymak (Cinayet)',
    type: 'prohibition',
    description:
      "Bir masumu haksız yere öldürmek (Kur'an'a göre bütün insanlığı öldürmek hükmündedir).",
  },
  {
    id: 'cimrilik',
    letter: 'C',
    title: 'Cimrilik',
    type: 'prohibition',
    description:
      'Sahip olunan malı sadece kendine saklayıp, ihtiyaç sahiplerinden ve iyilikten esirgemek.',
  },

  // Ç
  {
    id: 'calismak',
    letter: 'Ç',
    title: 'Çalışmak (Emek)',
    type: 'command',
    description:
      'İnsanın ancak kendi çabasının karşılığını alacağı bilinciyle, rızkını helal yoldan aramak, tembellik etmemek.',
  },
  {
    id: 'cevreyi-tahrip-etmek',
    letter: 'Ç',
    title: 'Çevreyi Tahrip Etmek',
    type: 'prohibition',
    description:
      'Yeryüzünde ekolojik dengeyi bozmak, nesli, doğayı ve tarımı (ekini) zehirlemek.',
  },

  // D
  {
    id: 'danismak',
    letter: 'D',
    title: 'Danışmak (İstişare)',
    type: 'command',
    description:
      'Kararları tek adam mantığıyla dayatmak yerine, konunun uzmanlarına ve ilgililerine danışarak almak.',
  },
  {
    id: 'dogruluk',
    letter: 'D',
    title: 'Doğruluk (Sıdk)',
    type: 'command',
    description:
      'Özde, sözde, niyette ve şahitlikte dürüstlükten taviz vermemek.',
  },
  {
    id: 'dua-ve-yakaris',
    letter: 'D',
    title: 'Dua ve Yakarış',
    type: 'worship',
    description:
      "Sıkıntıları ve istekleri hiçbir aracı koymadan doğrudan Allah'a arz etmek.",
  },

  // E
  {
    id: 'emanete-riayet',
    letter: 'E',
    title: 'Emanete Riayet',
    type: 'command',
    description:
      'Korunmak üzere bırakılan maddi, manevi veya kamusal sır ve emanetlere hıyanet etmemek.',
  },
  {
    id: 'emr-i-bil-maruf',
    letter: 'E',
    title: 'Emr-i Bil Maruf',
    type: 'command',
    description:
      'Toplumda iyiliği tavsiye etmek ve haksızlıklara/kötülüklere aktif bir şekilde engel olmak.',
  },

  // F
  {
    id: 'faiz',
    letter: 'F',
    title: 'Faiz (Riba)',
    type: 'prohibition',
    description:
      'Emeğe dayanmayan, başkasının darlığını ve çaresizliğini sömüren tefecilik/faiz sisteminden uzak durmak.',
  },
  {
    id: 'fuhsiyat',
    letter: 'F',
    title: 'Fuhşiyat',
    type: 'prohibition',
    description:
      'Her türlü hayasızlık, edepsizlik ve ahlaksızlığa giden yollardan (yaklaşmaktan) uzak durmak.',
  },

  // G
  {
    id: 'giybet',
    letter: 'G',
    title: 'Gıybet',
    type: 'prohibition',
    description:
      'Bir insanın arkasından, duyduğunda hoşlanmayacağı şekilde konuşmak (ölü kardeşinin etini yemek hükmündedir).',
  },
  {
    id: 'gosteris',
    letter: 'G',
    title: 'Gösteriş (Riya)',
    type: 'prohibition',
    description:
      'İbadetleri veya iyilikleri Allah rızası için değil, "insanlar görsün, beni övsün" diyerek yapmak.',
  },

  // H
  {
    id: 'hac',
    letter: 'H',
    title: 'Hac',
    type: 'worship',
    description:
      "Sağlık durumu elverişli ve maddi imkânı yerinde olan (yol bulabilen) her insanın, ömründe bir kez Kâbe'yi ziyaret etmesi.",
  },
  {
    id: 'haddi-asmamak',
    letter: 'H',
    title: 'Haddi Aşmamak',
    type: 'prohibition',
    description:
      'Savaşta, barışta, cezada veya günlük hayatta belirlenen hukuki ve ahlaki sınırları ihlal etmemek.',
  },
  {
    id: 'hakaret-etmek',
    letter: 'H',
    title: 'Hakaret Etmek',
    type: 'prohibition',
    description:
      'Kendi inancını savunurken başkalarının inancına, taptıklarına sövmemek (kutuplaşmayı engellemek için).',
  },
  {
    id: 'haset',
    letter: 'H',
    title: 'Haset (Kıskançlık)',
    type: 'prohibition',
    description:
      'Başkasının sahip olduğu başarıyı veya nimeti çekememek, onun elinden gitmesini istemek.',
  },
  {
    id: 'helal-beslenmek',
    letter: 'H',
    title: 'Helal Beslenmek',
    type: 'command',
    description:
      'Sadece helal değil; sağlığa uygun, temiz ve kaliteli (tayyib) gıdalar tüketmek.',
  },
  {
    id: 'hirsizlik-ve-gasp',
    letter: 'H',
    title: 'Hırsızlık ve Gasp',
    type: 'prohibition',
    description:
      "Başkasının malını, emeğini veya hakkını gizlice ya da zorbalıkla elinden almak.",
  },

  // İ
  {
    id: 'ibadetlerde-devamlilk',
    letter: 'İ',
    title: 'İbadetlerde Devamlılık',
    type: 'worship',
    description:
      'Farz kılınan ibadetleri huşu içinde ve şuurlu olarak yerine getirmek.',
  },
  {
    id: 'iciki-ve-sarhos-ediciler',
    letter: 'İ',
    title: 'İçki ve Sarhoş Ediciler',
    type: 'prohibition',
    description:
      'Aklı ve iradeyi devre dışı bırakan, cinayet ve kötülüklere kapı aralayan her türlü uyuşturucu/sarhoş edici maddeden uzak durmak.',
  },
  {
    id: 'iffet',
    letter: 'İ',
    title: 'İffet (Namus)',
    type: 'command',
    description:
      'Beden dokunulmazlığını ve edep sınırlarını korumak, iffetli bir hayat sürmek.',
  },
  {
    id: 'iftira',
    letter: 'İ',
    title: 'İftira',
    type: 'prohibition',
    description:
      'İnsanlara, özellikle masum kadın ve erkeklere asılsız namus ve ahlaksızlık suçlamaları yöneltmek.',
  },
  {
    id: 'infak-ve-yardimlaşma',
    letter: 'İ',
    title: 'İnfak ve Yardımlaşma',
    type: 'worship',
    description:
      'İhtiyaç fazlası malı; yetimler, yoksullar ve yolda kalmışlarla beklentisiz paylaşmak.',
  },
  {
    id: 'intihar',
    letter: 'İ',
    title: 'İntihar',
    type: 'prohibition',
    description:
      'Kendi canına kıymak veya bedenini kasten tehlikeye atmak.',
  },
  {
    id: 'israf',
    letter: 'İ',
    title: 'İsraf',
    type: 'prohibition',
    description:
      'Parayı, suyu, gıdayı, zamanı veya doğayı amaçsızca saçıp savurmak.',
  },
  {
    id: 'iyiligi-basa-kakmak',
    letter: 'İ',
    title: 'İyiliği Başa Kakmak',
    type: 'prohibition',
    description:
      'Yapılan yardımı sonradan kişinin yüzüne vurup onu ezmek (iyiliğin sevabını tamamen sıfırlar).',
  },

  // K
  {
    id: 'kibir-ve-gurur',
    letter: 'K',
    title: 'Kibir ve Gurur',
    type: 'prohibition',
    description:
      'Kendini diğer insanlardan üstün görmek, insanlara tepeden bakmak ve yeryüzünde böbürlenmek.',
  },
  {
    id: 'kotü-lakap-takmak',
    letter: 'K',
    title: 'Kötü Lakap Takmak',
    type: 'prohibition',
    description:
      'İnsanlara incitici, onur kırıcı ve dalga geçici isimler takmak.',
  },
  {
    id: 'kumar',
    letter: 'K',
    title: 'Kumar',
    type: 'prohibition',
    description:
      'Emek harcamadan ve başkalarının mağduriyeti üzerinden şans oyunlarıyla haksız kazanç elde etmek.',
  },
  {
    id: 'kurban',
    letter: 'K',
    title: 'Kurban',
    type: 'worship',
    description:
      "Allah'a yakınlaşmak ve takva bilincine ulaşmak amacıyla kurban kesmek ve etini yoksullarla paylaşmak.",
  },

  // L
  {
    id: 'liyakat',
    letter: 'L',
    title: 'Liyakat',
    type: 'command',
    description:
      'Makamları, işleri ve kamu görevlerini dindarlığa veya akrabalığa göre değil; o işi en iyi yapacak uzmanına (ehline) vermek.',
  },

  // M
  {
    id: 'mahremiyete-saygi',
    letter: 'M',
    title: 'Mahremiyete Saygı',
    type: 'command',
    description:
      'Başkalarının evlerine veya odalarına izin istemeden (kapı çalmadan / selam vermeden) patavatsızca girmemek.',
  },

  // N
  {
    id: 'namaz',
    letter: 'N',
    title: 'Namaz (Salât)',
    type: 'worship',
    description:
      'İnsanı kötülükten alıkoyan, belirli vakitlerde, temizlenerek (abdest) ve huşu içinde kılınan, yaratıcıyla dikey bağ kuran temel ibadet.',
  },
  {
    id: 'nankorlik',
    letter: 'N',
    title: 'Nankörlük',
    type: 'prohibition',
    description:
      "Allah'ın verdiği nimetleri ve insanların yaptığı iyilikleri görmezden gelmek, kıymet bilmemek.",
  },

  // O
  {
    id: 'oruc',
    letter: 'O',
    title: 'Oruç (Savm)',
    type: 'worship',
    description:
      'İnsanın iradesini terbiye etmesi, nefsini tutması ve takvaya ulaşması için Ramazan ayında tutulan ibadet.',
  },

  // Ö
  {
    id: 'ofke-kontrolu',
    letter: 'Ö',
    title: 'Öfke Kontrolü',
    type: 'command',
    description:
      'Öfkelendiğinde kendine hakim olmak, öfkeyi yutarak kırıcı davranışlardan kaçınmak.',
  },
  {
    id: 'olcu-tartida-hile',
    letter: 'Ö',
    title: 'Ölçü ve Tartıda Hile Yapmak',
    type: 'prohibition',
    description:
      'Ticarette malın kusurunu gizlemek, eksik tartarak veya malzemeden çalarak müşteriyi aldatmak.',
  },

  // R
  {
    id: 'ruşvet',
    letter: 'R',
    title: 'Rüşvet',
    type: 'prohibition',
    description:
      'Haksız bir menfaat veya yargı kararı elde etmek için yetkililere gizlice mal veya para yedirmek.',
  },

  // S
  {
    id: 'sabir',
    letter: 'S',
    title: 'Sabır',
    type: 'command',
    description:
      'Hastalık, ölüm, zorluk ve krizler karşısında isyan etmeden direnmek, psikolojik dirayeti korumak.',
  },
  {
    id: 'selamlasmak',
    letter: 'S',
    title: 'Selamlaşmak',
    type: 'command',
    description:
      'Bir yere girildiğinde selam vermek; alınan selama aynıyla veya daha güzeliyle (tebessümle) karşılık vermek.',
  },
  {
    id: 'servet-stoklamak',
    letter: 'S',
    title: 'Servet Stoklamak (Kenz)',
    type: 'prohibition',
    description:
      'Parayı, altını ve serveti piyasaya/üretime sürmeden yastık altında hapsetmek; servetin sadece zenginler arasında dönmesine sebep olmak.',
  },
  {
    id: 'suizan',
    letter: 'S',
    title: 'Suizan',
    type: 'prohibition',
    description:
      'İnsanlar hakkında kesin bir kanıt olmadan içinden sürekli kötü zanda ve şüphede bulunmak.',
  },

  // Ş
  {
    id: 'sahitlikte-dogruluk',
    letter: 'Ş',
    title: 'Şahitlikte Doğruluk',
    type: 'command',
    description:
      'Mahkemede veya bir olayda yalan söylememek, gerçeği gizlememek (Yalancı şahitlik yasaktır).',
  },
  {
    id: 'sirk',
    letter: 'Ş',
    title: 'Şirk',
    type: 'prohibition',
    description:
      "Allah'a ortak koşmak, O'ndan başkasına ilahi güç atfetmek (Tövbesiz affı olmayan tek günahtır).",
  },
  {
    id: 'sukur',
    letter: 'Ş',
    title: 'Şükür',
    type: 'worship',
    description:
      'Verilen aklın, sağlığın ve nimetlerin değerini bilmek, dille ve fiille (iyilik yaparak) karşılık vermek.',
  },

  // T
  {
    id: 'takva',
    letter: 'T',
    title: 'Takva',
    type: 'command',
    description:
      'Her an yaratıcının gözetimi altında olduğunun bilinciyle, yüksek bir otokontrol ve sorumluluk duygusuyla yaşamak.',
  },
  {
    id: 'tatli-dilli-olmak',
    letter: 'T',
    title: 'Tatlı Dilli Olmak',
    type: 'command',
    description:
      'İnsanlarla konuşurken kaba/kırıcı olmamak, sesi gereksiz yükseltmemek ve yapıcı bir üslup kullanmak.',
  },
  {
    id: 'tecessus',
    letter: 'T',
    title: 'Tecessüs',
    type: 'prohibition',
    description:
      "Başkalarının özel hayatını, ayıplarını, gizli sırlarını veya telefonunu/mesajlarını araştırmak, casusluk yapmak.",
  },
  {
    id: 'tevazu',
    letter: 'T',
    title: 'Tevazu',
    type: 'command',
    description:
      'Yeryüzünde böbürlenmeden, makam ve parayla şımarmadan, alçakgönüllülükle yaşamak.',
  },
  {
    id: 'tevekkul',
    letter: 'T',
    title: 'Tevekkül',
    type: 'command',
    description:
      "Gerekli tüm tedbirleri alıp sonuna kadar çabaladıktan sonra, sonucu Allah'a bırakmak ve O'na tam güvenmek.",
  },
  {
    id: 'tevhid',
    letter: 'T',
    title: 'Tevhid',
    type: 'command',
    description:
      "Tüm inanç sisteminin çekirdeği olarak sadece Allah'ın birliğine inanmak ve kulluğu yalnızca O'na has kılmak.",
  },
  {
    id: 'tovbe-ve-istigfar',
    letter: 'T',
    title: 'Tövbe ve İstiğfar',
    type: 'worship',
    description:
      'Günah veya hata işlendiğinde ısrar etmeden, vakit kaybetmeden samimiyetle bağışlanma dilemek ve o hatayı terk etmek.',
  },

  // U-Ü
  {
    id: 'umitsizlik',
    letter: 'U',
    title: 'Ümitsizlik (Ye\'s)',
    type: 'prohibition',
    description:
      'Günah veya hata ne kadar büyük olursa olsun "Allah beni affetmez" diyerek O\'nun rahmetinden ümit kesmek ve depresyona girmek.',
  },

  // Y
  {
    id: 'yalan-soylemek',
    letter: 'Y',
    title: 'Yalan Söylemek',
    type: 'prohibition',
    description:
      'Sözde, şahitlikte ve davranışta gerçeği saptırmak, asılsız beyanda bulunmak.',
  },
  {
    id: 'yeryuzunu-imar-etmek',
    letter: 'Y',
    title: 'Yeryüzünü İmar Etmek',
    type: 'command',
    description:
      'Dünyayı yaşanabilir kılmak, doğayı ve yaşam alanlarını koruyup güzelleştirmek.',
  },
  {
    id: 'yetim-mali-yemek',
    letter: 'Y',
    title: 'Yetim Malı Yemek',
    type: 'prohibition',
    description:
      'Toplumun en savunmasız kesimi olan yetimlerin mallarını ve haklarını kendi zimmetine geçirmek.',
  },

  // Z
  {
    id: 'zekat',
    letter: 'Z',
    title: 'Zekât',
    type: 'worship',
    description:
      'Sahip olunan servetin belirli bir kısmını düzenli olarak yoksullarla paylaşarak malı ve kalbi arındırmak.',
  },
  {
    id: 'zina',
    letter: 'Z',
    title: 'Zina',
    type: 'prohibition',
    description:
      'Evlilik dışı ilişkiye girmek ve ahlaksızlığa zemin hazırlayan uyarıcı ortamlara (yollara) yaklaşmak.',
  },
  {
    id: 'zulüm',
    letter: 'Z',
    title: 'Zulüm',
    type: 'prohibition',
    description:
      'İnsanlara, çalışana, eşe, doğaya veya hayvanlara eziyet etmek; gücünü kullanarak başkasının hakkını gasp etmek.',
  },
];

export const letters = [...new Set(topics.map((t) => t.letter))].sort((a, b) =>
  a.localeCompare(b, 'tr')
);
