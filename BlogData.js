const blogs = [
    {
        id: 1,
        title: "Memulai Perjalanan Belajar Web Development",
        image: "images/blog-1.jpg",
        description: "Berbagi pengalaman pertama saya dalam mempelajari HTML, CSS, dan JavaScript. Dari nol hingga bisa membuat website sederhana, ini adalah perjalanan yang menyenangkan dan penuh tantangan.",
        category: "Teknologi",
        author: "Heisyan Aleandro",
        date: "15 Januari 2024",
        fullContent: `
            <p>Perjalanan saya dalam mempelajari web development dimulai dari rasa penasaran yang besar. Sebagai mahasiswa Primakara University, saya menyadari bahwa skill web development sangat penting di era digital ini.</p>
            
            <h3>Langkah Pertama: HTML</h3>
            <p>HTML adalah fondasi dari semua website. Saya mulai belajar tentang tag-tag dasar seperti &lt;div&gt;, &lt;p&gt;, &lt;h1&gt;, dan masih banyak lagi. Awalnya terasa membingungkan, tapi setelah praktek membuat beberapa halaman sederhana, semuanya mulai masuk akal.</p>
            
            <h3>Menambahkan Style dengan CSS</h3>
            <p>Setelah menguasai HTML, saya lanjut ke CSS. Di sinilah website mulai terlihat menarik! Saya belajar tentang colors, fonts, layouts, dan responsive design. Flexbox dan Grid menjadi tools favorit saya untuk membuat layout yang rapi.</p>
            
            <h3>JavaScript: Membuat Website Interaktif</h3>
            <p>JavaScript membawa website saya ke level berikutnya. Dari membuat tombol yang bisa diklik, form validation, hingga animasi yang smooth. Meskipun challenging, tapi sangat memuaskan ketika kode yang kita tulis berfungsi dengan baik.</p>
            
            <h3>Tips untuk Pemula</h3>
            <ul>
                <li>Mulai dari yang sederhana, jangan langsung yang kompleks</li>
                <li>Praktek setiap hari, konsistensi adalah kunci</li>
                <li>Jangan takut untuk membuat kesalahan, itu bagian dari proses belajar</li>
                <li>Manfaatkan resource online seperti MDN, W3Schools, dan YouTube</li>
                <li>Join komunitas developer untuk saling belajar</li>
            </ul>
            
            <p>Perjalanan belajar web development memang tidak mudah, tapi sangat worth it. Sekarang saya bisa membuat website sendiri dan terus belajar teknologi baru setiap harinya!</p>
        `
    },
    {
        id: 2,
        title: "Liburan Seru ke Pantai Bali yang Indah",
        image: "images/blog-2.jpg",
        description: "Menikmati keindahan sunset di pantai Bali bersama teman-teman kampus. Pengalaman yang tidak akan terlupakan dan sangat recommended untuk refreshing dari rutinitas kuliah.",
        category: "Travel",
        author: "Heisyan Aleandro",
        date: "20 Januari 2024",
        fullContent: `
            <p>Liburan kali ini benar-benar special! Bersama teman-teman kampus, kami memutuskan untuk explore beberapa pantai indah di Bali. Dari Kuta yang ramai hingga pantai tersembunyi yang tenang.</p>
            
            <h3>Destinasi Pertama: Pantai Kuta</h3>
            <p>Pantai Kuta adalah destinasi wajib untuk pertama kali ke Bali. Ombaknya yang bagus untuk surfing dan sunset yang spektakuler membuat kami betah berlama-lama di sini. Banyak cafe dan restoran di sepanjang pantai yang menyajikan makanan enak dengan view laut.</p>
            
            <h3>Keindahan Pantai Pandawa</h3>
            <p>Pantai Pandawa menjadi favorit kami karena pasir putihnya yang bersih dan air lautnya yang jernih. Tidak terlalu ramai, jadi perfect untuk foto-foto aesthetic. Ada juga aktivitas water sports yang seru untuk dicoba!</p>
            
            <h3>Sunset di Tanah Lot</h3>
            <p>Moment paling memorable adalah menyaksikan sunset di Tanah Lot. Pemandangan pura yang berdiri di atas batu karang dengan background matahari terbenam benar-benar breathtaking. Ini adalah spot foto terbaik selama trip kami!</p>
            
            <h3>Tips Liburan ke Pantai Bali</h3>
            <ul>
                <li>Datang saat weekday untuk menghindari keramaian</li>
                <li>Bawa sunscreen dengan SPF tinggi</li>
                <li>Sewa motor untuk lebih fleksibel explore</li>
                <li>Coba local food di warung-warung pinggir pantai</li>
                <li>Jangan lupa bawa kamera atau smartphone dengan baterai full!</li>
            </ul>
            
            <p>Liburan ke Bali ini benar-benar refreshing setelah menghadapi tugas kuliah yang menumpuk. Highly recommended untuk mahasiswa yang butuh break dari rutinitas!</p>
        `
    },
    {
        id: 3,
        title: "Review Kuliner: Nasi Goreng Legendaris",
        image: "images/blog-3.jpg",
        description: "Mencoba nasi goreng legendaris yang viral di media sosial. Apakah rasanya sesuai dengan hype-nya? Baca review lengkapnya di sini beserta tips lokasi dan harga.",
        category: "Kuliner",
        author: "Heisyan Aleandro",
        date: "25 Januari 2024",
        fullContent: `
            <p>Sebagai food enthusiast, saya selalu penasaran dengan kuliner yang viral di media sosial. Kali ini, saya mencoba nasi goreng yang katanya legendaris dan sudah buka sejak puluhan tahun lalu.</p>
            
            <h3>First Impression</h3>
            <p>Warung ini terletak di gang kecil yang cukup tersembunyi. Tempatnya sederhana, tapi selalu ramai pengunjung. Ini adalah tanda bagus! Aroma nasi goreng yang harum langsung menyambut ketika masuk.</p>
            
            <h3>Rasa yang Autentik</h3>
            <p>Nasi gorengnya benar-benar special! Bumbunya meresap sempurna ke setiap butir nasi. Tidak terlalu berminyak, dengan tingkat kepedasan yang pas. Telur ceploknya setengah matang, perfect untuk dicampur dengan nasi. Ada tambahan kerupuk dan acar yang menambah tekstur.</p>
            
            <h3>Porsi dan Harga</h3>
            <p>Dengan harga Rp 15.000, porsinya sangat mengenyangkan. Cocok banget untuk kantong mahasiswa! Bisa request level pedas sesuai selera. Ada juga pilihan topping tambahan seperti ayam, sosis, atau seafood dengan harga terjangkau.</p>
            
            <h3>Verdict</h3>
            <p><strong>Rating: 9/10</strong></p>
            <p>Hype-nya memang tidak berlebihan! Nasi goreng ini benar-benar enak dan worth it untuk dicoba. Satu-satunya kekurangan adalah harus antri cukup lama saat jam ramai.</p>
            
            <h3>Info Lokasi</h3>
            <ul>
                <li><strong>Nama:</strong> Nasi Goreng Pak Joko</li>
                <li><strong>Alamat:</strong> Jl. Teuku Umar, Denpasar</li>
                <li><strong>Jam Buka:</strong> 18.00 - 02.00 WITA</li>
                <li><strong>Harga:</strong> Rp 15.000 - Rp 35.000</li>
                <li><strong>Rekomendasi:</strong> Nasi Goreng Special dengan Telur</li>
            </ul>
            
            <p>Buat kalian yang suka nasi goreng, wajib banget coba tempat ini. Dijamin ketagihan!</p>
        `
    },
    {
        id: 4,
        title: "Kehidupan Mahasiswa di Primakara University",
        image: "images/blog-4.jpg",
        description: "Cerita seru tentang kehidupan sehari-hari sebagai mahasiswa Primakara. Dari tugas yang menumpuk hingga momen kebersamaan bersama teman-teman yang tidak tergantikan.",
        category: "Lifestyle",
        author: "Heisyan Aleandro",
        date: "1 Februari 2024",
        fullContent: `
            <p>Menjadi mahasiswa di Primakara University adalah pengalaman yang luar biasa. Setiap hari penuh dengan pembelajaran, tantangan, dan tentunya keseruan bersama teman-teman.</p>
            
            <h3>Suasana Kampus yang Mendukung</h3>
            <p>Kampus Primakara memiliki fasilitas yang lengkap dan modern. Lab komputer dengan spesifikasi tinggi, perpustakaan yang nyaman, dan area coworking space yang aesthetic. Semua dirancang untuk mendukung proses belajar mahasiswa, terutama di bidang teknologi dan digital.</p>
            
            <h3>Dosen yang Supportive</h3>
            <p>Salah satu hal yang paling saya syukuri adalah dosen-dosen yang tidak hanya mengajar, tapi juga menjadi mentor. Mereka selalu siap membantu ketika kita menghadapi kesulitan, baik dalam akademik maupun pengembangan skill.</p>
            
            <h3>Project-Based Learning</h3>
            <p>Di Primakara, kita tidak hanya belajar teori. Banyak project praktis yang harus dikerjakan, baik individual maupun kelompok. Ini sangat membantu dalam memahami real-world application dari apa yang kita pelajari.</p>
            
            <h3>Kebersamaan dengan Teman</h3>
            <p>Moment paling berkesan adalah ketika ngerjain tugas bareng teman-teman sampai larut malam. Meskipun capek, tapi ada keseruan tersendiri. Kita saling support, sharing knowledge, dan tentunya banyak candaan yang bikin suasana jadi lebih cair.</p>
            
            <h3>Tips Survive Sebagai Mahasiswa</h3>
            <ul>
                <li>Time management adalah kunci - buat schedule dan stick to it</li>
                <li>Jangan malu untuk bertanya, baik ke dosen maupun senior</li>
                <li>Join organisasi atau komunitas untuk networking</li>
                <li>Balance antara kuliah dan life - jangan lupa istirahat</li>
                <li>Manfaatkan semua fasilitas kampus yang tersedia</li>
                <li>Build portfolio sejak dini untuk persiapan karir</li>
            </ul>
            
            <p>Kehidupan mahasiswa memang penuh tantangan, tapi juga penuh dengan kesempatan untuk berkembang. Nikmati setiap prosesnya, karena ini adalah masa-masa yang akan kita rindukan suatu hari nanti!</p>
        `
    },
    {
        id: 5,
        title: "Tips Menjaga Kesehatan Mental Mahasiswa",
        image: "images/blog-5.jpg",
        description: "Kesehatan mental sangat penting terutama bagi mahasiswa. Berikut adalah beberapa tips yang saya lakukan untuk menjaga keseimbangan antara kuliah dan kehidupan pribadi.",
        category: "Kesehatan",
        author: "Heisyan Aleandro",
        date: "5 Februari 2024",
        fullContent: `
            <p>Sebagai mahasiswa, tekanan akademik seringkali membuat kita lupa untuk menjaga kesehatan mental. Padahal, mental health sama pentingnya dengan physical health. Berikut adalah tips yang saya praktekkan.</p>
            
            <h3>1. Kenali Tanda-Tanda Stress</h3>
            <p>Langkah pertama adalah mengenali ketika kita mulai stress. Tanda-tandanya bisa berupa sulit tidur, mudah marah, kehilangan motivasi, atau merasa overwhelmed. Dengan mengenali tanda-tanda ini, kita bisa segera take action sebelum terlambat.</p>
            
            <h3>2. Atur Waktu dengan Bijak</h3>
            <p>Time management yang baik bisa mengurangi stress secara signifikan. Saya menggunakan teknik Pomodoro untuk belajar - 25 menit fokus, 5 menit break. Jangan lupa untuk schedule waktu istirahat dan me-time.</p>
            
            <h3>3. Olahraga Teratur</h3>
            <p>Exercise adalah stress reliever yang sangat efektif. Tidak perlu yang berat, cukup jalan kaki 30 menit atau yoga di pagi hari sudah sangat membantu. Olahraga melepaskan endorphin yang membuat mood kita lebih baik.</p>
            
            <h3>4. Jaga Pola Tidur</h3>
            <p>Sleep is crucial! Usahakan tidur 7-8 jam setiap malam. Hindari begadang kecuali benar-benar urgent. Kualitas tidur yang baik membuat kita lebih fokus dan produktif di keesokan harinya.</p>
            
            <h3>5. Berbicara dengan Orang Terdekat</h3>
            <p>Jangan simpan masalah sendirian. Sharing dengan teman, keluarga, atau konselor bisa sangat membantu. Sometimes, kita hanya butuh someone to listen. Primakara juga menyediakan layanan konseling untuk mahasiswa.</p>
            
            <h3>6. Lakukan Hobi</h3>
            <p>Luangkan waktu untuk melakukan hal yang kita sukai. Entah itu gaming, menggambar, musik, atau apapun yang membuat kita happy. Hobi adalah cara yang bagus untuk recharge energy.</p>
            
            <h3>7. Mindfulness dan Meditasi</h3>
            <p>Meditasi 10 menit setiap hari bisa membuat perbedaan besar. Ada banyak app gratis seperti Headspace atau Calm yang bisa membantu. Mindfulness membantu kita lebih present dan mengurangi anxiety.</p>
            
            <h3>8. Batasi Social Media</h3>
            <p>Social media bisa jadi double-edged sword. Terlalu banyak scrolling bisa membuat kita compare diri dengan orang lain dan merasa inadequate. Set time limit untuk social media usage.</p>
            
            <h3>Kesimpulan</h3>
            <p>Kesehatan mental adalah marathon, bukan sprint. Tidak ada quick fix, tapi dengan konsisten melakukan hal-hal kecil di atas, kita bisa maintain mental health yang baik. Remember, it's okay to not be okay sometimes. Yang penting adalah kita take action untuk menjadi lebih baik.</p>
            
            <p><em>Jika kamu merasa kesulitan menghadapi masalah mental health, jangan ragu untuk mencari bantuan profesional. Your mental health matters!</em></p>
        `
    },
    {
        id: 6,
        title: "Panduan Lengkap Belajar Git dan GitHub",
        image: "images/blog-8.png",
        description: "Git dan GitHub adalah tools wajib untuk developer. Artikel ini membahas langkah-langkah dasar untuk mulai menggunakan version control dalam proyek kamu.",
        category: "Teknologi",
        author: "Heisyan Aleandro",
        date: "10 Februari 2024",
        fullContent: `
            <p>Git dan GitHub adalah tools yang essential untuk setiap developer. Sebagai mahasiswa IT, menguasai version control adalah skill yang wajib dimiliki. Mari kita pelajari dari dasar!</p>
            
            <h3>Apa itu Git?</h3>
            <p>Git adalah version control system yang memungkinkan kita untuk track perubahan dalam kode. Dengan Git, kita bisa kembali ke versi sebelumnya, collaborate dengan tim, dan manage project dengan lebih efisien.</p>
            
            <h3>Instalasi Git</h3>
            <p>Download Git dari git-scm.com dan install sesuai OS yang digunakan. Setelah install, verify dengan command:</p>
            <pre><code>git --version</code></pre>
            
            <h3>Perintah Git Dasar</h3>
            <p><strong>1. Initialize Repository</strong></p>
            <pre><code>git init</code></pre>
            <p>Command ini membuat repository Git baru di folder project kita.</p>
            
            <p><strong>2. Add Files</strong></p>
            <pre><code>git add .
git add filename.txt</code></pre>
            <p>Menambahkan file ke staging area sebelum di-commit.</p>
            
            <p><strong>3. Commit Changes</strong></p>
            <pre><code>git commit -m "Pesan commit yang deskriptif"</code></pre>
            <p>Menyimpan perubahan dengan message yang menjelaskan apa yang diubah.</p>
            
            <p><strong>4. Check Status</strong></p>
            <pre><code>git status</code></pre>
            <p>Melihat file mana yang sudah diubah atau belum di-commit.</p>
            
            <h3>Mengenal GitHub</h3>
            <p>GitHub adalah platform hosting untuk Git repository. Di sini kita bisa share code, collaborate dengan developer lain, dan showcase portfolio kita.</p>
            
            <h3>Push ke GitHub</h3>
            <p>Setelah membuat repository di GitHub, connect dengan local repository:</p>
            <pre><code>git remote add origin https://github.com/username/repo-name.git
git branch -M main
git push -u origin main</code></pre>
            
            <h3>Branching</h3>
            <p>Branch memungkinkan kita untuk develop feature baru tanpa mengubah main code:</p>
            <pre><code>git branch feature-name
git checkout feature-name
# atau langsung
git checkout -b feature-name</code></pre>
            
            <h3>Merge Branch</h3>
            <p>Setelah feature selesai, merge kembali ke main branch:</p>
            <pre><code>git checkout main
git merge feature-name</code></pre>
            
            <h3>Tips Best Practices</h3>
            <ul>
                <li>Commit often dengan message yang jelas</li>
                <li>Gunakan branch untuk setiap feature baru</li>
                <li>Pull sebelum push untuk avoid conflict</li>
                <li>Jangan commit file yang tidak perlu (gunakan .gitignore)</li>
                <li>Review code sebelum merge</li>
            </ul>
            
            <h3>Resources untuk Belajar</h3>
            <ul>
                <li>Git Documentation: git-scm.com/doc</li>
                <li>GitHub Learning Lab</li>
                <li>Interactive Tutorial: learngitbranching.js.org</li>
            </ul>
            
            <p>Git dan GitHub mungkin terlihat complicated di awal, tapi dengan practice, akan menjadi second nature. Start dengan project kecil dan gradually tingkatkan complexity. Happy coding!</p>
        `
    },
    {
        id: 7,
        title: "Cafe Hits untuk Ngerjain Tugas di Bali",
        image: "images/blog-7.jpg",
        description: "Rekomendasi cafe dengan WiFi kencang dan suasana nyaman untuk mengerjakan tugas kuliah. Lengkap dengan harga dan fasilitas yang tersedia.",
        category: "Lifestyle",
        author: "Heisyan Aleandro",
        date: "15 Februari 2024",
        fullContent: `
            <p>Sebagai mahasiswa yang sering ngerjain tugas di luar rumah, finding the perfect cafe is essential. Berikut adalah rekomendasi cafe favorit saya di Bali yang cocok untuk produktif!</p>
            
            <h3>1. Kopi Kultur - Renon</h3>
            <p><strong>Why I Love It:</strong> Suasananya cozy dengan interior industrial yang aesthetic. WiFi super kencang (100+ Mbps), banyak colokan, dan tidak terlalu ramai di weekday.</p>
            <p><strong>Menu Favorit:</strong> Es Kopi Susu Gula Aren (Rp 25k), Nasi Goreng Kampung (Rp 35k)</p>
            <p><strong>Harga:</strong> Rp 20k - 50k</p>
            <p><strong>Jam Buka:</strong> 08.00 - 22.00</p>
            <p><strong>Best Time:</strong> Pagi sampai siang (sepi dan tenang)</p>
            
            <h3>2. Satu Satu Coffee - Sanur</h3>
            <p><strong>Why I Love It:</strong> View ke pantai, AC dingin, dan ada area outdoor yang instagrammable. Perfect untuk yang butuh inspirasi sambil lihat laut.</p>
            <p><strong>Menu Favorit:</strong> Iced Latte (Rp 30k), Pasta Carbonara (Rp 45k)</p>
            <p><strong>Harga:</strong> Rp 25k - 60k</p>
            <p><strong>Jam Buka:</strong> 07.00 - 23.00</p>
            <p><strong>Best Time:</strong> Sore (bisa sambil nunggu sunset)</p>
            
            <h3>3. Anomali Coffee - Ubud</h3>
            <p><strong>Why I Love It:</strong> Suasana tenang di tengah Ubud, banyak expat dan digital nomad jadi vibes-nya produktif banget. Coffee quality top notch!</p>
            <p><strong>Menu Favorit:</strong> Flat White (Rp 35k), Croissant (Rp 25k)</p>
            <p><strong>Harga:</strong> Rp 30k - 70k</p>
            <p><strong>Jam Buka:</strong> 07.00 - 21.00</p>
            <p><strong>Best Time:</strong> Pagi (fresh dan sejuk)</p>
            
            <h3>4. Revolver Espresso - Seminyak</h3>
            <p><strong>Why I Love It:</strong> Iconic cafe dengan coffee berkualitas tinggi. Tempatnya tidak terlalu besar tapi very efficient. WiFi reliable dan banyak yang WFH di sini.</p>
            <p><strong>Menu Favorit:</strong> Long Black (Rp 30k), Smashed Avocado Toast (Rp 55k)</p>
            <p><strong>Harga:</strong> Rp 25k - 75k</p>
            <p><strong>Jam Buka:</strong> 06.30 - 17.00</p>
            <p><strong>Best Time:</strong> Pagi (sebelum ramai tourist)</p>
            
            <h3>5. Hungry Bird Coffee - Canggu</h3>
            <p><strong>Why I Love It:</strong> Spacious dengan banyak meja besar yang cocok untuk group study. Menu makanannya varied dan enak-enak. Ada area smoking dan non-smoking.</p>
            <p><strong>Menu Favorit:</strong> Vietnamese Coffee (Rp 28k), Chicken Katsu Rice Bowl (Rp 48k)</p>
            <p><strong>Harga:</strong> Rp 25k - 65k</p>
            <p><strong>Jam Buka:</strong> 07.00 - 22.00</p>
            <p><strong>Best Time:</strong> Siang (AC dingin, perfect untuk focus)</p>
            
            <h3>Tips Produktif di Cafe</h3>
            <ul>
                <li>Datang saat tidak peak hours untuk dapat tempat strategis</li>
                <li>Bawa earphone untuk noise cancellation</li>
                <li>Order minimal setiap 2-3 jam (cafe etiquette)</li>
                <li>Bawa charger dan power bank</li>
                <li>Pilih tempat dekat colokan</li>
                <li>Gunakan VPN untuk keamanan WiFi public</li>
            </ul>
            
            <h3>Cafe Etiquette</h3>
            <p>Remember, cafe adalah tempat bisnis. Jangan hanya order air mineral terus duduk seharian. Be respectful dengan order secara reasonable. Juga jaga kebersihan meja dan jangan terlalu berisik saat video call.</p>
            
            <p>Semoga rekomendasi ini membantu! Happy studying and stay productive! ☕📚</p>
        `
    },
    {
        id: 8,
        title: "Review Gadget: Laptop Terbaik untuk Mahasiswa",
        image: "images/blog-6.jpg",
        description: "Memilih laptop yang tepat untuk kebutuhan kuliah dan programming. Bandingkan spesifikasi dan harga dari berbagai brand populer.",
        category: "Teknologi",
        author: "Heisyan Aleandro",
        date: "20 Februari 2024",
        fullContent: `
            <p>Memilih laptop untuk kuliah, especially untuk jurusan IT, adalah investasi penting. Setelah riset dan mencoba beberapa laptop, berikut adalah rekomendasi saya untuk mahasiswa.</p>
            
            <h3>Kriteria Laptop Ideal untuk Mahasiswa IT</h3>
            <ul>
                <li><strong>Processor:</strong> Minimal Intel Core i5 / AMD Ryzen 5 (gen terbaru)</li>
                <li><strong>RAM:</strong> Minimal 8GB, recommended 16GB</li>
                <li><strong>Storage:</strong> SSD minimal 256GB, ideal 512GB</li>
                <li><strong>Display:</strong> 14-15 inch, Full HD (1920x1080)</li>
                <li><strong>Battery:</strong> Minimal 6-8 jam untuk mobilitas</li>
                <li><strong>Weight:</strong> Maksimal 2kg untuk portability</li>
            </ul>
            
            <h3>Rekomendasi Budget: Rp 7-10 Juta</h3>
            
            <h4>1. ASUS VivoBook 14 (Rp 8.5 Juta)</h4>
            <p><strong>Specs:</strong> Intel Core i5-1135G7, 8GB RAM, 512GB SSD, 14" FHD</p>
            <p><strong>Pros:</strong> Ringan (1.4kg), battery life bagus, keyboard nyaman</p>
            <p><strong>Cons:</strong> Build quality plastik, speaker kurang loud</p>
            <p><strong>Best For:</strong> Coding, browsing, office work</p>
            
            <h4>2. Lenovo IdeaPad Slim 3i (Rp 7.5 Juta)</h4>
            <p><strong>Specs:</strong> Intel Core i5-1135G7, 8GB RAM, 512GB SSD, 14" FHD</p>
            <p><strong>Pros:</strong> Value for money, reliable, good cooling</p>
            <p><strong>Cons:</strong> Design biasa, display kurang bright</p>
            <p><strong>Best For:</strong> General use, programming, multitasking</p>
            
            <h3>Rekomendasi Mid-Range: Rp 10-15 Juta</h3>
            
            <h4>3. ASUS TUF Gaming A15 (Rp 12 Juta)</h4>
            <p><strong>Specs:</strong> AMD Ryzen 5 5600H, 8GB RAM, 512GB SSD, GTX 1650, 15.6" FHD 144Hz</p>
            <p><strong>Pros:</strong> Powerful untuk coding dan gaming, build quality solid, cooling excellent</p>
            <p><strong>Cons:</strong> Agak berat (2.3kg), battery life average saat gaming</p>
            <p><strong>Best For:</strong> Programming, game development, gaming</p>
            
            <h4>4. Acer Swift 3 (Rp 11 Juta)</h4>
            <p><strong>Specs:</strong> Intel Core i5-1135G7, 8GB RAM, 512GB SSD, 14" FHD</p>
            <p><strong>Pros:</strong> Premium build, lightweight, battery life excellent</p>
            <p><strong>Cons:</strong> RAM tidak bisa upgrade, port terbatas</p>
            <p><strong>Best For:</strong> Mobility, web development, design</p>
            
            <h3>Rekomendasi Premium: Rp 15-25 Juta</h3>
            
            <h4>5. MacBook Air M1 (Rp 15 Juta)</h4>
            <p><strong>Specs:</strong> Apple M1 Chip, 8GB RAM, 256GB SSD, 13.3" Retina</p>
            <p><strong>Pros:</strong> Performance luar biasa, battery life 15+ jam, silent (fanless), ecosystem Apple</p>
            <p><strong>Cons:</strong> Storage kecil, tidak bisa upgrade, beberapa software belum support ARM</p>
            <p><strong>Best For:</strong> iOS development, content creation, long battery life</p>
            
            <h4>6. ASUS ZenBook 14 (Rp 18 Juta)</h4>
            <p><strong>Specs:</strong> Intel Core i7-1165G7, 16GB RAM, 512GB SSD, 14" FHD</p>
            <p><strong>Pros:</strong> Premium build, powerful, display excellent, NumberPad di touchpad</p>
            <p><strong>Cons:</strong> Harga premium, port terbatas</p>
            <p><strong>Best For:</strong> Professional work, multitasking heavy, programming</p>
            
            <h3>Tips Membeli Laptop</h3>
            <ul>
                <li>Prioritaskan SSD over HDD untuk speed</li>
                <li>Cek review dari multiple sources</li>
                <li>Test keyboard dan trackpad di toko (kita akan pakai setiap hari)</li>
                <li>Pertimbangkan after-sales service dan warranty</li>
                <li>Beli saat ada promo (11.11, 12.12, etc)</li>
                <li>Jangan lupa budget untuk accessories (mouse, laptop bag, cooling pad)</li>
            </ul>
            
            <h3>Software yang Harus Diinstall</h3>
            <ul>
                <li>VS Code / IDE pilihan</li>
                <li>Git dan GitHub Desktop</li>
                <li>Browser (Chrome, Firefox)</li>
                <li>Office Suite (Microsoft Office / Google Workspace)</li>
                <li>Antivirus</li>
                <li>Cloud Storage (Google Drive, OneDrive)</li>
            </ul>
            
            <h3>Kesimpulan</h3>
            <p>Laptop terbaik adalah yang sesuai dengan kebutuhan dan budget kamu. Untuk mahasiswa IT, prioritaskan processor dan RAM yang cukup untuk coding dan multitasking. Jangan terlalu fokus pada spec tertinggi, tapi pilih yang balanced dan reliable.</p>
            
            <p>Investasi laptop yang tepat akan menemani kamu selama 4 tahun kuliah, jadi pilih dengan bijak! 💻</p>
        `
    }
];
