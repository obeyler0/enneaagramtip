// DOM elementlerini seç
const cardGrid = document.getElementById('cardGrid');
const detailOverlay = document.getElementById('detailOverlay');
const detailModal = document.getElementById('detailModal');
const detailContent = document.getElementById('detailContent');

// Kartları Render Et
function renderCards() {
    cardGrid.innerHTML = '';

    enneagramData.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        // Animasyon için staggered delay ve arkaplan resmi
        card.style.animationDelay = `${index * 0.1}s`;
        card.style.backgroundImage = `url('${item.image}')`;

        // Kart içeriği
        card.innerHTML = `
            <div class="card-number">${item.id}</div>
            <div class="card-content">
                <h3 class="card-title">${item.title.split(':')[0]}</h3>
                <p class="card-tag">${item.title.split(':')[1]}</p>
            </div>
        `;

        // Tıklama olayı
        card.addEventListener('click', () => openDetail(item));

        cardGrid.appendChild(card);
    });
}

// Detay Modalını Aç
function openDetail(item) {
    // İçeriği temizle ve doldur
    const featuresHtml = item.features.map(f => `<span class="feature-tag">${f}</span>`).join('');

    const content = `
        <div class="detail-img-container">
            <img src="${item.image}" class="detail-img" alt="${item.title}">
        </div>

        <h2 class="detail-title" style="color: ${item.color}">${item.title}</h2>
        <p class="detail-tagline">${item.tagline}</p>

        <p class="section-title">Genel Bakış</p>
        <p class="detail-desc">${item.desc}</p>

        <p class="section-title">Özellikler</p>
        <div class="features-list">${featuresHtml}</div>

        <div class="advice-box" style="border-left-color: ${item.color}; background: ${item.color}20">
            <strong>Gelişim Tavsiyesi:</strong><br>
            ${item.advice}
        </div>

        <!-- PAYLAŞ BUTONU (İçeriğin Parçası) -->
        <button class="share-btn-bottom" onclick='openShareCard(${JSON.stringify(item)})'>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg>
            Sonucu Paylaş
        </button>
    `;

    detailContent.innerHTML = content;

    // Modalı göster
    detailOverlay.classList.add('active');

    // History'ye ekle (hash değişimi ile)
    window.history.pushState({ modal: 'detail' }, '', '#detail');
}

// Paylaşım Kartını Aç
// Paylaşım Kartını Aç
function openShareCard(item) {
    const shareOverlay = document.getElementById('shareOverlay');
    const container = document.getElementById('shareCardContainer');
    const hintText = document.querySelector('.share-hint');
    const actionBtn = document.querySelector('.share-modal .btn-primary');

    // Rastgele hayvan ikonu veya tipi
    const animalName = item.features[0].match(/\((.*?)\)/)?.[1] || "Tip " + item.id;

    container.innerHTML = `
        <div class="sc-image" style="background-image: url('${item.image}')"></div>
        <div class="sc-overlay">
            <div class="sc-badge">Benim Enneagram Tipim</div>
            <h2 class="sc-title">${item.title.split(':')[1]}</h2>
            <p class="sc-tag">"${item.tagline}"</p>
            
            <div class="sc-footer">
                <span>${animalName} Ruhu 🐾</span>
                <span>Enneagram App</span>
            </div>
        </div>
    `;

    // Metinleri ve butonu güncelle
    if (hintText) hintText.innerText = "Aşağıdaki butona basarak paylaşabilirsin.";
    if (actionBtn) {
        actionBtn.innerText = "Resmi Paylaş 📲";
        actionBtn.onclick = () => generateAndShareImage(item.title);
    }

    shareOverlay.classList.add('active');

    // History'ye ekle
    window.history.pushState({ modal: 'share' }, '', '#share');
}

