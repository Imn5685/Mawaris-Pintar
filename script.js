// --- DATA MATERI PEMBELAJARAN LENGKAP ---
const courseData = [
    {
        id: 'bab0', title: 'Bab 0: Mengapa Kita WAJIB Belajar Faraidh',
        subChapters: [
            {
                id: 'sub0-1', 
                title: '0.1 Urgensi & Pentingnya Ilmu Waris',
                slides: [
                    {
                        title: 'Ancaman Kekal di Neraka',
                        content: `
                            <p>Meninggalkan atau menentang hukum waris yang telah ditetapkan Allah adalah dosa besar yang mendapat ancaman siksaan yang sangat pedih.</p>
                            <div class="source-detail">
                                <h4>QS. An-Nisa' : 14</h4>
                                <p class="verse-arabic">وَمَن يَعْصِ اللَّهَ وَرَسُولَهُ وَيَتَعَدَّ حُدُودَهُ يُدْخِلْهُ نَارًا خَالِدًا فِيهَا وَلَهُ عَذَابٌ مُّهِينٌ</p>
                                <p class="verse-translation"><strong>Terjemahan:</strong> Dan siapa yang maksiat kepada Allah dan Rasul-Nya serta melanggar ketentuan-ketentuan-Nya, Allah akan memasukkannya ke dalam api neraka yang kekal abadi di dalamnya. Dan baginya siksaan yang menghinakan.</p>
                                <div class="source-explanation"><strong>Tafsir Ringkas:</strong> Ayat ini secara tegas menyatakan bahwa 'hududullah' (batas-batas hukum Allah) tidak hanya mencakup masalah jinayah (pidana), tetapi juga hukum waris ('faraidh'). Menentang pembagian yang telah ditetapkan adalah bentuk pembangkangan yang ancamannya adalah neraka.</div>
                            </div>
                        `
                    },
                    {
                        title: 'Perintah Nabi Khusus',
                        content: `
                            <p>Rasulullah SAW secara khusus memerintahkan agar umatnya belajar dan mengajarkan ilmu waris, karena ia adalah ilmu yang akan pertama kali diangkat dari masyarakat.</p>
                            <div class="hadith-text">
                                <p class="verse-arabic">تَعَلَّمُوا الْفَرَائِضَ وَعَلِّمُوهَا النَّاسَ، فَإِنِّي امْرُؤٌ مَقْبُوضٌ، وَإِنَّ الْعِلْمَ سَيُقْبَضُ، وَيَظَلُّّ النَّاسُ يَتَفَاخَرُونَ حَتَّى يُقَالَ لَهُمْ: فِيمَ كَانَ هَذَا الْقُرْآنُ؟ فَيَقُولُونَ: نُزِّلَ فِي أَهْلِ الْبَادِيَةِ مِنَ الْعَرَبِ، فَيَقُولُ أَهْلُ الْكِتَابِ: قَدْ أَخَذْنَا بِنَصِيبِنَا مِنْهُ قَبْلَ أَنْ يُنْزَلَ، فَلَا تَأْمَنُوا أَنْ يَسْتَذِلَّكُمُ اللَّهُ بِهِ.</p>
                                <p class="verse-translation"><strong>Terjemahan:</strong> Pelajarilah ilmu faraidh dan ajarkanlah kepada manusia. Karena aku adalah seorang yang akan dicabut (ilmunya), dan sesungguhnya ilmu akan diangkat (dari bumi). Manusia akan saling berbangga-bangga, hingga ada yang mengatakan kepada mereka: 'Untuk apa Al-Qur'an ini diturunkan?' Maka mereka menjawab: 'Diturunkan untuk orang-orang Badui dari bangsa Arab.' Ahli Kitab akan berkata: 'Kami telah mengambil bagian kami darinya sebelum ia diturunkan.' Maka janganlah kalian merasa aman dari siksa Allah karena hal itu.</p>
                                <p class="hadith-source">(HR. Ibnu Majah, Ad-Daruquthuny dan Al-Hakim)</p>
                                <div class="source-explanation"><strong>Penjelasan:</strong> Hadis ini menunjukkan betapa pentingnya ilmu waris. Nabi SAW memprediksi bahwa kelalaian dalam ilmu ini akan membuat umat Islam mudah ditandingi dan direndahkan oleh Ahli Kitab dalam hal hukum.</div>
                            </div>
                        `
                    },
                    {
                        title: 'Ancaman Makan Harta Haram',
                        content: `
                            <p>Salah satu akibat dari tidak membagi waris secara syar'i adalah terjadinya perbuatan memakan harta haram, baik milik sesama maupun harta anak yatim.</p>
                            <div class="source-detail">
                                <h4>QS. Al-Baqarah : 188</h4>
                                <p class="verse-arabic">وَلَا تَأْكُلُوا أَمْوَالَكُم بَيْنَكُم بِالْبَاطِلِ وَتُدْلُوا بِهَا إِلَى الْحُكَّامِ لِتَأْكُلُوا فَرِيقًا مِّنْ أَمْوَالِ النَّاسِ بِالْإِثْمِ وَأَنْتُمْ تَعْلَمُونَ</p>
                                <p class="verse-translation"><strong>Terjemahan:</strong> Dan janganlah sebahagian kamu memakan harta sebahagian yang lain di antara kamu dengan jalan yang bathil dan janganlah kamu membawa (urusan) harta itu kepada hakim, supaya kamu dapat memakan sebagian dari harta orang lain itu dengan cara berdosa, padahal kamu mengetahuinya.</p>
                            </div>
                            <div class="source-detail">
                                <h4>QS. An-Nisa' : 10</h4>
                                <p class="verse-arabic">إِنَّ الَّذِينَ يَأْكُلُونَ أَمْوَالَ الْيَتَامَى ظُلْمًا إِنَّمَا يَأْكُلُونَ فِي بُطُونِهِمْ نَارًا وَسَيَصْلَوْنَ سَعِيرًا</p>
                                <p class="verse-translation"><strong>Terjemahan:</strong> Sesungguhnya orang-orang yang memakan harta anak yatim secara zalim, sebenarnya mereka itu menelan api sepenuh perutnya dan mereka akan masuk ke dalam api yang menyala-nyala (neraka).</p>
                            </div>
                        `
                    },
                    {
                        title: 'Sejajar dengan Belajar Al-Qur\'an',
                        content: `
                            <p>Para sahabat menempatkan ilmu waris setara dengan ilmu Al-Qur'an, menunjukkan tingginya kedudukan ilmu ini.</p>
                            <div class="hadith-text">
                                <p><strong>Pernyataan Umar bin Al-Khattab ra.:</strong></p>
                                <p class="verse-arabic">تَعَلَّمُوا الْفَرَائِضَ فَإِنَّهَا مِنْ دِينِكُمْ، وَهِيَ مِنَ الْقُرْآنِ</p>
                                <p class="verse-translation"><strong>Terjemahan:</strong> Pelajarilah ilmu faraidh, karena ia termasuk dari agama kalian, dan ia adalah bagian dari Al-Qur'an.</p>
                                <div class="source-explanation"><strong>Penjelasan:</strong> Pernyataan Sayyidina Umar ra. ini menegaskan bahwa ilmu waris bukanlah ilmu sekunder, melainkan inti dari ajaran Islam yang bersumber langsung dari Al-Qur'an. Ia juga mengatakan:</p>
                                <p class="verse-arabic">تَعَلَّمُوا الْفَرَائِضَ كَمَا تَعَلَّمُونَ سُورَةً مِنَ الْقُرْآنِ</p>
                                <p class="verse-translation"><strong>Terjemahan:</strong> Pelajarilah ilmu faraidh sebagaimana kalian mempelajari sebuah surat dari Al-Qur'an.</p>
                            </div>
                        `
                    },
                    {
                        title: 'Kesimpulan: Mengapa Wajib?',
                        content: `
                            <p>Mempelajari ilmu waris adalah kewajiban karena:</p>
                            <div class="example-box">
                                <h4>WHY WE MUST LEARN</h4>
                                <ul>
                                    <li><strong>Ancaman Kekal di Neraka:</strong> Menentang hukum waris adalah maksiat yang diancam neraka.</li>
                                    <li><strong>Allah Jelaskan Langsung:</strong> Hukum ini datang langsung dari wahyu, bukan hasil pemikiran manusia.</li>
                                    <li><strong>Perintah Nabi Khusus:</strong> Nabi SAW secara khusus memerintahkan untuk mempelajarinya.</li>
                                    <li><strong>Mencegah Makan Harta Haram:</strong> Menjaga dari dosa memakan harta orang lain dan anak yatim secara zalim.</li>
                                    <li><strong>Mencegah Keluarga Pecah:</strong> Aturan yang jelas mencegah konflik dan permusuhan.</li>
                                    <li><strong>Ilmu yang Langka & Penting:</strong> Ilmu ini akan hilang, dan memelajarinya adalah menjaga agama.</li>
                                    <li><strong>Sejajar dengan Al-Qur'an:</strong> Kedudukannya setara dengan mempelajari kitab suci.</li>
                                    <li><strong>Banyak Penyimpangan:</strong> Ilmu ini dibutuhkan untuk meluruskan praktik salah yang banyak terjadi.</li>
                                </ul>
                            </div>
                        `
                    }
                ],
                quiz: { questions: [
                    { type: 'multiple-choice', question: "Apa ancaman bagi orang yang menentang hukum waris (faraidh) menurut QS. An-Nisa': 14?", options: ["Dosa kecil", "Siksaan di neraka", "Rezeki akan berkurang", "Tidak mendapat pahala"], correctAnswer: 1 },
                    { type: 'essay', question: "Jelaskan mengapa Rasulullah SAW menyebut ilmu faraidh sebagai 'setengah dari ilmu' dan 'akan diangkat pertama kali'! Apa implikasinya bagi umat Islam saat ini?", referenceAnswer: "Jawaban acuan: Disebut 'setengah dari ilmu' karena ia menyangkut aspek duniawi (harta) dan ukhrawi (akibat hukumnya), dan merupakan pilar keadilan sosial. Akan diangkat pertama karena kompleksitasnya dan kurangnya minat, sehingga para ulama yang ahli di bidang ini akan berkurang. Implikasinya saat ini adalah banyaknya perselisihan waris yang tidak bisa diselesaikan secara syar'i, meningkatnya praktik salah, dan potensi konflik keluarga yang besar." },
                    { type: 'matching', question: "Jodohkan ancaman/perintah dengan dalilnya!", pairs: [{ term: "Ancaman Neraka", match: "QS. An-Nisa': 14" }, { term: "Perintah Belajar & Mengajar", match: "Hadits Riwayat Ibnu Majah" }, { term: "Larangan Memakan Harta Haram", match: "QS. Al-Baqarah: 188" }, { term: "Ancaman Memakan Harta Anak Yatim", match: "QS. An-Nisa': 10" }, { term: "Kedudukan Setara Al-Qur'an", match: "Perkataan Umar bin Khattab ra." }] },
                    { type: 'case-study', scenario: "Di sebuah desa, setelah kepala keluarga meninggal, anak-anaknya tidak segera membagi warisan karena menunggu harga tanah naik. Selama menunggu, mereka menggunakan tanah tersebut untuk keperluan pribadi tanpa izin bersama. Salah satu anak yang tidak setuju merasa haknya dimakan.", questions: [
                        { type: 'multiple-choice', question: "Tindakan menunda pembagian waris dengan alasan 'menunggu harga naik' termasuk dalam kategori...", options: ["Diperbolehkan demi kebaikan bersama", "Dianjurkan agar hasilnya maksimal", "Bentuk pengkhianatan dan ketidakamanahan", "Tidak ada hubungannya dengan hukum waris"], correctAnswer: 2 },
                        { type: 'essay', question: "Analisis kasus di atas. Dosa apa saja yang berpotensi terjadi akibat penundaan pembagian waris tersebut? Hubungkan dengan konsep 'makan harta haram' dan 'makan harta anak yatim'!", referenceAnswer: "Jawaban acuan: Dosa yang berpotensi terjadi: 1. **Makan Harta Haram:** Menggunakan harta yang belum jelas pembagiannya untuk kepentingan pribadi adalah termasuk memakan harta dengan jalan bathil. 2. **Makan Harta Anak Yatim:** Jika di antara ahli waris ada yang masih di bawah umur (yati/ piatu), maka harta tersebut adalah harta anak yatim. Menggunakannya tanpa hak dan izin adalah memakan harta anak yatim secara zalim. 3. **Zhalim:** Tindakan ini adalah bentuk kezaliman terhadap ahli waris lain yang haknya ditunda dan digunakan. 4. **Tidak Amanah:** Mereka tidak menunaikan amanah untuk menjaga harta sebelum dibagikan secara adil. 5. **Munafik:** Jika ada janji untuk segera membagi namun dilanggar, ini menunjukkan ciri-ciri munafik." }
                    ]}
                ]}
            }
        ]
    },
    {
        id: 'bab1', title: 'Bab 1: Konsep Dasar Ilmu Mawaris',
        subChapters: [
            {
                id: 'sub1-1', 
                title: '1.1 Definisi, Pentingnya, dan Dasar Hukum',
                slides: [
                    {
                        title: 'Definisi Ilmu Mawaris (Faraidh)',
                        content: `<p><strong>Definisi Ilmu Mawaris (Faraidh):</strong> Secara bahasa, 'faraidh' adalah jamak dari 'faridhah' yang berarti bagian yang ditentukan. Secara istilah, Ilmu Mawaris adalah cabang ilmu syar'i yang mempelajari tentang siapa yang berhak menerima harta peninggalan (tirkah), berapa bagian masing-masing, dan siapa yang terhalang (mahjub) dari warisan setelah si mayit meninggal dunia.</p><p>Ilmu ini mengatur pembagian harta dengan adil sesuai syariat Islam, memastikan setiap ahli waris mendapatkan haknya dan mencegah perselisihan.</p>`
                    },
                    {
                        title: 'Dasar Hukum Utama: Al-Qur\'an',
                        content: `
                            <p>Hukum waris Islam bersumber dari wahyu ilahi, terutama Al-Qur'an. Ayat-ayat yang paling rinci mengenai pembagian warisan terdapat dalam Surah An-Nisa' (ayat 11, 12, dan 176).</p>
                            
                            <div class="source-detail">
                                <h4>Surah An-Nisa' Ayat 11</h4>
                                <p class="verse-arabic">يُوصِيكُمُ اللَّهُ فِي أَوْلَادِكُمْ ۖ لِلذَّكَرِ مِثْلُ حَظِّ الْأُنثَيَيْنِ ۚ فَإِن كُنَّ نِسَاءً فَوْقَ اثْنَتَيْنِ فَلَهُنَّ ثُلُثَا مَا تَرَكَ ۚ وَإِن كَانَتْ وَاحِدَةً فَلَهَا النِّصْفُ ۚ وَلِأَبَوَيْهِ لِكُلِّ وَاحِدٍ مِنْهُمَا السُّدُسُ مِمَّا تَرَكَ إِن كَانَ لَهُ وَلَدٌ ۚ فَإِن لَّمْ يَكُن لَّهُ وَلَدٌ وَوَرِثَهُ أَبَوَاهُ فَلِأُمِّهِ الثُّلُثُ ۚ فَإِن كَانَ لَهُ إِخْوَةٌ فَلِأُمِّهِ السُّدُسُ مِن بَعْدِ وَصِيَّةٍ يُوصِي بِهَا أَوْ دَيْنٍ ۗ آبَاؤُكُمْ وَأَبْنَاؤُكُمْ لَا تَدْرُونَ أَيُّهُمْ أَقْرَبُ لَكُمْ نَفْعًا ۚ فَرِيضَةً مِنَ اللَّهِ ۗ إِنَّ اللَّهَ كَانَ عَلِيمًا حَكِيمًا</p>
                                <p class="verse-translation"><strong>Terjemahan:</strong> Allah mensyariatkan bagimu (berbuat baik) terhadap anak-anakmu. Bagian anak laki-laki sama dengan bagian dua anak perempuan. Jika anak perempuan itu lebih dari dua, maka bagi mereka dua pertiga dari harta yang ditinggalkan. Jika anak perempuan itu seorang saja, maka dia mendapat seperdua harta. Dan untuk dua orang ibu-bapak, bagi masing-masing seperenam dari harta yang ditinggalkan, jika yang meninggal itu mempunyai anak. Jika yang meninggal tidak mempunyai anak dan ia diwarisi oleh ibu-bapaknya (saja), maka ibunya mendapat sepertiga. Jika yang meninggal itu mempunyai beberapa saudara, maka ibunya mendapat seperenam. (Pembagian ini) sesudah dipenuhi wasiat yang dibuatnya atau sesudah hutangnya dilunasi. (Tentang) orang tuamu dan anak-anakmu, kamu tidak mengetahui siapa di antara mereka yang lebih dekat (memberi) manfaat bagimu. Ini adalah ketetapan dari Allah. Sesungguhnya Allah Maha Mengetahui, Mahabijaksana.</p>
                                <div class="source-context"><strong>Asbabun Nuzul:</strong> Ayat ini turun untuk menjelaskan hukum waris setelah adanya perselisihan di masyarakat Jahiliyah dan awal Islam. Sebuah riwayat menceritakan tentang Jabir bin Abdullah RA, ia berkata: "Saya sakit seperti akan mati, lalu Rasulullah SAW datang menjenguk saya. Saya berkata: 'Wahai Rasulullah, saya mempunyai saudara perempuan.' Maka turunlah ayat tentang hukum waris."</div>
                                <div class="source-explanation"><strong>Tafsir Ringkas:</strong> Ayat ini adalah pilar utama hukum waris Islam. Ia menetapkan prinsip dasar pembagian harta untuk anak (bagian laki-laki 2x perempuan), orang tua (1/6 jika ada anak, ibu 1/3 jika tidak ada anak dan tidak ada saudara), dan memperkenalkan konsep bahwa wasiat dan hutang harus diselesaikan terlebih dahulu. Ayat ini menunjukkan keadilan dan kebijakan Allah dalam mengatur urusan harta.</div>
                            </div>
                        `
                    },
                    {
                        title: 'Dasar Hukum: As-Sunnah (Hadis)',
                        content: `
                            <p>Setelah Al-Qur'an, As-Sunnah atau hadis Rasulullah SAW menjadi sumber hukum kedua yang menjelaskan dan memperkuat ketentuan waris.</p>
                            
                            <div class="hadith-text">
                                <p class="verse-arabic">أَلْحِقُوا الْفَرَائِضَ بِأَهْلِهَا فَمَا بَقِيَ فَهُوَ لِأَوْلَى رَجُلٍ ذَكَرٍ</p>
                                <p class="verse-translation"><strong>Terjemahan:</strong> "Berikanlah bagian yang telah ditetapkan (fardh) kepada ahlinya, maka apa yang tersisa adalah untuk laki-laki yang paling dekat (kerabat)."</p>
                                <p class="hadith-source">(HR. Abu Dawud, Tirmidzi, Ibnu Majah)</p>
                                <div class="source-explanation"><strong>Penjelasan:</strong> Hadis ini menjadi dasar konsep 'asabah. Setelah semua ahli waris dengan bagian tetap (Ashabul Furudh) menerima hak mereka, sisa hartanya (jika ada) diberikan kepada kerabat laki-laki yang paling dekat dengan si mayit. Ini menciptakan hirarki yang jelas dalam pewarisan sisa harta.</div>
                            </div>
                        `
                    },
                    {
                        title: 'Pentingnya Ilmu Mawaris',
                        content: `
                            <p><strong>Pentingnya Ilmu Mawaris:</strong> Ilmu waris bukan sekadar teori matematika harta, tetapi fondasi dari keadilan sosial, stabilitas keluarga, dan implementasi syariat secara nyata.</p>
                            <ul>
                                <li><strong>Keadilan Sosial:</strong> Memastikan setiap anggota keluarga yang berhak mendapatkan bagian yang adil, mencegah dominasi dan ketidakadilan yang sering terjadi dalam sistem waris lain.</li>
                                <li><strong>Stabilitas Keluarga:</strong> Dengan aturan yang jelas, potensi konflik dan permusuhan pasca kematian dapat diminimalisir. Keluarga tahu bagian masing-masing dan dapat melanjutkan hidup dengan damai.</li>
                                <li><strong>Implementasi Syariat:</strong> Menerapkan perintah Allah dan Rasul-Nya dalam aspek kehidupan yang sangat fundamental. Meninggalkan waris adalah bagian dari ibadah.</li>
                                <li><strong>Kesejahteraan Ekonomi:</strong> Pembagian yang adil membantu sirkulasi kekayaan di tengah masyarakat dan mencegah konsentrasi harta pada satu pihak saja.</li>
                            </ul>
                        `
                    }
                ],
                quiz: { questions: [
                    { type: 'multiple-choice', question: "Hadis 'Ahlil furudh bi ahliha, fa ma baqiya li-awla rajul dzakar' menjadi dasar bagi konsep...", options: ["Radd", "Aul", "Asabah", "Hijb"], correctAnswer: 2 },
                    { type: 'essay', question: "Jelaskan mengapa ilmu waris disebut sebagai 'ilmu yang hidup' (ilmu yang akan terus relevan) di setiap zaman!", referenceAnswer: "Jawaban acuan: Ilmu waris disebut 'ilmu yang hidup' karena ia berhubungan langsung dengan realitas dasar manusia yang tidak pernah berubah: kelahiran, pernikahan, dan kematian. Selama manusia ada, urusan harta dan peninggalan akan selalu ada. Konflik seputar waris juga akan selalu muncul. Oleh karena itu, ilmu yang mengatur keadilan dalam hal ini akan selalu dibutuhkan untuk menjaga ketertiban dan keharmonisan sosial." },
                    { type: 'matching', question: "Jodohkan istilah dalam Ilmu Mawaris dengan penjelasannya!", pairs: [{ term: "Faraidh", match: "Ilmu tentang pembagian harta waris" }, { term: "Tirkah", match: "Harta peninggalan yang ditinggalkan" }, { term: "Waris", match: "Ahli waris yang berhak menerima" }, { term: "Hijb", match: "Hal yang menyebabkan seseorang tidak mendapat bagian" }, { term: "Radd", match: "Pengembalian sisa harta kepada Ashabul Furudh" }, { term: "'Aul", match: "Pengurangan bagian karena total bagian Ashabul Furudh lebih dari 1" }, { term: "'Asabah", match: "Ahli waris yang mendapat sisa harta" }] }
                ]}
            }
        ]
    },
    {
        id: 'bab2', title: 'Bab 2: Penyimpangan & Rukun Waris',
        subChapters: [
            {
                id: 'sub2-1', 
                title: '2.1 Penyimpangan Umum dalam Pembagian Waris',
                slides: [
                    {
                        title: 'Pendahuluan: Banyaknya Penyimpangan',
                        content: `<p>Di masyarakat, banyak sekali terjadi penyimpangan dari hukum waris Islam. Ini disebabkan oleh ketidaktahuan, pengaruh adat, atau bahkan keserakahan. Akibatnya, timbul banyak masalah dan dosa.</p>`
                    },
                    {
                        title: 'Penyimpangan 1: Anak Laki = Anak Perempuan',
                        content: `
                            <p>Salah satu penyimpangan yang paling umum adalah membagi harta secara rata antara anak laki-laki dan perempuan dengan alasan keadilan gender. Padahal, Islam telah menetapkan bagian yang berbeda dengan hikmah yang mendalam.</p>
                            <div class="source-detail">
                                <h4>QS. An-Nisa' : 11</h4>
                                <p class="verse-arabic">يُوصِيكُمُ اللَّهُ فِي أَوْلَادِكُمْ ۖ لِلذَّكَرِ مِثْلُ حَظِّ الْأُنثَيْيْنِ</p>
                                <p class="verse-translation"><strong>Terjemahan:</strong> Allah mensyariatkan bagimu (berbuat baik) terhadap anak-anakmu. Bagian anak laki-laki sama dengan bagian dua anak perempuan.</p>
                                <div class="source-explanation"><strong>Tafsir Ringkas:</strong> Ayat ini secara tegas menetapkan perbedaan bagian. Ini bukan bentuk diskriminasi, melainkan keadilan sosial. Anak laki-laki dibebani kewajiban finansial (nafkah, mahar) yang tidak dibebani kepada anak perempuan, sehingga bagian yang lebih besar adalah kompensasi atas tanggung jawab tersebut.</div>
                            </div>
                        `
                    },
                    {
                        title: 'Penyimpangan 2: Menunda Pembagian Waris',
                        content: `
                            <p>Alasan menunda pembagian waris sangat beragam, namun semuanya berpotensi menyebabkan dosa besar.</p>
                            <div class="example-box">
                                <h4>Alasan Menunda:</h4>
                                <ul>
                                    <li>Menunggu harga harta (tanah, saham) naik.</li>
                                    <li>Alibi untuk menguasai harta secara pribadi.</li>
                                    <li>Ada pesan dari si mayit (yang tidak boleh melanggar syariat) untuk tidak dibagi.</li>
                                    <li>Menunggu salah satu ahli waris (ayah/ibu) wafat, dengan harapan bagian akan bertambah.</li>
                                </ul>
                            </div>
                            <div class="example-box">
                                <h4>Ancaman Dosa:</h4>
                                <ul>
                                    <li><strong>Makan Harta Haram:</strong> Menggunakan harta yang belum jelas miliknya.</li>
                                    <li><strong>Makan Harta Anak Yatim:</strong> Jika ada ahli waris yang masih di bawah umur.</li>
                                    <li><strong>Zhalim:</strong> Menzalimi hak ahli waris lain.</li>
                                    <li><strong>Tidak Amanah:</strong> Mengkhianati amanah penjagaan harta.</li>
                                    <li><strong>Munafik:</strong> Menyalahi janji untuk segera membagikan.</li>
                                </ul>
                            </div>
                        `
                    },
                    {
                        title: 'Penyimpangan 3: Harta Suami Istri (Gono-gini)',
                        content: `
                            <p>Masyarakat sering menyamakan harta waris dengan harta bersama pasangan suami istri (gono-gini). Ini adalah dua konsep yang sangat berbeda dalam Islam.</p>
                            <div class="example-box">
                                <h4>Penyimpangan (Gono-gini):</h4>
                                <p>Harta yang dikumpulkan selama pernikahan dianggap milik bersama dan dibagi dua saat cerai atau salah satu meninggal.</p>
                            </div>
                            <div class="source-detail">
                                <h4>Hukum Islam:</h4>
                                <p>Hukum Islam membedakan dengan jelas:</p>
                                <ul>
                                    <li><strong>Harta Masing-masing:</strong> Harta yang dibawa sebelum nikah atau hibah yang ditujukan secara pribadi adalah milik masing-masing.</li>
                                    <li><strong>Harta Bersama (sesuai akad):</strong> Hasil kerja suami adalah milik suami, yang wajib memberi nafkah pada istri. Hasil kerja istri (jika ada izin suami) adalah milik istri.</li>
                                    <li><strong>Saling Mewarisi:</strong> Suami dan istri saling mewarisi sebagai ahli waris dengan bagian yang sudah ditetapkan (1/4 atau 1/8 untuk istri, 1/2 atau 1/4 untuk suami).</li>
                                </ul>
                                <h4>QS. An-Nisa' : 12</h4>
                                <p class="verse-arabic">وَلَكُمْ نِصْفُ مَا تَرَكَ أَزْوَاجُكُمْ... وَلَهُنَّ الرُّبُعُ مِمَّا تَرَكْتُمْ</p>
                                <p class="verse-translation"><strong>Terjemahan:</strong> "Bagimu (suami-suami) seperdua dari harta yang ditinggalkan oleh istri-istrimu... Dan bagi istri-istrimu ada seperempat dari harta yang kamu tinggalkan..."</p>
                            </div>
                        `
                    },
                    {
                        title: 'Penyimpangan 4: Hibah Bercampur Waris',
                        content: `
                            <p>Seringkali orang tua memberikan harta kepada anaknya secara hibah (hadiah) saat masih hidup, tetapi niatnya adalah untuk mengurangi bagian waris. Ini adalah praktik yang salah.</p>
                            <div class="example-box">
                                <h4>Perbedaan Mendasar: Hibah vs Waris vs Wasiat</h4>
                                <table style="width:100%; border-collapse: collapse;">
                                    <tr style="background-color:#f2f2f2;">
                                        <th style="border:1px solid #ddd;padding:8px;">Aspek</th>
                                        <th style="border:1px solid #ddd;padding:8px;">Hibah</th>
                                        <th style="border:1px solid #ddd;padding:8px;">Wasiat</th>
                                        <th style="border:1px solid #ddd;padding:8px;">Waris</th>
                                    </tr>
                                    <tr>
                                        <td style="border:1px solid #ddd;padding:8px;"><strong>Waktu Penetapan</strong></td>
                                        <td style="border:1px solid #ddd;padding:8px;">Sebelum wafat</td>
                                        <td style="border:1px solid #ddd;padding:8px;">Sebelum wafat</td>
                                        <td style="border:1px solid #ddd;padding:8px;">Setelah wafat</td>
                                    </tr>
                                    <tr>
                                        <td style="border:1px solid #ddd;padding:8px;"><strong>Waktu Penyerahan</strong></td>
                                        <td style="border:1px solid #ddd;padding:8px;">Sebelum wafat</td>
                                        <td style="border:1px solid #ddd;padding:8px;">Setelah wafat</td>
                                        <td style="border:1px solid #ddd;padding:8px;">Setelah wafat</td>
                                    </tr>
                                    <tr>
                                        <td style="border:1px solid #ddd;padding:8px;"><strong>Penerima</strong></td>
                                        <td style="border:1px solid #ddd;padding:8px;">Siapa saja</td>
                                        <td style="border:1px solid #ddd;padding:8px;">Hanya ahli waris</td>
                                        <td style="border:1px solid #ddd;padding:8px;">Hanya ahli waris</td>
                                    </tr>
                                    <tr>
                                        <td style="border:1px solid #ddd;padding:8px;"><strong>Nilai Harta</strong></td>
                                        <td style="border:1px solid #ddd;padding:8px;">Bebas</td>
                                        <td style="border:1px solid #ddd;padding:8px;">Maksimal 1/3</td>
                                        <td style="border:1px solid #ddd;padding:8px;">Sesuai faraidh</td>
                                    </tr>
                                </table>
                                <p style="margin-top:10px;"><strong>Kesimpulan:</strong> Hibah yang sah harus diserahkan saat pemberi masih hidup. Jika hanya janji, itu dianggap wasiat dan terikat batas 1/3. Memberikan hampir seluruh harta sebagai 'hibah' kepada satu anak menjelang meninggal adalah upaya menghindari hukum waris dan bisa dibatalkan.</p>
                            </div>
                        `
                    }
                ],
                quiz: { questions: [
                    { type: 'multiple-choice', question: "Bagaimana Islam memandang pembagian harta 'gono-gini' antara suami dan istri?", options: ["Sah dan diatur secara detail", "Tidak dikenal dalam hukum Islam, yang ada adalah harta masing-masing dan waris", "Sama dengan konsep waris", "Hanya berlaku jika ada perjanjian pra-nikah"], correctAnswer: 1 },
                    { type: 'essay', question: "Seorang ayah menjelang wafatnya memberikan sebuah rumah kepada anak pertamanya secara 'hibah' dengan alasan anak tersebut yang paling berjasa. Anak-anak lainnya tidak mendapat apa-apa. Analisis tindakan sang ayah menurut hukum Islam!", referenceAnswer: "Jawaban acuan: Tindakan sang ayah secara syar'i sangat bermasalah. 1. Jika rumah sudah diserahkan (balik nama) saat ia masih hidup dan sehat, maka itu adalah hibah yang sah. Namun, secara etika dan adil, ia seharusnya memperlakukan anak-anaknya secara adil. 2. Jika rumah belum diserahkan dan hanya janji, maka ini adalah wasiat. Wasiat ini tidak sah karena melebihi 1/3 (kecuali disetujui ahli waris lain) dan merugikan hak ahli waris lain. Anak-anak lainnya berhak menolak wasiat ini dan menuntut pembagian harta sesuai hukum waris setelah ayahnya wafat." }
                ]}
            },
            {
                id: 'sub2-2', 
                title: '2.2 Rukun & Detail Teknis Waris',
                slides: [
                    {
                        title: 'Pengenalan Rukun Waris',
                        content: `<p>Untuk bisa melakukan pembagian waris, harus ada 4 rukun (elemen pokok) yang terpenuhi. Jika salah satu tidak ada, maka pembagian waris tidak bisa dilaksanakan.</p><ol><li><strong>Pewaris (Al-Mayyit):</strong> Orang yang meninggal dunia.</li><li><strong>Harta Warisan (At-Tirkah):</strong> Aset yang ditinggalkan pewaris.</li><li><strong>Ahli Waris (Al-Warats):</strong> Orang yang berhak menerima harta.</li><li><strong>Hijb (Al-Hijb):</strong> Sebab yang menyebabkan seseorang tidak mendapat bagian.</li></ol>`
                    },
                    {
                        title: 'Rukun 1: Pewaris (Al-Mayyit)',
                        content: `
                            <p><strong>Pengertian:</strong> Orang yang wafat dan hartanya harus dibagikan waris.</p>
                            <p><strong>Syarat-syarat Pewaris:</strong></p>
                            <ul>
                                <li><strong>Muslim:</strong> Pewaris harus beragama Islam. Non-Muslim tidak mewariskan hartanya menurut hukum Islam.</li>
                                <li><strong>Sudah Wafat:</strong> Proses waris hanya terjadi setelah kematian yang pasti.</li>
                                <li><strong>Punya Harta:</strong> Harus ada harta yang bisa diwariskan.</li>
                            </ul>
                            <p><strong>Kewajiban Pewaris (sebelum meninggal):</strong></p>
                            <ul>
                                <li><strong>Belajar Ilmu Waris:</strong> Agar bisa membagikan dengan benar.</li>
                                <li><strong>Mengajarkan Ahli Waris:</strong> Memberi pemahaman kepada keluarga.</li>
                                <li><strong>Menjelaskan Harta:</strong> Mencantumkan harta, hutang, dan wasiatnya secara jelas.</li>
                            </ul>
                            <div class="example-box">
                                <h4>⚠️ BOM WAKTU</h4>
                                <p>Hal-hal yang sering menjadi sumber konflik pasca kematian:</p>
                                <ul>
                                    <li><strong>Berhutang diam-diam.</strong></li>
                                    <li><strong>Harta yang samar-samar (milik siapa?).</strong></li>
                                    <li><strong>Wasiat yang keliru atau tidak sah.</strong></li>
                                    <li><strong>Hibah tanpa saksi dan legalitas yang jelas.</strong></li>
                                    <li><strong>Aset dengan legalitas bermasalah (tanah tidak bersertifikat).</strong></li>
                                </ul>
                            </div>
                        `
                    },
                    {
                        title: 'Rukun 2: Harta Warisan (At-Tirkah)',
                        content: `
                            <p><strong>Syarat-syarat Harta Warisan:</strong></p>
                            <ul>
                                <li><strong>Halal & Tidak Sengketa:</strong> Harta harus berasal dari sumber yang halal dan bukan objek sengketa di pengadilan.</li>
                                <li><strong>Dimiliki Selagi Hidup:</strong> Harta tersebut benar-benar milik pewaris saat ia hidup.</li>
                                <li><strong>Berwujud atau Bernilai:</strong> Bisa berupa benda (rumah, mobil) atau hak (hak atas deposito, saham).</li>
                            </ul>
                            <p><strong>Yang Harus Dikeluarkan Dulu dari Harta:</strong></p>
                            <p>Harta warisan (bruto) tidak langsung dibagi. Beberapa hal harus dipotong terlebih dahulu:</p>
                            <ol>
                                <li><strong>Biaya Jenazah:</strong> Biaya pengurusan jenazah yang wajar (mandi, kafan, penguburan).</li>
                                <li><strong>Hutang Pewaris:</strong> Semua hutang yang dimiliki pewaris kepada orang lain harus dilunasi terlebih dahulu.</li>
                                <li><strong>Wasiat:</strong> Pelaksanaan wasiat (maksimal 1/3 harta) kepada penerima yang bukan ahli waris.</li>
                                <li><strong>Hak Pihak Lain:</strong> Seperti sewa yang belum dibayar, gaji karyawan, dll.</li>
                            </ol>
                            <p>Harta yang tersisa setelah semua potongan inilah yang disebut <strong>'harta bersih'</strong> yang akan dibagikan kepada ahli waris.</p>
                        `
                    },
                    {
                        title: 'Rukun 3: Ahli Waris (Al-Warats)',
                        content: `
                            <p><strong>Syarat Menerima Waris:</strong></p>
                            <ul>
                                <li><strong>Hidup Saat Pewaris Wafat:</strong> Ahli waris harus hidup pada saat pewaris meninggal. Janin dalam kandungan dianggap hidup asalkan lahir dalam keadaan hidup.</li>
                                <li><strong>Tidak Terhalang (Hijb):</strong> Tidak ada ahli waris lain yang lebih dekat yang menutup haknya.</li>
                                <li><strong>Ada Hubungan Nasab atau Perjanjian:</strong> Baik melalui garis keturunan (nasab) atau perjanjian (seperti budak yang membebaskan tuannya).</li>
                                <li><strong>Berbeda Agama dengan Pewaris:</strong> Ahli waris harus seagama dengan pewaris (Muslim mewarisi Muslim, non-Muslim mewarisi non-Muslim). Ahli waris non-Muslim tidak mewarisi pewaris Muslim.</li>
                            </ul>
                            <div class="example-box">
                                <h4>📊 Hirarki Ahli Waris (Sederhana)</h4>
                                <p><strong>Kelompok 1 (Anak & Cucu):</strong> Anak laki-laki, anak perempuan, cucu laki-laki, cucu perempuan.</p>
                                <p><strong>Kelompok 2 (Orang Tua & Kakek):</strong> Ayah, ibu, kakek, nenek.</p>
                                <p><strong>Kelompok 3 (Saudara & Keluarganya):</strong> Saudara kandung, saudara seayah, saudara seibu, keponakan, paman, bibi.</p>
                                <p><strong>Kelompok 4 (Kerabat Jauh):</strong> Sepupu dan seterusnya.</p>
                                <p><strong>Kelompok 5 (Lainnya):</strong> Suami/istri, mantan budak.</p>
                            </div>
                        `
                    },
                    {
                        title: 'Rukun 4: Hijb (Penghalang)',
                        content: `
                            <p><strong>Pengertian Hijb:</strong> Adanya ahli waris tertentu yang menyebabkan ahli waris lain tidak mendapat bagian sama sekali. Ada dua jenis hijb:</p>
                            <ol>
                                <li><strong>Hijb Nuqson (Penghalangan Sebagian):</strong> Ahli waris tetap dapat bagian, tapi jumlahnya berkurang dari bagian semestinya. Contoh: Ibu dari 1/3 menjadi 1/6 jika ada dua saudara kandung.</li>
                                <li><strong>Hijb Hirman (Penghalangan Seluruhnya):</strong> Ahli waris tidak mendapat bagian sama sekali. Contoh: Cucu tidak mendapat bagian jika ada anak.</li>
                            </ol>
                            <div class="example-box">
                                <h4>Contoh Hijb Hirman Paling Umum:</h4>
                                <ul>
                                    <li><strong>Anak menghalangi Cucu:</strong> Jika ada anak laki-laki atau perempuan, maka cucu (dari anak yang sudah meninggal) tidak mendapat bagian.</li>
                                    <li><strong>Ayah menghalangi Kakek:</strong> Jika ada ayah, maka kakek (ayah dari ayah) tidak mendapat bagian.</li>
                                    <li><strong>Saudara Kandung menghalangi Saudara Seayah/Seibu:</strong> Jika ada saudara kandung, maka saudara seayah atau seibu tidak mendapat bagian.</li>
                                    <li><strong>Anak laki-laki menghalangi semua saudara dan paman:</strong> Kehadiran anak laki-laki (atau cucu laki-laki) akan menghalangi saudara kandung, saudara seayah, paman, dan semua kerabat dari garis ayah.</li>
                                </ul>
                            </div>
                            <p><strong>Prinsip Utama:</strong> <em>Yang lebih dekat nasabnya menghalangi yang lebih jauh.</em></p>
                        `
                    }
                ],
                quiz: { questions: [
                    { type: 'multiple-choice', question: "Dari urutan berikut, siapa yang paling berhak mewarisi harta mayit jika keduanya hidup: Ayah atau Kakek?", options: ["Ayah", "Kakek", "Sama-sama berhak", "Tidak ada yang berhak"], correctAnswer: 0 },
                    { type: 'essay', question: "Jelaskan urutan yang benar dalam menangani harta peninggalan, mulai dari saat pewaris meninggal hingga siap dibagikan! Sebutkan apa saja yang harus dipotong terlebih dahulu!", referenceAnswer: "Jawaban acuan: Urutan yang benar adalah: 1. <strong>Finalisasi Kematian:</strong> Memastikan pewaris benar-benar wafat. 2. <strong>Pengamanan & Inventarisasi Harta:</strong> Mengamankan dan mencatat semua aset (bruto) yang ditinggalkan. 3. <strong>Potongan Wajib:</strong> Mengeluarkan biaya-biaya yang harus didahulukan dari harta bruto, yaitu: (a) Biaya pengurusan jenazah, (b) Pelunasan semua hutang pewaris, (c) Pelaksanaan wasiat yang sah (maks 1/3). 4. <strong>Penentuan Ahli Waris:</strong> Mengidentifikasi siapa saja ahli waris yang berhak dan masih hidup. 5. <strong>Pembagian Harta Bersih:</strong> Membagikan sisa harta (bersih) kepada ahli waris sesuai dengan bagian faraidh dan ashabah." },
                    { type: 'matching', question: "Jodohkan Rukun Waris dengan penjelasannya!", pairs: [{ term: "Pewaris", match: "Orang yang meninggal dunia" }, { term: "Harta Warisan", match: "Aset yang ditinggalkan setelah dipotong biaya" }, { term: "Ahli Waris", match: "Pihak yang berhak menerima harta" }, { term: "Hijb", match: "Sebab yang menghalangi seseorang mewarisi" }] },
                    { type: 'case-study', scenario: "Pak Budi meninggal dunia. Ia meninggalkan istri, seorang ayah, seorang ibu, seorang anak laki-laki (Andi), dan seorang cucu laki-laki (Budi Jr) dari anak pertamanya yang sudah meninggal terlebih dahulu. Tidak ada hutang atau wasiat.", questions: [
                        { type: 'multiple-choice', question: "Siapa di antara ahli waris di atas yang terhalang (mahjub) dan tidak mendapat bagian?", options: ["Istri", "Ayah", "Cucu laki-laki (Budi Jr)", "Ibu"], correctAnswer: 2 },
                        { type: 'essay', question: "Jelaskan mengapa ahli waris yang Anda pilih di soal sebelumnya terhalang! Sebutkan prinsip hukum yang mendasarinya!", referenceAnswer: "Jawaban acuan: Ahli waris yang terhalang adalah cucu laki-laki (Budi Jr). Prinsip hukum yang mendasarinya adalah <strong>'Hijb Hirman'</strong>, yaitu penghalangan total. Kehadiran Anak laki-laki (Andi) yang merupakan anak kandung dari Pak Budi, secara otomatis menghalangi hak cucu (Budi Jr) untuk mewarisi. Prinsipnya adalah <strong>'Anak menghalangi Cucu'</strong>. Karena garis keturunan ke bawah sudah diwakili oleh anak, maka cucu tidak lagi mendapat bagian." }
                    ]}
                ]}
            }
        ]
    },
    {
        id: 'bab3', title: 'Bab 3: Ahli Waris Bagian Tetap (Ashabul Furudh) - Bagian 1',
        subChapters: [
            {
                id: 'sub3-1', 
                title: '3.1 Suami, Istri, Ayah, dan Ibu',
                slides: [
                    {
                        title: 'Hak Suami dalam Warisan',
                        content: `
                            <p><strong>1. Suami:</strong> Suami selalu mendapat bagian. <strong>1/2</strong> jika istri tidak meninggalkan anak (atau cucu). <strong>1/4</strong> jika istri meninggalkan anak (atau cucu).</p>
                            <div class="source-detail">
                                <h4>Surah An-Nisa' Ayat 12 (bagian pertama)</h4>
                                <p class="verse-arabic">وَلَكُمْ نِصْفُ مَا تَرَكَ أَزْوَاجُكُمْ إِن لَّمْ يَكُن لَّهُنَّ وَلَدٌ ۚ فَإِن كَانَ لَهُنَّ وَلَدٌ فَلَكُمُ الرُّبُعُ مِمَّا تَرَكُوا</p>
                                <p class="verse-translation"><strong>Terjemahan:</strong> "Bagimu (suami-suami) seperdua dari harta yang ditinggalkan oleh istri-istri kamu, jika mereka tidak mempunyai anak. Jika istri-istri itu mempunyai anak, maka kamu (suami-suami) mendapat seperempat dari harta yang ditinggalkan oleh mereka..."</p>
                                <div class="source-explanation"><strong>Tafsir Ringkas:</strong> Ayat ini secara eksplisit menetapkan bagian suami. Suami mendapat 1/2 jika istri tidak meninggalkan anak, dan 1/4 jika istri meninggalkan anak. Ini menunjukkan posisi penting suami sebagai penopang keluarga.</div>
                            </div>
                        `
                    },
                    {
                        title: 'Hak Istri dalam Warisan',
                        content: `
                            <p><strong>2. Istri:</strong> <strong>1/4</strong> jika suami tidak meninggalkan anak. Jika lebih dari satu istri, mereka berbagi 1/4 ini. <strong>1/8</strong> jika suami meninggalkan anak. Jika lebih dari satu istri, mereka berbagi 1/8 ini.</p>
                            <div class="source-detail">
                                <h4>Surah An-Nisa' Ayat 12 (bagian kedua)</h4>
                                <p class="verse-arabic">مِن بَعْدِ وَصِيَّةٍ يُوصِي بِهَا أَوْ دَيْنٍ ۗ وَلَهُنَّ الرُّبُعُ مِمَّا تَرَكْتُمْ إِن لَّمْ يَكُمْ وَلَدٌ ۚ فَإِن كَانَ لَكُمْ وَلَدٌ فَلَهُنَّ الثُّمُنُ مِمَّا تَرَكْتُمْ</p>
                                <p class="verse-translation"><strong>Terjemahan:</strong> "...(pembagian ini) sesudah dipenuhi wasiat yang dibuatnya atau sesudah hutangnya dilunasi. Dan bagi istri-istrimu ada seperempat dari harta yang kamu tinggalkan, jika kamu tidak mempunyai anak. Jika kamu mempunyai anak, maka bagi mereka seperdelapan dari harta yang kamu tinggalkan..."</p>
                                <div class="source-explanation"><strong>Tafsir Ringkas:</strong> Ayat ini melanjutkan penjelasan bagian istri. Istri mendapat 1/4 jika suami tidak meninggalkan anak, dan 1/8 jika suami meninggalkan anak. Jika ada lebih dari satu istri, mereka berbagi bagian tersebut secara merata.</div>
                            </div>
                        `
                    },
                    {
                        title: 'Hak Ayah dan Ibu dalam Warisan',
                        content: `
                            <p><strong>3. Ayah:</strong> <strong>1/6</strong> jika mayit meninggalkan anak laki-laki (atau cucu laki-laki). <strong>'Asabah</strong> (ahli waris sisa) jika mayit tidak meninggalkan anak laki-laki (atau cucu laki-laki).</p>
                            <p><strong>4. Ibu:</strong> <strong>1/6</strong> jika mayit meninggalkan anak (atau cucu) atau meninggalkan dua saudara kandung atau lebih. <strong>1/3</strong> jika mayit tidak meninggalkan anak, cucu, dan tidak ada dua saudara kandung atau lebih. <strong>1/3 dari sisa</strong> jika mayit hanya meninggalkan ayah dan suami/istri (kasus 'asysyarthan).</p>
                            <div class="source-detail">
                                <h4>Surah An-Nisa' Ayat 11 (bagian tengah)</h4>
                                <p class="verse-arabic">وَلِأَبَوَيْهِ لِكُلِّ وَاحِدٍ مِنْهُمَا السُّدُسُ مِمَّا تَرَكَ إِن كَانَ لَهُ وَلَدٌ ۚ فَإِن لَّمْ يَكُن لَّهُ وَلَدٌ وَوَرِثَهُ أَبَوَاهُ فَلِأُمِّهِ الثُّلُثُ ۚ فَإِن كَانَ لَهُ إِخْوَةٌ فَلِأُمِّهِ السُّدُسُ</p>
                                <p class="verse-translation"><strong>Terjemahan:</strong> "Dan untuk dua orang ibu-bapak, bagi masing-masing seperenam dari harta yang ditinggalkan, jika yang meninggal itu mempunyai anak. Jika yang meninggal tidak mempunyai anak dan ia diwarisi oleh ibu-bapaknya (saja), maka ibunya mendapat sepertiga. Jika yang meninggal itu mempunyai beberapa saudara, maka ibunya mendapat seperenam."</p>
                                <div class="source-explanation"><strong>Tafsir Ringkas:</strong> Ayat ini mengatur bagian orang tua. Ayah dan ibu masing-masing mendapat 1/6 jika ada anak. Jika tidak ada anak, ibu mendapat 1/3, tetapi bagian ini berkurang menjadi 1/6 jika ada dua saudara atau lebih (karena saudara membantu kebutuhan ibu). Ayah dalam kasus ini menjadi 'ashabah.</div>
                            </div>
                        `
                    }
                ],
                quiz: { questions: [
                    { type: 'multiple-choice', question: "Seorang laki-laki meninggal dunia, meninggalkan istri, ayah, ibu, dan dua anak perempuan. Berapa bagian ibu?", options: ["1/6", "1/3", "1/3 dari sisa", "Tidak mendapat bagian"], correctAnswer: 0 },
                    { type: 'essay', question: "Jelaskan alasan logis di balik bagian ayah yang bisa menjadi 'ashabah (pewaris sisa) jika tidak ada anak laki-laki, padahal ia termasuk Ashabul Furudh!", referenceAnswer: "Jawaban acuan: Ayah memiliki peran ganda: sebagai orang tua dan sebagai pewaris laki-laki terdekat. Jika si mayit meninggalkan anak laki-laki, maka anak tersebut mewakili garis keturunan ayah. Dalam kasus ini, peran utama ayah adalah sebagai orang tua dengan bagian 1/6. Jika tidak ada anak laki-laki, ayah berperan sebagai pewaris laki-laki utama (pengganti si mayit) yang menjamin kelangsungan garis keturunan, sehingga ia berhak atas sisa harta setelah ahli waris lain (yang bukan 'ashabah) mendapat bagian." }
                ]}
            }
        ]
    },
    {
        id: 'bab4', title: 'Bab 4: Ahli Waris Bagian Tetap (Ashabul Furudh) - Bagian 2',
        subChapters: [
            {
                id: 'sub4-1', 
                title: '4.1 Anak Perempuan dan Saudara Kandung Perempuan',
                slides: [
                    {
                        title: 'Hak Anak Perempuan dalam Warisan',
                        content: `
                            <p><strong>Anak Perempuan:</strong> <strong>Anak Perempuan Tunggal:</strong> Mendapat <strong>1/2</strong> harta jika tidak ada anak laki-laki. <strong>Dua Anak Perempuan atau Lebih:</strong> Mendapat <strong>2/3</strong> harta jika tidak ada anak laki-laki. <strong>Bersama Anak Laki-laki:</strong> Menjadi <strong>'Ashabah</strong>, bagian anak laki-laki setara dengan bagian dua anak perempuan.</p>
                            <div class="source-detail">
                                <h4>Surah An-Nisa' Ayat 11 (bagian awal)</h4>
                                <p class="verse-arabic">يُوصِيكُمُ اللَّهُ فِي أَوْلَادِكُمْ ۖ لِلذَّكَرِ مِثْلُ حَظِّ الْأُنثَيَيْنِ ۚ فَإِن كُنَّ نِسَاءً فَوْقَ اثْنَتَيْنِ فَلَهُنَّ ثُلُثَا مَا تَرَكَ ۚ وَإِن كَانَتْ وَاحِدَةً فَلَهَا النِّصْفُ</p>
                                <p class="verse-translation"><strong>Terjemahan:</strong> "Allah mensyariatkan bagimu (berbuat baik) terhadap anak-anakmu. Bagian anak laki-laki sama dengan bagian dua anak perempuan. Jika anak perempuan itu lebih dari dua, maka bagi mereka dua pertiga dari harta yang ditinggalkan. Jika anak perempuan itu seorang saja, maka dia mendapat seperdua harta."</p>
                                <div class="source-explanation"><strong>Tafsir Ringkas:</strong> Ayat ini secara fundamental menetapkan bagian anak perempuan. Jika hanya satu, dapat 1/2. Jika dua atau lebih, dapat 2/3 secara bersama. Ayat ini juga menetapkan prinsip bahwa jika ada anak laki-laki, anak perempuan tidak lagi mendapat bagian fardh (tetap), tetapi menjadi 'ashabah bersamanya dengan perbandingan 1:2.</div>
                            </div>
                        `
                    },
                    {
                        title: 'Hak Saudara Kandung Perempuan dalam Warisan',
                        content: `
                            <p><strong>Saudara Kandung Perempuan:</strong> <strong>Saudara Kandung Perempuan Tunggal:</strong> Mendapat <strong>1/2</strong> harta jika tidak ada anak perempuan, saudara seayah perempuan, dan tidak ada anak laki-laki. <strong>Dua Saudara Kandung Perempuan atau Lebih:</strong> Mendapat <strong>2/3</strong> harta jika tidak ada anak perempuan, saudara seayah perempuan, dan tidak ada anak laki-laki. <strong>Bersama Anak Perempuan:</strong> Menjadi <strong>'Ashabah</strong> bersama anak perempuan.</p>
                            <div class="source-detail">
                                <h4>Surah An-Nisa' Ayat 176 (bagian akhir)</h4>
                                <p class="verse-arabic">يَسْتَفْتُونَكَ قُلِ اللَّهُ يُفْتِيكُمْ فِي الْكَلَالَةِ ۚ إِمْرُؤٌ هَلَكَ لَهُ وَلَدٌ وَلَيْسَ لَهُ أُخْتٌ فَلَهَا نِصْفُ مَا تَرَكَ ۚ وَهُوَ يَرِثُهَا إِن لَّمْ يَكُن لَّهَا وَلَدٌ ۚ فَإِن كَانَتَا اثْنَتَيْنِ فَلَهُمَا الثُّلُثَانِ مِمَّا تَرَكَ</p>
                                <p class="verse-translation"><strong>Terjemahan:</strong> "Mereka meminta fatwa kepadamu (tentang kalalah). Katakanlah: 'Allah memberi fatwa kepadamu tentang kalalah (yaitu: jika seorang meninggal dunia, dan ia tidak mempunyai anak dan mempunyai saudara perempuan), maka bagi saudara perempuan itu seperdua dari harta yang ditinggalkannya. Dan saudara laki-lakinya mewarisi seluruhnya jika ia tidak mempunyai anak. Jika (saudara-saudara perempuan itu) dua orang, maka keduanya mendapat dua pertiga dari harta yang ditinggalkan...'"</p>
                                <div class="source-explanation"><strong>Tafsir Ringkas:</strong> Ayat ini khusus membahas hukum waris untuk saudara kandung (kalalah). Ini menunjukkan bahwa saudara kandung perempuan dapat mewarisi seperti anak perempuan jika tidak ada anak. Satu saudara perempuan dapat 1/2, dua dapat 2/3. Jika ada saudara laki-laki, ia menjadi 'ashabah dan mewarisi sisanya.</div>
                            </div>
                        `
                    },
                    {
                        title: 'Prinsip Penting dalam Warisan',
                        content: `
                            <p><strong>Prinsip Penting:</strong> Kehadiran anak perempuan akan <strong>menghalangi (hijb)</strong> saudara kandung perempuan untuk mendapat bagian 1/2 atau 2/3. Namun, saudara kandung perempuan tidak sepenuhnya terbuang, karena ia bisa 'naik kelas' menjadi 'ashabah bersama anak perempuan.</p>
                            <div class="hadith-text">
                                <p class="verse-arabic">لِلْأُخْتِ مِثْلُ حَظِّ الْبِنْتَيْنِ، يَرِثْنَ مِمَّا يَرِثْنَ، وَيَحْجُبْنَ مِمَّا يَحْجُبْنَ</p>
                                <p class="verse-translation"><strong>Terjemahan:</strong> "Bagi saudara perempuan (kandung) sepertiga bagian dua anak perempuan. Ia mewarisi dari apa yang diwarisi oleh anak perempuan dan terhalang oleh apa yang menghalangi anak perempuan."</p>
                                <p class="hadith-source">(HR. Ibnu Majah)</p>
                                <div class="source-explanation"><strong>Penjelasan:</strong> Hadis ini menjelaskan posisi saudara perempuan. Ia memiliki kedudukan yang mirip dengan anak perempuan dalam hal mewarisi (jika tidak ada anak) dan dalam hal terhalang (oleh anak laki-laki). Hadis ini juga menjadi dasar bagi saudara perempuan untuk menjadi 'ashabah bersama anak perempuan.</div>
                            </div>
                        `
                    }
                ],
                quiz: { questions: [
                    { type: 'multiple-choice', question: "Seorang ayah meninggal, meninggalkan seorang anak perempuan dan seorang anak laki-laki. Anak perempuan mendapat bagian?", options: ["1/2", "1/3", "1/6", "Bagian sisa sebagai Ashabah"], correctAnswer: 3 },
                    { type: 'essay', question: "Jelaskan hikmah di balik aturan 'bagian anak laki-laki setara dengan dua anak perempuan'. Mengapa aturan ini dianggap adil dalam konteks tanggung jawab sosial dan ekonomi Islam?", referenceAnswer: "Jawaban acuan: Hikmah aturan ini terkait dengan kewajiban dan tanggung jawab. Dalam Islam, anak laki-laki (suami) dibebani kewajiban untuk memberikan nafkah (mahar, maskawin) kepada istrinya dan bertanggung jawab atas seluruh kebutuhan finansial keluarga (istri dan anak-anaknya). Sementara itu, anak perempuan tidak dibebani kewajiban serupa; bahkan hartanya sendiri adalah haknya sepenuhnya. Untuk memenuhi tanggung jawab finansial yang lebih besar ini, anak laki-laki diberikan bagian waris yang lebih besar." }
                ]}
            }
        ]
    },
    {
        id: 'bab5', title: 'Bab 5: Ahli Waris Pewaris Sisa (Asabah)',
        subChapters: [
            {
                id: 'sub5-1', 
                title: '5.1 Definisi, Jenis, dan Hirarki Asabah',
                slides: [
                    {
                        title: 'Definisi Asabah',
                        content: `
                            <p><strong>Definisi Asabah:</strong> Ahli waris yang tidak memiliki bagian tertentu (fardh). Mereka hanya mendapat bagian jika ada harta yang tersisa setelah semua ahli waris Ashabul Furudh menerima bagian mereka. Jika tidak ada sisa, mereka tidak mendapat apa-apa.</p>
                            <p>Berdasarkan dokumen Fiqih Pembagian Warisan, Asabah adalah orang-orang yang mendapatkan sisa warisan setelah ash-habul furudh mengambil bagian mereka.</p>
                            <div class="hadith-text">
                                <p class="verse-arabic">أَلْحِقُوا الْفَرَائِضَ بِأَهْلِهَا فَمَا بَقِيَ فَهُوَ لِأَوْلَى رَجُلٍ ذَكَرٍ</p>
                                <p class="verse-translation"><strong>Terjemahan:</strong> "Berikanlah bagian yang telah ditetapkan (fardh) kepada ahlinya, maka apa yang tersisa adalah untuk laki-laki yang paling dekat (kerabat)."</p>
                                <p class="hadith-source">(HR. Abu Dawud, Tirmidzi, Ibnu Majah)</p>
                                <div class="source-explanation"><strong>Penjelasan:</strong> Hadis ini menjadi dasar konsep 'asabah. Setelah semua ahli waris dengan bagian tetap (Ashabul Furudh) menerima hak mereka, sisa hartanya (jika ada) diberikan kepada kerabat laki-laki yang paling dekat dengan si mayit. Ini menciptakan hirarki yang jelas dalam pewarisan sisa harta.</div>
                            </div>
                            <div class="note-box">
                                <p><strong>Catatan Penting:</strong> Dalam fiqih waris, Asabah memiliki peran krusial untuk memastikan tidak ada harta warisan yang tidak terbagikan. Jika setelah pembagian kepada Ashabul Furudh masih tersisa harta, maka Asabah akan menerima sisa tersebut sesuai dengan hirarki kekerabatan.</p>
                            </div>
                        `
                    },
                    {
                        title: 'Jenis-jenis Asabah',
                        content: `
                            <p><strong>Jenis-jenis Asabah:</strong></p>
                            <ul>
                                <li><strong>'Ashabah Nasabiyah (Karena Keturunan):</strong> Ahli waris yang berhak mendapat sisa warisan karena memiliki hubungan keturunan dengan si mayit.</li>
                                <ul>
                                    <li><strong>'Ashabah Bin Nafsi:</strong> Laki-laki yang garis keturunannya sampai kepada jenazah dan tidak diselingi oleh wanita.</li>
                                    <li><strong>'Ashabah Bil Ghairi:</strong> Empat ahli waris wanita yang menjadi 'ashabah karena keberadaan ahli waris laki-laki.</li>
                                    <li><strong>'Ashabah Ma'al Ghairi:</strong> Perempuan yang menjadi 'ashabah bersama perempuan yang lainnya.</li>
                                </ul>
                                <li><strong>'Ashabah Sababiyah (Karena Sebab):</strong> Hanya satu golongan, yaitu <strong>budak yang telah membebaskan tuannya</strong> (mu'allat).</li>
                            </ul>
                            <div class="info-box">
                                <p><strong>Daftar 'Ashabah Bin Nafsi:</strong></p>
                                <ol>
                                    <li>Anak laki-laki</li>
                                    <li>Cucu laki-laki dari anak laki-laki</li>
                                    <li>Bapak</li>
                                    <li>Kakek dari pihak bapak</li>
                                    <li>Saudara laki-laki kandung</li>
                                    <li>Saudara laki-laki sebapak</li>
                                    <li>Anak dari saudara laki-laki kandung</li>
                                    <li>Anak dari saudara laki-laki sebapak</li>
                                    <li>Paman yang sekandung dengan bapak</li>
                                    <li>Paman yang sebapak dengan bapak</li>
                                    <li>Anak paman yang sekandung dengan bapak</li>
                                    <li>Anak paman yang sebapak dengan bapak</li>
                                </ol>
                            </div>
                            <div class="info-box">
                                <p><strong>Daftar 'Ashabah Bil Ghairi:</strong></p>
                                <ol>
                                    <li>Anak perempuan (menjadi ashabah karena keberadaan anak laki-laki)</li>
                                    <li>Cucu perempuan dari anak laki-laki (menjadi ashabah karena keberadaan cucu laki-laki)</li>
                                    <li>Saudara perempuan kandung (menjadi ashabah karena keberadaan saudara laki-laki kandung)</li>
                                    <li>Saudara perempuan sebapak (menjadi ashabah karena keberadaan saudara laki-laki sebapak)</li>
                                </ol>
                                <p><strong>Dasar Hukum:</strong> "Allah mensyari'atkan bagi kalian tentang (pembagian warisan) untuk anak-anak kalian, bagian seorang anak laki-laki sama dengan bagian dua orang anak perempuan." (QS. An-Nisa': 11)</p>
                            </div>
                        `
                    },
                    {
                        title: 'Hirarki Ashabah',
                        content: `
                            <p><strong>Hirarki Ashabah:</strong></p>
                            <ol>
                                <li>Anak Laki-laki (dan keturunannya).</li>
                                <li>Ayah (dan kakek).</li>
                                <li>Saudara Laki-laki Kandung (dan keturunannya).</li>
                                <li>Saudara Seayah Laki-laki (dan keturunannya).</li>
                                <li>Paman Kandung (dan keturunannya).</li>
                                <li>Paman Seayah (dan keturunannya).</li>
                            </ol>
                            <p>Prinsip utama: <strong>yang lebih dekat nasabnya menghalangi yang lebih jauh</strong>.</p>
                            <div class="example-box">
                                <p><strong>Contoh Penerapan Hirarki:</strong></p>
                                <p>Jika seorang meninggal dunia dan meninggalkan anak laki-laki dan ayah, maka seluruh sisa warisan setelah pembagian Ashabul Furudh akan diberikan kepada anak laki-laki, sedangkan ayah tidak mendapatkan bagian sisa (meskipun ayah termasuk 'ashabah).</p>
                                <p>Hal ini karena anak laki-laki memiliki kedudukan yang lebih tinggi dalam hirarki daripada ayah.</p>
                            </div>
                            <div class="note-box">
                                <p><strong>Kaidah Penting dalam Hirarki Asabah:</strong></p>
                                <ol>
                                    <li>Ahli waris yang berhubungan dengan jenazah melalui perantara seseorang, maka ia tidak mendapatkan warisan selama perantara tersebut masih ada.</li>
                                    <li>Ahli waris yang lebih dekat didahulukan daripada ahli waris yang lebih jauh.</li>
                                </ol>
                                <p><strong>Ahli Waris yang Tidak Terkena Hajb Hirman:</strong> Bapak, Ibu, Anak laki-laki, Anak perempuan, Suami atau Isteri.</p>
                            </div>
                        `
                    },
                    {
                        title: 'Kasus Khusus Ashabah',
                        content: `
                            <p><strong>Kasus-Kasus Khusus dalam Ashabah:</strong></p>
                            <div class="case-box">
                                <h4>1. 'Ashabah Ma'al Ghairi</h4>
                                <p>Saudara perempuan kandung atau saudara perempuan sebapak menjadi 'ashabah bersama dengan anak perempuan atau cucu perempuan dari anak laki-laki.</p>
                                <p><strong>Contoh:</strong> Jika seorang meninggal dunia dan meninggalkan anak perempuan tunggal (1/2) dan saudara perempuan kandung, maka saudara perempuan kandung tersebut akan menjadi 'ashabah ma'al ghairi dan mendapatkan sisa warisan (1/2).</p>
                            </div>
                            <div class="case-box">
                                <h4>2. 'Ashabah Sababiyah</h4>
                                <p>Orang yang mendapatkan sisa warisan karena memerdekakan hamba sahaya yang meninggal tanpa ahli waris 'ashabah nasabiyah.</p>
                                <p><strong>Dasar Hukum:</strong> "Sesungguhnya wala' itu bagi yang memerdekakan (hamba sahaya)." (HR. Bukhari dan Muslim)</p>
                                <p><strong>Catatan:</strong> Pewarisan karena wala' hanya satu arah saja; wali (orang yang memerdekakan) mewarisi dari hamba sahaya yang dimerdekakan, tetapi hamba sahaya yang dimerdekakan tidak mewarisi harta walinya.</p>
                            </div>
                            <div class="case-box">
                                <h4>3. Perbedaan 'Ashabah Bil Ghairi dan Ma'al Ghairi</h4>
                                <p><strong>'Ashabah Bil Ghairi:</strong> Ahli waris wanita yang asalnya termasuk ash-habul furudh akan menjadi 'ashabah karena adanya saudara lakinya.</p>
                                <p><strong>'Ashabah Ma'al Ghairi:</strong> Pada asalnya tidak ada yang menjadi 'ashabah dengan sendirinya, namun kebersamaan mereka dengan sesamanya menyebabkan mereka menjadi 'ashabah.</p>
                            </div>
                        `
                    }
                 ],
                 quiz: { questions: [
                        { type: 'multiple-choice', question: "Siapa yang termasuk Asabah Binasab?", options: ["Anak laki-laki", "Ibu", "Istri", "Anak perempuan tunggal"], correctAnswer: 0 },
                        { type: 'essay', question: "Jelaskan mengapa anak laki-laki menjadi 'asabah yang paling utama dan dapat menghalangi ayahnya sendiri untuk menjadi 'asabah, meskipun ayah adalah orang tuanya!", referenceAnswer: "Jawaban acuan: Karena dalam hukum waris, prioritas utama adalah melanjutkan garis keturunan. Anak laki-laki adalah perpanjangan tangan langsung dari si mayit. Jika anak laki-laki ada, maka garis keturunan sudah jelas dan diwakili olehnya. Ayah, meskipun orang tua, berperan sebagai penopang generasi di atasnya. Jika anak laki-laki tidak ada, barulah ayah 'turun tangan' menjadi pewaris utama ('asabah) untuk memastikan garis keturunan tidak putus." },
                        // Soal HOTS Pilihan Ganda Kompleks
                        { type: 'multiple-choice-complex', question: "Seorang laki-laki meninggal dunia dengan meninggalkan harta warisan sebesar Rp 1.000.000. Ahli waris yang tersisa adalah: seorang istri, seorang anak perempuan, seorang ayah, dan seorang saudara laki-laki kandung. Bagaimana pembagian warisan yang tepat sesuai hukum Islam?",
                            options: [
                                "Istri 1/8 (Rp 125.000), Anak perempuan 1/2 (Rp 500.000), Ayah 1/6 (Rp 166.667), Saudara laki-laki kandung sebagai 'ashabah mendapat sisa (Rp 208.333)",
                                "Istri 1/4 (Rp 250.000), Anak perempuan 1/2 (Rp 500.000), Ayah 1/6 (Rp 166.667), Saudara laki-laki kandung sebagai 'ashabah mendapat sisa (Rp 83.333)",
                                "Istri 1/8 (Rp 125.000), Anak perempuan 1/2 (Rp 500.000), Ayah sebagai 'ashabah mendapat sisa (Rp 375.000), Saudara laki-laki kandung tidak mendapat bagian",
                                "Istri 1/8 (Rp 125.000), Anak perempuan 1/2 (Rp 500.000), Ayah 1/6 (Rp 166.667), Saudara laki-laki kandung tidak mendapat bagian, sisa harta (Rp 208.333) dikembalikan (radd) kepada ahli waris selain istri"
                            ],
                            correctAnswer: 3, explanation: "Dalam kasus ini, istri mendapat 1/8, anak perempuan mendapat 1/2, dan ayah mendapat 1/6 sebagai ash-habul furudh. Saudara laki-laki kandung tidak mendapat bagian karena dihalangi oleh ayah yang lebih dekat hubungannya dengan si mayit. Sisa harta setelah pembagian kepada ash-habul furudh (1/8 + 1/2 + 1/6 = 13/24) dikembalikan (radd) kepada ahli waris selain istri, yaitu anak perempuan dan ayah sesuai dengan proporsi bagian mereka."
                        },
                        {
                            type: 'multiple-choice-complex',
                            question: "Seorang perempuan meninggal dunia dengan meninggalkan harta warisan. Ahli waris yang tersisa adalah: seorang suami, dua orang anak perempuan, seorang ibu, dan seorang saudara perempuan kandung. Manakah pernyataan yang paling tepat mengenai pembagian warisan dalam kasus ini?",
                            options: [
                                "Suami mendapat 1/4, dua anak perempuan masing-masing mendapat 1/3, ibu mendapat 1/6, dan saudara perempuan kandung tidak mendapat bagian",
                                "Suami mendapat 1/4, dua anak perempuan bersama mendapat 2/3, ibu mendapat 1/6, dan saudara perempuan kandung tidak mendapat bagian",
                                "Suami mendapat 1/4, dua anak perempuan bersama mendapat 2/3, ibu mendapat 1/6, dan sisa harta diberikan kepada saudara perempuan kandung sebagai 'ashabah ma'al ghairi",
                                "Suami mendapat 1/4, dua anak perempuan bersama mendapat 2/3, ibu mendapat 1/6, dan terjadi 'aul karena total bagian melebihi 1"
                            ],
                            correctAnswer: 2, explanation: "Dalam kasus ini, suami mendapat 1/4, dua anak perempuan bersama mendapat 2/3, dan ibu mendapat 1/6 sebagai ash-habul furudh. Saudara perempuan kandung menjadi 'ashabah ma'al ghairi karena bersama dengan anak perempuan dan mendapatkan sisa warisan. Total bagian ash-habul furudh adalah 1/4 + 2/3 + 1/6 = 13/12, yang melebihi 1, sehingga terjadi 'aul (penyesuaian proporsi) dan saudara perempuan kandung tetap mendapat bagian sebagai 'ashabah ma'al ghairi."
                        },
                        {
                            type: 'multiple-choice-complex',
                            question: "Seorang laki-laki meninggal dunia dengan meninggalkan harta warisan. Ahli waris yang tersisa adalah: seorang istri, seorang cucu perempuan dari anak laki-laki, seorang ayah, dan seorang saudara perempuan seayah. Manakah pernyataan yang paling tepat mengenai pembagian warisan dalam kasus ini?",
                            options: [
                                "Istri mendapat 1/8, cucu perempuan mendapat 1/2, ayah mendapat 1/6, dan saudara perempuan seayah mendapat sisa sebagai 'ashabah",
                                "Istri mendapat 1/8, cucu perempuan mendapat 1/6 (menggenapkan 2/3 dengan saudara perempuan seayah), ayah mendapat 1/6, dan saudara perempuan seayah mendapat 1/2",
                                "Istri mendapat 1/8, cucu perempuan mendapat 1/2, ayah mendapat 1/6, dan saudara perempuan seayah tidak mendapat bagian karena dihalangi oleh ayah",
                                "Istri mendapat 1/8, cucu perempuan mendapat 1/2, ayah sebagai 'ashabah mendapat sisa, dan saudara perempuan seayah tidak mendapat bagian"
                            ],
                            correctAnswer: 2, explanation: "Dalam kasus ini, istri mendapat 1/8, cucu perempuan mendapat 1/2, dan ayah mendapat 1/6 sebagai ash-habul furudh. Saudara perempuan seayah tidak mendapat bagian karena dihalangi oleh ayah yang lebih dekat hubungannya dengan si mayit. Sisa harta setelah pembagian kepada ash-habul furudh (1/8 + 1/2 + 1/6 = 11/24) diberikan kepada ayah sebagai 'ashabah, bukan kepada saudara perempuan seayah." }
                    ]}
            }        
        ]
    },
    {
        id: 'bab6', title: 'Bab 6: Praktik Pembagian & Kasus Khusus',
        subChapters: [
            {
                id: 'sub6-1', 
                title: '6.1 Masalah Aul (Kekurangan Bagian)',
                slides: [
                    {
                        title: 'Pengertian Aul',
                        content: `
                            <p><strong>'Aul</strong> terjadi ketika jumlah total bagian Ashabul Furudh lebih dari 1 (satu). Akibatnya, bagian masing-masing ahli waris harus dikurangi secara proporsional agar totalnya menjadi 1. Ini adalah 'keajaiban' matematika dalam Al-Qur'an.</p>
                            <div class="source-detail">
                                <h4>Contoh Kasus 'Aul dalam Al-Qur'an</h4>
                                <p class="verse-arabic">وَلَكُمْ نِصْفُ مَا تَرَكَ أَزْوَاجُكُمْ إِن لَّمْ يَكُن لَّهُنَّ وَلَدٌ ۚ فَإِن كَانَ لَهُنَّ وَلَدٌ فَلَكُمُ الرُّبُعُ مِمَّا تَرَكُوا ۗ مِن بَعْدِ وَصِيَّةٍ يُوصِي بِهَا أَوْ دَيْنٍ ۗ وَلَهُنَّ الرُّبُعُ مِمَّا تَرَكْتُمْ إِن لَّمْ يَكُمْ وَلَدٌ ۚ فَإِن كَانَتَا اثْنَتَيْنِ فَلَهُمَا الثُّلُثَانِ مِمَّا تَرَكَ</p>
                                <p class="verse-translation"><strong>Terjemahan:</strong> "Bagimu (suami-suami) seperdua dari harta yang ditinggalkan oleh istri-istri kamu, jika mereka tidak mempunyai anak. Jika istri-istri itu mempunyai anak, maka kamu (suami-suami) mendapat seperempat... Dan bagi istri-istrimu ada seperempat dari harta yang kamu tinggalkan, jika kamu tidak mempunyai anak. Jika kamu mempunyai anak, maka bagi mereka seperdelapan... (jika saudara-saudara perempuan itu) dua orang, maka keduanya mendapat dua pertiga dari harta yang ditinggalkan..."</p>
                                <div class="source-explanation"><strong>Tafsir Ringkas:</strong> Jika seorang mayit meninggalkan suami (1/4), ibu (1/3), dan dua saudara perempuan (2/3), maka total bagian = 1/4 + 1/3 + 2/3 = 1 1/4. Ini adalah contoh klasik 'aul yang disebutkan dalam Al-Qur'an. Solusinya adalah dengan mengurangi (taul) bagian masing-masing secara proporsional.</div>
                            </div>
                        `
                    },
                    {
                        title: 'Cara Menghitung Aul',
                        content: `
                            <p><strong>Cara Menghitung 'Aul:</strong></p>
                            <ol>
                                <li>Jumlahkan semua bagian Ashabul Furudh yang ada.</li>
                                <li>Jika hasilnya lebih dari 1, maka terjadi 'aul.</li>
                                <li>Tentukan "bilangan pokok" dengan mencari penyebut persekutuan terkecil (KPK) dari semua penyebut bagian.</li>
                                <li>Bagikan bilangan pokok tersebut kepada setiap ahli waris sesuai dengan bagian semula mereka.</li>
                            </ol>
                            <p><strong>Contoh:</strong> Suami (1/4), Ibu (1/3), 2 Saudara Perempuan (2/3). Total = 1/4 + 1/3 + 2/3 = 1 1/4. Bilangan pokok = 12. Suami dapat 3/12 (1/4). Ibu dapat 4/12 (1/3). 2 Saudara dapat 8/12 (2/3). Total bagian baru = 15/12. Karena melebihi bilangan pokok (12), semua bagian harus dikurangi proporsional terhadap 12. Hasil akhir: Suami 3/15, Ibu 4/15, masing-masing saudara 4/15.</p>
                        `
                    }
                ],
                quiz: { questions: [
                    { type: 'multiple-choice', question: "Kapan terjadi masalah 'Aul?", options: ["Ketika total bagian kurang dari 1", "Ketika total bagian lebih dari 1", "Ketika tidak ada 'Asabah", "Ketika mayit tidak punya ahli waris"], correctAnswer: 1 },
                    { type: 'essay', question: "Jelaskan bagaimana cara menghitung pembagian harta jika terjadi masalah 'Aul. Berikan contoh perhitungan sederhana!", referenceAnswer: "Jawaban acuan: Cara menghitung 'aul adalah dengan mengalikan setiap bagian dengan bilangan pokok (hasil dari 1 dibagi total bagian asal). Contoh: Mayit meninggalkan suami (1/2) dan dua saudara perempuan (2/3). Total asal = 1/2 + 2/3 = 7/6. Bilangan pokok = 1 / (7/6) = 6/7. Bagian akhir suami = 1/2 * 6/7 = 3/7. Bagian akhir masing-masing saudara perempuan = (1/3) * 6/7 = 2/7." }
                ]}
            },
            {
                id: 'sub6-2', 
                title: '6.2 Masalah Radd (Kelebihan Bagian)',
                slides: [
                    {
                        title: 'Pengertian Radd',
                        content: `
                            <p><strong>Radd</strong> (artinya: kembali, pengembalian) terjadi ketika jumlah total bagian Ashabul Furudh kurang dari 1 (satu) dan tidak ada ahli waris Asabah yang menerima sisa harta tersebut. Akibatnya, sisa harta tersebut <strong>dikembalikan</strong> kepada para Ashabul Furudh itu sendiri secara proporsional sesuai bagian mereka.</p>
                            <p><strong>Contoh Sederhana:</strong> Seorang wanita meninggal, hanya meninggalkan seorang ibu (1/6) dan seorang suami (1/4). Total bagian = 1/6 + 1/4 = 5/12. Sisa harta = 1 - 5/12 = 7/12. Karena tidak ada Asabah, sisa 7/12 ini dikembalikan (Radd) kepada ibu dan suami.</p>
                        `
                    },
                    {
                        title: 'Syarat Terjadinya Radd',
                        content: `
                            <p><strong>Syarat-syarat terjadinya Radd:</strong></p>
                            <ol>
                                <li><strong>Total Bagian Ashabul Furudh Kurang dari 1:</strong> Jumlah semua bagian yang sudah ditetapkan tidak mencapai seluruh harta.</li>
                                <li><strong>Tidak Ada Ahli Waris Asabah:</strong> Tidak ada pewaris sisa yang berhak atas sisa harta tersebut. Jika ada Asabah, maka sisa harta menjadi milik mereka, bukan untuk Radd.</li>
                            </ol>
                            <div class="example-box">
                                <h4>Contoh Kasus Radd:</h4>
                                <p>Mayit meninggalkan: Ibu (1/6) dan 2 Saudara Kandung Perempuan (2/3).</p>
                                <p><strong>Analisis:</strong></p>
                                <ul>
                                    <li>Ashabul Furudh: Ibu (1/6), 2 Saudara Perempuan (2/3).</li>
                                    <li>Asabah: Tidak ada.</li>
                                    <li>Total Bagian: 1/6 + 2/3 = 5/6 (kurang dari 1).</li>
                                    <li><strong>Kesimpulan: Terjadi Radd.</strong></li>
                                </ul>
                            </div>
                        `
                    },
                    {
                        title: 'Cara Menghitung Radd',
                        content: `
                            <p><strong>Cara Menghitung Radd:</strong></p>
                            <p>Sisa harta (1 - total bagian) dibagikan secara proporsional kepada semua Ashabul Furudh.</p>
                            <p><strong>Menggunakan Contoh Sebelumnya (Ibu 1/6, 2 Saudara 2/3):</strong></p>
                            <ol>
                                <li>Total bagian asal = 5/6.</li>
                                <li>Sisa harta untuk Radd = 1 - 5/6 = 1/6.</li>
                                <li><strong>Metode 1 (Mengalikan Bagian):</strong>
                                    <ul>
                                        <li>Bagian Ibu baru = (1/6) / (5/6) = 1/5 harta.</li>
                                        <li>Bagian masing-masing Saudara baru = (1/3) / (5/6) = 2/5 harta.</li>
                                    </ul>
                                </li>
                                <li><strong>Metode 2 (Mencari Pecahan Baru):</strong>
                                    <ul>
                                        <li>Jumlahkan pembilang bagian asli: 1 (ibu) + 4 (2 saudara) = 5.</li>
                                        <li>Ibu mendapat 1/5 harta.</li>
                                        <li>Masing-masing saudara mendapat 2/5 harta.</li>
                                    </ul>
                                </li>
                            </ol>
                        `
                    },
                    {
                        title: 'Penting: Siapa yang Tidak Dapat Radd?',
                        content: `
                            <p>Ini adalah poin krusial yang sering menjadi perdebatan di kalangan ulama.</p>
                            <p><strong>Pendapat Jumhur (Mayoritas Ulama):</strong> Suami dan Istri <strong>tidak mendapat bagian Radd</strong>. Mereka hanya mendapat bagian yang sudah ditetapkan (1/2, 1/4, 1/8). Sisa harta hanya dibagikan kepada Ashabul Furudh lainnya (seperti ibu, anak, saudara, dll).</p>
                            <p><strong>Alasannya:</strong> Bagian suami/istri dianggap sudah 'final' dan maksimal karena mereka bukan bagian dari garis keturunan darah (nasab) mayit. Mereka mewarisi karena adanya ikatan pernikahan, bukan karena hubungan kekerabatan darah.</p>
                            <div class="example-box">
                                <h4>Contoh: Suami Tidak Dapat Radd</h4>
                                <p>Mayit meninggalkan: Suami (1/4) dan Ibu (1/6).</p>
                                <p>Total bagian = 1/4 + 1/6 = 5/12. Sisa = 7/12.</p>
                                <p><strong>Menurut Jumhur:</strong> Suami tetap dapat 1/4. Sisa 7/12 + bagian ibu 1/6 (2/12) = 9/12. Ibu mendapat seluruhnya, yaitu 9/12 atau 3/4 harta.</p>
                                <p><strong>Hasil Akhir: Suami 1/4, Ibu 3/4.</strong></p>
                            </div>
                        `
                    }
                ],
                quiz: { questions: [
                    { type: 'multiple-choice', question: "Kapan terjadi masalah 'Radd'?", options: ["Ketika total bagian kurang dari 1 dan tidak ada Asabah", "Ketika total bagian lebih dari 1", "Ketika ada ahli waris Asabah", "Ketika mayit hanya meninggalkan suami dan istri"], correctAnswer: 0 },
                    { type: 'essay', question: "Jelaskan perbedaan mendasar antara 'Aul dan Radd! Berikan contoh sederhana untuk masing-masing!", referenceAnswer: "Jawaban acuan: **Aul** terjadi ketika total bagian Ashabul Furudh LEBIH dari 1, sehingga bagian masing-masing harus DIKURANGI secara proporsional. Contoh: Suami (1/4), Ibu (1/3), 2 Saudara Perempuan (2/3). Total = 1 1/4. Semua bagian harus dikurangi. **Radd** terjadi ketika total bagian Ashabul Furudh KURANG dari 1 dan tidak ada Asabah, sehingga SISA harta tersebut DIKEMBALIKAN kepada Ashabul Furudh secara proporsional. Contoh: Ibu (1/6) dan 2 Saudara Perempuan (2/3). Total = 5/6. Sisa 1/6 dikembalikan kepada mereka." },
                    { type: 'matching', question: "Jodohkan istilah dengan kondisi yang tepat!", pairs: [{ term: "Aul", match: "Total bagian Ashabul Furudh lebih dari 1" }, { term: "Radd", match: "Total bagian Ashabul Furudh kurang dari 1 dan tidak ada Asabah" }, { term: "Asabah", match: "Ahli waris yang menerima sisa harta" }, { term: "Hijb", match: "Ahli waris yang tidak mendapat bagian karena ada yang lebih dekat" }] }
                ]}
            }
        ]
    }
];

