export type TopicType = 'command' | 'prohibition' | 'worship';
export interface Topic {
  id: string;
  letter: string;
  title: string;
  type: TopicType;
  description: string;
}
export const topics: Topic[] = [

  // ══════════════════════════════════════════════════════════════════
  // A
  // ══════════════════════════════════════════════════════════════════
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
    id: 'adalet',
    letter: 'A',
    title: 'Adalet',
    type: 'command',
    description:
      "Kendi aleyhine, anne-babanın veya zenginin/fakirin aleyhine bile olsa adaletten asla şaşmamak; Allah'ın kesin emri. (Nisa 4:135, Maide 5:8)",
  },
  {
    id: 'affedicilik',
    letter: 'A',
    title: 'Affedicilik',
    type: 'command',
    description:
      "İnsanların kusurlarını bağışlamak, kötülüğe iyilikle karşılık vermek; Allah'ın affedici sıfatını yansıtmak. (Şura 42:40, Al-i İmran 3:134)",
  },
  {
    id: 'ahde-vefa',
    letter: 'A',
    title: 'Ahde Vefa',
    type: 'command',
    description:
      "Verilen sözleri, yeminleri ve yapılan sözleşmeleri ne pahasına olursa olsun tutmak; ahdin sorumluluğu. (İsra 17:34, Maide 5:1)",
  },
  {
    id: 'aile-ici-huzur',
    letter: 'A',
    title: 'Aile İçi Huzur ve Karşılıklı Sevgi',
    type: 'command',
    description:
      "Eşler arasında sevgi, şefkat ve huzurun tesis edilmesi; evliliğin Allah'ın bir nimeti olarak görülmesi. (Rum 30:21, Nisa 4:19)",
  },
  {
    id: 'akli-kullanmak',
    letter: 'A',
    title: 'Aklı Kullanmak (Tefekkür)',
    type: 'command',
    description:
      "Kâinatı, yaratılışı, olayları ve ayetleri sürekli sorgulamak; aklı kiraya vermemek. (Al-i İmran 3:190-191, Zümer 39:9)",
  },
  {
    id: 'akrabayi-gozetmek',
    letter: 'A',
    title: 'Akrabayı Gözetmek',
    type: 'command',
    description:
      "Yakınları arayıp sormak, ihtiyaç anında onlara maddi/manevi destek olmak; sıla-i rahmi kesmemek. (Nisa 4:1, Bakara 2:177)",
  },
  {
    id: 'alay-etmek',
    letter: 'A',
    title: 'Alay Etmek',
    type: 'prohibition',
    description:
      "İnsanları dış görünüşü veya statüsüyle küçümsemek, onlarla dalga geçmek; belki alay edilen daha hayırlıdır. (Hucurat 49:11)",
  },
  {
    id: 'allah-adina-kesilen-yasak',
    letter: 'A',
    title: "Allah'tan Başkası Adına Kesilen Kurban Yasağı",
    type: 'prohibition',
    description:
      "Allah'tan başkası adına (putlar, ölüler vb. için) kesilen hayvanların yenilmesi kesinlikle yasaktır. (Maide 5:3, En'am 6:121)",
  },
  {
    id: 'anne-babaya-iyilik',
    letter: 'A',
    title: 'Anne-Babaya İyilik',
    type: 'command',
    description:
      "Ebeveyne merhamet kanatlarını germek, özellikle yaşlandıklarında 'öf' dahi dememek; Allah'a ibadetin hemen ardından gelen emir. (İsra 17:23-24)",
  },
  {
    id: 'arastirmak',
    letter: 'A',
    title: 'Araştırmak (Teyitçilik)',
    type: 'command',
    description:
      "Özellikle güvenilmeyen (fasık) kaynaklardan gelen haberleri körü körüne kabul etmeyip doğruluğunu mutlaka teyit etmek. (Hucurat 49:6)",
  },
  {
    id: 'acimasizlik',
    letter: 'A',
    title: 'Acımasızlık ve Katı Kalplilik',
    type: 'prohibition',
    description:
      "İnsanlara karşı katı ve kaba davranmak; peygamberin yumuşak huyluluğu örnek alınmalı, sertlik insanları dağıtır. (Al-i İmran 3:159)",
  },
  {
    id: 'ahiret-inanci',
    letter: 'A',
    title: 'Ahiret İnancı ve Hazırlık',
    type: 'command',
    description:
      "Ahirete kesin olarak inanmak ve yarın için bugünden hazırlık yapmak; nefsin ahiret için ne gönderdiğine bakması. (Haşr 59:18-19, Bakara 2:4)",
  },

  // ══════════════════════════════════════════════════════════════════
  // B
  // ══════════════════════════════════════════════════════════════════
  {
    id: 'bagnazlik',
    letter: 'B',
    title: 'Bağnazlık',
    type: 'prohibition',
    description:
      "Körü körüne atalar geleneğine uymak; gerçek ortaya çıksa bile 'babalarımızı böyle bulduk' demek. (Bakara 2:170, Maide 5:104)",
  },
  {
    id: 'baris-teklifi',
    letter: 'B',
    title: 'Barış Teklifine Karşılık Verme',
    type: 'command',
    description:
      "Düşman barışa yönelirse müminlerin de barışa yönelmesi ve Allah'a tevekkül etmesi emredilmiştir. (Enfal 8:61)",
  },
  {
    id: 'baristiricilik',
    letter: 'B',
    title: 'Barıştırıcılık',
    type: 'command',
    description:
      "Müminler arasındaki anlaşmazlıkları adaletle çözmek; iki tarafı uzlaştırmak için çaba göstermek. (Hucurat 49:9-10)",
  },
  {
    id: 'borclari-yazmak',
    letter: 'B',
    title: 'Borçları Yazıya Dökmek',
    type: 'command',
    description:
      "Vadeli alacak-borç ilişkilerini yazıyla kayıt altına almak; ticari güvencenin temeli. (Bakara 2:282)",
  },
  {
    id: 'bolucülük',
    letter: 'B',
    title: 'Bölücülük',
    type: 'prohibition',
    description:
      "Toplumu parçalamak, insanlar arasına nifak sokmak; Allah'ın ipine topluca sarılmayı terk etmek. (Al-i İmran 3:103)",
  },
  {
    id: 'bosanma-kurallari',
    letter: 'B',
    title: 'Boşanma (Talak) Kuralları',
    type: 'command',
    description:
      "Boşanmanın belirli kurallara göre yapılması; iddet süresi, rücu hakkı ve adil ayrılık ilkeleri. (Talak 65:1-2, Bakara 2:228-232)",
  },
  {
    id: 'buyu-falcilik',
    letter: 'B',
    title: 'Büyü ve Falcılık',
    type: 'prohibition',
    description:
      "Sihir, büyü ve falcılıkla uğraşmak; bunlar şeytanın öğrettiği şeyler olup küfre götürür. (Bakara 2:102, Maide 5:90)",
  },

  // ══════════════════════════════════════════════════════════════════
  // C
  // ══════════════════════════════════════════════════════════════════
  {
    id: 'cana-kiymak',
    letter: 'C',
    title: 'Cana Kıymak (Cinayet)',
    type: 'prohibition',
    description:
      "Haksız yere bir insanı öldürmek, tüm insanlığı öldürmek gibidir; insan canı kutsaldır. (Maide 5:32, İsra 17:33)",
  },
  {
    id: 'cihat-kurallari',
    letter: 'C',
    title: 'Cihad ve Savaş Kuralları',
    type: 'command',
    description:
      "Savaşın meşru savunma koşulları, sivillere dokunmama, esir hakları ve barış teklifini kabul etme. (Bakara 2:190-194, Enfal 8:61)",
  },
  {
    id: 'cimrilik',
    letter: 'C',
    title: 'Cimrilik',
    type: 'prohibition',
    description:
      "Allah'ın verdiği nimetleri biriktirip infak etmemek; cimriliğin kıyamet günü boyuna dolanacağı. (Al-i İmran 3:180, İsra 17:29)",
  },
  {
    id: 'cuma-namazi',
    letter: 'C',
    title: 'Cuma Namazı',
    type: 'worship',
    description:
      "Her Cuma günü öğle vaktinde cemaatle kılınan ve alışverişin bırakılmasını emreden haftalık ibadet. (Cuma 62:9-10)",
  },

  // ══════════════════════════════════════════════════════════════════
  // Ç
  // ══════════════════════════════════════════════════════════════════
  {
    id: 'calisma',
    letter: 'Ç',
    title: 'Çalışmak (Emek)',
    type: 'command',
    description:
      "Namaz bittikten sonra yeryüzüne dağılıp Allah'ın lütfundan rızık aramak; helal çalışmanın önemi. (Cuma 62:10, Necm 53:39)",
  },
  {
    id: 'cevreyi-tahrip',
    letter: 'Ç',
    title: 'Çevreyi Tahrip Etmek',
    type: 'prohibition',
    description:
      "Yeryüzünde bozgunculuk yapmak, doğayı tahrip etmek; Allah ıslah edildikten sonra bozgunculuk yapılmasını sevmez. (Araf 7:56, Bakara 2:205)",
  },
  {
    id: 'cocuklari-oldurme',
    letter: 'Ç',
    title: 'Çocukları Öldürmemek (Kız Çocuğu Cinayeti)',
    type: 'prohibition',
    description:
      "Geçim korkusuyla çocukları öldürmek ve kız çocuklarını diri diri gömmek (vad) yasağı; rızkı Allah verir. (İsra 17:31, Tekvir 81:8-9)",
  },

  // ══════════════════════════════════════════════════════════════════
  // D
  // ══════════════════════════════════════════════════════════════════
  {
    id: 'danismak',
    letter: 'D',
    title: 'Danışmak (İstişare)',
    type: 'command',
    description:
      "Önemli kararları ilgili kişilerle istişare ederek almak; peygambere bile emredilen bir uygulama. (Al-i İmran 3:159, Şura 42:38)",
  },
  {
    id: 'dedikodu',
    letter: 'D',
    title: 'Dedikodu ve Asılsız Haber Yaymak',
    type: 'prohibition',
    description:
      "Doğruluğu araştırılmadan haberlerin yayılması; asılsız söylentilerin toplumsal zarara yol açması. (Hucurat 49:6, Nur 24:15-16)",
  },
  {
    id: 'diger-dinlere-hakaret',
    letter: 'D',
    title: 'Diğer Dinlere Hakaret Etmemek',
    type: 'prohibition',
    description:
      "Başka dinlerin ibadethanelerine ve kutsal değerlerine sövmemek; karşılıklı saygı ve fitne çıkarmama. (En'am 6:108)",
  },
  {
    id: 'dinde-ayrilik',
    letter: 'D',
    title: 'Dinde Ayrılık ve Fırkalara Bölünmek',
    type: 'prohibition',
    description:
      "Müminlerin birliğini bozmak, dinde fırkalara ayrılmak ve toplumsal bütünlüğü parçalamak. (Al-i İmran 3:103, En'am 6:159)",
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
      "Bir şey isteyen kişiyi azarlamak, hor görmek ve geri çevirmek; Peygamber'e de emredilmiştir. (Duha 93:10)",
  },
  {
    id: 'domuz-yasagi',
    letter: 'D',
    title: 'Domuz Eti Yasağı',
    type: 'prohibition',
    description:
      "Domuz etinin açıkça haram kılınması; zorunluluk halinde ise istisna tanınması. (Bakara 2:173, Maide 5:3)",
  },
  {
    id: 'dogruluk',
    letter: 'D',
    title: 'Doğruluk (Sıdk)',
    type: 'command',
    description:
      "Söz, eylem ve niyette doğru olmak; sadıklarla birlikte olmak emredilmiştir. (Tevbe 9:119, Ahzab 33:70)",
  },
  {
    id: 'dua',
    letter: 'D',
    title: 'Dua ve Yakarış',
    type: 'worship',
    description:
      "Allah'a yalvarmak ve dua etmek; duayı terk etmek büyüklenmektir, Allah duaya icabet edeceğini vaat eder. (Mümin 40:60, Bakara 2:186)",
  },

  // ══════════════════════════════════════════════════════════════════
  // E
  // ══════════════════════════════════════════════════════════════════
  {
    id: 'emanete-riayet',
    letter: 'E',
    title: 'Emanete Riayet',
    type: 'command',
    description:
      "Emanetleri ehline teslim etmek; güvenilirlik imanın gereğidir. (Nisa 4:58, Müminun 23:8)",
  },
  {
    id: 'emr-i-bil-maruf',
    letter: 'E',
    title: 'Emr-i Bil Maruf (İyiliği Emretmek)',
    type: 'command',
    description:
      "İyiliği emredip kötülükten sakındırmak; bu görev mümin toplumun temel özelliğidir. (Al-i İmran 3:110, Hac 22:41)",
  },
  {
    id: 'evlatlik-nesep',
    letter: 'E',
    title: 'Evlatlık ve Nesep Hükümleri',
    type: 'command',
    description:
      "Evlat edinilen çocukların öz çocuk gibi olmadığı; neseplerinin biyolojik babalarına nispet edilmesi gerektiği. (Ahzab 33:4-5)",
  },

  // ══════════════════════════════════════════════════════════════════
  // F
  // ══════════════════════════════════════════════════════════════════
  {
    id: 'faiz',
    letter: 'F',
    title: 'Faiz (Riba)',
    type: 'prohibition',
    description:
      "Faiz yemek, Allah ve Resulü'ne savaş açmaktır; faizin her türlüsü kesinlikle yasaktır. (Bakara 2:275-279, Al-i İmran 3:130)",
  },
  {
    id: 'fakirlere-yemek',
    letter: 'F',
    title: 'Fakirlere Yemek Yedirmek ve Yardım Etmek',
    type: 'command',
    description:
      "Aç ve fakirleri doyurmayı, ihtiyaç sahiplerine yardım etmeyi Kur'an büyük bir erdem ve iman göstergesi olarak emreder. (Hakka 69:34, Fecr 89:18, Beled 90:14)",
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
    id: 'fuhsiyat',
    letter: 'F',
    title: 'Fuhşiyat',
    type: 'prohibition',
    description:
      "Her türlü ahlaksızlığa, hayasızlığa ve edepsizliğe yaklaşmamak; bunların açığı ve gizlisi yasaktır. (Enam 6:151, Araf 7:33)",
  },

  // ══════════════════════════════════════════════════════════════════
  // G
  // ══════════════════════════════════════════════════════════════════
  {
    id: 'gece-ihyasi',
    letter: 'G',
    title: 'Geceyi İhya Etmek (Teheccüd)',
    type: 'worship',
    description:
      "Gece namazı kılmak, geceleri ibadetle değerlendirmek; teheccüd namazının fazileti ve Allah'a yakınlık. (Müzzemmil 73:2-4, İsra 17:79)",
  },
  {
    id: 'giybet',
    letter: 'G',
    title: 'Gıybet',
    type: 'prohibition',
    description:
      "Arkadan insanların ayıplarını konuşmak; ölü kardeşinin etini yemek gibi iğrenç bir eylem. (Hucurat 49:12)",
  },
  {
    id: 'gosteris',
    letter: 'G',
    title: 'Gösteriş (Riya)',
    type: 'prohibition',
    description:
      "İbadeti ve iyilikleri insanlara göstermek için yapmak; riya ameli boşa çıkarır. (Maun 107:4-6, Bakara 2:264)",
  },
  {
    id: 'gusul',
    letter: 'G',
    title: 'Gusül (Boy Abdesti)',
    type: 'worship',
    description:
      "Cünüplük, hayız ve nifas sonrası tüm vücudu yıkayarak temizlenmek; büyük hadesten taharet. (Maide 5:6, Nisa 4:43)",
  },

  // ══════════════════════════════════════════════════════════════════
  // H
  // ══════════════════════════════════════════════════════════════════
  {
    id: 'hac',
    letter: 'H',
    title: 'Hac',
    type: 'worship',
    description:
      "Gücü yeten her Müslüman'ın ömründe bir kez Kâbe'yi ziyaret etmesi; İslam'ın beş şartından biri. (Al-i İmran 3:97, Hac 22:27)",
  },
  {
    id: 'haddi-asmamak',
    letter: 'H',
    title: 'Haddi Aşmamak',
    type: 'prohibition',
    description:
      "Allah'ın koyduğu sınırları aşmamak; dinde aşırılık ve taşkınlık yasaktır. (Bakara 2:229, Nisa 4:14)",
  },
  {
    id: 'hakaret-etmek',
    letter: 'H',
    title: 'Hakaret Etmek',
    type: 'prohibition',
    description:
      "İnsanlara kötü lakap takmak, onları aşağılamak ve onurlarını zedelemek yasaktır. (Hucurat 49:11)",
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
    id: 'haksiz-savas',
    letter: 'H',
    title: 'Haksız Yere Savaş Başlatmama',
    type: 'prohibition',
    description:
      "Kendilerine karşı savaş açılmadıkça veya zulme uğramadıkça, başkalarına karşı haksız yere savaş başlatmak yasaktır. (Bakara 2:190, Nisa 4:75)",
  },
  {
    id: 'harcamada-orta-yol',
    letter: 'H',
    title: 'Harcamada Orta Yol',
    type: 'command',
    description:
      "Ne cimrilik ne de savurganlık; harcamalarda dengeli ve ölçülü olmak. (İsra 17:29, Furkan 25:67)",
  },
  {
    id: 'haset',
    letter: 'H',
    title: 'Haset (Kıskançlık)',
    type: 'prohibition',
    description:
      "Başkasının nimetinin elinden gitmesini istemek; haset ameli yakar, toplumu çürütür. (Nisa 4:54, Felak 113:5)",
  },
  {
    id: 'hayirlarda-yarisma',
    letter: 'H',
    title: 'Hayırlarda Yarışmak',
    type: 'command',
    description:
      "İyilik, infak ve güzel amellerde öne geçmek için yarışmak; hayırda öncü olmak. (Bakara 2:148, Maide 5:48)",
  },
  {
    id: 'helal-beslenmek',
    letter: 'H',
    title: 'Helal Beslenmek',
    type: 'command',
    description:
      "Yeryüzündeki helal ve temiz şeylerden yemek; haramı meşrulaştırmamak. (Bakara 2:168, Maide 5:88)",
  },
  {
    id: 'hirsizlik',
    letter: 'H',
    title: 'Hırsızlık ve Gasp',
    type: 'prohibition',
    description:
      "Başkasının malını çalmak veya zorla almak yasaktır; hırsızlık suçunun had cezası Kur'an'da belirlenmiştir. (Maide 5:38)",
  },
  {
    id: 'hirsizlik-cezasi',
    letter: 'H',
    title: 'Hırsızlık Suçunun Cezası',
    type: 'command',
    description:
      "Kur'an, hırsızlık yapan erkek ve kadının, Allah'tan caydırıcı bir ibret olmak üzere ellerinin kesilmesini emreder. (Maide 5:38)",
  },
  {
    id: 'hicab-ortunum',
    letter: 'H',
    title: 'Hicab ve Tesettür (Örtünme)',
    type: 'command',
    description:
      "Mümin kadınların başörtüsü takmaları ve ziynetlerini yabancılara göstermemeleri; mümin erkeklerin de gözlerini sakınmaları. (Nur 24:30-31, Ahzab 33:59)",
  },
  {
    id: 'hicret',
    letter: 'H',
    title: 'Hicret (Zulümden Kurtulmak İçin Göç)',
    type: 'command',
    description:
      "Dinde zulme uğrandığında veya ibadetler özgürce yerine getirilemediğinde, Allah'ın geniş yeryüzünde daha uygun bir yere göç etmek. (Nisa 4:97-100)",
  },
  {
    id: 'hukumde-adalet',
    letter: 'H',
    title: "Hükümde Adalet (Allah'ın İndirdiğiyle Yönetmek)",
    type: 'command',
    description:
      "Yargı ve yönetimde Allah'ın indirdiği hükümlere göre karar vermek; tarafsız ve adil yargı. (Maide 5:44-45, Nisa 4:58)",
  },

  // ══════════════════════════════════════════════════════════════════
  // İ
  // ══════════════════════════════════════════════════════════════════
  {
    id: 'ibadet-yerinde-giyim',
    letter: 'İ',
    title: 'İbadet Yerlerinde Temiz ve Güzel Giyinmek',
    type: 'command',
    description:
      "Mescide ve ibadete giderken temiz, güzel ve örtülü giyinmek; Allah'a saygının dış görünüşe yansıması. (Araf 7:31)",
  },
  {
    id: 'ibadetlerde-devamlilik',
    letter: 'İ',
    title: 'İbadetlerde Devamlılık',
    type: 'worship',
    description:
      "İbadeti sürekli ve düzenli kılmak; en sevilen amel az da olsa devamlı olandır. (Bakara 2:238, Müminun 23:9)",
  },
  {
    id: 'icki-yasagi',
    letter: 'İ',
    title: 'İçki ve Sarhoş Ediciler',
    type: 'prohibition',
    description:
      "Alkol ve her türlü sarhoş edici madde kesinlikle yasaktır; bunlar şeytanın işidir, aralarında büyük zarar vardır. (Maide 5:90-91, Bakara 2:219)",
  },
  {
    id: 'iddet',
    letter: 'İ',
    title: 'İddet (Bekleme Süresi)',
    type: 'command',
    description:
      "Boşanan veya kocası ölen kadının yeniden evlenmeden önce beklemesi gereken süre; neslin korunması. (Bakara 2:228, 234, Talak 65:4)",
  },
  {
    id: 'iffet',
    letter: 'İ',
    title: 'İffet (Namus)',
    type: 'command',
    description:
      "Cinsel ahlakı korumak, iffetli olmak; iffetli kadın ve erkeklerin Allah katında büyük mükâfatı vardır. (Nur 24:30-31, Maide 5:5)",
  },
  {
    id: 'iftira',
    letter: 'İ',
    title: 'İftira',
    type: 'prohibition',
    description:
      "Namuslu insanlara iftira atmak büyük günahtır; iftira atanlar için ağır ceza belirlenmiştir. (Nur 24:4, 23)",
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
    id: 'infak',
    letter: 'İ',
    title: 'İnfak ve Yardımlaşma',
    type: 'worship',
    description:
      "Allah yolunda mal harcamak, ihtiyaç sahiplerine yardım etmek; infak imanın ayrılmaz parçasıdır. (Bakara 2:177, Al-i İmran 3:92)",
  },
  {
    id: 'intihar',
    letter: 'İ',
    title: 'İntihar',
    type: 'prohibition',
    description:
      "Kendi canına kıymak kesinlikle yasaktır; Allah'ın merhameti geniştir. (Nisa 4:29-30)",
  },
  {
    id: 'israf',
    letter: 'İ',
    title: 'İsraf',
    type: 'prohibition',
    description:
      "Aşırı harcama ve savurganlık yasaktır; Allah israf edenleri sevmez. (Araf 7:31, İsra 17:26-27)",
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
    id: 'iyiligi-basa-kakmak',
    letter: 'İ',
    title: 'İyiliği Başa Kakmak',
    type: 'prohibition',
    description:
      "Yapılan iyilikleri başa kakmak ve eziyet etmek, sadakayı geçersiz kılar. (Bakara 2:264)",
  },

  // ══════════════════════════════════════════════════════════════════
  // K
  // ══════════════════════════════════════════════════════════════════
  {
    id: 'kan-yasagi',
    letter: 'K',
    title: 'Kan Tüketme Yasağı',
    type: 'prohibition',
    description:
      "Akıtılmış (dökülmüş) kanın tüketilmesi kesinlikle yasaktır; zorunluluk halinde istisna tanınmıştır. (Bakara 2:173, Maide 5:3, En'am 6:145)",
  },
  {
    id: 'kefaret',
    letter: 'K',
    title: 'Kefaret',
    type: 'worship',
    description:
      "Yemin bozma, yanlışlıkla adam öldürme veya zihar gibi durumlarda uygulanan telafi ibadeti. (Maide 5:89, Nisa 4:92)",
  },
  {
    id: 'kibir',
    letter: 'K',
    title: 'Kibir ve Gurur',
    type: 'prohibition',
    description:
      "Büyüklenmek ve kendini üstün görmek yasaktır; Allah büyüklenenleri sevmez. (Nahl 16:23, Lokman 31:18)",
  },
  {
    id: 'kisas',
    letter: 'K',
    title: 'Kısas (Eşit Karşılık İlkesi)',
    type: 'command',
    description:
      "Kasıtlı öldürme ve yaralamada eşit karşılık hakkı; affetmenin ise daha faziletli olduğu ilkesi. (Bakara 2:178-179, Maide 5:45)",
  },
  {
    id: 'kible',
    letter: 'K',
    title: 'Kıbleye Yönelmek (Mescid-i Haram)',
    type: 'worship',
    description:
      "Namaz kılarken yüzü Mescid-i Haram'a (Kâbe) çevirmek; ibadetlerde birlik ve yönün sembolü. (Bakara 2:144, 149-150)",
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
    id: 'kotu-lakap',
    letter: 'K',
    title: 'Kötü Lakap Takmak',
    type: 'prohibition',
    description:
      "İnsanlara kötü ve aşağılayıcı lakaplar takmak yasaktır; iman ettikten sonra fasıklık adı ne kötü bir addır. (Hucurat 49:11)",
  },
  {
    id: 'kumar',
    letter: 'K',
    title: 'Kumar',
    type: 'prohibition',
    description:
      "Kumar ve şans oyunları kesinlikle yasaktır; bunlar şeytanın işidir, aralarında büyük zarar vardır. (Maide 5:90-91)",
  },
  {
    id: 'kurban',
    letter: 'K',
    title: 'Kurban',
    type: 'worship',
    description:
      "Allah için hayvan kesmek; kurbanın eti ve kanı değil, takvası Allah'a ulaşır. (Hac 22:34-37)",
  },
  {
    id: 'kuran-dinlemek',
    letter: 'K',
    title: "Kur'an Okunurken Dinlemek ve Susmak",
    type: 'command',
    description:
      "Kur'an okunduğunda saygıyla dinlemek, susmak ve dikkat etmek; rahmet umulmaktadır. (Araf 7:204)",
  },
  {
    id: 'kuran-tedebbur',
    letter: 'K',
    title: "Kur'an'ı Anlayarak Okumak (Tedebbür)",
    type: 'command',
    description:
      "Kur'an'ı sadece lafzen okumakla kalmayıp ayetleri üzerinde derinlemesine düşünmek, anlamlarını kavramak. (Nisa 4:82, Muhammed 47:24)",
  },

  // ══════════════════════════════════════════════════════════════════
  // L
  // ══════════════════════════════════════════════════════════════════
  {
    id: 'les-yasagi',
    letter: 'L',
    title: 'Leş ve Haram Gıdalar Yasağı',
    type: 'prohibition',
    description:
      "Ölü hayvan eti, kan, Allah'tan başkası adına kesilen ve usulüne uygun kesilmemiş hayvanların yenmesi yasağı. (Bakara 2:173, Maide 5:3)",
  },
  {
    id: 'lian',
    letter: 'L',
    title: 'Liân (Eşler Arasında Yeminleşme)',
    type: 'command',
    description:
      "Eşlerin birbirlerini zina ile suçladıklarında ve delil bulunamadığında uygulanan özel yeminleşme prosedürü. (Nur 24:6-9)",
  },
  {
    id: 'liyakat',
    letter: 'L',
    title: 'Liyakat',
    type: 'command',
    description:
      "Görevleri ve emanetleri ehline vermek; liyakatsiz kişiye görev vermek toplumsal zulümdür. (Nisa 4:58)",
  },

  // ══════════════════════════════════════════════════════════════════
  // M
  // ══════════════════════════════════════════════════════════════════
  {
    id: 'mahremiyet',
    letter: 'M',
    title: 'Mahremiyete Saygı',
    type: 'command',
    description:
      "Başkalarının evlerine izinsiz girmemek, özel hayatlarına müdahale etmemek. (Nur 24:27-28, Hucurat 49:12)",
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
    id: 'muminler-kardesligi',
    letter: 'M',
    title: 'Müminler Arası Kardeşlik',
    type: 'command',
    description:
      "Bütün müminlerin kardeş olduğu ve aralarındaki anlaşmazlıkları barışçıl yollarla çözmeleri Kur'an'da kesin bir emir olarak belirtilmiştir. (Hucurat 49:10)",
  },
  {
    id: 'muminler-velisi',
    letter: 'M',
    title: "Müminlerin Birbirinin Dostu ve Velisi Olması",
    type: 'command',
    description:
      "Müminlerin birbirlerinin dostu, yardımcısı ve koruyucusu olduğu; iyiliği emredip kötülükten sakındırdıkları. (Tevbe 9:71)",
  },
  {
    id: 'musrik-evlilik',
    letter: 'M',
    title: 'Müşriklerle Evlenme Yasağı',
    type: 'prohibition',
    description:
      "Allah'a ortak koşan kişilerle evlenmemek; mümin bir kölenin müşrik bir özgür kişiden daha hayırlı olduğu. (Bakara 2:221)",
  },

  // ══════════════════════════════════════════════════════════════════
  // N
  // ══════════════════════════════════════════════════════════════════
  {
    id: 'nafaka',
    letter: 'N',
    title: 'Nafaka Yükümlülüğü',
    type: 'command',
    description:
      "Erkeğin eşine ve çocuklarına geçimlerini sağlama zorunluluğu; aile içi ekonomik sorumluluk. (Bakara 2:233, Talak 65:6-7)",
  },
  {
    id: 'namaz',
    letter: 'N',
    title: 'Namaz (Salât)',
    type: 'worship',
    description:
      "Günde beş vakit namaz kılmak; İslam'ın direği ve Allah ile kulun doğrudan buluşması. (Bakara 2:43, Nisa 4:103)",
  },
  {
    id: 'nankoruk',
    letter: 'N',
    title: 'Nankörlük',
    type: 'prohibition',
    description:
      "Allah'ın nimetlerine karşı nankörlük etmek yasaktır; şükredilirse nimet artar, nankörlük edilirse azap şiddetlenir. (İbrahim 14:7)",
  },
  {
    id: 'nefsi-tehlikeye-atmak',
    letter: 'N',
    title: 'Nefsi Tehlikeye Atmak',
    type: 'prohibition',
    description:
      "Kendi canını tehlikeye atmak, kendine zarar vermek ve helake sürüklenmek. (Bakara 2:195)",
  },
  {
    id: 'nikah',
    letter: 'N',
    title: 'Nikâh (Evlilik Akdi)',
    type: 'command',
    description:
      "Evliliğin meşru bir akit ile kurulması; bekâr olanların evlendirilmesi ve evlilikte karşılıklı haklar. (Nur 24:32, Nisa 4:4)",
  },
  {
    id: 'munafiklık',
    letter: 'N',
    title: 'Münafıklık ve İkiyüzlülük',
    type: 'prohibition',
    description:
      "Dışarıda iman edip içten inkâr etmek; münafıklar cehennemin en alt tabakasındadır. (Bakara 2:8-20, Münafikun 63:1-8)",
  },

  // ══════════════════════════════════════════════════════════════════
  // O
  // ══════════════════════════════════════════════════════════════════
  {
    id: 'oruc',
    letter: 'O',
    title: 'Oruç (Savm)',
    type: 'worship',
    description:
      "Ramazan ayında oruç tutmak; İslam'ın beş şartından biri, takvanın zirvesi. (Bakara 2:183-185)",
  },

  // ══════════════════════════════════════════════════════════════════
  // Ö
  // ══════════════════════════════════════════════════════════════════
  {
    id: 'ofke-kontrolu',
    letter: 'Ö',
    title: 'Öfke Kontrolü',
    type: 'command',
    description:
      "Öfkeyi yutmak ve insanları affetmek; Allah iyilik yapanları sever. (Al-i İmran 3:134)",
  },
  {
    id: 'olcu-tartida-hile',
    letter: 'Ö',
    title: 'Ölçü ve Tartıda Hile Yapmak',
    type: 'prohibition',
    description:
      "Ölçü ve tartıda hile yapmak büyük bir zulümdür; Mutaffifin suresi bu konuya ayrılmıştır. (Mutaffifin 83:1-3, Hud 11:85)",
  },

  // ══════════════════════════════════════════════════════════════════
  // P
  // ══════════════════════════════════════════════════════════════════
  {
    id: 'peygambere-itaat',
    letter: 'P',
    title: 'Peygambere İtaat ve Saygı',
    type: 'command',
    description:
      "Hz. Muhammed'e itaat etmek, ona saygı göstermek ve sesini onun sesinin üstüne yükseltmemek. (Nisa 4:59, Hucurat 49:1-3)",
  },

  // ══════════════════════════════════════════════════════════════════
  // R
  // ══════════════════════════════════════════════════════════════════
  {
    id: 'ruşvet',
    letter: 'R',
    title: 'Rüşvet',
    type: 'prohibition',
    description:
      "Hâkimlere ve yetkililere rüşvet vererek haksız kazanç elde etmek yasaktır. (Bakara 2:188)",
  },

  // ══════════════════════════════════════════════════════════════════
  // S
  // ══════════════════════════════════════════════════════════════════
  {
    id: 'sabir',
    letter: 'S',
    title: 'Sabır',
    type: 'command',
    description:
      "Sıkıntı, hastalık ve savaşta sabretmek; Allah sabredenlerle beraberdir. (Bakara 2:153-157, Zümer 39:10)",
  },
  {
    id: 'sadaka',
    letter: 'S',
    title: 'Sadaka ve Gönüllü Yardım',
    type: 'command',
    description:
      "Zekâtın ötesinde gönüllü olarak yoksullara, ihtiyaç sahiplerine ve yolda kalmışlara yardım etmek. (Bakara 2:177, 271-274)",
  },
  {
    id: 'savasda-asirilık',
    letter: 'S',
    title: 'Savaşta Aşırılıktan Sakınma',
    type: 'prohibition',
    description:
      "Savaş esnasında dahi haddi aşmamak; kadınlara, çocuklara, yaşlılara ve ibadethanelere zarar vermemek. (Bakara 2:190)",
  },
  {
    id: 'selamlasma',
    letter: 'S',
    title: 'Selamlaşmak',
    type: 'command',
    description:
      "Müminlerin birbirlerine selam vermesi; selamı daha güzel veya aynısıyla iade etmek. (Nisa 4:86)",
  },
  {
    id: 'servet-stoklama',
    letter: 'S',
    title: 'Servet Stoklamak (Kenz)',
    type: 'prohibition',
    description:
      "Altın ve gümüşü biriktirip Allah yolunda harcamamak; bu servetle kıyamette dağlanacaklar. (Tevbe 9:34-35)",
  },
  {
    id: 'sozlesme',
    letter: 'S',
    title: 'Sözleşmelere ve Antlaşmalara Uymak',
    type: 'command',
    description:
      "Verilen sözlerin, yapılan anlaşmaların ve akitlerin eksiksiz yerine getirilmesi. (Maide 5:1, Nahl 16:91)",
  },
  {
    id: 'sut-kardeslik',
    letter: 'S',
    title: 'Süt Kardeşliği Hükümleri',
    type: 'prohibition',
    description:
      "Süt emme yoluyla oluşan akrabalık bağı, kan bağı gibi kabul edilerek evlilik yasaklanmıştır. (Nisa 4:23)",
  },
  {
    id: 'suizan',
    letter: 'S',
    title: 'Suizan',
    type: 'prohibition',
    description:
      "İnsanlar hakkında kötü zan beslemek yasaktır; zannın çoğu yanlıştır. (Hucurat 49:12)",
  },

  // ══════════════════════════════════════════════════════════════════
  // Ş
  // ══════════════════════════════════════════════════════════════════
  {
    id: 'sahitlikte-dogruluk',
    letter: 'Ş',
    title: 'Şahitlikte Doğruluk',
    type: 'command',
    description:
      "Şahitliği doğru yapmak, gizlememek; şahitliği gizlemek kalbin günahıdır. (Bakara 2:283, Nisa 4:135)",
  },
  {
    id: 'sirk',
    letter: 'Ş',
    title: 'Şirk',
    type: 'prohibition',
    description:
      "Allah'a ortak koşmak en büyük günahtır; Allah şirki affetmez. (Nisa 4:48, Lokman 31:13)",
  },
  {
    id: 'sukur',
    letter: 'Ş',
    title: 'Şükür',
    type: 'worship',
    description:
      "Allah'ın nimetlerine karşı şükretmek; şükredilirse nimet artar. (İbrahim 14:7, Bakara 2:152)",
  },

  // ══════════════════════════════════════════════════════════════════
  // T
  // ══════════════════════════════════════════════════════════════════
  {
    id: 'takva',
    letter: 'T',
    title: 'Takva',
    type: 'command',
    description:
      "Allah'tan gereği gibi korkmak, haramlardan kaçınmak ve emirleri yerine getirmek. (Al-i İmran 3:102, Hucurat 49:13)",
  },
  {
    id: 'tatli-dilli',
    letter: 'T',
    title: 'Tatlı Dilli Olmak',
    type: 'command',
    description:
      "İnsanlara güzel söz söylemek; güzel söz sadaka gibidir. (Bakara 2:83, İsra 17:53)",
  },
  {
    id: 'teblig-davet',
    letter: 'T',
    title: 'Tebliğ ve Davet Görevi',
    type: 'command',
    description:
      "Allah'ın mesajını insanlara güzel öğüt ve hikmetle ulaştırmak; onları hakka davet etmek. (Maide 5:67, Nahl 16:125)",
  },
  {
    id: 'tecessus',
    letter: 'T',
    title: 'Tecessüs',
    type: 'prohibition',
    description:
      "Başkalarının özel hayatını araştırmak ve gizlice takip etmek yasaktır. (Hucurat 49:12)",
  },
  {
    id: 'tevazu',
    letter: 'T',
    title: 'Tevazu',
    type: 'command',
    description:
      "Alçakgönüllü olmak, yerde kibarca yürümek; Allah büyüklenenleri sevmez. (Lokman 31:18-19, Furkan 25:63)",
  },
  {
    id: 'tevekkul',
    letter: 'T',
    title: 'Tevekkül',
    type: 'command',
    description:
      "Gerekli tedbirleri aldıktan sonra Allah'a güvenmek ve dayanmak. (Al-i İmran 3:159, Talak 65:3)",
  },
  {
    id: 'tevhid',
    letter: 'T',
    title: 'Tevhid',
    type: 'command',
    description:
      "Allah'ın birliğine inanmak ve yalnızca O'na ibadet etmek; İslam'ın temel ilkesi. (İhlas 112:1-4, Bakara 2:163)",
  },
  {
    id: 'ticaret-ahlaki',
    letter: 'T',
    title: 'Ticaret Ahlakı',
    type: 'command',
    description:
      "Alışverişte dürüstlük, karşılıklı rıza ve yazılı sözleşme; ticaretin helal kazanç çerçevesinde yürütülmesi. (Nisa 4:29, Bakara 2:282)",
  },
  {
    id: 'tovbe',
    letter: 'T',
    title: 'Tövbe ve İstiğfar',
    type: 'worship',
    description:
      "Günahlardan dönmek, Allah'tan bağışlanma dilemek; Allah tövbe edenleri sever. (Tahrim 66:8, Bakara 2:222)",
  },

  // ══════════════════════════════════════════════════════════════════
  // U
  // ══════════════════════════════════════════════════════════════════
  {
    id: 'umitsizlik',
    letter: 'U',
    title: "Ümitsizlik (Ye's)",
    type: 'prohibition',
    description:
      "Allah'ın rahmetinden ümit kesmek yasaktır; yalnızca kâfirler Allah'ın rahmetinden ümit keser. (Yusuf 12:87, Zümer 39:53)",
  },

  // ══════════════════════════════════════════════════════════════════
  // V
  // ══════════════════════════════════════════════════════════════════
  {
    id: 'vasiyet',
    letter: 'V',
    title: 'Vasiyet',
    type: 'command',
    description:
      "Ölüm öncesinde mal ve hakların nasıl paylaştırılacağını yazılı olarak belirleme; hak sahiplerini koruma. (Bakara 2:180, Maide 5:106)",
  },

  // ══════════════════════════════════════════════════════════════════
  // Y
  // ══════════════════════════════════════════════════════════════════
  {
    id: 'yalan',
    letter: 'Y',
    title: 'Yalan Söylemek',
    type: 'prohibition',
    description:
      "Yalan söylemek ve yalancılara uymak yasaktır; yalan münafıklığın alametidir. (Tevbe 9:119, Zümer 39:3)",
  },
  {
    id: 'yeminleri-bozmamak',
    letter: 'Y',
    title: 'Yeminleri Bozmamak',
    type: 'prohibition',
    description:
      "Verilen yeminleri bozmamak; yemini bahane ederek iyilikten kaçınmamak. (Nahl 16:91-94, Bakara 2:224)",
  },
  {
    id: 'yeryuzunu-imar',
    letter: 'Y',
    title: 'Yeryüzünü İmar Etmek',
    type: 'command',
    description:
      "İnsanın yeryüzündeki halife olarak onu imar etmesi, bozgunculuk değil ıslah etmesi görevi. (Hud 11:61, Bakara 2:30)",
  },
  {
    id: 'yetim-mali',
    letter: 'Y',
    title: 'Yetim Malı Yemek',
    type: 'prohibition',
    description:
      "Yetim çocukların mallarını haksız yollarla yemek büyük günahtır; karınlarına ateş doldurmak gibidir. (Nisa 4:10)",
  },
  {
    id: 'yetim-horlamak',
    letter: 'Y',
    title: 'Yetimi Horlamak ve Kovmak',
    type: 'prohibition',
    description:
      "Yetim çocukları aşağılamak, haklarını çiğnemek ve onları itmek; toplumun en savunmasız kesimine kötü davranmak. (Duha 93:9, Maun 107:2)",
  },
  {
    id: 'yetimlere-bakim',
    letter: 'Y',
    title: 'Yetimlere Bakım ve Hak Gözetimi',
    type: 'command',
    description:
      "Yetim çocukların mallarını korumak, onlara adil davranmak ve büyüyünce mallarını iade etmek. (Nisa 4:2-3, 4:10)",
  },

  // ══════════════════════════════════════════════════════════════════
  // Z
  // ══════════════════════════════════════════════════════════════════
  {
    id: 'zekat',
    letter: 'Z',
    title: 'Zekât',
    type: 'worship',
    description:
      "Nisaba ulaşan malın belirlenen oranını ihtiyaç sahiplerine vermek; İslam'ın beş şartından biri. (Bakara 2:43, Tevbe 9:60)",
  },
  {
    id: 'zekat-sarf-yerleri',
    letter: 'Z',
    title: 'Zekâtın Sarf Yerleri',
    type: 'command',
    description:
      "Zekâtın kimlere verileceği Kur'an'da sekiz sınıf olarak belirlenmiştir: fakirler, miskinler, zekât görevlileri, müellefe-i kulûb, köleler, borçlular, Allah yolundakiler ve yolcular. (Tevbe 9:60)",
  },
  {
    id: 'zikir',
    letter: 'Z',
    title: "Zikir (Allah'ı Çokça Anmak)",
    type: 'worship',
    description:
      "Allah'ı dil ve kalple çokça anmak; zikrin kalplere huzur verdiği ve imanı pekiştirdiği. (Ahzab 33:41, Rad 13:28)",
  },
  {
    id: 'zihar',
    letter: 'Z',
    title: 'Zihar Yasağı ve Hükümleri',
    type: 'prohibition',
    description:
      "Eşini annesi gibi ilan ederek boşanmaya benzer bir söz söylemeyi (zihar) yasaklar ve bunun kefaretini belirtir. (Mücadele 58:2-4)",
  },
  {
    id: 'zina',
    letter: 'Z',
    title: 'Zina',
    type: 'prohibition',
    description:
      "Evlilik dışı ilişkiye girmek ve ahlaksızlığa zemin hazırlayan yollara yaklaşmak yasaktır; cezası Kur'an'da belirlenmiştir. (İsra 17:32, Nur 24:2)",
  },
  {
    id: 'zina-cezasi',
    letter: 'Z',
    title: 'Zina Suçunun Cezası',
    type: 'command',
    description:
      "Kur'an, zina eden her erkek ve kadına yüz değnek vurulmasını emreder; cezanın uygulanmasında merhamet gösterilmemesi. (Nur 24:2)",
  },
  {
    id: 'zulum',
    letter: 'Z',
    title: 'Zulüm',
    type: 'prohibition',
    description:
      "İnsanlara, çalışana, eşe, doğaya veya hayvanlara eziyet etmek; gücünü kullanarak başkasının hakkını gasp etmek. (Şura 42:42, Hud 11:18)",
  },
];

export const letters = [...new Set(topics.map((t) => t.letter))].sort((a, b) =>
  a.localeCompare(b, 'tr')
);
