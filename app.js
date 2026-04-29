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

    // Hata temizle
    nameInput.classList.remove('error');

    if (!name) {
        // Görsel uyarı ver (Shake efekti)
        nameInput.classList.add('error');
        nameInput.placeholder = "Lütfen adını girer misin? 😊";

        // Animasyon bitince class'ı sil (tekrar oynayabilmesi için)
        setTimeout(() => nameInput.classList.remove('error'), 500);
        return;
    }

    userAnswers = [];
    currentQuestionIndex = 0;

    document.getElementById('quizStartView').style.display = 'none';
    document.getElementById('quizActiveView').style.display = 'block';

    renderQuestion();
}

// ... (renderQuestion, selectLikertOption vs. aynı kalıyor, değiştirmeye gerek yok)

// Yardımcı Fonksiyon: Rastgele Öğe Seç
function getRandomItem(arr) {
    if (!arr || arr.length === 0) return null;
    return arr[Math.floor(Math.random() * arr.length)];
}

// Detay Modalını Aç (ZENGİNLEŞTİRİLMİŞ & DİNAMİK VERSİYON)
function openDetail(item) {
    const nameInput = document.getElementById('userName');
    const userName = nameInput && nameInput.value ? nameInput.value : "Dostum";

    // --- DİNAMİK ÖNERİ SEÇİMİ ---
    // Eğer recommendationsPool tanımlıysa (recommendations.js yüklendiyse)
    if (typeof recommendationsPool !== 'undefined' && recommendationsPool[item.id]) {
        const pool = recommendationsPool[item.id];

        // Havuzdan rastgele seç
        const randomBook = getRandomItem(pool.books);
        const randomMovie = getRandomItem(pool.movies);
        const randomMusic = getRandomItem(pool.music);

        // Mevcut önerileri güncelle (Geçici olarak)
        // Not: Orijinal veriyi bozmamak için kopyasını oluşturmuyoruz,
        // UI'da gösterilecek nesneyi güncelliyoruz.
        if (!item.recommendations) item.recommendations = {};

        if (randomBook) item.recommendations.book = randomBook;
        if (randomMovie) item.recommendations.movie = randomMovie;

        if (randomMusic) {
            item.recommendations.musicId = randomMusic.id;
            // Müzik başlığını da göstermek istersek extra bir field ekleyebiliriz ama
            // şimdilik sadece ID değişiyor.
        }

        // Öneri nedeni metnini de biraz daha jenerik/tümüne uyan hale getirelim
        item.recommendations.reason = `${item.title} karakterine sahip biri olarak, bu sanat eserlerinde kendinden bir parça bulacaksın. Senin derin dünyan için özenle seçildiler.`;
    }
    // ----------------------------

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

    if (pageName === 'test') { if (buttons[0]) buttons[0].classList.add('active'); }
    else if (pageName === 'home') { if (buttons[1]) buttons[1].classList.add('active'); }
    else if (pageName === 'theory') { if (buttons[2]) buttons[2].classList.add('active'); }
    else if (pageName === 'game') { if (buttons[3]) buttons[3].classList.add('active'); }
    else if (pageName === 'about') { if (buttons[4]) buttons[4].classList.add('active'); }

    // 2. Update Views
    document.querySelectorAll('.page-view').forEach(view => {
        view.classList.remove('active');
    });

    const pageMap = {
        'test': 'test-page',
        'home': 'home-page',
        'theory': 'theory-page',
        'game': 'game-page',
        'about': 'about-page'
    };

    const targetId = pageMap[pageName];
    if (targetId) {
        const targetEl = document.getElementById(targetId);
        if (targetEl) targetEl.classList.add('active');
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

// --- YENİ TEST MANTIĞI (Likert Ölçeği - 81 Soru) ---

/*
  SORU DAĞILIMI (Her Tip İçin 9 Soru):
  Tip 1: Mükemmeliyetçilik, Düzen, Öfke, Eleştiri
  Tip 2: Yardımseverlik, İlgi İsteği, Hayır Diyememe
  Tip 3: Başarı, İmaj, İşkoliklik, Rekabet
  Tip 4: Özgünlük, Melankoli, Anlaşılmama, Kıskançlık
  Tip 5: Bilgi, İzolasyon, Gözlem, Enerji Tasarrufu
  Tip 6: Güvenlik, Şüphe, Sadakat, Otorite
  Tip 7: Macera, Acıdan Kaçış, Odaklanma, Planlar
  Tip 8: Güç, Kontrol, Adalet, Zayıflık
  Tip 9: Uyum, Çatışmadan Kaçış, Erteleme, İnatlaşma
*/

const quizQuestions = [
    // --- TİP 1 ---
    { text: "Yaptığım her işin eksiksiz ve mükemmel olması benim için hayati önem taşır.", target: 1 },
    { text: "Başkalarının hatalarını fark ettiğimde içten içe gerilirim ve düzeltmek isterim.", target: 1 },
    { text: "Kuralların esnetilmesinden hoşlanmam, herkes sorumluluğunu bilmeli.", target: 1 },
    { text: "Kendimi sık sık eleştiririm ve daha iyisini yapabileceğimi düşünürüm.", target: 1 },
    { text: "Zamanımı boşa harcamaktan nefret ederim, verimli olmalıyım.", target: 1 },
    { text: "Dağınık ve plansız ortamlar beni huzursuz eder.", target: 1 },
    { text: "Duygularımı kontrol altında tutmaya çalışırım, mantıklı olanı yaparım.", target: 1 },
    { text: "Adaletsizlik gördüğümde sessiz kalamam, doğru olan neyse o yapılmalı.", target: 1 },
    { text: "Dinlenirken bile aklım yapılması gereken işlerdedir.", target: 1 },

    // --- TİP 2 ---
    { text: "Başkalarının ihtiyaçlarını hissetmekte ve karşılamakta çok iyiyimdir.", target: 2 },
    { text: "Sevdiklerim tarafından takdir edilmemek veya fark edilmemek beni üzer.", target: 2 },
    { text: "İnsanlara 'hayır' demekte zorlanırım, onları kırmak istemem.", target: 2 },
    { text: "İlişkilerim benim için her şeyden önemlidir.", target: 2 },
    { text: "Bazen başkalarına o kadar odaklanırım ki kendi ihtiyaçlarımı unuturum.", target: 2 },
    { text: "Sevildiğimi hissetmek için fedakarlık yapmaktan çekinmem.", target: 2 },
    { text: "İnsanlar bana sorunlarını anlattığında kendimi değerli hissederim.", target: 2 },
    { text: "İlgi görmediğim ortamlarda enerjim düşer.", target: 2 },
    { text: "Yardım teklifimin reddedilmesi beni kişisel olarak yaralar.", target: 2 },

    // --- TİP 3 ---
    { text: "Başarılı olmak ve hedeflerime ulaşmak hayatımın merkezindedir.", target: 3 },
    { text: "Başkalarının beni nasıl gördüğü (imajım) benim için önemlidir.", target: 3 },
    { text: "Rekabetçi bir yapım vardır, kaybetmekten hoşlanmam.", target: 3 },
    { text: "Duygularımın işimi veya hedeflerimi yavaşlatmasına izin vermem.", target: 3 },
    { text: "Sürekli meşgul olmayı severim, durmak bana göre değil.", target: 3 },
    { text: "İnsanları etkilemek ve iyi bir izlenim bırakmak konusunda yetenekliyimdir.", target: 3 },
    { text: "Başarısızlık benim için bir seçenek değildir, beni çok korkutur.", target: 3 },
    { text: "Verimsiz insanlarla çalışmak beni sabırsızlandırır.", target: 3 },
    { text: "Takdir edilmek ve onaylanmak beni motive eder.", target: 3 },

    // --- TİP 4 ---
    { text: "Kendimi sık sık diğer insanlardan farklı ve anlaşılmaz hissederim.", target: 4 },
    { text: "Sıradan bir hayat yaşamak benim için kabus gibidir.", target: 4 },
    { text: "Hüzünlü veya melankolik ruh halleri bana tanıdık ve bazen de tatlı gelir.", target: 4 },
    { text: "Estetik ve güzellik benim için vazgeçilmezdir.", target: 4 },
    { text: "Duygularımı çok yoğun ve derin yaşarım.", target: 4 },
    { text: "Bazen eksik bir parçam varmış gibi hissederim.", target: 4 },
    { text: "İnsanların yapmacık tavırları beni çok rahatsız eder.", target: 4 },
    { text: "Geçmişe ve nostaljiye karşı bir özlem duyarım.", target: 4 },
    { text: "Kendimi ifade etmenin özgün yollarını ararım (sanat, tarz vb.).", target: 4 },

    // --- TİP 5 ---
    { text: "Duygusal tepkiler vermek yerine olayları mantıkla analiz ederim.", target: 5 },
    { text: "Kendi kendime kalmaya ve şarj olmaya çok ihtiyaç duyarım.", target: 5 },
    { text: "İnsanların benden çok fazla şey beklemesi beni boğar.", target: 5 },
    { text: "Bir konuyu derinlemesine öğrenmek ve uzmanlaşmak isterim.", target: 5 },
    { text: "Çatışma anında geri çekilip gözlem yapmayı tercih ederim.", target: 5 },
    { text: "Mahremiyetim ve özel alanım benim için kutsaldır.", target: 5 },
    { text: "Harekete geçmeden önce elimde yeterince bilgi olduğundan emin olmalıyım.", target: 5 },
    { text: "Duygularımı dışarı yansıtmakta zorlanırım.", target: 5 },
    { text: "Bağımsız olmak ve kimseye muhtaç olmamak temel hedefimdir.", target: 5 },

    // --- TİP 6 ---
    { text: "Herhangi bir karar vermeden önce olası tüm riskleri ve tehlikeleri düşünürüm.", target: 6 },
    { text: "Güvendiğim bir otoriteye veya sisteme sadık kalmak bana huzur verir.", target: 6 },
    { text: "Zihnimde sürekli 'Ya şöyle olursa?' senaryoları döner.", target: 6 },
    { text: "İnsanlara güvenmekte zorlanırım, niyetlerini sorgularım.", target: 6 },
    { text: "Kendi kararlarımdan sık sık şüphe duyarım ve onay ararım.", target: 6 },
    { text: "Tehlike anında grubumu ve sevdiklerimi korumak için her şeyi yaparım.", target: 6 },
    { text: "Belirsizlik beni aşırı derecede kaygılandırır.", target: 6 },
    { text: "Kurallara uymak güvenli hissettirir, ancak otorite adil değilse isyan edebilirim.", target: 6 },
    { text: "Sorumluluk sahibiyimdir ve verdiğim sözleri tutarım.", target: 6 },

    // --- TİP 7 ---
    { text: "Hayatın tadını çıkarmak ve acıdan kaçınmak önceliğimdir.", target: 7 },
    { text: "Seçeneklerimin kısıtlanması veya bir yere bağlanmak beni boğar.", target: 7 },
    { text: "Zihnim sürekli yeni projeler ve heyecan verici fikirlerle doludur.", target: 7 },
    { text: "Olumsuz duygularla yüzleşmek yerine dikkatimi başka yere veririm.", target: 7 },
    { text: "Bir işe başlamak kolaydır ama sonunu getirmekte zorlanabilirim.", target: 7 },
    { text: "İyimserimdir, her şeyin sonunda iyi olacağına inanırım.", target: 7 },
    { text: "Aynı anda birden fazla işle ilgilenmeyi severim.", target: 7 },
    { text: "Sıkılmaktan çok korkarım, sürekli aktivite ararım.", target: 7 },
    { text: "İnsanları eğlendirmeyi ve ortamın enerjisini yükseltmeyi severim.", target: 7 },

    // --- TİP 8 ---
    { text: "Kontrolün bende olmasını severim, başkalarının beni yönetmesine izin vermem.", target: 8 },
    { text: "Çatışmadan korkmam, gerekirse hakkımı savunmak için sesimi yükseltirim.", target: 8 },
    { text: "Zayıf görünmekten nefret ederim, her zaman güçlü durmalıyım.", target: 8 },
    { text: "Sevdiklerimi koruma içgüdüm çok yüksektir.", target: 8 },
    { text: "Dolaylı yollardan konuşan insanlardan hoşlanmam, netlik isterim.", target: 8 },
    { text: "Bazen farkında olmadan insanları korkutabilir veya baskı kurabilirim.", target: 8 },
    { text: "Kendi kurallarımı koymayı ve kendi yolumdan gitmeyi severim.", target: 8 },
    { text: "Adaletsizliğe tahammülüm yoktur, hemen müdahale ederim.", target: 8 },
    { text: "İntikam alma isteği duyabilirim eğer bana haksızlık yapılırsa.", target: 8 },

    // --- TİP 9 ---
    { text: "Çatışma ortamlarında gerilirim ve ortamı yumuşatmaya çalışırım.", target: 9 },
    { text: "Başkalarına uyum sağlamak adına kendi isteklerimi geri plana atarım.", target: 9 },
    { text: "Hayırlı bir iş için bile olsa harekete geçmekte zorlanabilirim (Atalet).", target: 9 },
    { text: "İç huzurumu bozacak her şeyden uzak durmaya çalışırım.", target: 9 },
    { text: "Karar vermekte zorlanırım, çünkü her seçeneğin iyi yanını görürüm.", target: 9 },
    { text: "Baskı altında inatçılaşabilirim ve pasif bir direnç gösteririm.", target: 9 },
    { text: "'Fark etmez', 'Sen bilirsin' kalıplarını sık kullanırım.", target: 9 },
    { text: "Öfkelendiğimi nadiren belli ederim, genelde içime atarım.", target: 9 },
    { text: "Doğayla veya hobilerimle vakit geçirerek rahatlarım.", target: 9 }
];

// Soruları Karıştır (Shuffle)
// Fisher-Yates Shuffle Algorithm
for (let i = quizQuestions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [quizQuestions[i], quizQuestions[j]] = [quizQuestions[j], quizQuestions[i]];
}

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
        calculateResultsAdvanced();
    }
}



