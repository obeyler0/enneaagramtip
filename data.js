const enneagramData = [
    {
        id: 1,
        title: "Tip 1: Mükemmeliyetçi",
        tagline: "Arı Gibi Düzenli ve Çalışkan",
        color: "#E63946",
        image: "images/type1.png",
        desc: "Doğru olanı yapmaya odaklı, prensipli ve idealist kişilerdir. Tıpkı bir arı gibi koloninin (toplumun) düzeni ve mükemmelliği için yorulmadan çalışırlar.",
        features: ["Düzenli", "Disiplinli", "Eleştirel", "Adaletli"],
        strengths: ["Yüksek standartlar ve kalite anlayışı", "Güvenilirlik ve dürüstlük", "Organize etme yeteneği", "İdealist vizyon"],
        weaknesses: ["Aşırı eleştirel olma (kendine ve başkalarına)", "Esneklik eksikliği", "Hata yapma korkusu", "Öfkeyi bastırma"],
        advice: "Kendinize ve başkalarına karşı daha esnek olmayı deneyin. Hata yapmak insanidir ve gelişimin bir parçasıdır.",
        recommendations: {
            book: "Atomik Alışkanlıklar - James Clear",
            movie: "Black Swan (Siyah Kuğu)",
            musicId: "jvipPYFebWc", // Vivaldi - The Four Seasons (Klasik ve düzenli)
            reason: "Bu öneriler, mükemmeliyetçi yapınızı anlarken (Black Swan), küçük değişimlerle büyük düzenler kurmanıza (Atomik Alışkanlıklar) ve zihninizi sakinleştirmenize yardımcı olacak."
        }
    },
    {
        id: 2,
        title: "Tip 2: Yardımsever",
        tagline: "Sadık Bir Dost ve Koruyucu",
        color: "#F4A261",
        image: "images/type2.png",
        desc: "Başkalarının ihtiyaçlarını kendi ihtiyaçlarının önüne koyan, sevgi dolu kişilerdir. Sadık bir dost gibi her zaman yanınızda olup sizi desteklerler.",
        features: ["Fedakar", "Sıcakkanlı", "İlgi bekleyen", "Empatik"],
        strengths: ["Empati kurma ve insanları anlama", "Cömertlik ve yardımseverlik", "İlişkileri güçlendirme", "Pozitif enerji yayma"],
        weaknesses: ["Hayır demekte zorlanma", "Kendi ihtiyaçlarını ihmal etme", "İlgi ve onay bağımlılığı", "Manipülatif olabilme"],
        advice: "Kendi ihtiyaçlarınızı da önemseyin. Hayır demeyi öğrenmek sizi özgürleştirir.",
        recommendations: {
            book: "Sınırlar - Henry Cloud",
            movie: "Amélie",
            musicId: "hT_nvWreIhg", // OneRepublic - Counting Stars (Enerjik ve duygusal)
            reason: "Bu eserler, başkalarına yardım ederken kendi sınırlarınızı korumanızın önemini (Sınırlar) ve küçük iyiliklerin güzelliğini (Amélie) hatırlatacak."
        }
    },
    {
        id: 3,
        title: "Tip 3: Başarı Odaklı",
        tagline: "Yüksekten Uçan ve Hedef Odaklı",
        color: "#E9C46A",
        image: "images/type3.png",
        desc: "Başarıya ve zirveye odaklıdırlar. Bir kartal gibi hedeflerine kilitlenirler ve her zaman en yüksekte olmayı arzularlar.",
        features: ["Hırslı", "İmaj odaklı", "Motivasyonlu", "Rekabetçi"],
        strengths: ["Hedef odaklılık ve verimlilik", "Adaptasyon yeteneği", "Liderlik ve motivasyon", "Özgüven"],
        weaknesses: ["İşkoliklik", "Duyguları bastırma", "Başarısızlık korkusu", "İmajı gerçeklikten önde tutma"],
        advice: "Değeriniz başarılarınızla ölçülmez. Olduğunuz gibi de değerlisiniz.",
        recommendations: {
            book: "Simyacı - Paulo Coelho",
            movie: "The Wolf of Wall Street",
            musicId: "04854XqcfCY", // Queen - We Are The Champions
            reason: "Hırsınızı ve başarı tutkunuzu yansıtan bu eserler, aynı zamanda gerçek hazinenin dışarıda değil, içsel yolculukta (Simyacı) olduğunu hatırlatmak için seçildi."
        }
    },
    {
        id: 4,
        title: "Tip 4: Özgün/Bireyci",
        tagline: "Zarif, Nadir ve Derin",
        color: "#2A9D8F",
        image: "images/type4.png",
        desc: "Kendilerini diğerlerinden farklı hissederler. Bir kuğu gibi zarafet, estetik ve bazen de hüzünlü bir yalnızlık taşırlar.",
        features: ["Duygusal", "Yaratıcı", "Melankolik", "Sezgisel"],
        strengths: ["Yaratıcılık ve sanatsal bakış", "Duygusal derinlik", "Empati ve özgünlük", "Anlam arayışı"],
        weaknesses: ["Kıskançlık ve kendini eksik hissetme", "Melankoliye saplanma", "Aşırı alınganlık", "Sıradan olandan nefret etme"],
        advice: "Duygularınızın sizi yönetmesine izin vermeyin. Sıradanlıkta da güzellik vardır.",
        recommendations: {
            book: "Dorian Gray'in Portresi - Oscar Wilde",
            movie: "Eternal Sunshine of the Spotless Mind",
            musicId: "4N3N1MlvTk4", // Gary Jules - Mad World
            reason: "Derin duygusal dünyanıza hitap eden bu eserler, özgünlüğün bedelini ve duyguların karmaşıklığını estetik bir dille anlatıyor."
        }
    },
    {
        id: 5,
        title: "Tip 5: Araştırmacı",
        tagline: "Bilge, Gözlemci ve Sessiz",
        color: "#264653",
        image: "images/type5.png",
        desc: "Dünyayı anlamak ve bilgi toplamak isterler. Bir baykuş gibi karanlıkta bile gerçeği görebilen, sessiz ve keskin bir zekaya sahiptirler.",
        features: ["Analitik", "Ketum", "Bilgili", "Bağımsız"],
        strengths: ["Analitik düşünme ve problem çözme", "Objektiflik", "Uzmanlaşma ve derinleşme", "Sakinlik"],
        weaknesses: ["İnsanlardan izole olma", "Duygusal kopukluk", "Bilgi biriktirip harekete geçmeme", "Cimrilik (zaman/enerji)"],
        advice: "Düşüncelerinizden çıkıp hayata karışın. Bilgi paylaştıkça ve uygulandıkça değerlenir.",
        recommendations: {
            book: "Sapiens - Yuval Noah Harari",
            movie: "A Beautiful Mind (Akıl Oyunları)",
            musicId: "qZm566w98X0", // Beethoven - Moonlight Sonata
            reason: "Zihinsel açlığınızı doyuracak bu eserler, aynı zamanda zekanın duygusal dünyayla nasıl dengelenmesi gerektiğini (Akıl Oyunları) gösteriyor."
        }
    },
    {
        id: 6,
        title: "Tip 6: Sadık/Sorgulayıcı",
        tagline: "Sürüye Bağlı ve Güvenilir",
        color: "#457B9D",
        image: "images/type6.png",
        desc: "Güvenlik ihtiyacı hissederler. Bir kurt gibi sürüsüne (grubuna) sadıktırlar, tehlikeleri önceden sezer ve korurlar.",
        features: ["Sadık", "Endişeli", "Sorumluluk sahibi", "Şüpheci"],
        strengths: ["Sadakat ve güvenilirlik", "Risk analizi ve öngörü", "Takım oyunculuğu", "Sorumluluk bilinci"],
        weaknesses: ["Aşırı endişe ve evham", "Kararsızlık", "Otoriteye bağımlılık veya isyan", "Kötümserlik"],
        advice: "İçinizdeki sese güvenin. Her zaman en kötü senaryo gerçekleşmez, ana odaklanın.",
        recommendations: {
            book: "Yüzüklerin Efendisi - J.R.R. Tolkien",
            movie: "The Truman Show",
            musicId: "kOkQ4T5WO9E", // Calvin Harris - This Is What You Came For (Enerjik)
            reason: "Sadakat ve yoldaşlığın önemini vurgulayan Yüzüklerin Efendisi ve şüpheciliğin sınırlarını zorlayan Truman Show tam size göre."
        }
    },
    {
        id: 7,
        title: "Tip 7: Maceracı/İstekli",
        tagline: "Neşeli, Oyuncu ve Hareketli",
        color: "#A8DADC",
        image: "images/type7.png",
        desc: "Acıdan kaçınmak ve mutluluğu yakalamak isterler. Hayatı bir oyun alanı olarak görür, sürekli neşe ve aktivite peşindedirler.",
        features: ["İyimser", "Dağınık", "Enerjik", "Hızlı"],
        strengths: ["İyimserlik ve neşe", "Hızlı düşünme ve pratiklik", "Yenilikçilik", "İlham verici olma"],
        weaknesses: ["Odaklanma sorunu", "Maymun iştahlılık", "Olumsuz duygulardan kaçış", "Sorumsuzluk"],
        advice: "Bir şeye odaklanmayı ve derinleşmeyi deneyin. Anlık hazların ötesindeki tatmini keşfedin.",
        recommendations: {
            book: "Ye, Dua Et, Sev - Elizabeth Gilbert",
            movie: "Up (Yukarı Bak)",
            musicId: "OPf0YbXqDm0", // Mark Ronson - Uptown Funk
            reason: "Macera tutkunuzu besleyen bu eserler, aynı zamanda kaçtığınız duygularla yüzleşmenin (Up) de hayatın bir parçası olduğunu hatırlatıyor."
        }
    },
    {
        id: 8,
        title: "Tip 8: Meydan Okuyan",
        tagline: "Ormanın Kralı, Güçlü ve Cesur",
        color: "#1D3557",
        image: "images/type8.png",
        desc: "Kontrolü ellerinde tutmak isterler. Bir aslan gibi bölgelerini ve sevdiklerini korurlar, güçlerini göstermekten çekinmezler.",
        features: ["Lider", "Dobra", "Baskın", "Cesur"],
        strengths: ["Doğal liderlik ve cesaret", "Kararlılık", "Koruyuculuk", "Adalet duygusu"],
        weaknesses: ["Baskın olma isteği", "Öfke kontrolü sorunu", "Zayıflığı kabul edememe", "İntikamcı olma"],
        advice: "Gücünüzü şefkatle dengeleyin. Zayıflık göstermek de bir cesaret örneğidir.",
        recommendations: {
            book: "Savaş Sanatı - Sun Tzu",
            movie: "Gladiator",
            musicId: "DHLPv5eG46k", // Imagine Dragons - Believer
            reason: "Güçlü karakterinizi ve liderlik vasfınızı yansıtan Gladiator, gücün erdemle birleştiğinde nasıl efsaneleştiğini anlatıyor."
        }
    },
    {
        id: 9,
        title: "Tip 9: Barışçı",
        tagline: "Sakin Güç ve Uyum",
        color: "#8D99AE",
        image: "images/type9.png",
        desc: "Çatışmadan kaçınır ve huzuru korumaya çalışırlar. Bir fil gibi sakin, nazik ama gerektiğinde sarsılmaz bir güce sahiptirler.",
        features: ["Sabırlı", "Kararsız", "Uyumlu", "Kabullenici"],
        strengths: ["Uzlaşmacı ve diplomatik", "Sabır ve anlayış", "Yargılamadan dinleme", "Huzur veren varlık"],
        weaknesses: ["Çatışmadan kaçma pahasına kendini yok sayma", "Erteleme", "İnatçılık (pasif direnç)", "Belirsizlik"],
        advice: "Kendi fikirlerinizi ve isteklerinizi dile getirmekten çekinmeyin. Varoluşunuz önemlidir.",
        recommendations: {
            book: "Şimdiki Zamanın Gücü - Eckhart Tolle",
            movie: "The Secret Life of Walter Mitty",
            musicId: "ru0K8uYEZWw", // John Lennon - Imagine
            reason: "Huzur arayışınıza hitap eden bu eserler, eyleme geçmenin ve potansiyelinizi gerçekleştirmenin (Walter Mitty) önemini vurguluyor."
        }
    }
];