// Resmi Oluştur ve Paylaş
async function generateAndShareImage(title) {
    const container = document.getElementById('shareCardContainer');
    const btn = document.querySelector('.share-modal .btn-primary');
    const originalText = btn.innerText;

    try {
        btn.innerText = "Hazırlanıyor... 🎨";
        btn.disabled = true;

        // Html2Canvas ile görüntü al
        const canvas = await html2canvas(container, {
            useCORS: true,
            scale: 2,
            backgroundColor: null
        });

        // Canvas'ı Blob'a çevir
        canvas.toBlob(async (blob) => {
            if (!blob) {
                alert("Görsel oluşturulamadı.");
                btn.innerText = originalText;
                btn.disabled = false;
                return;
            }

            // Dosya oluştur
            const file = new File([blob], "enneagram-sonuc.jpg", { type: "image/jpeg" });

            // Paylaşımı başlat
            if (navigator.share) {
                try {
                    await navigator.share({
                        files: [file]
                    });
                    btn.innerText = "Paylaşıldı! 🎉";
                } catch (err) {
                    // Kullanıcı iptal ettiyse sessiz kal
                    btn.innerText = originalText;
                }
            } else {
                // PC'de veya desteklenmeyen tarayıcıda indir
                const link = document.createElement('a');
                link.href = URL.createObjectURL(blob);
                link.download = 'enneagram-sonuc.jpg';
                link.click();
                alert("Resmi indirdim!");
                btn.innerText = "İndirildi ⬇️";
            }

            btn.disabled = false;
            setTimeout(() => btn.innerText = originalText, 2000);

        }, 'image/jpeg', 0.9);

    } catch (error) {
        console.error("Görsel hatası:", error);
        alert("Bir hata oluştu");
        btn.innerText = originalText;
        btn.disabled = false;
    }
}

function closeShareCard(fromHistory = false) {
    const overlay = document.getElementById('shareOverlay');
    if (overlay.classList.contains('active')) {
        overlay.classList.remove('active');
        // Eğer geri tuşundan değil de butondan kapatıldıysa, history'i geri al
        if (!fromHistory) window.history.back();
    }
}

// Detay Modalını Kapat
// Detay Modalını Kapat
function closeDetail(fromHistory = false) {
    if (detailOverlay.classList.contains('active')) {
        detailOverlay.classList.remove('active');
        const shareArea = document.getElementById('shareActionArea');
        if (shareArea) shareArea.innerHTML = '';

        // Eğer geri tuşundan değil de butondan kapatıldıysa, history'i geri al
        if (!fromHistory) window.history.back();
    }
}

// --- PAGE NAVIGATION ---
function switchPage(pageName, fromHistory = false) {
    if (!fromHistory) {
        window.history.pushState({ page: pageName }, '', '#' + pageName);
    }

    // 1. Update Buttons
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    if (pageName === 'home') buttons[0].classList.add('active');
    if (pageName === 'test') buttons[1].classList.add('active');
    if (pageName === 'about') buttons[2].classList.add('active');

    // 2. Update Views
    document.querySelectorAll('.page-view').forEach(view => {
        view.classList.remove('active');
    });

    if (pageName === 'home') {
        document.getElementById('home-page').classList.add('active');
    } else if (pageName === 'test') {
        document.getElementById('test-page').classList.add('active');
    } else if (pageName === 'about') {
        document.getElementById('about-page').classList.add('active');
    }

    // Test reset logic
    if (pageName === 'test' && !fromHistory) {
        document.getElementById('quizStartView').style.display = 'block';
        document.getElementById('quizActiveView').style.display = 'none';
        currentQuestionIndex = 0;
    }
}
// Overlay boşluğuna tıklanınca da kapat
detailOverlay.addEventListener('click', (e) => {
    if (e.target === detailOverlay) {
        closeDetail();
    }
});

// --- TEST MANTIĞI ---

// Basit Test Soruları (Her soru belirli tiplere puan verir)
// 1 = Mükemmeliyetçi, 2 = Yardımsever, 3 = Başarı, 4 = Bireyci, 5 = Araştırmacı
// 6 = Sadık, 7 = Maceracı, 8 = Meydan Okuyan, 9 = Barışçı