function closeTest() {
    document.getElementById('quizStartView').style.display = 'block';
    document.getElementById('quizActiveView').style.display = 'none';
}

// Başlat
// Başlat
document.addEventListener('DOMContentLoaded', () => {
    renderCards();
    renderWingTheory(); // Wing Teorisini Yükle
    renderTritypeTheory(); // Tritype Teorisini Yükle

    // URL'deki hash'e göre başlangıç sayfasını belirle
    const currentHash = window.location.hash.replace('#', '');
    const validPages = ['test', 'home', 'theory', 'game', 'about'];
    const startPage = validPages.includes(currentHash) ? currentHash : 'home';

    // Uygulama yüklendiğinde doğru state'i işle
    window.history.replaceState({ page: startPage }, '', '#' + startPage);
    switchPage(startPage, true);

    // --- GERİ TUŞU YÖNETİMİ (GLOBAL) ---
    window.onpopstate = function (event) {
        // 1. Share Modal Açıksa?
        const shareOverlay = document.getElementById('shareOverlay');
        if (shareOverlay && shareOverlay.classList.contains('active')) {
            closeShareCard(true);
            return;
        }

        // 2. Detay Açıksa?
        const detailOverlay = document.getElementById('detailOverlay');
        if (detailOverlay && detailOverlay.classList.contains('active')) {
            closeDetail(true);
            return;
        }

        // 3. Sayfa Geçişi
        if (event.state && event.state.page) {
            switchPage(event.state.page, true);
        } else {
            // Hash'e göre fallback yap
            const hash = window.location.hash.replace('#', '');
            switchPage(validPages.includes(hash) ? hash : 'home', true);
        }
    };
});

