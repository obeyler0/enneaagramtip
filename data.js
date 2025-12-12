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
        image: "images/type3.jpg",
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
        image: "images/type4.jpg",
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
        image: "images/type6.jpg",
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
        image: "images/type7.jpg",
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
        image: "images/type9.jpg",
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