const quizQuestions = [
    {
        text: "Bir sorunla karşılaştığında ilk tepkin ne olur?", options: [
            { text: "Doğru ve kuralına uygun şekilde çözmeye çalışırım.", types: [1, 6] },
            { text: "Başkalarına nasıl yardım edebileceğimi düşünürüm.", types: [2, 9] },
            { text: "Hızlıca çözüp yoluma devam etmek isterim.", types: [3, 7, 8] },
            { text: "Önce sorunu tüm detaylarıyla analiz ederim.", types: [5] }
        ]
    },
    {
        text: "Seni en çok ne korkutur?", options: [
            { text: "Hata yapmak veya eleştirilmek.", types: [1, 3] },
            { text: "Sevilmemek veya istenmemek.", types: [2, 4] },
            { text: "Kontrolü kaybetmek veya incitilmek.", types: [8, 6] },
            { text: "Acı çekmek veya yoksun kalmak.", types: [7, 5] },
            { text: "Çatışma veya huzursuzluk.", types: [9] }
        ]
    },
    {
        text: "Boş zamanlarında ne yapmaktan hoşlanırsın?", options: [
            { text: "Kendimi geliştirecek konularla ilgilenirim.", types: [1, 3, 5] },
            { text: "Arkadaşlarımla sosyalleşmek ve onlara destek olmak.", types: [2, 6] },
            { text: "Yalnız kalıp hayallere dalmak veya sanatla ilgilenmek.", types: [4, 9] },
            { text: "Heyecan verici yeni maceralar aramak.", types: [7, 8] }
        ]
    },
    {
        text: "İnsanlar seni genellikle nasıl tanımlar?", options: [
            { text: "Güvenilir, düzenli ve ciddi.", types: [1, 6] },
            { text: "Sıcakkanlı, cömert ve fedakar.", types: [2] },
            { text: "Başarılı, hırslı ve enerjik.", types: [3, 7] },
            { text: "Farklı, derin ve duygusal.", types: [4] },
            { text: "Sessiz, gözlemci ve zeki.", types: [5, 9] },
            { text: "Güçlü, koruyucu ve lider.", types: [8] }
        ]
    },
    {
        text: "Bir grup çalışmasında rolün nedir?", options: [
            { text: "Liderliği alır ve yönlendiririm.", types: [8, 3] },
            { text: "Herkesin uyumlu çalışmasını sağlarım.", types: [9, 2] },
            { text: "Riskleri hesaplar ve eksikleri bulurum.", types: [6, 1] },
            { text: "Yaratıcı ve orijinal fikirler üretirim.", types: [4, 7] },
            { text: "Bilgi ve strateji sağlarım.", types: [5] }
        ]
    },
    {
        text: "Stres altındayken nasıl davranırsın?", options: [
            { text: "Daha eleştirel ve gergin olurum.", types: [1] },
            { text: "İçime kapanır ve insanlardan uzaklaşırım.", types: [5, 9] },
            { text: "Duygusal patlamalar yaşarım.", types: [2, 4] },
            { text: "Harekete geçer ve agresifleşebilirim.", types: [8] },
            { text: "Dikkatim dağılır, başka şeylere odaklanırım.", types: [7] },
            { text: "Endişelenir ve her ihtimali düşünürüm.", types: [6] }
        ]
    },
    {
        text: "Hayattaki temel motivasyonun nedir?", options: [
            { text: "Huzurlu olmak ve çatışmadan kaçınmak.", types: [9] },
            { text: "Güvende olmak ve desteklenmek.", types: [6] },
            { text: "Özgün olmak ve kendimi ifade etmek.", types: [4] },
            { text: "Bilmek ve dünyayı anlamak.", types: [5] },
            { text: "Faydalı olmak ve sevilmek.", types: [2] },
            { text: "Mükemmel olmak ve doğruyu yapmak.", types: [1] }
        ]
    },
    {
        text: "Karar verirken neye güvenirsin?", options: [
            { text: "Mantığıma ve verilere.", types: [5, 1, 3] },
            { text: "Duygularıma ve sezgilerime.", types: [4, 2] },
            { text: "İçgüdülerime ve o anki duruma.", types: [8, 7] },
            { text: "Başkalarının fikrine ve otoriteye.", types: [6, 9] }
        ]
    },
    {
        text: "Duygularını nasıl yaşarsın?", options: [
            { text: "Çok yoğun ve derin yaşarım.", types: [4] },
            { text: "Bastırmaya çalışır, mantıklı kalırım.", types: [1, 5, 3] },
            { text: "Dışa vurmaktan çekinmem.", types: [8, 2] },
            { text: "Olumsuz duygulardan kaçınır, pozitife odaklanırım.", types: [7, 9] },
            { text: "Duygularım değişkendir, bazen endişeli olurum.", types: [6] }
        ]
    },
    {
        text: "Eleştiri aldığında ne yaparsın?", options: [
            { text: "Kendimi savunur ve öfkelenirim.", types: [8] },
            { text: "Çok ciddiye alır ve kendimi düzeltmeye çalışırım.", types: [1, 3] },
            { text: "Kırılırım ve kişisel algılarım.", types: [2, 4] },
            { text: "Mantıklıysa kabul eder, değilse umursamam.", types: [5, 7] },
            { text: "Gerilirim ve ne yapacağımı bilemem.", types: [6, 9] }
        ]
    },
    {
        text: "Bir partide nasılsındır?", options: [
            { text: "İlgi odağı olurum ve herkesi eğlendiririm.", types: [7, 3] },
            { text: "Tanıdığım birkaç kişiyle derin sohbet ederim.", types: [4, 6] },
            { text: "Gözlem yapmayı tercih ederim, sessiz kalırım.", types: [5] },
            { text: "İnsanların ihtiyaçlarıyla ilgilenirim.", types: [2, 9] },
            { text: "Durumu kontrol eder, liderlik yaparım.", types: [8] }
        ]
    },
    {
        text: "Geçmişe bakış açın nasıldır?", options: [
            { text: "Geçmişteki hatalarıma takılırım.", types: [1, 4] },
            { text: "Nostaljiyi severim, güzel anıları hatırlarım.", types: [9] },
            { text: "Geçmiş geçmişte kaldı, geleceğe bakarım.", types: [3, 7, 8] },
            { text: "Geçmişten dersler çıkarıp analiz ederim.", types: [5, 6] }
        ]
    },
    {
        text: "Başarısızlık senin için ne ifade eder?", options: [
            { text: "Yetersizlik hissi, çok korkarım.", types: [3] },
            { text: "Bir öğrenme fırsatı.", types: [5, 7] },
            { text: "Daha iyisini yapmak için bir uyarı.", types: [1] },
            { text: "Güçsüzlük göstergesi, kabul edilemez.", types: [8] }
        ]
    },
    {
        text: "Kurallara yaklaşımın nasıldır?", options: [
            { text: "Kurallar düzen için gereklidir, uyarım.", types: [1, 6] },
            { text: "Beni kısıtlıyorsa esnetebilirim.", types: [7, 3] },
            { text: "Sadece mantıklı bulursam uyarım.", types: [5] },
            { text: "Kendi kurallarımı kendim koyarım.", types: [8, 4] }
        ]
    },
    {
        text: "En belirgin kusurun ne olabilir?", options: [
            { text: "Fazla mükemmeliyetçilik.", types: [1] },
            { text: "İnsanlara hayır diyememek.", types: [2, 9] },
            { text: "Duygusal dengesizlik.", types: [4] },
            { text: "Şüphecilik ve endişe.", types: [6] },
            { text: "Sabırsızlık ve odaklanma sorunu.", types: [7] },
            { text: "İnsanlara mesafeli durmak.", types: [5] }
        ]
    },
    {
        text: "Seni en çok ne motive eder?", options: [
            { text: "Takdir edilmek ve onaylanmak.", types: [3, 2] },
            { text: "Özgürlük ve seçeneklere sahip olmak.", types: [7] },
            { text: "Güçlü ve bağımsız olmak.", types: [8] },
            { text: "İç huzuru ve denge.", types: [9] }
        ]
    },
    {
        text: "Çatışma anında ne yaparsın?", options: [
            { text: "Geri çekilir ve sakinleşmeyi beklerim.", types: [9, 5] },
            { text: "Doğrudan yüzleşir ve çözerim.", types: [8, 3] },
            { text: "Diplomatik davranır, ara yolu bulurum.", types: [2] },
            { text: "Duygusal tepki verir, küsebilirim.", types: [4] },
            { text: "Haklı olduğumu kanıtlamaya çalışırım.", types: [1, 6] }
        ]
    },
    {
        text: "Hangi süper gücü istersin?", options: [
            { text: "Zihin okumak / Her şeyi bilmek.", types: [5] },
            { text: "Görünmez olmak.", types: [9, 4] },
            { text: "Uçmak / Işınlanmak.", types: [7] },
            { text: "Zamanı durdurmak / Düzenlemek.", types: [1, 6] },
            { text: "Süper güç / Dayanıklılık.", types: [8, 3] },
            { text: "İyileştirme gücü.", types: [2] }
        ]
    },
    {
        text: "Kendini geliştirmek için ne yaparsın?", options: [
            { text: "Kitap okur, araştırır, öğrenirim.", types: [5, 1] },
            { text: "Yeni deneyimlere atılırım.", types: [7, 4] },
            { text: "Hedefler koyar ve çalışırım.", types: [3, 8] },
            { text: "Meditasyon yapar, içime dönerim.", types: [9] }
        ]
    },
    {
        text: "Bu testi neden çözüyorsun?", options: [
            { text: "Kendimi daha iyi anlamak için.", types: [4, 5] },
            { text: "Eğlenceli göründüğü için.", types: [7, 2] },
            { text: "Merak ettiğim ve doğruluğunu test etmek için.", types: [6, 1] },
            { text: "Sonucun başarımına katkısı olacağı için.", types: [3, 8] }
        ]
    }
];