// --- YENİ VE GÜNCEL HESAPLAMA (V3) ---
function calculateResultsAdvanced() {
    const progressFill = document.getElementById('progressFill');
    progressFill.style.width = '100%';

    // 1. Puanları Hesapla
    let typeScores = {};
    for (let i = 1; i <= 9; i++) typeScores[i] = 0;

    userAnswers.forEach(ans => {
        typeScores[ans.target] += ans.score;
    });

    // 2. En Yüksek Puanı Bul (Number'a çevirerek type güvenliği sağla)
    let bestType = 1;
    const sortedTypes = Object.entries(typeScores).sort((a, b) => b[1] - a[1]);
    bestType = Number(sortedTypes[0][0]);

    // 3. TUTARLILIK ANALİZİ (Tip İçi Çelişki)
    let totalInconsistency = 0;

    for (let i = 1; i <= 9; i++) {
        const answers = userAnswers.filter(a => a.target === i).map(a => a.rawScore);
        if (answers.length === 0) continue;

        const posCount = answers.filter(x => x > 0).length;
        const negCount = answers.filter(x => x < 0).length;

        // Çelişki cezası: *4 yerine *2 (daha esnek)
        if (posCount > 0 && negCount > 0) {
            const minSide = Math.min(posCount, negCount);
            totalInconsistency += (minSide * 2);
        }

        if (answers.includes(2) && answers.includes(-2)) {
            totalInconsistency += 3; // Uç çelişki cezası 5'ten 3'e
        }
    }

    // 4. TIPLER ARASI ÇELİŞKİ ANALİZİ
    // NOT: Komşu tipler (8-9, 1-9, 1-2 vb.) kanat olabileceğinden çelişki listesine alınmaz.
    const conflicts = [
        { t1: 1, t2: 7 }, { t1: 2, t2: 5 }, { t1: 6, t2: 7 }
    ];

    // Her tip için maks puan = 9 soru × 2 = 18. Bu yüzden bölücü /18 olmalı.
    conflicts.forEach(pair => {
        const score1 = typeScores[pair.t1] / 18;
        const score2 = typeScores[pair.t2] / 18;
        if (score1 > 0.7 && score2 > 0.7) { // Eşik 0.6'dan 0.7'ye (daha zor tetiklenir)
            totalInconsistency += 10; // Ceza 15'ten 10'a
        }
    });

    // Puan
    let consistencyScore = Math.max(0, 100 - totalInconsistency);

    // MONOTONLUK KONTROLÜ (Daha gerçekçi limitler)
    let counts = { '-2': 0, '-1': 0, '0': 0, '1': 0, '2': 0 };
    userAnswers.forEach(u => { counts[u.rawScore] = (counts[u.rawScore] || 0) + 1; });

    let maxRepeat = 0;
    for (let key in counts) { if (counts[key] > maxRepeat) maxRepeat = counts[key]; }

    const repeatRatio = maxRepeat / userAnswers.length;

    // Limitler esnetildi: %60 artık cezalandırılmıyor.
    if (repeatRatio > 0.95) consistencyScore = 5;
    else if (repeatRatio > 0.85) consistencyScore = Math.min(consistencyScore, 40);
    else if (repeatRatio > 0.75) consistencyScore = Math.min(consistencyScore, 60);

    // --- KANAT VE TRITYPE HESAPLAMA ---
    const wingData = calculateWing(bestType, typeScores);
    const tritypeData = calculateTritype(typeScores);

    console.log("Wing:", wingData);
    console.log("Tritype:", tritypeData);

    // --- ANALITIK KAYIT / BACKGROUND DATA ---
    if (typeof saveTestAnalytics === 'function') {
        saveTestAnalytics(bestType, consistencyScore, typeScores, wingData, tritypeData);
    }

    // Sonucu Göster (Güvenlik Kontrollü)
    setTimeout(() => {
        // GÜVENLİK KONTROLÜ: Eğer tutarlılık çok düşükse (%40 altı) sonucu gösterme!
        if (consistencyScore < 40) {
            showConsistencyWarning(consistencyScore);
            return;
        }

        const typeData = enneagramData.find(t => t.id == bestType);
        if (typeData) {
            openDetail(typeData);

            const title = document.querySelector('.detail-tagline');
            if (title) {
                document.querySelectorAll('.result-meta').forEach(e => e.remove());
                const metaDiv = document.createElement('div');
                metaDiv.className = 'result-meta';
                metaDiv.style.marginBottom = '15px';

                let color = '#4ade80';
                let text = "Güvenilir Sonuç ✅";

                if (consistencyScore < 70) { color = '#facc15'; text = "Orta Güvenilirlik ⚠️"; }

                metaDiv.innerHTML = `
                    <span class="result-badge">🎉 Senin Enneagram Tipin</span>
                    <div style="margin-top:10px; padding:10px; background:rgba(0,0,0,0.2); border-radius:10px;">
                        <div style="font-size:0.8rem; opacity:0.8;">Test Tutarlılığı</div>
                        <div style="font-size:1.1rem; color:${color}; font-weight:bold;">
                            %${consistencyScore} - ${text}
                        </div>
                    </div>
                `;
                title.parentNode.insertBefore(metaDiv, title);

                // --- KANAT VE TRITYPE GÖSTERİMİ ---
                document.querySelectorAll('.advanced-analysis').forEach(e => e.remove());

                const analysisDiv = document.createElement('div');
                analysisDiv.className = 'advanced-analysis';
                analysisDiv.style.marginTop = '20px';
                analysisDiv.style.marginBottom = '20px';
                analysisDiv.style.background = 'rgba(255,255,255,0.05)';
                analysisDiv.style.padding = '15px';
                analysisDiv.style.borderRadius = '12px';
                analysisDiv.style.border = '1px solid rgba(255,255,255,0.1)';

                analysisDiv.innerHTML = `
                    <h3 style="color:#fff; margin-bottom:15px; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:10px;">🧬 Detaylı Kişilik Analizi</h3>
                    
                    <!-- KANAT -->
                    <div style="margin-bottom:15px;">
                        <div style="font-size:0.9rem; color:#A8DADC;">🪽 Kanat (Wing)</div>
                        <div style="font-size:1.4rem; font-weight:bold; color:#fff;">
                            ${wingData.code}
                        </div>
                        <div style="font-size:0.9rem; color:#cbd5e1; margin-top:5px;">${wingData.desc}</div>
                    </div>

                    <!-- TRITYPE -->
                    <div>
                        <div style="font-size:0.9rem; color:#A8DADC;">🧠 Üçlü Arketipler (Tritype)</div>
                        <div style="font-size:1.2rem; font-weight:bold; color:#fff; margin-top:5px;">
                            ${tritypeData.code}
                        </div>
                        <div style="display:flex; gap:10px; margin-top:10px; flex-wrap:wrap;">
                            <span class="feature-tag" style="background:#264653">🧠 ${tritypeData.head}</span>
                            <span class="feature-tag" style="background:#E76F51">❤️ ${tritypeData.heart}</span>
                            <span class="feature-tag" style="background:#2A9D8F">💪 ${tritypeData.gut}</span>
                        </div>
                    </div>
                `;

                title.parentNode.insertBefore(analysisDiv, title.nextSibling);
            }
        }
    }, 500);
}

