const enneagramData = [
    {
        id: 1,
        title: "Tip 1: Mükemmeliyetçi",
        tagline: "Arı Gibi Düzenli ve Çalışkan",
        color: "#E63946",
        image: "https://images.unsplash.com/photo-1555666244-123497b76707?q=80&w=1920&auto=format&fit=crop", // Arı (Stabil)
        desc: "Doğru olanı yapmaya odaklı, prensipli ve idealist kişilerdir. Tıpkı bir arı gibi koloninin (toplumun) düzeni ve mükemmelliği için yorulmadan çalışırlar.",
        features: ["Düzenli (Arı)", "Disiplinli", "Eleştirel", "Adaletli"],
        advice: "Kendinize ve başkalarına karşı daha esnek olmayı deneyin. Hata yapmak insanidir."
    },
    {
        id: 2,
        title: "Tip 2: Yardımsever",
        tagline: "Sadık Bir Dost ve Koruyucu",
        color: "#F4A261",
        image: "https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=1920&auto=format&fit=crop", // Golden Retriever (Stabil)
        desc: "Başkalarının ihtiyaçlarını kendi ihtiyaçlarının önüne koyan, sevgi dolu kişilerdir. Sadık bir dost gibi her zaman yanınızda olup sizi desteklerler.",
        features: ["Fedakar", "Sıcakkanlı (Dost)", "İlgi bekleyen", "Empatik"],
        advice: "Kendi ihtiyaçlarınızı da önemseyin. Hayır demeyi öğrenmek sizi özgürleştirir."
    },
    {
        id: 3,
        title: "Tip 3: Başarı Odaklı",
        tagline: "Yüksekten Uçan ve Hedef Odaklı",
        color: "#E9C46A",
        image: "https://images.unsplash.com/photo-1611003228941-98852ba62227?q=80&w=1920&auto=format&fit=crop", // Kartal (Stabil)
        desc: "Başarıya ve zirveye odaklıdırlar. Bir kartal gibi hedeflerine kilitlenirler ve her zaman en yüksekte olmayı arzularlar.",
        features: ["Hırslı (Kartal)", "İmaj odaklı", "Motivasyonlu", "Rekabetçi"],
        advice: "Değeriniz başarılarınızla ölçülmez. Olduğunuz gibi de değerlisiniz."
    },
    {
        id: 4,
        title: "Tip 4: Özgün/Bireyci",
        tagline: "Zarif, Nadir ve Derin",
        color: "#2A9D8F",
        image: "https://images.unsplash.com/photo-1549608276-5786777e6587?q=80&w=1920&auto=format&fit=crop", // Kuğu (Stabil)
        desc: "Kendilerini diğerlerinden farklı hissederler. Bir kuğu gibi zarafet, estetik ve bazen de hüzünlü bir yalnızlık taşırlar.",
        features: ["Duygusal", "Yaratıcı (Kuğu)", "Melankolik", "Sezgisel"],
        advice: "Duygularınızın sizi yönetmesine izin vermeyin. Sıradanlıkta da güzellik vardır."
    },
    {
        id: 5,
        title: "Tip 5: Araştırmacı",
        tagline: "Bilge, Gözlemci ve Sessiz",
        color: "#264653",
        image: "https://images.unsplash.com/photo-1519897831810-a9a01ace5027?q=80&w=1920&auto=format&fit=crop", // Baykuş (YENİ LİNK)
        desc: "Dünyayı anlamak ve bilgi toplamak isterler. Bir baykuş gibi karanlıkta bile gerçeği görebilen, sessiz ve keskin bir zekaya sahiptirler.",
        features: ["Analitik", "Ketum (Baykuş)", "Bilgili", "Bağımsız"],
        advice: "Düşüncelerinizden çıkıp hayata karışın. Bilgi paylaştıkça ve uygulandıkça değerlenir."
    },
    {
        id: 6,
        title: "Tip 6: Sadık/Sorgulayıcı",
        tagline: "Sürüye Bağlı ve Güvenilir",
        color: "#457B9D",
        image: "https://images.unsplash.com/photo-1590420485404-f86d22b8abf8?q=80&w=1920&auto=format&fit=crop", // Kurt (YENİ STABIL LİNK)
        desc: "Güvenlik ihtiyacı hissederler. Bir kurt gibi sürüsüne (grubuna) sadıktırlar, tehlikeleri önceden sezer ve korurlar.",
        features: ["Sadık (Kurt)", "Endişeli", "Sorumluluk sahibi", "Şüpheci"],
        advice: "İçinizdeki sese güvenin. Her zaman en kötü senaryo gerçekleşmez, ana odaklanın."
    },
    {
        id: 7,
        title: "Tip 7: Maceracı/İstekli",
        tagline: "Neşeli, Oyuncu ve Hareketli",
        color: "#A8DADC",
        image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=1920&auto=format&fit=crop", // Balonlar/Parti (YENİ STABIL LİNK)
        desc: "Acıdan kaçınmak ve mutluluğu yakalamak isterler. Hayatı bir oyun alanı olarak görür, sürekli neşe ve aktivite peşindedirler.",
        features: ["İyimser", "Dağınık", "Enerjik (Su Samuru/Balon)", "Hızlı"],
        advice: "Bir şeye odaklanmayı ve derinleşmeyi deneyin. Anlık hazların ötesindeki tatmini keşfedin."
    },
    {
        id: 8,
        title: "Tip 8: Meydan Okuyan",
        tagline: "Ormanın Kralı, Güçlü ve Cesur",
        color: "#1D3557",
        image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=1920&auto=format&fit=crop", // Aslan (Stabil)
        desc: "Kontrolü ellerinde tutmak isterler. Bir aslan gibi bölgelerini ve sevdiklerini korurlar, güçlerini göstermekten çekinmezler.",
        features: ["Lider (Aslan)", "Dobra", "Baskın", "Cesur"],
        advice: "Gücünüzü şefkatle dengeleyin. Zayıflık göstermek de bir cesaret örneğidir."
    },
    {
        id: 9,
        title: "Tip 9: Barışçı",
        tagline: "Sakin Güç ve Uyum",
        color: "#8D99AE",
        image: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?q=80&w=1920&auto=format&fit=crop", // Fil (Stabil)
        desc: "Çatışmadan kaçınır ve huzuru korumaya çalışırlar. Bir fil gibi sakin, nazik ama gerektiğinde sarsılmaz bir güce sahiptirler.",
        features: ["Sabırlı", "Kararsız", "Uyumlu (Fil)", "Kabullenici"],
        advice: "Kendi fikirlerinizi ve isteklerinizi dile getirmekten çekinmeyin. Varoluşunuz önemlidir."
    }
];