// --- APLIKASI LOGIKA ---
let currentChapterId = null, currentSubChapterId = null, currentSlideIndex = 0;
let quizState = { 
    questions: [], 
    currentQuestionIndex: 0, 
    score: 0, 
    totalPossibleScore: 0,
    currentAnswer: null,
    canGoBack: true
};
let caseStudyState = { answeredSubQuestions: new Set() };
let totalScore = 0, totalPossibleScore = 0;

const views = document.querySelectorAll('.view');

// --- UTILITAS PENYIMPANAN (STORAGE) ---
const storage = {
    get: (key) => { const data = localStorage.getItem(key); return data ? JSON.parse(data) : null; },
    set: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
    getProgress: () => storage.get('mawarisProgress') || {},
    saveProgress: (progress) => storage.set('mawarisProgress', progress),
    markCompleted: (type, id) => { const p = storage.getProgress(); if (!p[type]) p[type] = {}; p[type][id] = true; storage.saveProgress(p); },
    isCompleted: (type, id) => { const p = storage.getProgress(); return !!(p[type] && p[type][id]); },
    getQuizScores: () => storage.get('mawarisQuizScores') || {},
    saveQuizScore: (id, score, total) => { const s = storage.getQuizScores(); s[id] = { score: score, total: total }; storage.set('mawarisQuizScores', s); },
    getUserName: () => storage.get('mawarisUserName') || 'Pengguna',
    saveUserName: (name) => storage.set('mawarisUserName', name)
};