// Tutarlılık Hatası Ekranı
function showConsistencyWarning(score) {
    const detailContent = document.getElementById('detailContent');
    const detailOverlay = document.getElementById('detailOverlay');

    const content = `
        <div style="text-align: center; padding: 20px;">
            <div style="font-size: 4rem; margin-bottom: 20px;">🤔</div>
            <h2 style="color: #f87171; margin-bottom: 15px;">Sonucun Hesaplanamadı</h2>
            <p style="font-size: 1.1rem; line-height: 1.6; color: #cbd5e1; margin-bottom: 20px;">
                Cevapların arasında çok fazla çelişki tespit ettik (Tutarlılık: %${score}). 
                Seni yanlış bir kalıba sokmak veya hatalı bir analiz sunmak istemiyoruz.
            </p>
            
            <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 10px; text-align: left; margin-bottom: 25px;">
                <strong>Olası Sebepler:</strong>
                <ul style="margin-top: 10px; padding-left: 20px; color: #94a3b8;">
                    <li>Soruları çok hızlı geçmiş olabilirsin.</li>
                    <li>Kararsız kalıp rastgele seçenekleri işaretlemiş olabilirsin.</li>
                    <li>Birbirine zıt (örneğin hem çok düzenli hem çok dağınık) cevaplar vermiş olabilirsin.</li>
                </ul>
            </div>

            <button class="btn-primary" onclick="restartTest()" style="width: 100%;">
                🔄 Testi Yeniden Başlat
            </button>
        </div>
    `;

    detailContent.innerHTML = content;
    detailOverlay.classList.add('active');
}