// --- DETAYLI KANAT (WING) VERİLERİ ---
const wingsData = {
    1: {
        w9: {
            title: "1w9: İdealist",
            desc: "Tip 1'in mükemmeliyetçiliği, Tip 9'un sakinliği ile yumuşar. Daha içe dönük, sakin, gözlemci ve nesneldirler.",
            traits: ["Daha sakin ve ağırbaşlı", "Öfkeyi daha az belli eden", "Doğaya düşkün", "Yargılamadan önce düşünen"]
        },
        w2: {
            title: "1w2: Savunucu",
            desc: "Tip 1'in prensipleri, Tip 2'nin yardımseverliği ile birleşir. Daha dışa dönük, insan odaklı, sıcakkanlı ama öğretici bir yapıdadırlar.",
            traits: ["Daha aktif ve sosyal", "Fedakar ve koruyucu", "İkna kabiliyeti yüksek", "Dünyayı 'düzelterek' yardım eden"]
        }
    },
    2: {
        w1: {
            title: "2w1: Hizmetkar",
            desc: "Tip 2'nin sevgisi, Tip 1'in ahlaki değerleriyle birleşir. 'Doğru olanı' yapmak için yardım ederler, görev bilinci yüksektir.",
            traits: ["Ciddi ve prensipli", "Vicdanlı ve özverili", "Kendini eleştiren", "Sorumluluk sahibi"]
        },
        w3: {
            title: "2w3: Ev Sahibi",
            desc: "Tip 2'nin ilişki odağı, Tip 3'ün hırsı ve cazibesiyle birleşir. Sosyal, enerjik, başarıyı seven ve etkileyici kişilerdir.",
            traits: ["Dışa dönük ve popüler", "Hırslı ve hedef odaklı", "İmajına önem veren", "Organizasyon yeteneği yüksek"]
        }
    },
    3: {
        w2: {
            title: "3w2: Yıldız",
            desc: "Tip 3'ün başarısı, Tip 2'nin sıcaklığıyla harmanlanır. İnsanları etkilemeyi seven, büyüleyici, popüler ve yardımsever liderlerdir.",
            traits: ["Karizmatik ve sevecen", "İnsanları motive eden", "İlişki odaklı başarı", "Sahne ışığını seven"]
        },
        w4: {
            title: "3w4: Profesyonel",
            desc: "Tip 3'ün çalışma azmi, Tip 4'ün sanatsal ve derinliğiyle birleşir. Daha ciddi, işine odaklı, estetik zevki yüksek ve biraz mesafelidirler.",
            traits: ["Sanatsal ve yaratıcı", "İşkolik ve mükemmeliyetçi", "Daha içe dönük ve ciddi", "Özgün başarı peşinde"]
        }
    },
    4: {
        w3: {
            title: "4w3: Aristokrat",
            desc: "Tip 4'ün özgünlüğü, Tip 3'ün başarı isteğiyle birleşir. Yaratıcılıklarını dünyaya sunmak ve takdir görmek isterler. Daha üretken ve sosyaldirler.",
            traits: ["Dışa dönük ve hırslı", "Estetik ve şık", "Duygularını sanata döken", "Rekabetçi ve seçkin"]
        },
        w5: {
            title: "4w5: Bohem",
            desc: "Tip 4'ün derinliği, Tip 5'in entelektüelliğiyle birleşir. Kendi iç dünyalarında yaşayan, gizemli, felsefi ve sıra dışı kişilerdir.",
            traits: ["İçe dönük ve münzevi", "Entelektüel ve araştırmacı", "Geleneklere aykırı", "Derin analiz yeteneği"]
        }
    },
    5: {
        w4: {
            title: "5w4: İkonoklast",
            desc: "Tip 5'in bilgeliği, Tip 4'ün sezgileriyle birleşir. Bilim ve sanatı birleştiren, hayal gücü geniş, yaratıcı ve bağımsız düşünürlerdir.",
            traits: ["Yaratıcı ve vizyoner", "Duygusal ama gizleyen", "Sıra dışı ilgi alanları", "Bağımsız ve özgün"]
        },
        w6: {
            title: "5w6: Problem Çözücü",
            desc: "Tip 5'in analitik zekası, Tip 6'nın sadakati ve pratikliğiyle birleşir. Olaylara mühendis gibi yaklaşan, işbirlikçi ve mantıklı kişilerdir.",
            traits: ["Sadık ve çalışkan", "Teknik ve detaycı", "Gözlemci ve temkinli", "Takım çalışmasına yatkın"]
        }
    },
    6: {
        w5: {
            title: "6w5: Savunucu",
            desc: "Tip 6'nın güven ihtiyacı, Tip 5'in bilgi odağıyla birleşir. Ciddi, bağımsız, sistemleri analiz eden ve tehlikeleri önceden gören stratejistlerdir.",
            traits: ["Ciddi ve entelektüel", "Yalnızlığı seven", "Stratejik planlama", "Kendi kendine yeten"]
        },
        w7: {
            title: "6w7: Dost",
            desc: "Tip 6'nın sadakati, Tip 7'nin neşesiyle birleşir. Sosyal, eğlenceli, şakacı ama içten içe endişeli ve güvence arayan kişilerdir.",
            traits: ["Sosyal ve konuşkan", "Mizah yeteneği güçlü", "Enerjik ama kaygılı", "Grup aktivitelerini seven"]
        }
    },
    7: {
        w6: {
            title: "7w6: Eğlendirici",
            desc: "Tip 7'nin maceracılığı, Tip 6'nın insan odaklılığıyla birleşir. Sadık, eğlenceli, ilişkilerine önem veren ve onay arayan, neşeli kişilerdir.",
            traits: ["Sadık ve sevecen", "Sorumluluk sahibi eğlence", "İlişki odaklı", "Hızlı fikir değiştiren"]
        },
        w8: {
            title: "7w8: Gerçekçi",
            desc: "Tip 7'nin vizyonu, Tip 8'in gücüyle birleşir. Tuttuğunu koparan, lider ruhlu, dünyevi zevklere düşkün, cesur ve girişimci kişilerdir.",
            traits: ["Lider ve baskın", "Pratik ve sonuç odaklı", "Cesur ve net", "Girişimci ruhlu"]
        }
    },
    8: {
        w7: {
            title: "8w7: Bağımsız",
            desc: "Tip 8'in gücü, Tip 7'nin enerjisiyle birleşir. Dışa dönük, risk almayı seven, karizmatik, vizyoner ve insanları peşinden sürükleyen liderlerdir.",
            traits: ["Maceracı ve risk alan", "Enerjik ve konuşkan", "Girişimci ve vizyoner", "Keyfine düşkün"]
        },
        w9: {
            title: "8w9: Ayı",
            desc: "Tip 8'in koruyuculuğu, Tip 9'un sakinliğiyle birleşir. Sessiz ama çok güçlü, sabırlı, babacan/anaç ve güven veren 'gizli' liderlerdir.",
            traits: ["Sakin ve güvenilir", "Sabırlı ama kararlı", "Koruyucu ve kapsayıcı", "Yavaş öfkelenen ama patlayan"]
        }
    },
    9: {
        w8: {
            title: "9w8: Arabulucu",
            desc: "Tip 9'un uyumu, Tip 8'in gücüyle birleşir. Sosyal, rahat, gerektiğinde inatçı ve öfkesini gösterebilen, 'rahat güç' sahibi kişilerdir.",
            traits: ["Rahat ve dışa dönük", "İnatçı ve kararlı", "Çatışmayı yönetebilen", "Fiziksel zevklere düşkün"]
        },
        w1: {
            title: "9w1: Hayalperest",
            desc: "Tip 9'un idealizmi, Tip 1'in prensipleriyle birleşir. Düzenli, kontrollü, etik değerlere önem veren, nazik ve biraz daha mesafeli kişilerdir.",
            traits: ["İdealist ve düzenli", "Nazik ve mesafeli", "Ahlaki değerlere bağlı", "Hayal dünyası geniş"]
        }
    }
};