// --- KONTROLER TAMPILAN (VIEW CONTROLLER) ---
function showView(viewId) { 
    views.forEach(v => v.classList.remove('active')); 
    document.getElementById(viewId).classList.add('active'); 
}

function renderDashboard() {
    const chapterList = document.getElementById('chapter-list'); 
    chapterList.innerHTML = '';
    const userName = storage.getUserName();
    if (!userName) { 
        showView('welcome-view'); 
        return; 
    }
    
    let previousChapterCompleted = true;
    
    courseData.forEach((chapter, chapterIndex) => {
        const card = document.createElement('div'); 
        card.className = 'chapter-card';
        card.innerHTML = `<h3>${chapter.title}</h3>`;
        const list = document.createElement('ul'); 
        list.className = 'sub-chapter-list';
        
        let chapterCompleted = true;
        
        chapter.subChapters.forEach((sub, subIndex) => {
            const item = document.createElement('li'); 
            item.className = 'sub-chapter-item';
            const isLessonDone = storage.isCompleted('lessons', sub.id);
            const isQuizDone = storage.isCompleted('quizzes', sub.id);
            
            // Check if previous chapter is completed
            let isAccessible = previousChapterCompleted;
            
            // For the first chapter, check if previous subchapter is completed
            if (chapterIndex === 0 && subIndex > 0) {
                const prevSubId = chapter.subChapters[subIndex - 1].id;
                isAccessible = storage.isCompleted('lessons', prevSubId) && storage.isCompleted('quizzes', prevSubId);
            }
            
            // For subsequent chapters, check if all subchapters in previous chapter are completed
            if (chapterIndex > 0) {
                const prevChapter = courseData[chapterIndex - 1];
                isAccessible = prevChapter.subChapters.every(prevSub => 
                    storage.isCompleted('lessons', prevSub.id) && storage.isCompleted('quizzes', prevSub.id)
                );
            }
            
            if (!isAccessible) {
                item.classList.add('locked');
                chapterCompleted = false;
            }
            
            if (isLessonDone && isQuizDone) item.classList.add('completed');
            
            item.innerHTML = `<a href="#">${sub.title}</a><span class="status-icon">${isLessonDone && isQuizDone ? '✅' : (isAccessible ? '⏳' : '🔒')}</span>`;
            
            if (isAccessible) {
                item.querySelector('a').onclick = (e) => { 
                    e.preventDefault(); 
                    showLesson(chapter.id, sub.id); 
                };
            }
            
            list.appendChild(item);
        });
        
        if (chapterCompleted) {
            previousChapterCompleted = true;
        } else {
            previousChapterCompleted = false;
        }
        
        card.appendChild(list); 
        chapterList.appendChild(card);
    });
    
    updateProgressBar(); 
    checkCompletionStatus(); 
    showView('dashboard-view');
}