function restartTest() {
    closeDetail();
    setTimeout(() => {
        // Testi sıfırla
        currentQuestionIndex = 0;
        userAnswers = [];

        // Giriş ekranına dön
        document.getElementById('quizStartView').style.display = 'block';
        document.getElementById('quizActiveView').style.display = 'none';
    }, 300);
}

// (calculateResultsAdvancedOLD kaldırıldı - Aktif V3 fonksiyonu yukarıda)

// --- HELPER: KANAT HESAPLAMA ---
function calculateWing(mainType, scores) {
    mainType = parseInt(mainType);
    let n = mainType;

    // Komşuları Bul (Enneagram Dairesi)
    let right = (n === 9) ? 1 : n + 1;
    let left = (n === 1) ? 9 : n - 1;

    let rightScore = scores[right];
    let leftScore = scores[left];

    let wing = (rightScore > leftScore) ? right : left;

    return {
        dominant: n,
        wing: wing,
        code: `${n}w${wing}`,
        desc: `Temel tipin ${n}, ancak ${wing} tipinden de güçlü özellikler taşıyorsun.`
    };
}

// --- HELPER: TRITYPE HESAPLAMA ---
function calculateTritype(scores) {
    // Merkezler
    const centers = {
        gut: [8, 9, 1],
        heart: [2, 3, 4],
        head: [5, 6, 7]
    };

    // Her merkezden şampiyonu seç
    function getBestInCenter(centerIds) {
        let best = centerIds[0];
        centerIds.forEach(id => {
            if (scores[id] > scores[best]) best = id;
        });
        return best;
    }

    const bestGut = getBestInCenter(centers.gut);
    const bestHeart = getBestInCenter(centers.heart);
    const bestHead = getBestInCenter(centers.head);

    // Bu üçünü genel puana göre sırala
    const finalists = [
        { id: bestGut, score: scores[bestGut] },
        { id: bestHeart, score: scores[bestHeart] },
        { id: bestHead, score: scores[bestHead] }
    ];

    finalists.sort((a, b) => b.score - a.score);

    const code = finalists.map(f => f.id).join('-');

    return {
        code: code,
        gut: "Beden: Tip " + bestGut,
        heart: "Kalp: Tip " + bestHeart,
        head: "Zihin: Tip " + bestHead
    };
}

// --- THEORY SAYFASI FONKSİYONLARI ---