let currentQuestionIndex = 0;
let scores = {}; // { 1: 0, 2: 0 ... }

// Testi Başlat
function startTest() {
    // Skorları sıfırla
    scores = {};
    for (let i = 1; i <= 9; i++) scores[i] = 0;

    currentQuestionIndex = 0;

    // UI Güncelle: Intro'yu gizle, soruyu göster
    document.getElementById('quizStartView').style.display = 'none';
    document.getElementById('quizActiveView').style.display = 'block';

    renderQuestion();
}

// Soruyu Göster
function renderQuestion() {
    const q = quizQuestions[currentQuestionIndex];
    const quizContent = document.getElementById('quizContent');
    const progressFill = document.getElementById('progressFill');

    // Progress bar güncelle
    const progress = ((currentQuestionIndex) / quizQuestions.length) * 100;
    progressFill.style.width = `${progress}%`;

    let html = `
        <div class="question-card">
            <h2 class="question-text">${q.text}</h2>
            <div class="options-grid">
    `;

    q.options.forEach((opt, idx) => {
        html += `<button class="option-btn" onclick="selectOption(${idx})">${opt.text}</button>`;
    });

    html += `</div></div>`;
    quizContent.innerHTML = html;
}

// Seçenek Seçilince
function selectOption(optionIndex) {
    const q = quizQuestions[currentQuestionIndex];
    const selectedOption = q.options[optionIndex];

    // Puanları ekle
    selectedOption.types.forEach(type => {
        scores[type] += 1;
    });

    // Sonraki soruya geç
    currentQuestionIndex++;

    if (currentQuestionIndex < quizQuestions.length) {
        renderQuestion();
    } else {
        showResults();
    }
}