function updateProgressBar() {
    const totalSubChapters = courseData.reduce((acc, ch) => acc + ch.subChapters.length, 0);
    const progress = storage.getProgress();
    const completedLessons = Object.keys(progress.lessons || {}).length;
    const completedQuizzes = Object.keys(progress.quizzes || {}).length;
    const totalTasks = totalSubChapters * 2;
    const completedTasks = completedLessons + completedQuizzes;
    const percentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = `${percentage}%`; 
    progressBar.textContent = `${percentage}%`;
}

function checkCompletionStatus() {
    const totalSubChapters = courseData.reduce((acc, ch) => acc + ch.subChapters.length, 0);
    const progress = storage.getProgress();
    const completedQuizzes = Object.keys(progress.quizzes || {}).length;
    document.getElementById('certificate-button-container').style.display = 
        (completedQuizzes === totalSubChapters) ? 'block' : 'none';
}

// --- KONTROLER PEMBELAJARAN (LESSON CONTROLLER) ---
function showLesson(chapterId, subChapterId) {
    currentChapterId = chapterId; 
    currentSubChapterId = subChapterId;
    currentSlideIndex = 0;
    
    const chapter = courseData.find(ch => ch.id === chapterId);
    const subChapter = chapter.subChapters.find(sub => sub.id === subChapterId);
    
    document.getElementById('lesson-title').textContent = subChapter.title;
    
    renderSlide();
    showView('lesson-view'); 
    storage.markCompleted('lessons', subChapterId);
}