// --- TRITYPE (27 ARKETİP) VERİLERİ ---
// --- TRITYPE (27 ARKETİP) VERİLERİ ---
const tritypeData = {
    // 1 Öncüllü
    "125": { title: "1-2-5: Mentor", desc: "Bilge, yardımsever ve düzenli. (Kapsar: 125, 152, 215, 251, 512, 521). İnsanlara rehberlik etmeyi ve doğru bilgiyi paylaşmayı severler." },
    "126": { title: "1-2-6: Destekçi", desc: "Sorumluluk sahibi, sadık ve yardımsever. (Kapsar: 126, 162, 216, 261, 612, 621). İnsanların ihtiyaçlarını karşılamak için kurallara uyarlar." },
    "127": { title: "1-2-7: Öğretmen", desc: "İlham verici, neşeli ama disiplinli. (Kapsar: 127, 172, 217, 271, 712, 721). Öğretmeyi ve başkalarını geliştirmeyi severler." },
    "135": { title: "1-3-5: Teknik Uzman", desc: "Çalışkan, odaklanmış ve rasyonel. (Kapsar: 135, 153, 315, 351, 513, 531). Detaylara hakim, mükemmeliyetçi ve başarı odaklıdırlar." },
    "136": { title: "1-3-6: Görev İnsanı", desc: "Verimli, sadık ve prensipli. (Kapsar: 136, 163, 316, 361, 613, 631). Organizasyonların bel kemiğidirler, hatasız iş yapmaya çalışırlar." },
    "137": { title: "1-3-7: Sistem Mimarı", desc: "Hırslı, yenilikçi ve mükemmeliyetçi. (Kapsar: 137, 173, 317, 371, 713, 731). Vizyoner projeler üretir ve hayata geçirirler." },
    "145": { title: "1-4-5: Araştırmacı", desc: "Entelektüel, sezgisel ve analitik. (Kapsar: 145, 154, 415, 451, 514, 541). Derin bilgiye ulaşmayı ve özgün teoriler üretmeyi severler." },
    "146": { title: "1-4-6: Filozof", desc: "Sorgulayan, ahlaki değerlere önem veren ve sezgisel. (Kapsar: 146, 164, 416, 461, 614, 641). Doğruyu bulmak onlar için onur meselesidir." },
    "147": { title: "1-4-7: Vizyoner", desc: "Yaratıcı, idealist ve enerjik. (Kapsar: 147, 174, 417, 471, 714, 741). Dünyayı güzelleştirmek için sıra dışı fikirler geliştirirler." },

    // 2 Öncüllü
    "258": { title: "2-5-8: Stratejist", desc: "İnsanları anlayan, koruyucu ve analitik. (Kapsar: 258, 285, 528, 582, 825, 852). Hem şefkatli hem de gerektiğinde sert bir lider olabilirler." },
    "259": { title: "2-5-9: Problem Çözücü", desc: "Sakin, bilge ve nazik. (Kapsar: 259, 295, 529, 592, 925, 952). Çatışmalardan kaçınır ama insanların sorunlarına pratik çözümler bulurlar." },
    "268": { title: "2-6-8: Kurtarıcı", desc: "Güçlü, koruyucu ve sadık. (Kapsar: 268, 286, 628, 682, 826, 862). Sevdikleri için her şeyi yaparlar, zor zamanların insanıdırlar." },
    "269": { title: "2-6-9: İyi Samarit", desc: "Uyumlu, nazik ve yardımsever. (Kapsar: 269, 296, 629, 692, 926, 962). Herkesin iyiliğini ister, barışı korumak için çabalarlar." },
    "278": { title: "2-7-8: Özgür Ruh", desc: "Neşeli, güçlü ve cömert. (Kapsar: 278, 287, 728, 782, 827, 872). Hayat dolu, yenilikçi ve insanları harekete geçiren liderlerdir." },
    "279": { title: "2-7-9: Barış Elçisi", desc: "İyimser, rahat ve yardımsever. (Kapsar: 279, 297, 729, 792, 927, 972). Ortama neşe katar ve gerginlikleri yumuşatırlar." },

    // 3 Öncüllü
    "358": { title: "3-5-8 / 3-8-5: Çözüm Odaklı", desc: "<strong>Tritype 385</strong> olarak da bilinir. Hırslı, stratejik ve dominanttırlar. Duygusallığa yer vermeden hedefe kilitlenirler. Zorlukları birer bulmaca gibi çözerler. (Kapsar: 358, 385, 538, 583, 835, 853)" },
    "359": { title: "3-5-9: Düşünür", desc: "Sakin, zeki ve uyumlu. (Kapsar: 359, 395, 539, 593, 935, 953). Başarıyı sessizce elde ederler, profesyonel ve objektiftirler." },
    "368": { title: "3-6-8: Adalet Savaşçısı", desc: "Cesur, tartışmacı ve sadık. (Kapsar: 368, 386, 638, 683, 836, 863). İnandıkları dava uğruna savaşır ve sözlerini sakınmazlar." },
    "369": { title: "3-6-9: Arabulucu", desc: "Uyumlu, çalışkan ve toplumsal. (Kapsar: 369, 396, 639, 693, 936, 963). Grup içinde dengeyi sağlar ve ortak başarı için çalışırlar." },
    "378": { title: "3-7-8: Güç Simsarı", desc: "Enerjik, iddialı ve vizyoner. (Kapsar: 378, 387, 738, 783, 837, 873). Büyük oynamayı severler, risk almaktan korkmazlar." },
    "379": { title: "3-7-9: Elçi", desc: "Pozitif, diplomatik ve üretken. (Kapsar: 379, 397, 739, 793, 937, 973). İnsanları motive eder ve pürüzsüz ilişkiler kurarlar." },

    // 4 Öncüllü
    "458": { title: "4-5-8: Bilge", desc: "Gizemli, güçlü ve derin. (Kapsar: 458, 485, 548, 584, 845, 854). Kendi yollarını çizerler, sıradanlıktan ve yüzeysellikten nefret ederler." },
    "459": { title: "4-5-9: Dalgın", desc: "İçe dönük, sezgisel ve sakin. (Kapsar: 459, 495, 549, 594, 945, 954). Kendi dünyalarında yaşarlar, derin düşüncelere ve hayallere sahiptirler." },
    "468": { title: "4-6-8: Gerçekçi", desc: "Yoğun, reaktif ve sözünü sakınmayan. (Kapsar: 468, 486, 648, 684, 846, 864). Gerçeği, ne kadar acı olursa olsun ortaya çıkarmak isterler." },
    "469": { title: "4-6-9: Arayışçı", desc: "Duygusal, şüpheci ve uyumlu. (Kapsar: 469, 496, 649, 694, 946, 964). Kimliklerini ve güvenli limanlarını ararlar, derin bağlar kurarlar." },
    "478": { title: "4-7-8: Haberci", desc: "Yaratıcı, yenilikçi ve direkt. (Kapsar: 478, 487, 748, 784, 847, 874). Sıra dışı mesajlarını dünyaya duyurmak isterler, etkileyicidirler." },
    "479": { title: "4-7-9: Peri Masalı", desc: "Nazik, yaratıcı ve iyimser. (Kapsar: 479, 497, 749, 794, 947, 974). Dünyadaki güzellikleri görmeyi ve büyülü bir atmosfer yaratmayı severler." }
};