// Tab Değiştirme
function switchTheoryTab(tabName) {
    // Butonları güncelle
    const buttons = document.querySelectorAll('.theory-tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // İçerikleri güncelle
    const contents = document.querySelectorAll('.theory-content');
    contents.forEach(content => content.style.display = 'none');

    if (tabName === 'wing') {
        buttons[0].classList.add('active');
        document.getElementById('wing-theory-content').style.display = 'block';
    } else {
        buttons[1].classList.add('active');
        document.getElementById('tritype-theory-content').style.display = 'block';
    }
}

// Wing Teorisini Render Et
function renderWingTheory() {
    const container = document.getElementById('wing-theory-content');
    if (!container) return;

    // Temizle (tekrar render edilirse duplicate olmasın)
    container.innerHTML = '';

    // data.js'den wingsData'yı alıp döngüye sokacağız
    // wingsData'nın varlığını kontrol et
    if (typeof wingsData === 'undefined') {
        container.innerHTML = '<p>Veri yüklenemedi.</p>';
        return;
    }

    // 1'den 9'a kadar
    for (let i = 1; i <= 9; i++) {
        const typeWings = wingsData[i];
        if (!typeWings) continue;

        const mainType = enneagramData.find(d => d.id === i);

        // Ana Container
        const section = document.createElement('div');
        section.className = 'wing-card-container';

        // Başlık (Tip Adı)
        let html = `
            <div class="wing-header">
                <span class="wing-badge" style="color: ${mainType ? mainType.color : '#fff'}">Tip ${i}</span>
                <h3 style="margin:0; font-size:1.3rem; color:#fff;">${mainType ? mainType.title.split(':')[1] : ('Tip ' + i)}</h3>
            </div>
            <div class="wing-sub-grid">
        `;

        // Kanatları Ekle
        Object.keys(typeWings).forEach(wingKey => {
            const wing = typeWings[wingKey];
            const traitList = wing.traits.map(t => `<li>${t}</li>`).join('');

            html += `
                <div class="wing-detail-card">
                    <div class="wing-detail-title">${wing.title}</div>
                    <p style="font-size: 0.9rem; color: #cbd5e1; line-height: 1.4;">${wing.desc}</p>
                    <ul class="wing-trait-list">
                        ${traitList}
                    </ul>
                </div>
            `;
        });

        html += `</div>`; // Grid Kapat
        section.innerHTML = html;
        container.appendChild(section);
    }
}

// Tritype Teorisini Render Et
function renderTritypeTheory() {
    const container = document.getElementById('tritype-grid');
    if (!container) return;

    container.innerHTML = '';

    if (typeof tritypeData === 'undefined') {
        container.innerHTML = '<p>Veri yüklenemedi.</p>';
        return;
    }

    Object.keys(tritypeData).forEach(code => {
        const t = tritypeData[code];

        // Kart HTML
        const card = document.createElement('div');
        card.className = 'wing-detail-card';
        card.style.borderColor = "rgba(231, 111, 81, 0.3)"; // Tritype rengi

        card.innerHTML = `
            <div class="wing-detail-title" style="color: #E76F51;">
                ${t.title}
            </div>
            <p style="font-size: 0.9rem; color: #cbd5e1; line-height: 1.4;">${t.desc}</p>
        `;

        container.appendChild(card);
    });
}

// Global scope'a ekle
window.switchTheoryTab = switchTheoryTab;
window.renderWingTheory = renderWingTheory;
window.renderTritypeTheory = renderTritypeTheory;


/* --- OYUN: TİP DEDEKTİFİ --- */
const gameQuestions = [
    // TİP 1
    { text: "Her şeyin mükemmel ve hatasız olması takıntım yüzünden esnek olmakta çok zorlanıyorum.", correct: 1, options: [1, 7, 3], feedback: "Tip 1 (İdealist): Hata yapmaktan çok korkarlar, içsel eleştirmenleri çok acımasızdır." },
    { text: "Dünyanın ahlaki olarak daha iyi bir yer olması için kendi arzularımı bastırmam gerektiğine inanırım.", correct: 1, options: [1, 8, 4], feedback: "Tip 1: Kendi duygularından çok 'doğru olana' (görev bilincine) odaklanırlar." },
    { text: "Bir görev tamamlandığında bile sevinmek yerine 'Daha iyisi olabilirdi' diye düşünmeden edemiyorum.", correct: 1, options: [1, 9, 2], feedback: "Tip 1: Ulaşılamaz bir mükemmellik standardı nedeniyle sürekli bir içsel memnuniyetsizlik yaşarlar." },

    // TİP 2
    { text: "Başkalarının benden ne istediğini sezgisel olarak hissedebiliyor ama kendi ihtiyaçlarımı dile getirmekten utanıyorum.", correct: 2, options: [2, 5, 8], feedback: "Tip 2 (Yardımsever): Sevilmek için hizmet ederler, kendi ihtiyaçlarını bencillik olarak görürler." },
    { text: "Eğer insanlar bana ihtiyaç duymazlarsa, kendi değerimi ve varlık sebebimi kaybedeceğimden korkuyorum.", correct: 2, options: [2, 3, 9], feedback: "Tip 2: İlişkilerde vazgeçilmez olarak kendi reddedilme korkularını bastırırlar." },
    { text: "İnsanlara o kadar çok veriyorum ki, karşılık göremediğimde içten içe büyük bir öfke ve kırgınlık biriktiriyorum.", correct: 2, options: [2, 7, 4], feedback: "Tip 2: Gurur tuzakları yüzünden 'Benim hiçbir şeye ihtiyacım yok ama herkesin bana ihtiyacı var' yanılgısına düşerler." },

    // TİP 3
    { text: "Kendi gerçek duygularımı yaşamaktansa, toplumun benden beklediği 'başarı imajına' bürünmeyi tercih ederim.", correct: 3, options: [3, 4, 6], feedback: "Tip 3 (Başarı Odaklı): Başarı için kendi hislerini askıya alır ve ortama göre şekil alırlar (Buketleme)." },
    { text: "Dinlenmek veya hiçbir şey yapmadan durmak bana inanılmaz suçluluk veriyor, sürekli üretmeliyim.", correct: 3, options: [3, 9, 7], feedback: "Tip 3: İnsan olarak değerlerinin 'ne kadar başarılı olduklarıyla' eşdeğer olduğuna inanırlar." },
    { text: "Bazen o kadar çok 'Rol' yapıyorum ki, maskemi çıkardığımda asıl benliğimin kim olduğunu unutuyorum.", correct: 3, options: [3, 8, 5], feedback: "Tip 3: Hedeflere ve alkışa odaklanmaktan kendi öz benlikleriyle iletişimlerini yitirme riski taşırlar." },

    // TİP 4
    { text: "Hayatın sıradanlığı bana acı veriyor. Başkalarının sahip olduğu 'o eksik parçanın' bende olmadığına inanıyorum.", correct: 4, options: [4, 9, 2], feedback: "Tip 4 (Özgün): Melankoli ve haset üzerinden 'sıradan' mutluluğu küçümserler." },
    { text: "Duygularım benim en yoğun gerçekliğimdir; kendimi anlaşılmaz, özel ve trajik bir yalnızlığın içinde bulabiliyorum.", correct: 4, options: [4, 8, 1], feedback: "Tip 4: Derin ve yoğun duygular hissederek hayatta olduklarına kanaat getirirler." },
    { text: "Kurtarılmayı veya beni tam olarak anlayacak 'o büyülü insanı' beklerken mevcut hayatı kaçırıyorum.", correct: 4, options: [4, 7, 3], feedback: "Tip 4: İdealize edilmiş gelecekteki kurtarıcıya odaklanıp şimdinin değerini es geçerler." },

    // TİP 5
    { text: "Çevremdeki insanların talepleri enerjimi çabucak tüketiyor, bu yüzden kendi yalnız alanıma çekilirim.", correct: 5, options: [5, 2, 7], feedback: "Tip 5 (Gözlemci): Enerji kaynaklarının sınırlı olduğunu düşünüp kendilerini izole ederler." },
    { text: "Aksiyon almadan önce konu hakkında her şeyi bilmek ve tüm verileri analiz etmek zorunda hissediyorum.", correct: 5, options: [5, 8, 3], feedback: "Tip 5: Yetersizlik korkularını, uzmanlaşarak ve her detayı mantığa oturtarak yok etmeye çalışırlar." },
    { text: "Bir ortamda hislerime odaklanmak yerine, ortamı bir sistem gibi dışarıdan izlemeyi tercih ederim.", correct: 5, options: [5, 4, 9], feedback: "Tip 5: Duygusal olarak geri çekilip olayları salt entelektüel seviyede işlerler." },

    // TİP 6
    { text: "Herhangi bir karar vermeden önce olası tüm felaket senaryolarını düşünür, önlem almaya çalışırım.", correct: 6, options: [6, 1, 9], feedback: "Tip 6 (Sadık-Sorgulayıcı): Güvenlik arayışı içindedirler, belirsizlik onlara en büyük kaygıyı verir." },
    { text: "Otorite figürlerine karşı hem çok sadık olabilir hem de onlardan şüphelenip gizli bir asi tavır takınabilirim.", correct: 6, options: [6, 3, 2], feedback: "Tip 6: Güvence için bağlanmakla korkularına meydan okumak arasında gidip gelirler." },
    { text: "Bana çok iyi bir şey söylendiğinde bile arkasında yatan 'gizli bir niyet' olup olmadığını sorgularım.", correct: 6, options: [6, 7, 4], feedback: "Tip 6: Şüphecilikleri nedeniyle güven testlerinden geçirmeden kimseye tam teslim olmazlar." },

    // TİP 7
    { text: "Olumsuz duygulardan kaçmak için zihnimi sürekli fantastik planlar, seyahatler ve seçeneklerle doldururum.", correct: 7, options: [7, 5, 4], feedback: "Tip 7 (Maceracı): Acıdan ve can sıkıntısından kaçmak temel savunma mekanizmalarıdır." },
    { text: "Bağlanmak ve bir şeyin sonunu getirmek benim için zordur çünkü diğer 'harika' seçenekleri kaçırmaktan korkarım.", correct: 7, options: [7, 1, 6], feedback: "Tip 7: FOMO (Kaçırma korkusu) yaşarlar ve sınırlandırılmaktan hiç hoşlanmazlar." },
    { text: "Dünyaya büyük bir açgözlülükle yaklaşıyorum; her deneyimi yaşamak ve hiçbir sınır tanımamak istiyorum.", correct: 7, options: [7, 2, 9], feedback: "Tip 7: Hayatın acı gerçeklerinden yüz çevirip sadece 'oyun ve haz' vitrininde kalmak isterler." },

    // TİP 8
    { text: "Güçsüzlüğümü göstermek veya başkalarının kontrolü altına girmek benim için en büyük tehlikedir. Daima güçlü olmalıyım.", correct: 8, options: [8, 9, 2], feedback: "Tip 8 (Meydan Okuyan): Dünyayı adaletsiz olarak algılarlar, incinmemek için zırh (sertlik) giyerler." },
    { text: "İnsanları test etmek ve gerçek yüzlerini görmek için bazen kasıtlı olarak çatışma çıkarır veya zorlarım.", correct: 8, options: [8, 5, 7], feedback: "Tip 8: İnsanların gerçek ve güvenilir olduğuna ancak kriz anındaki tavırlarına bakarak inanırlar." },
    { text: "Adaletsizlik varsa inisiyatif alıp zayıfları korumaktan çekinmem; öfkem saman alevi gibi parlar ve biter.", correct: 8, options: [8, 1, 3], feedback: "Tip 8: Maske takmazlar, kendi adaletlerini uygularlar ve doğrudan eyleme geçerler." },

    // TİP 9
    { text: "Bir çatışmaya girmemek için kendi isteklerimi uyuşturup, başkalarının akışına göre yaşamaya çok alışkınım.", correct: 9, options: [9, 3, 8], feedback: "Tip 9 (Barışçı): Bağlantıyı kaybetmemek için kendilerini ve onaylanma ihtiyaçlarını yok sayarlar (Narkotizasyon)." },
    { text: "Gerçekten öfkelensem de bunu doğrudan ifade etmek yerine inatçılaşır, sessizleşir veya işleri ağırdan alırım.", correct: 9, options: [9, 7, 2], feedback: "Tip 9: Pasif-agresif bir öfke tarzları vardır. Açık öfkenin ayrılık getireceğinden korkarlar." },
    { text: "İş yapmak için potansiyelim var ama karar veremeyip rahat olan rutinime geri dönüyorum (Tembellik).", correct: 9, options: [9, 1, 4], feedback: "Tip 9: Ruhsal atalet halindedirler, kendi derin istekleriyle yüzleşmekten kaçınırlar." }
];

let currentGameScore = 0;
let currentGameIndex = 0;

function startGame() {
    currentGameScore = 0;
    currentGameIndex = -1; // İlk nextGameQuestion çağrısı ile 0 olacak
    document.getElementById('currentScore').textContent = '0';
    document.getElementById('game-intro').style.display = 'none';
    document.getElementById('game-result').style.display = 'none';
    document.getElementById('game-area').style.display = 'block';

    // Karıştır
    gameQuestions.sort(() => Math.random() - 0.5);

    nextGameQuestion();
}

function nextGameQuestion() {
    currentGameIndex++;

    if (currentGameIndex >= 10 || currentGameIndex >= gameQuestions.length) {
        endGame();
        return;
    }

    const q = gameQuestions[currentGameIndex];
    document.getElementById('currentQuestionNum').textContent = currentGameIndex + 1;
    document.getElementById('gameQuestionText').textContent = q.text;

    // Feedback ve Next butonu gizle
    document.getElementById('gameFeedback').style.display = 'none';
    document.getElementById('nextQuestionBtn').style.display = 'none';

    // Şıkları oluştur
    const optionsDiv = document.getElementById('gameOptions');
    optionsDiv.innerHTML = '';
    optionsDiv.style.pointerEvents = 'auto'; // Tıklanabilir yap

    // Şıkları karıştır (basitçe)
    const currentOptions = [...q.options].sort(() => Math.random() - 0.5);

    currentOptions.forEach(opt => {
        const btn = document.createElement('div');
        btn.className = 'game-option-btn';
        btn.textContent = `Tip ${opt}`;

        // Closure ile parametreleri sakla
        btn.onclick = function () { checkGameAnswer(opt, q.correct, btn); };

        optionsDiv.appendChild(btn);
    });
}

function checkGameAnswer(selected, correct, btnElement) {
    const optionsDiv = document.getElementById('gameOptions');
    optionsDiv.style.pointerEvents = 'none'; // Tekrar tıklamayı engelle

    const feedback = document.getElementById('gameFeedback');
    const qData = gameQuestions[currentGameIndex];

    // Şıkları boya
    const allBtns = document.querySelectorAll('.game-option-btn');
    allBtns.forEach(b => {
        // Doğru şıkkı her zaman yeşile boya
        if (b.textContent === `Tip ${correct}`) {
            b.classList.add('correct');
        }
        // Yanlış şıkkı seçtiysek kırmızıya boya
        else if (b === btnElement && selected !== correct) {
            b.classList.add('wrong');
        }
    });

    if (selected === correct) {
        currentGameScore += 10;
        document.getElementById('currentScore').textContent = currentGameScore;
        feedback.className = 'feedback-msg correct';
        feedback.innerHTML = `🎉 Doğru! <br><small>${qData.feedback}</small>`;
    } else {
        feedback.className = 'feedback-msg wrong';
        feedback.innerHTML = `😕 Yanlış. <br><small>${qData.feedback}</small>`;
    }

    feedback.style.display = 'block';
    document.getElementById('nextQuestionBtn').style.display = 'block';
}

function endGame() {
    document.getElementById('game-area').style.display = 'none';
    document.getElementById('game-result').style.display = 'block';
    document.getElementById('totalScore').textContent = currentGameScore;

    const comment = document.getElementById('scoreComment');
    if (currentGameScore >= 80) comment.textContent = "🏆 İnanılmaz! Sen bir Enneagram Uzmanısın!";
    else if (currentGameScore >= 50) comment.textContent = "👏 Gayet iyi! Biraz daha pratikle uzmanlaşabilirsin.";
    else comment.textContent = "📚 Biraz daha çalışman lazım. 'Keşfet' bölümüne göz at!";
}

window.startGame = startGame;
window.nextGameQuestion = nextGameQuestion;

// --- ANALYTICS / DATA LOGGING (BACKGROUND) ---
window.saveTestAnalytics = function (bestType, consistencyScore, typeScores, wing, tritype) {
    try {
        const userNameInput = document.getElementById('userName');
        const userName = (userNameInput && userNameInput.value.trim() !== '') ? userNameInput.value : "Anonim";

        const history = JSON.parse(localStorage.getItem('enneagram_analytics')) || [];
        const record = {
            id: Date.now(),
            date: new Date().toISOString(),
            userName: userName,
            resultType: bestType,
            wing: wing,
            tritype: tritype,
            consistency: consistencyScore,
            scores: typeScores
        };
        history.push(record);
        localStorage.setItem('enneagram_analytics', JSON.stringify(history));
        console.log("Analytics: Kullanıcı verisi başarıyla loglandı.");
    } catch (e) {
        console.error("Analytics kaydedilemedi", e);
    }
};

window.exportAnalyticsData = function () {
    const dataStr = localStorage.getItem('enneagram_analytics');
    if (!dataStr || dataStr === "[]") {
        alert("Henüz kaydedilmiş test verisi yok. (Önce bir test çözmelisiniz)");
        return;
    }

    try {
        const data = JSON.parse(dataStr);
        if (!data.length) return;

        // UTF-8 BOM ile Excel'de Türkçe karakterler (Örn: Ş, Ğ, İ) düzgün görünsün
        let csvContent = "\uFEFF";
        csvContent += "Tarih,Kullanici Adi,Kişilik Tipi,Kanat,Tritype,Tutarlilik (Guvenilirlik)\n";

        data.forEach(row => {
            let uName = row.userName ? row.userName.replace(/,/g, "") : "Anonim";
            let rType = row.resultType || "?";
            let cScore = row.consistency || 0;
            let wing = row.wing ? row.wing.replace(/,/g, " ") : "-";
            let tritype = row.tritype ? row.tritype.replace(/,/g, " ") : "-";

            // Tarihi temizle (Türkçe format)
            let dateObj = new Date(row.date);
            let dateStr = dateObj.toLocaleDateString('tr-TR') + " " + dateObj.toLocaleTimeString('tr-TR');

            csvContent += `"${dateStr}","${uName}","Tip ${rType}","${wing}","${tritype}","% ${cScore}"\n`;
        });

        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `Enneagram_Rapor_${new Date().getTime()}.csv`;
        a.click();
        URL.revokeObjectURL(url);
        console.log("Excel/CSV Raporu indirildi!");

    } catch (e) {
        alert("Veriler dışa aktarılırken bir hata oluştu.");
        console.error(e);
    }
};

// --- GİZLİ YÖNETİCİ MENÜSÜ ---
let adminClickCount = 0;
let adminClickTimer = null;

window.adminClick = function () {
    adminClickCount++;

    if (adminClickCount === 1) {
        adminClickTimer = setTimeout(() => { adminClickCount = 0; }, 3000);
        // 3 saniye içinde 5 kez tıklanmazsa sıfırlanır
    }

    if (adminClickCount >= 5) {
        clearTimeout(adminClickTimer);
        adminClickCount = 0;
        showAdminPanel();
    }
};

function showAdminPanel() {
    if (document.getElementById('adminPanel')) return; // Zaten açıksa çık

    const panel = document.createElement('div');
    panel.id = 'adminPanel';
    panel.style.position = 'fixed';
    panel.style.bottom = '20px';
    panel.style.right = '20px'; // Sağ alt köşe
    panel.style.background = 'rgba(15, 23, 42, 0.95)';
    panel.style.border = '2px solid #4ade80';
    panel.style.padding = '20px';
    panel.style.borderRadius = '12px';
    panel.style.zIndex = '99999';
    panel.style.color = 'white';
    panel.style.boxShadow = '0 10px 40px rgba(0,0,0,0.8)';
    panel.style.backdropFilter = 'blur(10px)';

    panel.innerHTML = `
        <h3 style="margin:0 0 10px 0; color:#4ade80; font-family:'Outfit',sans-serif; text-align:center;">🕵️‍♂️ Gizli Yönetim</h3>
        <p style="font-size:0.85rem; color:#94a3b8; margin-bottom:15px; text-align:center;">Test yapan kullanıcıların verilerini 'Excel' (CSV) tablosu olarak indirebilirsin.</p>
        <div style="display:flex; flex-direction:column; gap:10px;">
            <button onclick="window.exportAnalyticsData()" style="padding:10px; background:#4ade80; color:#0f172a; border:none; border-radius:8px; cursor:pointer; font-weight:bold;">📥 Excel Olarak İndir (.CSV)</button>
            <button onclick="localStorage.removeItem('enneagram_analytics'); alert('Tüm kullanıcı test verileri silindi!'); this.parentElement.parentElement.remove();" style="padding:10px; background:transparent; color:#ef4444; border:1px solid #ef4444; border-radius:8px; cursor:pointer; font-weight:bold;">🗑️ Verileri Sıfırla (Sil)</button>
            <button onclick="this.parentElement.parentElement.remove()" style="padding:10px; background:rgba(255,255,255,0.1); color:#fff; border:none; border-radius:8px; cursor:pointer;">Kapat</button>
        </div>
    `;

    document.body.appendChild(panel);
}