function renderSlide() {
    const chapter = courseData.find(ch => ch.id === currentChapterId);
    const subChapter = chapter.subChapters.find(sub => sub.id === currentSubChapterId);
    const slide = subChapter.slides[currentSlideIndex];
    
    document.getElementById('lesson-content').innerHTML = `
        <h3>${slide.title}</h3>
        ${slide.content}
    `;
    
    document.getElementById('slide-counter').textContent = `Slide ${currentSlideIndex + 1}/${subChapter.slides.length}`;
    
    document.getElementById('prev-slide-btn').disabled = currentSlideIndex === 0;
    document.getElementById('next-slide-btn').disabled = currentSlideIndex === subChapter.slides.length - 1;
}

// --- KONTROLER KUIS (QUIZ CONTROLLER) ---
function startQuiz() {
    const chapter = courseData.find(ch => ch.id === currentChapterId);
    const subChapter = chapter.subChapters.find(sub => sub.id === currentSubChapterId);
    quizState.questions = subChapter.quiz.questions;
    quizState.currentQuestionIndex = 0;
    quizState.score = 0;
    quizState.totalPossibleScore = calculateTotalPossibleScore(quizState.questions);
    quizState.currentAnswer = null;
    quizState.canGoBack = true;
    caseStudyState.answeredSubQuestions = new Set(); // Reset case study state

    document.getElementById('quiz-title').textContent = `Asesmen: ${subChapter.title}`;
    document.getElementById('back-to-dashboard-quiz').style.display = 'none';
    document.getElementById('quiz-result').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    
    renderQuestion();
    showView('quiz-view');
}

