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

  // ── YENİ EKLENEN KONULAR (47 konu) ──────────────────────────────────────

  // İBADETLER
  {
    id: 'abdest',
    letter: 'A',
    title: 'Abdest',
    type: 'worship',
    description:
      'Namaz kılmadan önce yüz, eller, baş ve ayakları yıkayarak temizlenmek; manevi arınmanın fiziksel boyutu. (Maide 5:6)',
  },
  {
    id: 'adak',
    letter: 'A',
    title: 'Adak (Nezir)',
    type: 'worship',
    description:
      "Allah'a verilen sözü (adağı) yerine getirmek; adakların insanlara faydalı şeyler için yapılması. (Hac 22:29, İnsan 76:7)",
  },
  {
    id: 'cuma-namazi',
    letter: 'C',
    title: 'Cuma Namazı',
    type: 'worship',
    description:
      'Her Cuma günü öğle vaktinde cemaatle kılınan ve alışverişin bırakılmasını emreden haftalık ibadet. (Cuma 62:9)',
  },
  {
    id: 'gece-ihyasi',
    letter: 'G',
    title: 'Geceyi İhya Etmek (Teheccüd)',
    type: 'worship',
    description:
      'Gece namazı kılmak, geceleri ibadetle değerlendirmek; teheccüd namazının fazileti. (Müzzemmil 73:2-4, İsra 17:79)',
  },
  {
    id: 'gusul',
    letter: 'G',
    title: 'Gusül (Boy Abdesti)',
    type: 'worship',
    description:
      'Cünüplük, hayız ve nifas sonrası tüm vücudu yıkayarak temizlenmek; büyük hadesten taharet. (Maide 5:6, Nisa 4:43)',
  },
  {
    id: 'itikaf',
    letter: 'İ',
    title: 'İtikâf',
    type: 'worship',
    description:
      "Özellikle Ramazan'ın son on gününde mescitte inzivaya çekilerek ibadete yoğunlaşmak. (Bakara 2:187)",
  },
  {
    id: 'kefaret',
    letter: 'K',
    title: 'Kefaret',
    type: 'worship',
    description:
      'Yemin bozma, yanlışlıkla adam öldürme veya zihar gibi durumlarda uygulanan telafi ibadeti. (Maide 5:89, Nisa 4:92)',
  },
  {
    id: 'kible',
    letter: 'K',
    title: "Kıbleye Yönelmek (Mescid-i Haram)",
    type: 'worship',
    description:
      "Namaz kılarken yüzü Mescid-i Haram'a (Kâbe) çevirmek; ibadetlerde birlik ve yönün sembolü. (Bakara 2:144, 149-150)",
  },
  {
    id: 'zikir',
    letter: 'Z',
    title: "Zikir (Allah'ı Çokça Anmak)",
    type: 'worship',
    description:
      "Allah'ı dil ve kalple çokça anmak; zikrin kalplere huzur verdiği ve imanı pekiştirdiği. (Ahzab 33:41, Rad 13:28)",
  },

  // EMİR VE TAVSİYELER
  {
    id: 'aile-ici-huzur',
    letter: 'A',
    title: 'Aile İçi Huzur ve Karşılıklı Sevgi',
    type: 'command',
    description:
      'Eşler arasında sevgi, şefkat ve huzurun tesis edilmesi; evliliğin Allah\'ın bir nimeti olarak görülmesi. (Rum 30:21, Nisa 4:19)',
  },
  {
    id: 'bosanma-kurallari',
    letter: 'B',
    title: 'Boşanma (Talak) Kuralları',
    type: 'command',
    description:
      'Boşanmanın belirli kurallara göre yapılması; iddet süresi, rücu hakkı ve adil ayrılık ilkeleri. (Talak 65:1-2, Bakara 2:228-232)',
  },
  {
    id: 'cihat-kurallari',
    letter: 'C',
    title: 'Cihad ve Savaş Kuralları',
    type: 'command',
    description:
      'Savaşın meşru savunma koşulları, savaşta sivillere dokunmama, esir hakları ve barış teklifini kabul etme. (Bakara 2:190-194, Enfal 8:61)',
  },
  {
    id: 'hayirlarda-yarisma',
    letter: 'H',
    title: 'Hayırlarda Yarışmak',
    type: 'command',
    description:
      'İyilik, infak ve güzel amellerde öne geçmek için yarışmak; hayırda öncü olmak. (Bakara 2:148, Maide 5:48)',
  },
  {
    id: 'harcamada-orta-yol',
    letter: 'H',
    title: 'Harcamada Orta Yol',
    type: 'command',
    description:
      'Ne cimrilik ne de savurganlık; harcamalarda dengeli ve ölçülü olmak. (İsra 17:29, Furkan 25:67)',
  },
  {
    id: 'hukumde-adalet',
    letter: 'H',
    title: "Hükümde Adalet (Allah'ın İndirdiğiyle Yönetmek)",
    type: 'command',
    description:
      "Yargı ve yönetimde Allah'ın indirdiği hükümlere göre karar vermek; tarafsız ve adil yargı. (Maide 5:44-45, Nisa 4:58)",
  },
  {
    id: 'ibadet-yerinde-giyim',
    letter: 'İ',
    title: 'İbadet Yerlerinde Temiz ve Güzel Giyinmek',
    type: 'command',
    description:
      'Mescide ve ibadete giderken temiz, güzel ve örtülü giyinmek; Allah\'a saygının dış görünüşe yansıması. (Araf 7:31)',
  },
  {
    id: 'iddet',
    letter: 'İ',
    title: 'İddet (Bekleme Süresi)',
    type: 'command',
    description:
      'Boşanan veya kocası ölen kadının yeniden evlenmeden önce beklemesi gereken süre; neslin korunması. (Bakara 2:228, 234, Talak 65:4)',
  },
  {
    id: 'ihsan',
    letter: 'İ',
    title: 'İhsan (En Güzel Şekilde Yapmak)',
    type: 'command',
    description:
      "Allah'ı görüyormuş gibi her işi ve ibadeti en güzel ve eksiksiz biçimde yapmak. (Bakara 2:195, Nahl 16:90)",
  },
  {
    id: 'kisas',
    letter: 'K',
    title: 'Kısas (Eşit Karşılık İlkesi)',
    type: 'command',
    description:
      'Kasıtlı öldürme ve yaralamada eşit karşılık hakkı; affetmenin ise daha faziletli olduğu ilkesi. (Bakara 2:178-179, Maide 5:45)',
  },
  {
    id: 'kole-azat',
    letter: 'K',
    title: 'Köle Azat Etmek',
    type: 'command',
    description:
      "Kur'an'ın köleliği kaldırmaya yönelik teşvik ettiği özgürleştirme eylemi; kefaret ve hayır olarak köle azat. (Beled 90:13, Nisa 4:92)",
  },
  {
    id: 'kuran-dinlemek',
    letter: 'K',
    title: "Kur'an Okunurken Dinlemek ve Susmak",
    type: 'command',
    description:
      "Kur'an okunduğunda saygıyla dinlemek, susmak ve dikkat etmek. (Araf 7:204)",
  },
  {
    id: 'mehir',
    letter: 'M',
    title: 'Mehir (Evlilik Bedeli)',
    type: 'command',
    description:
      "Erkeğin evlendiği kadına gönül rızasıyla vermesi gereken mali hak; kadının ekonomik güvencesi. (Nisa 4:4, 4:24)",
  },
  {
    id: 'miras',
    letter: 'M',
    title: 'Miras (Feraiz) Hükümleri',
    type: 'command',
    description:
      "Ölen kişinin malının Kur'an'da belirlenen oranlarda mirasçılara paylaştırılması; ekonomik adalet. (Nisa 4:11-12, 4:176)",
  },
  {
    id: 'nafaka',
    letter: 'N',
    title: 'Nafaka Yükümlülüğü',
    type: 'command',
    description:
      "Erkeğin eşine ve çocuklarına geçimlerini sağlama zorunluluğu; aile içi ekonomik sorumluluk. (Bakara 2:233, Talak 65:6-7)",
  },
  {
    id: 'nikah',
    letter: 'N',
    title: 'Nikâh (Evlilik Akdi)',
    type: 'command',
    description:
      'Evliliğin meşru bir akit ile kurulması; bekâr olanların evlendirilmesi ve evlilikte karşılıklı haklar. (Nur 24:32, Nisa 4:4)',
  },
  {
    id: 'peygambere-itaat',
    letter: 'P',
    title: 'Peygambere İtaat ve Saygı',
    type: 'command',
    description:
      "Hz. Muhammed'e itaat etmek, ona saygı göstermek ve sesini onun sesinin üstüne yükseltmemek. (Nisa 4:59, Hucurat 49:1-3)",
  },
  {
    id: 'sadaka',
    letter: 'S',
    title: 'Sadaka ve Gönüllü Yardım',
    type: 'command',
    description:
      'Zekâtın ötesinde gönüllü olarak yoksullara, ihtiyaç sahiplerine ve yolda kalmışlara yardım etmek. (Bakara 2:177, 271-274)',
  },
  {
    id: 'sozlesme',
    letter: 'S',
    title: 'Sözleşmelere ve Antlaşmalara Uymak',
    type: 'command',
    description:
      'Verilen sözlerin, yapılan anlaşmaların ve akitlerin eksiksiz yerine getirilmesi. (Maide 5:1, Nahl 16:91)',
  },
  {
    id: 'ticaret-ahlaki',
    letter: 'T',
    title: 'Ticaret Ahlakı',
    type: 'command',
    description:
      'Alışverişte dürüstlük, karşılıklı rıza ve yazılı sözleşme; ticaretin helal kazanç çerçevesinde yürütülmesi. (Nisa 4:29, Bakara 2:282)',
  },
  {
    id: 'vasiyet',
    letter: 'V',
    title: 'Vasiyet',
    type: 'command',
    description:
      'Ölüm öncesinde mal ve hakların nasıl paylaştırılacağını yazılı olarak belirleme; hak sahiplerini koruma. (Bakara 2:180, Maide 5:106)',
  },
  {
    id: 'yetimlere-bakim',
    letter: 'Y',
    title: 'Yetimlere Bakım ve Hak Gözetimi',
    type: 'command',
    description:
      'Yetim çocukların mallarını korumak, onlara adil davranmak ve büyüyünce mallarını iade etmek. (Nisa 4:2-3, 4:10)',
  },

  // YASAKLAR
  {
    id: 'acimasizlik',
    letter: 'A',
    title: 'Acımasızlık ve Katı Kalplilik',
    type: 'prohibition',
    description:
      "İnsanlara karşı katı ve kaba davranmak; peygamberin yumuşak huyluluğunun örnek alınması. (Al-i İmran 3:159)",
  },
  {
    id: 'cocuklari-oldurme',
    letter: 'Ç',
    title: 'Çocukları Öldürmemek (Kız Çocuğu Cinayeti)',
    type: 'prohibition',
    description:
      'Geçim korkusuyla çocukları öldürmek ve kız çocuklarını diri diri gömmek (vad) yasağı. (İsra 17:31, Tekvir 81:8-9)',
  },
  {
    id: 'dedikodu',
    letter: 'D',
    title: 'Dedikodu ve Asılsız Haber Yaymak',
    type: 'prohibition',
    description:
      'Doğruluğu araştırılmadan haberlerin yayılması; asılsız söylentilerin toplumsal zarara yol açması. (Hucurat 49:6, Nur 24:15-16)',
  },
  {
    id: 'diger-dinlere-hakaret',
    letter: 'D',
    title: 'Diğer Dinlere Hakaret Etmemek',
    type: 'prohibition',
    description:
      "Başka dinlerin ibadethanelerine ve kutsal değerlerine sövmemek; karşılıklı saygı. (Enam 6:108)",
  },
  {
    id: 'dinde-ayrilik',
    letter: 'D',
    title: 'Dinde Ayrılık ve Fırkalara Bölünmek',
    type: 'prohibition',
    description:
      "Müminlerin birliğini bozmak, dinde fırkalara ayrılmak ve toplumsal bütünlüğü parçalamak. (Al-i İmran 3:103, Enam 6:159)",
  },
  {
    id: 'dinde-zorlama',
    letter: 'D',
    title: 'Dinde Zorlama Yasağı',
    type: 'prohibition',
    description:
      "Kimsenin dini inancı konusunda zorlanamayacağı; doğru yol açıkça ortaya konmuştur, tercih özgürdür. (Bakara 2:256, Yunus 10:99)",
  },
  {
    id: 'dilenci-azarlamak',
    letter: 'D',
    title: 'Dilenciyi Azarlamak',
    type: 'prohibition',
    description:
      'Bir şey isteyen kişiyi azarlamak, hor görmek ve geri çevirmek. (Duha 93:10)',
  },
  {
    id: 'domuz-yasagi',
    letter: 'D',
    title: 'Domuz Eti Yasağı',
    type: 'prohibition',
    description:
      'Domuz etinin açıkça haram kılınması; zorunluluk halinde ise istisna tanınması. (Bakara 2:173, Maide 5:3)',
  },
  {
    id: 'fitne',
    letter: 'F',
    title: 'Fitne Çıkarmak',
    type: 'prohibition',
    description:
      "Toplumda kaos, ayrılık ve kargaşa çıkarmak; fitnenin öldürmekten daha ağır bir suç olduğu. (Bakara 2:191, 2:217)",
  },
  {
    id: 'haksiz-mal',
    letter: 'H',
    title: 'Haksız Yollarla Mal Edinmek',
    type: 'prohibition',
    description:
      "Başkasının malını haksız yollarla almak, rüşvet vermek ve hâkimlere mal yedirerek hak kazanmaya çalışmak. (Bakara 2:188, Nisa 4:29)",
  },
  {
    id: 'les-yasagi',
    letter: 'L',
    title: 'Leş ve Haram Gıdalar Yasağı',
    type: 'prohibition',
    description:
      "Ölü hayvan eti, kan, Allah'tan başkası adına kesilen ve usulüne uygun kesilmemiş hayvanların yenmesi yasağı. (Bakara 2:173, Maide 5:3)",
  },
  {
    id: 'musrik-evlilik',
    letter: 'M',
    title: 'Müşriklerle Evlenme Yasağı',
    type: 'prohibition',
    description:
      "Allah'a ortak koşan kişilerle evlenmemek; mümin bir kölenin müşrik bir özgür kişiden daha hayırlı olduğu. (Bakara 2:221)",
  },
  {
    id: 'nefsi-tehlikeye-atmak',
    letter: 'N',
    title: 'Nefsi Tehlikeye Atmak',
    type: 'prohibition',
    description:
      'Kendi canını tehlikeye atmak, kendine zarar vermek ve helake sürüklenmek. (Bakara 2:195)',
  },
  {
    id: 'yeminleri-bozmamak',
    letter: 'Y',
    title: 'Yeminleri Bozmamak',
    type: 'prohibition',
    description:
      'Verilen yeminleri bozmamak; yemini bahane ederek iyilikten kaçınmamak. (Nahl 16:91-94, Bakara 2:224)',
  },
  {
    id: 'yetim-horlamak',
    letter: 'Y',
    title: 'Yetimi Horlamak ve Kovmak',
    type: 'prohibition',
    description:
      'Yetim çocukları aşağılamak, haklarını çiğnemek ve onları itmek; toplumun en savunmasız kesimine kötü davranmak. (Duha 93:9, Maun 107:2)',
  },
];

export const letters = [...new Set(topics.map((t) => t.letter))].sort((a, b) =>
  a.localeCompare(b, 'tr')
);
