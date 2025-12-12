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

// Testi Başlat
function startTest() {
    const nameInput = document.getElementById('userName');
    const name = nameInput.value.trim();

    if (!name) {
        alert("Lütfen başlamadan önce adını girer misin? 😊");
        return;
    }

    userAnswers = [];
    currentQuestionIndex = 0;

    document.getElementById('quizStartView').style.display = 'none';
    document.getElementById('quizActiveView').style.display = 'block';

    renderQuestion();
}

// ... (renderQuestion, selectLikertOption vs. aynı kalıyor, değiştirmeye gerek yok)

// Detay Modalını Aç (ZENGİNLEŞTİRİLMİŞ VERSİYON)
function openDetail(item) {
    const nameInput = document.getElementById('userName');
    const userName = nameInput && nameInput.value ? nameInput.value : "Dostum";

    // İçeriği temizle ve doldur
    const featuresHtml = item.features.map(f => `<span class="feature-tag">${f}</span>`).join('');

    // Güçlü ve Zayıf Yönler Listesi HTML
    const strengthsHtml = item.strengths ? item.strengths.map(s => `<li>✅ ${s}</li>`).join('') : "";
    const weaknessesHtml = item.weaknesses ? item.weaknesses.map(w => `<li>⚠️ ${w}</li>`).join('') : "";

    // Müzik Embed (YouTube)
    const musicEmbed = item.recommendations?.musicId ? `
        <div class="video-container">
            <iframe src="https://www.youtube.com/embed/${item.recommendations.musicId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    ` : "";

    const content = `
        <div class="detail-img-container">
            <img src="${item.image}" class="detail-img" alt="${item.title}">
        </div>

        <div style="text-align:center; margin-bottom: 20px;">
            <span class="greeting-badge">Merhaba, ${userName}! 👋</span>
        </div>

        <h2 class="detail-title" style="color: ${item.color}">${item.title}</h2>
        <p class="detail-tagline">${item.tagline}</p>

        <p class="section-title">Genel Bakış</p>
        <p class="detail-desc">${item.desc}</p>
        
        <p class="section-title">Özellikler</p>
        <div class="features-list">${featuresHtml}</div>

        <!-- YENİ BÖLÜM: Güçlü ve Zayıf Yönler -->
        <div class="sw-grid">
            <div class="sw-card strengths">
                <h3>Güçlü Yönlerin 💪</h3>
                <ul>${strengthsHtml}</ul>
            </div>
            <div class="sw-card weaknesses">
                <h3>Gelişim Alanların  🌱</h3>
                <ul>${weaknessesHtml}</ul>
            </div>
        </div>

        <div class="advice-box" style="border-left-color: ${item.color}; background: ${item.color}20">
            <strong>💡 Gelişim Tavsiyesi:</strong><br>
            ${item.advice}
        </div>

        <!-- YENİ BÖLÜM: Sana Özel Öneriler -->
        ${item.recommendations ? `
        <div class="recommendations-section">
            <h3 class="rec-title">Sana Özel Seçkiler 🎁</h3>
            <p class="rec-desc">${item.recommendations.reason}</p>
            
            <div class="rec-grid">
                <div class="rec-item book">
                    <span class="rec-icon">📚</span>
                    <div>
                        <strong>Kitap Önerisi</strong>
                        <p>${item.recommendations.book}</p>
                    </div>
                </div>
                <div class="rec-item movie">
                    <span class="rec-icon">🎬</span>
                    <div>
                        <strong>Film Önerisi</strong>
                        <p>${item.recommendations.movie}</p>
                    </div>
                </div>
            </div>
            
            <div class="music-section">
                <p><strong>🎵 Ruhunu Besleyecek Müzik</strong></p>
                ${musicEmbed}
            </div>
        </div>
        ` : ''}

        <!-- PAYLAŞ BUTONU -->
        <div class="share-action-area" id="shareActionArea" style="margin-top:30px;">
             <!-- Dinamik olarak buton buraya gelebilir veya aşağıda kalabilir -->
             <button class="share-btn-bottom" onclick='openShareCard(${JSON.stringify(item)})'>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg>
                Sonucumu Paylaş
            </button>
        </div>
    `;

    detailContent.innerHTML = content;

    // Modalı göster
    detailOverlay.classList.add('active');

    // History'ye ekle
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

// --- YENİ TEST MANTIĞI (Likert Ölçeği) ---

// Soru Havuzu (20 Soru)
// target: Hangi tipi ölçüyor?
// weight: Sorunun ağırlığı (Ana sorular daha etkili olabilir)
// reverse: Ters soru mu? (Örn: Tip 8 için "Güçsüzüm" derse puan düşmeli)
const quizQuestions = [
    // Tip 1: Mükemmeliyetçi
    { text: "Yaptığım işlerde en ufak bir hata bile beni çok rahatsız eder.", target: 1 },
    { text: "Kurallara uymayan insanlara karşı içten içe öfke duyarım.", target: 1 },

    // Tip 2: Yardımsever
    { text: "Başkalarının ihtiyaçlarını kendi ihtiyaçlarımın önüne koyarım.", target: 2 },
    { text: "Sevilmediğimi veya istenmediğimi hissetmek beni derinden yaralar.", target: 2 },

    // Tip 3: Başarı Odaklı
    { text: "Başarılı olmak ve takdir edilmek benim için hayati önem taşır.", target: 3 },
    { text: "Duygularımı bir kenara bırakıp hedefe odaklanmakta zorlanmam.", target: 3 },

    // Tip 4: Bireyci
    { text: "Kendimi sıklıkla diğer insanlardan farklı ve anlaşılmaz hissederim.", target: 4 },
    { text: "Melankolik müzikler veya hüzünlü anlar bana garip bir huzur verir.", target: 4 },

    // Tip 5: Araştırmacı
    { text: "Duygusal tepkiler vermek yerine olayları mantık çerçevesinde incelerim.", target: 5 },
    { text: "İnsanlarla çok fazla vakit geçirmek enerjimi tüketir, yalnızlığa ihtiyaç duyarım.", target: 5 },

    // Tip 6: Sadık
    { text: "Herhangi bir karar vermeden önce olası tüm tehlikeleri ve riskleri hesaplarım.", target: 6 },
    { text: "Otoriteye veya güvendiğim bir sisteme sadık kalmak bana güven verir.", target: 6 },

    // Tip 7: Maceracı
    { text: "Olumsuz duygulardan kaçınmak için kendimi sürekli meşgul eder veya eğlendiririm.", target: 7 },
    { text: "Seçeneklerimin kısıtlanması veya bir şeye mecbur bırakılmak beni boğar.", target: 7 },

    // Tip 8: Meydan Okuyan
    { text: "Kontrolün bende olmasını severim, başkalarının beni yönetmesine izin vermem.", target: 8 },
    { text: "Çatışmadan korkmam, gerekirse hakkımı savunmak için sesimi yükseltirim.", target: 8 },

    // Tip 9: Barışçı
    { text: "Çatışma ortamlarında gerilirim ve ortamı yumuşatmaya çalışırım.", target: 9 },
    { text: "Başkalarına 'hayır' demekte zorlanırım, uyumlu olmayı tercih ederim.", target: 9 },

    // Tutarlılık Kontrol Soruları (Algoritma bunları diğerleriyle kıyaslayacak)
    // Soru 19 (Tip 1 kontrolü - Ters mantık):
    { text: "İşler planladığım gibi gitmediğinde gayet rahatımdır ve akışına bırakırım.", target: 1, reverse: true },
    // Soru 20 (Tip 8 kontrolü - Doğrulama):
    { text: "Güçlü görünmek benim için önemlidir.", target: 8 }
];

const likertOptions = [
    { text: "Kesinlikle Katılmıyorum", value: -2, icon: "🔴" },
    { text: "Katılmıyorum", value: -1, icon: "⭕" },
    { text: "Kararsızım", value: 0, icon: "⚪" },
    { text: "Katılıyorum", value: 1, icon: "🟢" },
    { text: "Kesinlikle Katılıyorum", value: 2, icon: "✅" }
];

let currentQuestionIndex = 0;
let userAnswers = []; // { target: 1, score: 2 } gibi kayıtlar

// Testi Başlat
function startTest() {
    userAnswers = [];
    currentQuestionIndex = 0;

    document.getElementById('quizStartView').style.display = 'none';
    document.getElementById('quizActiveView').style.display = 'block';

    renderQuestion();
}

// Soruyu Göster
function renderQuestion() {
    const q = quizQuestions[currentQuestionIndex];
    const quizContent = document.getElementById('quizContent');
    const progressFill = document.getElementById('progressFill');

    // Progress bar
    const progress = ((currentQuestionIndex) / quizQuestions.length) * 100;
    progressFill.style.width = `${progress}%`;

    let html = `
        <div class="question-card fade-in">
            <div class="question-number">Soru ${currentQuestionIndex + 1} / ${quizQuestions.length}</div>
            <h2 class="question-text likert-text">"${q.text}"</h2>
            <div class="likert-container">
    `;

    likertOptions.forEach((opt, idx) => {
        html += `
            <button class="likert-btn" onclick="selectLikertOption(${opt.value})">
                <span class="l-icon">${opt.icon}</span>
                <span class="l-text">${opt.text}</span>
            </button>
        `;
    });

    html += `</div></div>`;
    quizContent.innerHTML = html;
}

// Seçenek Seçilince
function selectLikertOption(value) {
    const q = quizQuestions[currentQuestionIndex];

    // Cevabı kaydet
    // Eğer ters soruysa puanı tersine çevir (2 -> -2, -1 -> 1)
    let finalScore = value;
    if (q.reverse) finalScore = -value;

    userAnswers.push({
        target: q.target,
        score: finalScore,
        rawScore: value, // Tutarlılık kontrolü için ham puan
        questionIndex: currentQuestionIndex
    });

    currentQuestionIndex++;

    if (currentQuestionIndex < quizQuestions.length) {
        // Hafif bir gecikme ile geçiş yap (UX)
        setTimeout(renderQuestion, 200);
    } else {
        calculateAndShowResults();
    }
}

// Sonuçları Hesapla
function calculateAndShowResults() {
    const progressFill = document.getElementById('progressFill');
    progressFill.style.width = '100%';

    // 1. Puanları Hesapla
    let typeScores = {};
    for (let i = 1; i <= 9; i++) typeScores[i] = 0;

    userAnswers.forEach(ans => {
        // Negatif puanları düşme, sadece topla. 
        // Ama Enneagram'da yüksek puan o tipi gösterir.
        // -2 verdiyse o tipten uzaklaşır.
        typeScores[ans.target] += ans.score;
    });

    // 2. En Yüksek Puanı Bul
    let maxScore = -100;
    let bestType = 1;

    // Puanları normalize et (Negatifleri sıfıra çekebiliriz veya olduğu gibi bırakabiliriz)
    // Sıralama yap
    const sortedTypes = Object.entries(typeScores).sort((a, b) => b[1] - a[1]);
    bestType = sortedTypes[0][0];

    // 3. Tutarlılık Analizi (Consistency Check)
    let consistencyScore = 100;

    // Soru 0 (Tip 1) vs Soru 18 (Tip 1 Reverse)
    // Soru 0'a "Katılıyorum" (2), Soru 18'e "Katılıyorum" (2) dediyse -> Çelişki!
    // Soru 0: Hata rahatsız eder. Soru 18: Rahatımdır.
    // İkisine de katılıyorsa tutarlılık düşmeli.
    const q1Ans = userAnswers.find(a => a.questionIndex === 0).rawScore;
    const q19Ans = userAnswers.find(a => a.questionIndex === 18).rawScore;

    // Aynı yönde cevap verdiyse (ikisi de pozitif veya ikisi de negatif) çelişki vardır çünkü biri ters soru.
    if ((q1Ans > 0 && q19Ans > 0) || (q1Ans < 0 && q19Ans < 0)) {
        consistencyScore -= 15;
    }

    // Soru 14 (Tip 8) vs Soru 19 (Tip 8) -> İkisi de düz soru.
    // İkisine de zıt cevap verdiyse tutarlılık düşer.
    const q14Ans = userAnswers.find(a => a.questionIndex === 14).rawScore; // 8. sorunun ilki
    const q20Ans = userAnswers.find(a => a.questionIndex === 19).rawScore; // 8. sorunun ikincisi

    if (Math.abs(q14Ans - q20Ans) > 2) { // Biri 2, biri -2 ise fark 4 -> Büyük çelişki
        consistencyScore -= 15;
    }

    // Genel Varyans Kontrolü: Hep "Kararsızım" (0) seçildiyse?
    const zeroCount = userAnswers.filter(a => a.rawScore === 0).length;
    if (zeroCount > 10) consistencyScore -= 20; // 10'dan fazla kararsız

    // Sonucu Göster
    setTimeout(() => {
        const typeData = enneagramData.find(t => t.id == bestType);
        if (typeData) {
            openDetail(typeData);

            // Tutarlılık Mesajını Ekle
            // Bunu detay modalının içine dinamik ekleyelim veya badge olarak
            const title = document.querySelector('.detail-tagline');
            if (title) {
                // Temizlik
                document.querySelectorAll('.result-meta').forEach(e => e.remove());

                const metaDiv = document.createElement('div');
                metaDiv.className = 'result-meta';
                metaDiv.style.marginBottom = '15px';

                let consistencyColor = '#4ade80'; // Yeşil
                if (consistencyScore < 70) consistencyColor = '#facc15'; // Sarı
                if (consistencyScore < 50) consistencyColor = '#f87171'; // Kırmızı

                metaDiv.innerHTML = `
                    <span class="result-badge">🎉 Senin Enneagram Tipin</span>
                    <div style="margin-top:5px; font-size:0.8rem; color:${consistencyColor}; font-weight:bold;">
                        ✅ Test Tutarlılık Oranı: %${consistencyScore}
                    </div>
                `;
                title.parentNode.insertBefore(metaDiv, title);
            }
        }
    }, 500);
}

function closeTest() {
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