function calculateTotalPossibleScore(questions) {
    let score = 0;
    questions.forEach(q => {
        if (q.type === 'multiple-choice' || q.type === 'essay') score += 1;
        else if (q.type === 'matching') score += q.pairs.length;
        else if (q.type === 'case-study') {
            q.questions.forEach(cq => {
                if (cq.type === 'multiple-choice' || cq.type === 'essay') score += 1;
            });
        }
    });
    return score;
}

function renderQuestion() {
    if (quizState.currentQuestionIndex >= quizState.questions.length) { 
        showQuizResult(); 
        return; 
    }
    
    const question = quizState.questions[quizState.currentQuestionIndex];
    const progressInfo = `Soal ${quizState.currentQuestionIndex + 1} / ${quizState.questions.length}`;
    document.getElementById('quiz-progress-info').textContent = progressInfo;
    
    // Reset current answer
    quizState.currentAnswer = null;
    
    document.getElementById('quiz-options').style.display = 'none';
    document.getElementById('quiz-essay-container').style.display = 'none';
    document.getElementById('quiz-matching-container').style.display = 'none';
    document.getElementById('quiz-case-study-container').style.display = 'none';
    
    // Setup navigation buttons
    setupQuizNavigation();

    switch(question.type) {
        case 'multiple-choice': renderMultipleChoice(question); break;
        case 'essay': renderEssay(question); break;
        case 'matching': renderMatching(question); break;
        case 'case-study': renderCaseStudy(question); break;
    }
}