// Sonuçları Göster
function showResults() {
    const progressFill = document.getElementById('progressFill');
    progressFill.style.width = '100%';

    // En yüksek puanı alanı bul
    let maxScore = -1;
    let bestType = 1;

    for (const [type, score] of Object.entries(scores)) {
        if (score > maxScore) {
            maxScore = score;
            bestType = type;
        }
    }

    // Modal açmadan önce hafif bekle
    setTimeout(() => {
        const typeData = enneagramData.find(t => t.id == bestType);
        if (typeData) {
            openDetail(typeData);

            // Kullanıcıyı bilgilendir
            const title = document.querySelector('.detail-tagline');
            if (title) {
                // Varsa eski badge'i temizle
                const oldBadge = document.querySelector('.result-badge');
                if (oldBadge) oldBadge.remove();

                const badge = document.createElement('div');
                badge.className = 'result-badge';
                badge.style.cssText = "background:var(--accent); color:white; padding:5px 10px; display:inline-block; border-radius:8px; margin-bottom:10px; font-size:0.8rem;";
                badge.innerText = "🎉 Senin Enneagram Tipin";
                title.parentNode.insertBefore(badge, title);
            }
        }

        // Testi resetle ve ana sayfaya dön (opsiyonel)
        // switchPage('home'); 
    }, 500);
}

function closeTest() {
    // Opsiyonel: Testi iptal edip intro ekranına dön
    document.getElementById('quizStartView').style.display = 'block';
    document.getElementById('quizActiveView').style.display = 'none';
}

// Başlat
// Başlat
document.addEventListener('DOMContentLoaded', () => {
    renderCards();

    // Uygulama yüklendiğinde Home state'i işle
    window.history.replaceState({ page: 'home' }, '', '#home');

    // --- GERİ TUŞU YÖNETİMİ (GLOBAL) ---
    window.onpopstate = function (event) {
        // 1. Share Modal Açıksa?
        const shareOverlay = document.getElementById('shareOverlay');
        if (shareOverlay.classList.contains('active')) {
            closeShareCard(true); // true = history'den geldi, tekrar back yapma
            return;
        }

        // 2. Detay Açıksa?
        const detailOverlay = document.getElementById('detailOverlay');
        if (detailOverlay.classList.contains('active')) {
            closeDetail(true);
            return;
        }

        // 3. Sayfa Geçişi
        if (event.state && event.state.page) {
            switchPage(event.state.page, true);
        } else {
            // State yoksa varsayılan home
            switchPage('home', true);
        }
    };
});
