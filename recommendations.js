const recommendationsPool = {
    1: {
        books: [
            "Atomik Alışkanlıklar - James Clear", "Düzenin İlkeleri - Ray Dalio", "Mükemmellik Tuzağı - Thomas Curran",
            "Sefiller - Victor Hugo", "Devlet - Platon", "Etkili İnsanların 7 Alışkanlığı - Stephen Covey",
            "Büyük Umutlar - Charles Dickens", "Adalet - Michael Sandel", "Gurur ve Önyargı - Jane Austen",
            "Düşünceler - Marcus Aurelius", "İrade Terbiyesi - Jules Payot", "Zen ve Motosiklet Bakım Sanatı - Robert M. Pirsig",
            "Utopia - Thomas More", "Suç ve Ceza - Dostoyevski", "Bülbülü Öldürmek - Harper Lee"
        ],
        movies: [
            "Black Swan", "Schindler's List", "Inception", "The Imitation Game", "Spotlight",
            "12 Angry Men", "Gattaca", "The King's Speech", "Whiplash", "A Man Called Otto",
            "Lincoln", "Bridge of Spies", "Arrival", "Dark Waters", "Erin Brockovich"
        ],
        music: [
            { id: "jvipPYFebWc", title: "Vivaldi - The Four Seasons" },
            { id: "Cbej-XUu0V8", title: "Mozart - Symphony No. 40" },
            { id: "mJ_fkw5j-t0", title: "Ludovico Einaudi - Experience" },
            { id: "VBnCKP7v7n4", title: "Hans Zimmer - Time (Inception)" },
            { id: "p29JUpsOSTE", title: "Coldplay - Fix You" },
            { id: "4Tr0otuiQuU", title: "Beethoven - Moonlight Sonata" },
            { id: "2F4G5H_TTvU", title: "Chopin - Nocturne op.9 No.2" },
            { id: "HoRkntoHkIE", title: "Max Richter - On The Nature Of Daylight" }
        ]
    },
    2: {
        books: [
            "Sınırlar - Henry Cloud", "Beş Sevgi Dili - Gary Chapman", "Kürk Mantolu Madonna - Sabahattin Ali",
            "Küçük Prens - Antoine de Saint-Exupéry", "Empati - Adam Fawer", "Sevme Sanatı - Erich Fromm",
            "İnsan Ne ile Yaşar - Tolstoy", "Yeşilin Kızı Anne - L.M. Montgomery", "Veronika Ölmek İstiyor - Paulo Coelho",
            "Çavdar Tarlasında Çocuklar - J.D. Salinger", "Uçurtma Avcısı - Khaled Hosseini", "Bin Muhteşem Güneş - Khaled Hosseini"
        ],
        movies: [
            "Amélie", "It's a Wonderful Life", "The Blind Side", "Pay It Forward", "Forrest Gump",
            "The Help", "Her", "La La Land", "Wonder", "Dead Poets Society",
            "Patch Adams", "Green Book", "Instant Family", "CODA", "About Time"
        ],
        music: [
            { id: "hT_nvWreIhg", title: "OneRepublic - Counting Stars" },
            { id: "lp-EO5I60KA", title: "Ed Sheeran - Thinking Out Loud" },
            { id: "RtBbinpK5XI", title: "Bob Marley - Three Little Birds" },
            { id: "450p7goxZqg", title: "John Legend - All of Me" },
            { id: "iX-QaNzd-0Y", title: "Milky Chance - Stolen Dance" },
            { id: "OPf0YbXqDm0", title: "Bruno Mars - Just The Way You Are" },
            { id: "RBumgq5yVrA", title: "Passenger - Let Her Go" },
            { id: "izGwDsrQ1eQ", title: "George Michael - Careless Whisper" }
        ]
    },
    3: {
        books: [
            "Simyacı - Paulo Coelho", "Outliers (Çizginin Dışındakiler) - Malcolm Gladwell", "Zengin Baba Yoksul Baba - Robert Kiyosaki",
            "Steve Jobs - Walter Isaacson", "Elon Musk - Walter Isaacson", "Sıfırdan Bire - Peter Thiel",
            "Dost Kazanma ve İnsanları Etkileme Sanatı - Dale Carnegie", "Büyük Düşünmenin Büyüsü - David Schwartz", "İknanın Psikolojisi - Robert Cialdini",
            "Milyoner Aklın Sırları - T. Harv Eker", "Peynirimi Kim Kaptı - Spencer Johnson", "Şu Hortumlu Dünyada Fil Yalnız Bir Hayvandır - Ahmet Şerif İzgören"
        ],
        movies: [
            "The Wolf of Wall Street", "Social Network", "Jerry Maguire", "The Pursuit of Happyness", "Moneyball",
            "Catch Me If You Can", "The Founder", "Limitless", "The Great Gatsby", "Top Gun: Maverick",
            "Air", "Steve Jobs", "Wall Street", "Glengarry Glen Ross", "Ford v Ferrari"
        ],
        music: [
            { id: "04854XqcfCY", title: "Queen - We Are The Champions" },
            { id: "btPJPFnesV4", title: "Survivor - Eye of the Tiger" },
            { id: "nfWlot6h_JM", title: "Taylor Swift - Shake It Off" },
            { id: "OPf0YbXqDm0", title: "Mark Ronson - Uptown Funk" },
            { id: "hT_nvWreIhg", title: "OneRepublic - Counting Stars" },
            { id: "e-ORhEE9VVg", title: "Taylor Swift - Blank Space" },
            { id: "JGwWNGJdvx8", title: "Ed Sheeran - Shape of You" },
            { id: "fJ9rUzIMcZQ", title: "Queen - Bohemian Rhapsody" }
        ]
    },
    4: {
        books: [
            "Dorian Gray'in Portresi - Oscar Wilde", "Tutunamayanlar - Oğuz Atay", "Çürümenin Kitabı - Emil Cioran",
            "Dönüşüm - Franz Kafka", "Genç Werther'in Acıları - Goethe", "Sırça Fanus - Sylvia Plath",
            "Yabancı - Albert Camus", "Kendine Ait Bir Oda - Virginia Woolf", "Saatleri Ayarlama Enstitüsü - Ahmet Hamdi Tanpınar",
            "Böyle Buyurdu Zerdüşt - Nietzsche", "Tehlikeli Oyunlar - Oğuz Atay", "Aylak Adam - Yusuf Atılgan"
        ],
        movies: [
            "Eternal Sunshine of the Spotless Mind", "Amadeus", "Midnight in Paris", "Her", "The Grand Budapest Hotel",
            "Lost in Translation", "Joker", "Call Me by Your Name", "Frida", "Melancholia",
            "Moonlight", "Carol", "Lady Bird", "The Shape of Water", "Big Fish"
        ],
        music: [
            { id: "4N3N1MlvTk4", title: "Gary Jules - Mad World" },
            { id: "hLQl3WQQoQ0", title: "Adele - Someone Like You" },
            { id: "1ekZEVeXwek", title: "Linkin Park - Numb" },
            { id: "rb8Y38eilRM", title: "Lana Del Rey - Young and Beautiful" },
            { id: "wVyggTKDcOE", title: "Radiohead - Creep" },
            { id: "rYEDA3JcQqw", title: "Adele - Rolling in the Deep" },
            { id: "DeumyOzKqgI", title: "Evanescence - My Immortal" },
            { id: "k0bwlvnBmIE", title: "Hozier - Take Me To Church" }
        ]
    },
    5: {
        books: [
            "Sapiens - Yuval Noah Harari", "1984 - George Orwell", "Cosmos - Carl Sagan",
            "Otostopçunun Galaksi Rehberi - Douglas Adams", "Kısa Tarih - Stephen Hawking", "Yüzüklerin Efendisi - Tolkien",
            "Dune - Frank Herbert", "Vakıf Serisi - Isaac Asimov", "Fahrenheit 451 - Ray Bradbury",
            "Sofie'nin Dünyası - Jostein Gaarder", "Cesur Yeni Dünya - Aldous Huxley", "Yapay Zeka - Kai-Fu Lee"
        ],
        movies: [
            "A Beautiful Mind", "The Matrix", "Interstellar", "The Imitation Game", "Ex Machina",
            "The Theory of Everything", "Inception", "Arrival", "Pi", "Blade Runner 2049",
            "Oppenheimer", "The Martian", "Gattaca", "Contact", "2001: A Space Odyssey"
        ],
        music: [
            { id: "qZm566w98X0", title: "Beethoven - Moonlight Sonata" },
            { id: "XRcnI7pY3gE", title: "Hans Zimmer - Interstellar Theme" },
            { id: "QZJgcLLBLbU", title: "AC/DC - Back In Black" }, // Gizli Rockçı :)
            { id: "9E6b3swbnWg", title: "Pink Floyd - Comfortably Numb" },
            { id: "jvXyNh16QC2", title: "Daft Punk - Veridis Quo" },
            { id: "Cbej-XUu0V8", title: "Mozart - Symphony No. 40" },
            { id: "NlprozGcs80", title: "Queen - Don't Stop Me Now" }
        ]
    },
    6: {
        books: [
            "Yüzüklerin Efendisi - J.R.R. Tolkien", "Harry Potter Serisi - J.K. Rowling", "Sherlock Holmes - Arthur Conan Doyle",
            "Hamlet - Shakespeare", "Suç ve Ceza - Dostoyevski", "Korku - Stefan Zweig",
            "Hayvan Çiftliği - George Orwell", "Uyumsuz - Veronica Roth", "Açlık Oyunları - Suzanne Collins",
            "Da Vinci Şifresi - Dan Brown", "Olasılıksız - Adam Fawer", "Psikopatoloji - Engin Geçtan"
        ],
        movies: [
            "The Truman Show", "Mission Impossible", "The Fugitive", "Inside Out", "Saving Private Ryan",
            "The Bourne Identity", "Argo", "Panic Room", "Zodiac", "Flightplan",
            "Edge of Tomorrow", "A Quiet Place", "Sully", "Captain Phillips", "Dunkirk"
        ],
        music: [
            { id: "kOkQ4T5WO9E", title: "Calvin Harris - This Is What You Came For" },
            { id: "YQHsXMglC9A", title: "Adele - Hello" },
            { id: "1G4isv_Fylg", title: "Coldplay - Paradise" },
            { id: "lwaJIKdJ6II", title: "U2 - With Or Without You" },
            { id: "09R8_2nJtjg", title: "Maroon 5 - Sugar" },
            { id: "nfWlot6h_JM", title: "Taylor Swift - Shake It Off" },
            { id: "Soa3gO7tL-c", title: "Green Day - Boulevard Of Broken Dreams" }
        ]
    },
    7: {
        books: [
            "Ye, Dua Et, Sev - Elizabeth Gilbert", "Yolda - Jack Kerouac", "80 Günde Devri Alem - Jules Verne",
            "Ferrarisini Satan Bilge - Robin Sharma", "Martı Jonathan Livingston - Richard Bach", "Alice Harikalar Diyarında - Lewis Carroll",
            "Peter Pan - J.M. Barrie", "Robinson Crusoe - Daniel Defoe", "Otostopçunun Galaksi Rehberi - Douglas Adams",
            "Üç Silahşörler - Alexandre Dumas", "Huckleberry Finn'in Maceraları - Mark Twain"
        ],
        movies: [
            "Up (Yukarı Bak)", "The Hangover", "Ferris Bueller's Day Off", "Ratatouille", "La La Land",
            "Mamma Mia!", "Big", "Yes Man", "Guardians of the Galaxy", "Toy Story",
            "School of Rock", "Midnight in Paris", "Jumanji", "Back to the Future", "Into the Wild"
        ],
        music: [
            { id: "OPf0YbXqDm0", title: "Mark Ronson - Uptown Funk" },
            { id: "ZbZSe6N_BXs", title: "Pharrell Williams - Happy" },
            { id: "0KSOMA3QBU0", title: "Katy Perry - Roar" },
            { id: "ru0K8uYEZWw", title: "Justin Timberlake - Can't Stop the Feeling!" },
            { id: "dvgZkm1xWPE", title: "Coldplay - Viva La Vida" },
            { id: "3tmd-ClpJxA", title: "Taylor Swift - 22" },
            { id: "fLexgOxsZu0", title: "Bruno Mars - The Lazy Song" },
            { id: "kffacxfA7G4", title: "Justin Bieber - Baby" }
        ]
    },
    8: {
        books: [
            "Savaş Sanatı - Sun Tzu", "Prens - Machiavelli", "Nutuk - Mustafa Kemal Atatürk",
            "Baba (The Godfather) - Mario Puzo", "İktidar (Güç Sahibi Olmanın 48 Yasası) - Robert Greene", "Kavgam - Adolf Hitler (Tarihsel Analiz)",
            "Napolyon - Andrew Roberts", "Demir Ökçe - Jack London", "Fareler ve İnsanlar - John Steinbeck",
            "Gazap Üzümleri - John Steinbeck", "Beyaz Diş - Jack London", "Monte Kristo Kontu - Alexandre Dumas"
        ],
        movies: [
            "Gladiator", "The Godfather", "Braveheart", "Scarface", "The Dark Knight",
            "Fight Club", "300", "V for Vendetta", "Django Unchained", "Mad Max: Fury Road",
            "Top Gun", "Rocky", "Iron Man", "Logan", "Whiplash"
        ],
        music: [
            { id: "DHLPv5eG46k", title: "Imagine Dragons - Believer" },
            { id: "ktvTqknDobU", title: "Imagine Dragons - Radioactive" },
            { id: "vt1Pwfnh5pc", title: "Eminem - Lose Yourself" },
            { id: "btPJPFnesV4", title: "Survivor - Eye of the Tiger" },
            { id: "J91ti_MpdHA", title: "50 Cent - In Da Club" },
            { id: "YlUKcNNmywk", title: "Red Hot Chili Peppers - Californication" },
            { id: "LBr7kECsjcQ", title: "The Weeknd - Starboy" },
            { id: "1w7OgIMMRc4", title: "Guns N' Roses - Sweet Child O' Mine" }
        ]
    },
    9: {
        books: [
            "Şimdiki Zamanın Gücü - Eckhart Tolle", "Dört Anlaşma - Don Miguel Ruiz", "Siddhartha - Hermann Hesse",
            "Tao Te Ching - Lao Tzu", "Simyacı - Paulo Coelho", "Ben Kirke - Madeline Miller",
            "Bülbülü Öldürmek - Harper Lee", "Küçük Prens - Saint-Exupéry", "Harry Potter - J.K. Rowling",
            "Heidi - Johanna Spyri", "Pollyanna - Eleanor H. Porter", "Çoluk Çocuk - Patti Smith"
        ],
        movies: [
            "The Secret Life of Walter Mitty", "Forrest Gump", "Kung Fu Panda", "Inside Out", "Soul",
            "My Neighbor Totoro", "Paddington", "Amélie", "The Lion King", "Life of Pi",
            "Good Will Hunting", "Big Fish", "Wall-E", "Christopher Robin", "Groundhog Day"
        ],
        music: [
            { id: "ru0K8uYEZWw", title: "John Lennon - Imagine" },
            { id: "450p7goxZqg", title: "John Legend - All of Me" },
            { id: "YiIu0334_0", title: "Iz Kamakawiwo'ole - Somewhere Over the Rainbow" },
            { id: "lp-EO5I60KA", title: "Ed Sheeran - Thinking Out Loud" },
            { id: "RBumgq5yVrA", title: "Passenger - Let Her Go" },
            { id: "v2AC41dglnM", title: "AC/DC - Highway to Hell" }, // Şaka :) Sakin şarkı:
            { id: "Q4VK9_CfOLQ", title: "Enya - Only Time" },
            { id: "nSDgHBxUbVQ", title: "The Beatles - Let It Be" }
        ]
    }
};