function setupQuizNavigation() {
    const navContainer = document.getElementById('quiz-navigation');
    if (!navContainer) {
        const newNavContainer = document.createElement('div');
        newNavContainer.id = 'quiz-navigation';
        newNavContainer.className = 'quiz-navigation';
        document.getElementById('quiz-container').appendChild(newNavContainer);
    }
    
    const navButtons = document.getElementById('quiz-navigation');
    navButtons.innerHTML = `
        <button id="quiz-prev-btn" class="btn btn-secondary" ${quizState.currentQuestionIndex === 0 || !quizState.canGoBack ? 'disabled' : ''}>
            <i class="fas fa-arrow-left"></i> Kembali
        </button>
        <button id="quiz-hesitate-btn" class="btn btn-warning">
            <i class="fas fa-question-circle"></i> Ragu-ragu
        </button>
        <button id="quiz-next-btn" class="btn btn-primary" disabled>
            Lanjut <i class="fas fa-arrow-right"></i>
        </button>
    `;
    
    document.getElementById('quiz-prev-btn').onclick = () => {
        if (quizState.canGoBack && quizState.currentQuestionIndex > 0) {
            quizState.currentQuestionIndex--;
            renderQuestion();
        }
    };
    
    document.getElementById('quiz-hesitate-btn').onclick = () => {
        // Mark question as hesitant for review
        const hesitantQuestions = storage.get('mawarisHesitantQuestions') || [];
        const questionId = `${currentSubChapterId}-${quizState.currentQuestionIndex}`;
        if (!hesitantQuestions.includes(questionId)) {
            hesitantQuestions.push(questionId);
            storage.set('mawarisHesitantQuestions', hesitantQuestions);
        }
        alert('Soal ditandai untuk review nanti.');
    };
    
    document.getElementById('quiz-next-btn').onclick = () => {
        if (quizState.currentAnswer !== null) {
            quizState.canGoBack = false; // Disable going back after moving forward
            quizState.currentQuestionIndex++;
            renderQuestion();
        }
    };
}

function enableNextButton() {
    document.getElementById('quiz-next-btn').disabled = false;
}

function renderMultipleChoice(question) {
    document.getElementById('quiz-options').style.display = 'block';
    document.getElementById('question-text').textContent = question.question;
    const optionsContainer = document.getElementById('quiz-options');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const li = document.createElement('li'); 
        li.className = 'quiz-option'; 
        li.textContent = option;
        li.onclick = () => {
            selectAnswer(index, question.correctAnswer);
            enableNextButton();
        };
        optionsContainer.appendChild(li);
    });
}

function renderEssay(question) {
    document.getElementById('quiz-essay-container').style.display = 'block';
    document.getElementById('question-text').textContent = question.question;
    const container = document.getElementById('quiz-essay-container');
    container.innerHTML = `
        <textarea id="essay-answer" placeholder="Ketik jawaban Anda di sini..."></textarea>
        <div id="reference-answer" class="essay-reference" style="display:none;">
            <strong>Jawaban Acuan:</strong>
            <p>${question.referenceAnswer}</p>
        </div>
    `;
    
    const essayAnswer = document.getElementById('essay-answer');
    essayAnswer.addEventListener('input', () => {
        if (essayAnswer.value.trim().length > 0) {
            enableNextButton();
        } else {
            document.getElementById('quiz-next-btn').disabled = true;
        }
    });
    
    // Override the next button behavior for essay questions
    const originalNextBtn = document.getElementById('quiz-next-btn');
    const newNextBtn = originalNextBtn.cloneNode(true);
    originalNextBtn.parentNode.replaceChild(newNextBtn, originalNextBtn);
    
    newNextBtn.onclick = () => {
        if (essayAnswer.value.trim().length > 0) {
            // Show reference answer when clicking next
            document.getElementById('reference-answer').style.display = 'block';
            quizState.score++;
            
            // Disable the textarea
            essayAnswer.disabled = true;
            
            // Change the button text to "Lanjut"
            newNextBtn.textContent = 'Lanjut';
            newNextBtn.onclick = () => {
                quizState.canGoBack = false;
                quizState.currentQuestionIndex++;
                renderQuestion();
            };
        }
    };
}

function renderMatching(question) {
    document.getElementById('quiz-matching-container').style.display = 'block';
    document.getElementById('question-text').textContent = question.question;
    const container = document.getElementById('quiz-matching-container');
    container.innerHTML = `<div class="matching-container"></div><button id="check-matching-btn" class="btn btn-primary">Cocokkan Jawaban</button>`;
    const matchingContainer = container.querySelector('.matching-container');
    const matches = {};
    
    question.pairs.forEach((pair, index) => {
        matches[pair.term] = pair.match;
        const itemDiv = document.createElement('div'); 
        itemDiv.className = 'matching-item';
        itemDiv.innerHTML = `<label>${pair.term}:</label><select data-term="${pair.term}"><option value="">-- Pilih --</option></select>`;
        matchingContainer.appendChild(itemDiv);
    });
    
    const allMatches = [...new Set(question.pairs.map(p => p.match))];
    document.querySelectorAll('#quiz-matching-container select').forEach(select => {
        allMatches.forEach(match => {
            const option = document.createElement('option'); 
            option.value = match; 
            option.textContent = match; 
            select.appendChild(option);
        });
        
        select.addEventListener('change', () => {
            // Check if all selects have a value
            const allSelected = Array.from(document.querySelectorAll('#quiz-matching-container select'))
                .every(s => s.value !== '');
            
            if (allSelected) {
                enableNextButton();
            } else {
                document.getElementById('quiz-next-btn').disabled = true;
            }
        });
    });
    
    // Override the next button behavior for matching questions
    const originalNextBtn = document.getElementById('quiz-next-btn');
    const newNextBtn = originalNextBtn.cloneNode(true);
    originalNextBtn.parentNode.replaceChild(newNextBtn, originalNextBtn);
    
    newNextBtn.onclick = () => {
        let correctCount = 0;
        document.querySelectorAll('#quiz-matching-container select').forEach(select => {
            const term = select.dataset.term;
            const userAnswer = select.value;
            if (userAnswer === matches[term]) { 
                select.style.borderColor = 'var(--success-color)'; 
                correctCount++; 
            }
            else { 
                select.style.borderColor = 'var(--danger-color)'; 
            }
        });
        quizState.score += correctCount;
        
        // Disable all selects
        document.querySelectorAll('#quiz-matching-container select').forEach(select => {
            select.disabled = true;
        });
        
        // Change the button text to "Lanjut"
        newNextBtn.textContent = 'Lanjut';
        newNextBtn.onclick = () => {
            quizState.canGoBack = false;
            quizState.currentQuestionIndex++;
            renderQuestion();
        };
    };
}

function renderCaseStudy(question) {
    document.getElementById('quiz-case-study-container').style.display = 'block';
    const container = document.getElementById('quiz-case-study-container');
    container.innerHTML = `<div class="case-study-scenario"><strong>Skenario:</strong><br>${question.scenario}</div>`;
    const subQuestionsContainer = document.createElement('div');
    subQuestionsContainer.id = 'sub-questions-container';
    
    question.questions.forEach((subQ, index) => {
        const subQDiv = document.createElement('div'); 
        subQDiv.className = 'case-study-sub-question';
        subQDiv.innerHTML = `<p><strong>${index + 1}. ${subQ.question}</strong></p>`;
        if (subQ.type === 'multiple-choice') {
            const optionsList = document.createElement('ul'); 
            optionsList.className = 'quiz-options';
            subQ.options.forEach((opt, i) => {
                const li = document.createElement('li'); 
                li.className = 'quiz-option'; 
                li.textContent = opt;
                li.onclick = () => {
                    selectSubAnswer(index, i, subQ.correctAnswer);
                    checkCaseStudyCompletion();
                };
                optionsList.appendChild(li);
            });
            subQDiv.appendChild(optionsList);
        } else if (subQ.type === 'essay') {
            subQDiv.innerHTML += `
                <textarea id="case-essay-${index}" placeholder="Ketik jawaban Anda..."></textarea>
                <div id="case-ref-${index}" class="essay-reference" style="display:none;"><strong>Acuan:</strong><p>${subQ.referenceAnswer}</p></div>
            `;
            
            const essayAnswer = document.getElementById(`case-essay-${index}`);
            essayAnswer.addEventListener('input', () => {
                if (essayAnswer.value.trim().length > 0) {
                    caseStudyState.answeredSubQuestions.add(index);
                } else {
                    caseStudyState.answeredSubQuestions.delete(index);
                }
                checkCaseStudyCompletion();
            });
        }
        subQuestionsContainer.appendChild(subQDiv);
    });
    container.appendChild(subQuestionsContainer);
    
    document.getElementById('question-text').textContent = 'Analisislah skenario berikut dengan cermat.';
}

function selectSubAnswer(qIndex, aIndex, correctAnswer) {
    const options = document.querySelectorAll(`#sub-questions-container .case-study-sub-question:nth-of-type(${qIndex + 1}) .quiz-option`);
    options.forEach(o => o.classList.add('disabled'));
    if (aIndex === correctAnswer) { 
        options[aIndex].classList.add('correct'); 
        quizState.score++; 
    }
    else { 
        options[aIndex].classList.add('incorrect'); 
        options[correctAnswer].classList.add('correct'); 
    }
    caseStudyState.answeredSubQuestions.add(qIndex);
}

function checkCaseStudyCompletion() {
    const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
    const totalSubQuestions = currentQuestion.questions.length;
    
    // Check if all multiple choice questions are answered
    const mcQuestions = currentQuestion.questions.filter(q => q.type === 'multiple-choice');
    const mcAnswered = mcQuestions.every((q, index) => 
        caseStudyState.answeredSubQuestions.has(index)
    );
    
    // Check if all essay questions have content
    const essayQuestions = currentQuestion.questions.filter(q => q.type === 'essay');
    const essayAnswered = essayQuestions.every((q, index) => {
        const essayIndex = currentQuestion.questions.indexOf(q);
        const essayElement = document.getElementById(`case-essay-${essayIndex}`);
        return essayElement && essayElement.value.trim().length > 0;
    });
    
    if (mcAnswered && essayAnswered && caseStudyState.answeredSubQuestions.size === totalSubQuestions) {
        enableNextButton();
        
        // Show reference answers for essay questions
        essayQuestions.forEach((q, index) => {
            const essayIndex = currentQuestion.questions.indexOf(q);
            const refElement = document.getElementById(`case-ref-${essayIndex}`);
            if (refElement) {
                refElement.style.display = 'block';
            }
        });
        
        // Override the next button behavior for case study questions
        const originalNextBtn = document.getElementById('quiz-next-btn');
        const newNextBtn = originalNextBtn.cloneNode(true);
        originalNextBtn.parentNode.replaceChild(newNextBtn, originalNextBtn);
        
        newNextBtn.onclick = () => {
            quizState.canGoBack = false;
            quizState.currentQuestionIndex++;
            renderQuestion();
        };
    }
}

function selectAnswer(selectedIndex, correctAnswer) {
    quizState.currentAnswer = selectedIndex;
    const options = document.querySelectorAll('.quiz-option');
    options.forEach(option => option.classList.add('disabled'));
    if (selectedIndex === correctAnswer) { 
        options[selectedIndex].classList.add('correct'); 
        quizState.score++; 
    }
    else { 
        options[selectedIndex].classList.add('incorrect'); 
        options[correctAnswer].classList.add('correct'); 
    }
}

function showQuizResult() {
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('back-to-dashboard-quiz').style.display = 'inline-block';
    const resultContainer = document.getElementById('quiz-result');
    resultContainer.style.display = 'block';
    resultContainer.innerHTML = `
        <h3>🎉 Asesmen Selesai!</h3>
        <p>Anda mendapat skor <strong>${quizState.score} dari ${quizState.totalPossibleScore}</strong>.</p>
        <p>${quizState.score === quizState.totalPossibleScore ? 'Luar biasa! Anda sempurna.' : 'Bagus! Terus belajar untuk hasil yang lebih baik.'}</p>
    `;
    storage.saveQuizScore(currentSubChapterId, quizState.score, quizState.totalPossibleScore);
    storage.markCompleted('quizzes', currentSubChapterId);
}

function showCertificate() {
    const userName = storage.getUserName();
    const scores = storage.getQuizScores();
    let totalScore = 0, totalPossible = 0;
    
    courseData.forEach(ch => {
        ch.subChapters.forEach(sub => {
            if (scores[sub.id]) {
                totalScore += scores[sub.id].score;
                totalPossible += scores[sub.id].total;
            }
        });
    });
    const finalPercentage = totalPossible > 0 ? Math.round((totalScore / totalPossible) * 100) : 0;
    
    document.getElementById('certificate-name').textContent = userName;
    document.getElementById('certificate-score').textContent = `${finalPercentage}% (${totalScore}/${totalPossible} poin)`;
    document.getElementById('certificate-date').textContent = new Date().toLocaleDateString('id-ID');
    showView('certificate-view');
}

// --- EVENT LISTENERS ---
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed. Attaching event listeners.");
    
    document.getElementById('start-learning-btn').onclick = () => {
        const name = document.getElementById('user-name-input').value.trim();
        if (name) { 
            storage.saveUserName(name); 
            renderDashboard(); 
        } else { 
            alert('Silakan masukkan nama Anda.'); 
        }
    };
    
    document.getElementById('back-to-dashboard-lesson').onclick = () => renderDashboard();
    document.getElementById('back-to-dashboard-quiz').onclick = () => renderDashboard();
    document.getElementById('start-quiz-btn').onclick = startQuiz;
    document.getElementById('view-certificate-btn').onclick = showCertificate;
    document.getElementById('print-certificate-btn').onclick = () => window.print();
    document.getElementById('back-to-dashboard-cert').onclick = () => renderDashboard();
    
    // Slide navigation
    document.getElementById('prev-slide-btn').onclick = () => {
        if (currentSlideIndex > 0) {
            currentSlideIndex--;
            renderSlide();
        }
    };
    
    document.getElementById('next-slide-btn').onclick = () => {
        const chapter = courseData.find(ch => ch.id === currentChapterId);
        const subChapter = chapter.subChapters.find(sub => sub.id === currentSubChapterId);
        
        if (currentSlideIndex < subChapter.slides.length - 1) {
            currentSlideIndex++;
            renderSlide();
        }
    };

    const userName = storage.getUserName();
    // PERBAIKAN: Cek apakah nama yang tersimpan bukan nama default
    if (userName !== 'Pengguna') { 
        renderDashboard(); 
    } else { 
        showView('welcome-view'); 
    }
});
