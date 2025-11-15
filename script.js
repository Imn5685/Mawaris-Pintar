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
                                <div class="source-context"><strong>Asbabun Nuzul:</strong> Ayat ini turun sebagai peringatan keras bagi orang-orang yang menentang syariat Islam, termasuk dalam hal pembagian warisan yang telah ditetapkan Allah. Ayat ini menegaskan bahwa pelanggaran terhadap hukum Allah adalah bentuk kekafiran yang ancamannya adalah neraka.</div>
                                <div class="source-explanation"><strong>Tafsir Ringkas:</strong> Ayat ini secara tegas menyatakan bahwa 'hududullah' (batas-batas hukum Allah) tidak hanya mencakup masalah jinayah (pidana), tetapi juga hukum waris ('faraidh'). Menentang pembagian yang telah ditetapkan adalah bentuk pembangkangan yang ancamannya adalah neraka.</div>
                                <div class="mazhab-reference">
                                    <h4>Referensi Mazhab:</h4>
                                    <p><strong>Imam Syafi'i:</strong> Menjelaskan bahwa ayat ini mencakup semua pelanggaran syariat, termasuk menentang hukum waris yang telah ditetapkan dalam Al-Qur'an.</p>
                                    <p><strong>Imam Hanafi:</strong> Menegaskan bahwa pelanggaran terhadap hukum waris adalah dosa besar yang mengancam pelakunya dengan api neraka.</p>
                                </div>
                                <div class="indonesian-law">
                                    <h4>Hukum di Indonesia:</h4>
                                    <p>Menurut Kompilasi Hukum Islam (KHI) Pasal 171, pembagian warisan harus dilakukan sesuai dengan hukum Islam. Pelanggaran terhadap ketentuan ini dapat dipidana sesuai dengan hukum yang berlaku.</p>
                                </div>
                            </div>
                        `
                    },
                    {
                        title: 'Allah Ajarkan Langsung',
                        content: `
                            <p>Keistimewaan ilmu waris (faraidh) dalam Islam adalah bahwa rinciannya tidaklah lahir dari hasil ijtihad semata, melainkan merupakan wahyu langsung dari Allah SWT yang tertulis secara jelas dalam Al-Qur'an. Ini menunjukkan betapa fundamental dan pentingnya aturan ini bagi kesejahteraan umat manusia.</p>
                            <div class="source-detail">
                                <h4>QS. An-Nisa' : 11</h4>
                                <p class="verse-arabic">يُوصِيكُمُ اللَّهُ فِي أَوْلَادِكُمْ ۖ لِلذَّكَرِ مِثْلُ حَظِّ الْأُنثَيَيْنِ ۚ فَإِن كُنَّ نِسَاءً فَوْقَ اثْنَتَيْنِ فَلَهُنَّ ثُلُثَا مَا تَرَكَ ۚ وَإِن كَانَتْ وَاحِدَةً فَلَهَا النِّصْفُ ۚ وَلِأَبَوَيْهِ لِكُلِّ وَاحِدٍ مِنْهُمَا السُّدُسُ مِمَّا تَرَكَ إِن كَانَ لَهُ وَلَدٌ ۚ فَإِن لَّمْ يَكُن لَّهُ وَلَدٌ وَوَرِثَهُ أَبَوَاهُ فَلِأُمِّهِ الثُّلُثُ ۚ فَإِن كَانَ لَهُ إِخْوَةٌ فَلِأُمِّهِ السُّدُسُ مِن بَعْدِ وَصِيَّةٍ يُوصِي بِهَا أَوْ دَيْنٍ ۗ آبَاؤُكُمْ وَأَبْنَاؤُكُمْ لَا تَدْرُونَ أَيُّهُمْ أَقْرَبُ لَكُمْ نَفْعًا ۚ فَرِيضَةً مِنَ اللَّهِ ۗ إِنَّ اللَّهَ كَانَ عَلِيمًا حَكِيمًا</p>
                                <p class="verse-translation"><strong>Terjemahan:</strong> Allah mensyariatkan bagimu (berbuat baik) terhadap anak-anakmu. Bagian anak laki-laki sama dengan bagian dua anak perempuan. Jika anak perempuan itu lebih dari dua, maka bagi mereka dua pertiga dari harta yang ditinggalkan. Jika anak perempuan itu seorang saja, maka dia mendapat seperdua harta. Dan untuk dua orang ibu-bapak, bagi masing-masing seperenam dari harta yang ditinggalkan, jika yang meninggal itu mempunyai anak. Jika yang meninggal tidak mempunyai anak dan ia diwarisi oleh ibu-bapaknya (saja), maka ibunya mendapat sepertiga. Jika yang meninggal itu mempunyai beberapa saudara, maka ibunya mendapat seperenam. (Pembagian ini) sesudah dipenuhi wasiat yang dibuatnya atau sesudah hutangnya dilunasi. (Tentang) orang tuamu dan anak-anakmu, kamu tidak mengetahui siapa di antara mereka yang lebih dekat (memberi) manfaat bagimu. Ini adalah ketetapan dari Allah. Sesungguhnya Allah Maha Mengetahui, Mahabijaksana.</p>
                                <div class="source-context"><strong>Asbabun Nuzul:</strong> Ayat ini turun sebagai respons terhadap praktik waris yang tidak adil pada masa Jahiliyah. Sebuah riwayat menceritakan kasus Sa'ad bin Rabi' yang gugur dalam Perang Uhud dan meninggalkan harta, istri, dan dua orang putri. Namun, saudara laki-lakinya (paman dari anak-anaknya) justru mengambil seluruh harta tersebut, mengabaikan hak para wanita. Ayat ini kemudian diturunkan untuk menetapkan hak-hak yang adil bagi anak perempuan dan orang tua, serta membatasi kekuasaan kerabat lain.</div>
                                <div class="source-explanation"><strong>Tafsir Ringkas:</strong> Ayat ini adalah pilar utama hukum waris Islam. Allah secara langsung menetapkan bagian-bagian yang spesifik (fardh) untuk anak, ayah, dan ibu dengan berbagai kondisinya. Ayat ini juga memperkenalkan prinsip fundamental keadilan dalam Islam, yaitu bagian anak laki-laki setara dengan dua anak perempuan, bukan sebagai bentuk diskriminasi, melainkan sebagai bentuk keadilan sosial yang mempertimbangkan tanggung jawab finansial yang berbeda. Penutup ayat, "fariidatan minallaah" (sebuah ketetapan dari Allah), menegaskan bahwa ini bukanlah hukum buatan manusia, melainkan perintah ilahi yang wajib dijalankan.</div>
                                <div class="mazhab-reference">
                                    <h4>Referensi Mazhab:</h4>
                                    <p>Keempat mazhab utama (Syafi'i, Maliki, Hanafi, dan Hanbali) sepakat bahwa ayat ini, bersama dengan ayat 12 dan 176 dari surah yang sama, adalah sumber hukum primer dan paling fundamental dalam ilmu waris. Semua perincian hukum waris, prinsip 'ashabah, 'aul, dan 'radd dalam masing-masing mazhab, semuanya berpijak pada fondasi Al-Qur'an ini.</p>
                                </div>
                                <div class="indonesian-law">
                                    <h4>Hukum di Indonesia:</h4>
                                    <p>Kompilasi Hukum Islam (KHI) yang menjadi acuan hukum peradilan agama di Indonesia secara eksplisit menyatakan bahwa hukum waris Islam bersumber dari Al-Qur'an dan Hadis. Pasal 171 KHI adalah perwujudan dari bagaimana wahyu ilahi ini diadopsi menjadi hukum positif yang berlaku bagi jutaan umat Islam di Indonesia.</p>
                                </div>
                            </div>
                        `
                    },
                    {
                        title: 'Perintah Nabi Khusus',
                        content: `
                            <p>Rasulullah SAW secara khusus memerintahkan agar umatnya belajar dan mengajarkan ilmu waris, karena ia adalah ilmu yang akan pertama kali diangkat dari masyarakat.</p>
                            <div class="hadith-text">
                                <p class="verse-arabic">تَعَلَّمُوا الْفَرَائِضَ وَعَلِّمُوهَا النَّاسَ، فَإِنِّي امْرُؤٌ مَقْبُوضٌ، وَإِنَّ الْعِلْمَ سَيُقْبَضُ، وَيَظَلُّ النَّاسُ يَتَفَاخَرُونَ حَتَّى يُقَالَ لَهُمْ: فِيمَ كَانَ هَذَا الْقُرْآنُ؟ فَيَقُولُونَ: نُزِّلَ فِي أَهْلِ الْبَادِيَةِ مِنَ الْعَرَبِ، فَيَقُولُ أَهْلُ الْكِتَابِ: قَدْ أَخَذْنَا بِنَصِيبِنَا مِنْهُ قَبْلَ أَنْ يُنْزَلَ، فَلَا تَأْمَنُوا أَنْ يَسْتَذِلَّكُمُ اللَّهُ بِهِ.</p>
                                <p class="verse-translation"><strong>Terjemahan:</strong> Pelajarilah ilmu faraidh dan ajarkanlah kepada manusia. Karena aku adalah seorang yang akan dicabut (ilmunya), dan sesungguhnya ilmu akan diangkat (dari bumi). Manusia akan saling berbangga-bangga, hingga ada yang mengatakan kepada mereka: 'Untuk apa Al-Qur'an ini diturunkan?' Maka mereka menjawab: 'Diturunkan untuk orang-orang Badui dari bangsa Arab.' Ahli Kitab akan berkata: 'Kami telah mengambil bagian kami darinya sebelum ia diturunkan, maka janganlah kalian merasa aman dari siksa Allah karena hal itu.</p>
                                <p class="hadith-source">(HR. Ibnu Majah, Ad-Daruquthuny dan Al-Hakim)</p>
                                <div class="source-context"><strong>Konteks Hadis:</strong> Hadis ini diriwayatkan oleh Abdullah ibnu Abbas RA. Nabi SAW menyampaikan hadis ini di hadapan para sahabat untuk menekankan pentingnya ilmu faraidh yang akan hilang seiring waktu. Beliau memprediksi bahwa kelalaian dalam ilmu ini akan membuat umat Islam mudah ditandingi oleh Ahli Kitab.</div>
                                <div class="source-explanation"><strong>Penjelasan:</strong> Hadis ini menunjukkan betapa pentingnya ilmu waris. Nabi SAW memprediksi bahwa kelalaian dalam ilmu ini akan membuat umat Islam mudah ditandingi dan direndahkan oleh Ahli Kitab dalam hal hukum.</div>
                                <div class="mazhab-reference">
                                    <h4>Referensi Mazhab:</h4>
                                    <p><strong>Imam Malik:</strong> Dalam kitab Al-Muwathanya, beliau menempatkan hadis ini sebagai bagian dari bab pembagian warisan, menunjukkan pentingnya ilmu ini dalam Mazhab Maliki.</p>
                                    <p><strong>Imam Ahmad bin Hambal:</strong> Menyebutkan hadis ini dalam Musnad-nya sebagai bukti kewajiban mempelajari ilmu waris.</p>
                                </div>
                                <div class="indonesian-law">
                                    <h4>Hukum di Indonesia:</h4>
                                    <p>Menurut KHI Pasal 171, ilmu waris menjadi dasar pembagian harta peninggalan. MUI juga telah mengeluarkan fatwa tentang pentingnya sosialisasi ilmu waris di masyarakat Indonesia.</p>
                                </div>
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
                                <div class="source-context"><strong>Asbabun Nuzul:</strong> Ayat ini turun terkait dengan praktik jual beli yang tidak adil di masyarakat Arab pra-Islam. Namun, ayat ini juga mencakup semua bentuk pengambilan harta orang lain secara tidak sah, termasuk dalam konteks warisan.</div>
                                <div class="source-explanation"><strong>Tafsir Ringkas:</strong> Ayat ini melarang segala bentuk pengambilan harta orang lain secara tidak sah, termasuk menahan pembagian waris yang telah ditetapkan syariat. Allah mengingatkan bahwa perbuatan ini adalah dosa besar.</div>
                            </div>
                            <div class="source-detail">
                                <h4>QS. An-Nisa' : 10</h4>
                                <p class="verse-arabic">إِنَّ الَّذِينَ يَأْكُلُونَ أَمْوَالَ الْيَتَامَى ظُلْمًا إِنَّمَا يَأْكُلُونَ فِي بُطُونِهِمْ نَارًا وَسَيَصْلَوْنَ سَعِيرًا</p>
                                <p class="verse-translation"><strong>Terjemahan:</strong> Sesungguhnya orang-orang yang memakan harta anak yatim secara zalim, sebenarnya mereka itu menelan api sepenuh perutnya dan mereka akan masuk ke dalam api yang menyala-nyala (neraka).</p>
                                <div class="source-context"><strong>Asbabun Nuzul:</strong> Ayat ini turun sebagai peringatan keras terhadap orang-orang yang menzalimi hak anak yatim, termasuk dengan tidak membagikan warisan yang seharusnya mereka terima.</div>
                                <div class="source-explanation"><strong>Tafsir Ringkas:</strong> Ayat ini secara gamblang menggambarkan betapa beratnya dosa memakan harta anak yatim secara zalim. Perbuatan ini diibaratkan seperti menelan api yang akan membakar mereka dari dalam.</div>
                                <div class="mazhab-reference">
                                    <h4>Referensi Mazhab:</h4>
                                    <p><strong>Imam Syafi'i:</strong> Menjelaskan bahwa ayat ini mencakup semua bentuk pengambilan harta anak yatim secara tidak sah, termasuk menahan pembagian waris.</p>
                                    <p><strong>Imam Hanafi:</strong> Menegaskan bahwa memakan harta anak yatim secara zalim adalah dosa besar yang dapat menghapus pahala kebaikan.</p>
                                </div>
                                <div class="indonesian-law">
                                    <h4>Hukum di Indonesia:</h4>
                                    <p>Menurut KUHP Pasal 376, penggelapan atau penahanan harta warisan dapat dipidana dengan pidana penjara maksimal 5 tahun. Undang-Undang Perlindungan Anak juga memberikan sanksi bagi yang menelantarkan atau mengeksploitasi hak anak yatim.</p>
                                </div>
                            </div>
                        `
                    },
                    {
                        title: 'Ilmu yang Akan Hilang Pertama Kali',
                        content: `
                            <p>Salah satu prediksi paling mengejutkan dari Rasulullah SAW adalah bahwa ilmu waris (faraidh) akan menjadi ilmu pertama yang diangkat dari umatnya. Ini bukan sekadar peringatan, tetapi sebuah realitas yang kita lihat hari ini: semakin sedikit orang yang memahami ilmu ini secara mendalam.</p>
                            <div class="hadith-text">
                                <p class="verse-arabic">تَعَلَّمُوا الْفَرَائِضَ وَعَلِّمُوهَا النَّاسَ، فَإِنِّي امْرُؤٌ مَقْبُوضٌ، وَإِنَّ الْعِلْمَ سَيُقْبَضُ، وَيَظَلُّ النَّاسُ يَتَفَاخَرُونَ حَتَّى يُقَالَ لَهُمْ: فِيمَ كَانَ هَذَا الْقُرْآنُ؟ فَيَقُولُونَ: نُزِّلَ فِي أَهْلِ الْبَادِيَةِ مِنَ الْعَرَبِ، فَيَقُولُ أَهْلُ الْكِتَابِ: قَدْ أَخَذْنَا بِنَصِيبِنَا مِنْهُ قَبْلَ أَنْ يُنْزَلَ، فَلَا تَأْمَنُوا أَنْ يَسْتَذِلَّكُمُ اللَّهُ بِهِ.</p>
                                <p class="verse-translation"><strong>Terjemahan:</strong> Pelajarilah ilmu faraidh dan ajarkanlah kepada manusia. Karena aku adalah seorang yang akan dicabut (ilmunya), dan sesungguhnya ilmu akan diangkat (dari bumi). Manusia akan saling berbangga-bangga, hingga ada yang mengatakan kepada mereka: 'Untuk apa Al-Qur'an ini diturunkan?' Maka mereka menjawab: 'Diturunkan untuk orang-orang Badui dari bangsa Arab.' Ahli Kitab akan berkata: 'Kami telah mengambil bagian kami darinya sebelum ia diturunkan, maka janganlah kalian merasa aman dari siksa Allah karena hal itu.</p>
                                <p class="hadith-source">(HR. Ibnu Majah, Ad-Daruquthuny dan Al-Hakim)</p>
                                <div class="source-context"><strong>Konteks Hadis:</strong> Hadis ini diriwayatkan oleh Abdullah ibnu Abbas RA. Nabi SAW menyampaikannya di hadapan para sahabat untuk menekankan urgensi ilmu faraidh. Beliau melihat masa depan di mana umatnya akan lalai, sehingga ilmu ini menjadi langka dan akhirnya lenyap dari pemahaman umum.</div>
                                <div class="source-explanation"><strong>Penjelasan:</strong> "Diangkatnya ilmu" bukan berarti teks Al-Qur'an-nya hilang, melainkan <strong>kefahaman dan kemampuan untuk mengamalkannya</strong> yang hilang. Ini terjadi ketika tidak ada lagi ulama yang ahli, tidak ada lagi yang mau belajar, dan masyarakat mengabaikannya.</div>
                            </div>
                            <div class="example-box">
                                <h4>🤔 Mengapa Ilmu Ini Bisa Langka?</h4>
                                <ol>
                                    <li><strong>Kompleksitasnya Tinggi:</strong> Ilmu waris melibatkan matematika, silsilah keluarga (nasab), dan banyak kondisi khusus ('hijb, 'aul, 'radd). Ini membuat banyak orang enggan mendalaminya.</li>
                                    <li><strong>Dikalahkan oleh Materi Lain:</strong> Orang seringkali lebih tertarik mempelajari fiqih lain yang dianggap lebih "praktis" seperti thaharah, shalat, atau puasa, dan menganggap waris adalah urusan "nanti" saat ada kematian.</li>
                                    <li><strong>Tabu dan Ketidaknyamanan:</strong> Membahas kematian dan pembagian harta sering dianggap tabu dalam keluarga. Orang enggan membicarakannya saat sehat, sehingga ilmu ini tidak diajarkan dari generasi ke generasi.</li>
                                    <li><strong>Dominasi Adat yang Salah:</strong> Banyak masyarakat yang lebih memegang teguh adat istiadat waris yang salah (misalnya, anak perempuan tidak dapat waris) daripada belajar hukum syariat yang benar.</li>
                                </ol>
                            </div>
                            <div class="real-case-example">
                                <h4>📉 Dampak Kelangkaan Ilmu Waris di Masyarakat</h4>
                                <p>Ketika ilmu ini langka, dampaknya sangat nyata dan merusak:</p>
                                <ul>
                                    <li><strong>Maraknya Sengketa Waris:</strong> Data Mahkamah Agung menunjukkan >60% kasus perdata agama adalah sengketa waris. Ini adalah bukti konkret dari ketidaktahuan.</li>
                                    <li><strong>Ketidakadilan Sosial:</strong> Pihak yang paling rentan—seperti anak perempuan, janda, dan anak yatim—sering menjadi korban dan kehilangan hak mereka.</li>
                                    <li><strong>Harta Terbengkalai:</strong> Banyak aset keluarga (tanah, rumah) yang tidak bisa diurus selama puluhan tahun karena ahli waris tidak bisa sepakat, akibatnya tidak tahu cara pembagian yang benar.</li>
                                    <li><strong>Runtuhnya Kewibawaan Syariat:</strong> Ketika umat Islam tidak bisa menerapkan hukum waris yang jelas dalam Al-Qur'an, ini menjadi aib dan memperlemah posisi syariat dalam kehidupan sehari-hari.</li>
                                </ul>
                            </div>
                            <div class="mazhab-reference">
                                <h4>Referensi Mazhab:</h4>
                                <p>Semua mazhab—Syafi'i, Maliki, Hanafi, dan Hanbali—memberikan perhatian yang sangat besar pada ilmu waris. Dalam setiap kitab fiqih utama mereka, bab waris selalu ditempatkan di posisi penting, menunjukkan bahwa menjaga keberadaan ilmu ini adalah kewajiban bersama seluruh umat Islam.</p>
                            </div>
                            <div class="indonesian-law">
                                <h4>Hukum di Indonesia:</h4>
                                <p>Menyadari dampak negatif dari kelangkaan ini, Majelis Ulama Indonesia (MUI) secara berkala mengeluarkan fatwa yang mendorong sosialisasi hukum waris Islam. Kementerian Agama juga telah memasukkan materi dasar waris ke dalam kurikulum pendidikan agama Islam di sekolah untuk mencegah kepunahan ilmu ini di kalangan generasi muda.</p>
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
                                <div class="source-context"><strong>Konteks Pernyataan:</strong> Umar bin Al-Khattab RA berkata ini kepada para sahabat untuk menekankan pentingnya ilmu faraidh. Beliau menempatkan ilmu ini setara dengan ilmu Al-Qur'an, menunjukkan bahwa keduanya sama-sama berasal dari wahyu ilahi.</div>
                                <div class="source-explanation"><strong>Penjelasan:</strong> Pernyataan Sayyidina Umar ra. ini menegaskan bahwa ilmu waris bukanlah ilmu sekunder, melainkan inti dari ajaran Islam yang bersumber langsung dari Al-Qur'an. Ia juga mengatakan:</p>
                                <p class="verse-arabic">تَعَلَّمُوا الْفَرَائِضَ كَمَا تَعَلَّمُونَ سُورَةً مِنَ الْقُرْآنِ</p>
                                <p class="verse-translation"><strong>Terjemahan:</strong> Pelajarilah ilmu faraidh sebagaimana kalian mempelajari sebuah surat dari Al-Qur'an.</p>
                                <div class="mazhab-reference">
                                    <h4>Referensi Mazhab:</h4>
                                    <p><strong>Imam Syafi'i:</strong> Dalam kitab Al-Umm, beliau menempatkan ilmu waris sebagai bagian penting dari ilmu syar'i yang wajib dipelajari.</p>
                                    <p><strong>Imam Malik:</strong> Dalam kitab Al-Muwathanya, beliau memulai bab warisan setelah bab shalat, menunjukkan pentingnya ilmu ini.</p>
                                </div>
                                <div class="indonesian-law">
                                    <h4>Hukum di Indonesia:</h4>
                                    <p>Menurut KHI Pasal 171, ilmu waris menjadi dasar pembagian harta peninggalan di Indonesia. Pemerintah juga mendorong sosialisasi ilmu ini melalui lembaga agama dan pendidikan formal.</p>
                                </div>
                            </div>
                        `
                    },
                    {
                        title: 'Membongkar Mitos: Ilmu Waris Itu Mudah & Sederhana',
                        content: `
                            <p>Banyak yang berpikir ilmu waris itu rumit, penuh istilah asing, dan hanya untuk ulama. Anggapan ini seringkali menghalangi kita untuk mempelajarinya. Padahal, pada intinya, ilmu ini dibangun atas logika dan keadilan yang sangat sederhana, dirancang agar bisa dipahami dan dijalankan oleh siapa saja.</p>
                            <div class="example-box">
                                <h4>📦 Kotak Pembagian Sederhana: Logika Dasar Faraidh</h4>
                                <p>Bayangkan harta warisan sebagai sebuah kotak. Cara membaginya sangat terstruktur:</p>
                                <ol>
                                    <li><strong>Identifikasi Para Penerima Bagian Tetap (Ashabul Furudh):</strong> Siapa saja yang punya "kupon" bagian? (Suami/Istri, Ayah/Ibu, Anak Perempuan, dll.).</li>
                                    <li><strong>Beri Mereka Bagian dari Kotak:</strong> Berikan mereka bagian sesuai "kupon" yang mereka pegang (1/2, 1/4, 1/6, 1/3, dll.).</li>
                                    <li><strong>Lihat Sisa di Kotak:</strong> Apakah masih ada harta yang tersisa?</li>
                                    <li>
                                        <strong>Jika ADA SISA:</strong> Berikan sisa itu kepada <strong>Pewaris Sisa (Asabah)</strong> dalam urutan yang jelas (Anak Laki-laki -> Ayah -> Saudara Laki-laki, dst.).
                                        <br><strong>Jika TIDAK ADA SISA:</strong> Pembagian selesai.
                                    </li>
                                </ol>
                                <p>Itulah intinya. Sisanya adalah detail-detail untuk kasus-kasus spesifik.</p>
                            </div>
                            <div class="example-box">
                                <h4>🧮 Matematika yang Digunakan Hanya... SD/SMP</h4>
                                <p>Jangan takut pada angka. Matematika dalam ilmu waris adalah matematika dasar yang kita pelajari di sekolah:</p>
                                <ul>
                                    <li><strong>Penjumlahan:</strong> Untuk menjumlahkan semua bagian (1/2 + 1/6 = ...).</li>
                                    <li><strong>Pengurangan:</strong> Untuk mencari sisa harta (1 - 3/4 = ...).</li>
                                    <li><strong>Perkalian & Pembagian:</strong> Untuk menghitung nilai uang dari bagian pecahan (1/8 x Rp 800 juta).</li>
                                </ul>
                                <p>Bagian yang paling "rumit" sekalipun hanyalah mencari penyebut yang sama (KPK) untuk menjumlahkan pecahan, sebuah keterampilan yang sudah kita kuasai. Tidak ada kalkulus, aljabar tingkat tinggi, atau rumus rahasia.</p>
                            </div>
                            <div class="source-detail">
                                <h4>QS. An-Nisa' : 28</h4>
                                <p class="verse-arabic">يُرِيدُ اللَّهُ أَن يُخَفِّفَ عَنكُمْ ۚ وَخُلِقَ الْإِنْسَانُ ضَعِيفًا</p>
                                <p class="verse-translation"><strong>Terjemahan:</strong> Allah hendak memberikan kemudahan kepadamu, dan manusia dijadikan bersifat lemah.</p>
                                <div class="source-explanation"><strong>Tafsir Ringkas:</strong> Ayat ini adalah prinsip dasar bahwa syariat Islam, termasuk hukum waris, tidak pernah dibuat untuk memberatkan. Tujuannya adalah kemudahan dan keadilan. Kesulitan yang kita rasakan seringkali berasal dari ketidaktahuan kita, bukan dari aturan itu sendiri. Allah, yang menciptakan manusia, mengetahui kapasitas kita dan memberikan sistem yang bisa dipelajari.</div>
                            </div>
                            <div class="real-case-example">
                                <h4>🧩 Kasus Sederhana yang Sering Terjadi</h4>
                                <p><strong>Skenario:</strong> Seorang ayah meninggal, meninggalkan harta Rp 1,8 miliar. Ahli warisnya: seorang <strong>ibu</strong>, seorang <strong>anak laki-laki</strong>, dan seorang <strong>anak perempuan</strong>.</p>
                                <p><strong>Pembagian dengan Logika Sederhana:</strong></p>
                                <ol>
                                    <li><strong>Bagian Tetap?</strong> Ya, <strong>ibu</strong> dapat bagian tetap: <strong>1/6</strong>.</li>
                                    <li><strong>Hitung Bagian Ibu:</strong> 1/6 x Rp 1,8 miliar = <strong>Rp 300 juta</strong>.</li>
                                    <li><strong>Sisa Harta?</strong> Rp 1,8 miliar - Rp 300 juta = <strong>Rp 1,5 miliar</strong>.</li>
                                    <li><strong>Ada Sisa, Siapa Pewaris Sisa (Asabah)?</strong> <strong>Anak laki-laki dan perempuan.</strong></li>
                                    <li><strong>Bagaimana Aturannya?</strong> Bagian anak laki-laki = 2x bagian anak perempuan. Total bagian = 2 + 1 = 3 bagian.</li>
                                    <li><strong>Bagikan Sisa Harta:</strong> Rp 1,5 miliar / 3 = <strong>Rp 500 juta per bagian</strong>.</li>
                                </ol>
                                <p><strong>Hasil Akhir:</strong></p>
                                <ul>
                                    <li>Ibu: <strong>Rp 300 juta</strong>.</li>
                                    <li>Anak Laki-laki: 2 bagian x Rp 500 juta = <strong>Rp 1 miliar</strong>.</li>
                                    <li>Anak Perempuan: 1 bagian x Rp 500 juta = <strong>Rp 500 juta</strong>.</li>
                                </ul>
                                <p>Lihat? Dengan langkah demi langkah, masalah yang tampak rumit menjadi sangat terstruktur dan mudah dipecahkan.</p>
                            </div>
                            <div class="note-box">
                                <h4>💡 Kunci Kesederhanaannya</h4>
                                <p>Untuk memudahkan pembelajaran, fokus pada:</p>
                                <ul>
                                    <li><strong>Mulai dengan yang Utama:</strong> Kuasai dulu 10 ahli waris utama dan bagian mereka. Ini sudah mencakup 90% kasus yang terjadi.</li>
                                    <li><strong>Pahami Logikanya, Bukan Hafal Semua:</strong> Pahami mengapa anak laki-laki dapat 2 bagian, mengapa suami/istri dapat bagian tertentu. Logika akan membantu Anda mengingat aturan.</li>
                                    <li><strong>Gunakan Alat Bantu:</strong> Gunakan tabel atau flowchart saat memulai. Tidak apa-apa untuk "mencontek" aturan dasar.</li>
                                </ul>
                                <p>Ilmu waris bukan untuk ditakuti, melainkan untuk dipelajari dan diamalkan demi keadilan dan kebaikan keluarga.</p>
                            </div>
                        `
                    },
                    {
                        title: 'Penjaga Harmoni Keluarga',
                        content: `
                            <p>Salah satu musuh terbesar keutuhan keluarga adalah sengketa warisan. Banyak kisah sedih di mana saudara yang semula akur menjadi bermusuhan hanya karena harta peninggalan. Islam, melalui ilmu waris (faraidh), memberikan sistem yang dirancang secara sempurna untuk mencegah perpecahan ini sejak awal.</p>
                            <div class="example-box">
                                <h4>🧩 Akar Perpecahan Keluarga dalam Warisan</h4>
                                <p>Perpecahan biasanya dimulai dari:</p>
                                <ul>
                                    <li><strong>Ketidakadilan:</strong> Satu pihak merasa lebih berhak dan mengambil porsi yang lebih besar, merugikan yang lain.</li>
                                    <li><strong>Ketidakjelasan:</strong> Tidak ada aturan yang jelas, sehingga masing-masing mengklaim versi keadilannya sendiri.</li>
                                    <li><strong>Keserakahan:</strong> Nafsu ingin menguasai semua harta tanpa memperdulikan hak ahli waris lain.</li>
                                    <li><strong>Pengaruh Adat yang Keliru:</strong> Adat yang meniadakan hak anak perempuan atau mengutamakan anak tertua sering menjadi sumber konflik dengan syariat.</li>
                                </ul>
                            </div>
                            <div class="example-box">
                                <h4>🛡️ Bagaimana Faraidh Mencegah Perpecahan?</h4>
                                <p>Hukum waris Islam adalah "obat" untuk masalah di atas:</p>
                                <ul>
                                    <li><strong>Menetapkan Keadilan Transparan:</strong> Allah, yang Maha Adil, telah menetapkan bagian masing-masing. Ini bukan pendapat manusia yang bisa dinegosiasi, melainkan ketetapan ilahi yang harus diterima.</li>
                                    <li><strong>Memberikan Kepastian Hukum:</strong> Aturannya jelas dan baku. Tidak ada ruang untuk interpretasi yang berlebihan yang bisa memicu perselisihan. Siapa yang berhak dan berapa baginya sudah ditulis.</li>
                                    <li><strong>Memotong Keserakahan:</strong> Karena bagian sudah ditetapkan, tidak ada lagi alasan bagi seseorang untuk mengklaim lebih dari haknya. Keserakahan dijaga oleh batasan syariat.</li>
                                    <li><strong>Menghormati Hak Setiap Pihak:</strong> Sistem ini melindungi hak mereka yang sering diabaikan, seperti anak perempuan, ibu, dan istri, sehingga tidak ada yang merasa dizalimi.</li>
                                </ul>
                            </div>
                            <div class="source-detail">
                                <h4>QS. An-Nisa' : 1</h4>
                                <p class="verse-arabic">يَا أَيُّهَا النَّاسُ اتَّقُوا رَبَّكُمُ الَّذِي خَلَقَكُمْ مِنْ نَفْسٍ وَاحِدَةٍ وَخَلَqَ مِنْهَا زَوْجَهَا وَبَثَّ مِنْهُمَا رِجَالًا كَثِيرًا وَنِسَاءً ۚ وَاتَّقُوا اللَّهَ الَّذِي تَسَاءَلُونَ بِهِ وَالْأَرْحَامَ ۚ إِنَّ اللَّهَ كَانَ عَلَيْكُمْ رَقِيبًا</p>
                                <p class="verse-translation"><strong>Terjemahan:</strong> Wahai manusia! Bertakwalah kepada Tuhanmu yang telah menciptakan kamu dari seorang diri, dan dari padanya Dia menciptakan pasangannya, dan dari keduanya Dia memperkembangbiakkan laki-laki dan perempuan yang banyak. Dan bertakwalah kepada Allah yang dengan (memgunakan) nama-Nya kamu saling meminta satu sama lain, dan (jaga) hubungan silaturahim. Sesungguhnya Allah selalu menjaga dan mengawasi kamu.</p>
                                <div class="source-explanation"><strong>Tafsir Ringkas:</strong> Ayat ini memerintahkan untuk bertakwa dan menjaga hubungan silaturahim. Salah satu implementasi tertinggi dari ketaqwaan dan penjagaan silaturahim adalah dengan menyelesaikan masalah harta waris secara adil sesuai syariat. Meninggalkan aturan Allah adalah jalan menuju permusuhan dan putusnya tali kekeluargaan.</div>
                            </div>
                            <div class="real-case-example">
                                <h4>📖 Kisah Nyata: Dua Jalan, Dua Nasib</h4>
                                <p><strong>Keluarga A (Tanpa Ilmu Waris):</strong> Pak Haji meninggal, meninggalkan 3 anak (2 laki-laki, 1 perempuan) dan sebuah rumah pusat. Anak sulung mengklaim rumah itu miliknya karena "yang paling berjasa". Dua anak lainnya merasa dizalimi. Mereka saling gugat, tidak bicara selama bertahun-tahun, dan rumah keluarga tersebut terbengkalai dan tidak bisa dijual. Keluarga retak.</p>
                                <p><strong>Keluarga B (Menerapkan Ilmu Waris):</strong> Pak Budi meninggal dengan kondisi ahli waris yang sama. Anak-anaknya duduk bersama, menghitung bagian masing-masing berdasarkan faraidh. Mereka sepakat untuk menilai rumah dan membagi nilainya. Anak sulung yang ingin tetap tinggal di rumah tersebut membayar bagian adik-adiknya sesuai nilai hak mereka. Semua proses transparan, adil, dan hubungan kekeluargaan tetap terjaga.</p>
                                <p><strong>Kesimpulan:</strong> Ilmu waris bukan sekadar soal matematika harta, melainkan alat untuk menjaga cinta kasih dan persaudaraan.</p>
                            </div>
                            <div class="mazhab-reference">
                                <h4>Referensi Mazhab:</h4>
                                <p>Semua mazhab sepakat bahwa salah satu hikmah (tujuan utama) disyariatkannya hukum waris adalah untuk <strong>mencegah kerusakan (fasad) dan menegakkan keadilan sosial</strong>. Imam Al-Ghazali dalam kitabnya *Ihya' 'Ulumiddin* menempatkan ilmu waris sebagai bagian dari cabang ilmu yang menjaga kemaslahatan umum.</p>
                            </div>
                            <div class="indonesian-law">
                                <h4>Hukum di Indonesia:</h4>
                                <p>Tujuan dari Kompilasi Hukum Islam (KHI) Pasal 171 bukan hanya untuk kepatuhan religius, tetapi juga untuk memberikan <strong>kepastian hukum</strong> dan <strong>ketertiban sosial</strong>. Dengan adanya aturan yang jelas, diharapkan dapat menekan angka sengketa waris yang tinggi di pengadilan dan mendorong penyelesaian secara kekeluargaan yang adil.</p>
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
                                    <li><strong>Allah Ajarkan Langsung:</strong> Hukum ini datang langsung dari wahyu, bukan hasil pemikiran manusia.</li>
                                    <li><strong>Perintah Nabi Khusus:</strong> Nabi SAW secara khusus memerintahkan untuk mempelajarinya.</li>
                                    <li><strong>Mencegah Makan Harta Haram:</strong> Menjaga dari dosa memakan harta orang lain dan anak yatim secara zalim.</li>                                    
                                    <li><strong>Ilmu yang Langka & Penting:</strong> Ilmu ini akan hilang, dan mempelajarinya adalah menjaga agama.</li>
                                    <li><strong>Sejajar dengan Al-Qur'an:</strong> Kedudukannya setara dengan mempelajari kitab suci.</li>
                                    <li><strong>Membongkar Mitos: Ilmu Waris Itu Mudah & Sederhana:</strong> ilmu ini dibangun atas logika dan keadilan yang sangat sederhana.</li>
                                    <li><strong>Penjaga Harmoni Keluarga:</strong> Aturan yang jelas mencegah konflik dan permusuhan.</li>
                                    <li><strong>Banyak Penyimpangan:</strong> Ilmu ini dibutuhkan untuk meluruskan praktik salah yang banyak terjadi.</li>
                                </ul>
                            </div>
                            <div class="real-case-example">
                                <h4>Kasus Nyata: Konflik Waris di Indonesia</h4>
                                <p>Berdasarkan data Mahkamah Agama, sekitar 60% kasus perdataan perdataan yang masuk adalah terkait sengketa waris. Salah satu penyebab utamanya adalah ketidaktahuan masyarakat tentang hukum waris Islam. Pada tahun 2021, terdapat kasus di mana seorang anak membunuh ayahnya sendiri karena tidak puas dengan pembagian waris yang tidak sesuai syariat. Kasus ini menunjukkan betapa pentingnya ilmu waris untuk mencegah konflik keluarga yang fatal.</p>
                            </div>
                        `
                    }
                ],
                quiz: { 
                    questions: [
                        { type: 'multiple-choice', question: "Apa ancaman bagi orang yang menentang hukum waris (faraidh) menurut QS. An-Nisa': 14?", options: ["Dosa kecil", "Siksaan di neraka", "Rezeki akan berkurang", "Tidak mendapat pahala"], correctAnswer: 1 },
                        { type: 'essay', question: "Jelaskan mengapa Rasulullah SAW menyebut ilmu faraidh sebagai 'setengah dari ilmu' dan 'akan diangkat pertama kali'! Apa implikasinya bagi umat Islam saat ini?", referenceAnswer: "Jawaban acuan: Disebut 'setengah dari ilmu' karena ia menyangkut aspek duniawi (harta) dan ukhrawi (akibat hukumnya), dan merupakan pilar keadilan sosial. Akan diangkat pertama karena kompleksitasnya dan kurangnya minat, sehingga para ulama yang ahli di bidang ini akan berkurang. Implikasinya saat ini adalah banyaknya perselisihan waris yang tidak bisa diselesaikan secara syar'i, meningkatnya praktik salah, dan potensi konflik keluarga yang besar." },
                        { type: 'matching', question: "Jodohkan ancaman/perintah dengan dalilnya!", pairs: [{ term: "Ancaman Neraka", match: "QS. An-Nisa': 14" }, { term: "Perintah Belajar & Mengajar", match: "Hadits Riwayat Ibnu Majah" }, { term: "Larangan Memakan Harta Haram", match: "QS. Al-Baqarah: 188" }, { term: "Ancaman Memakan Harta Anak Yatim", match: "QS. An-Nisa': 10" }, { term: "Kedudukan Setara Al-Qur'an", match: "Pernyataan Umar bin Khattab ra." }] },
                        { type: 'case-study', scenario: "Di sebuah desa, setelah kepala keluarga meninggal, anak-anaknya tidak segera membagi warisan karena menunggu harga tanah naik. Selama menunggu, mereka menggunakan tanah tersebut untuk keperluan pribadi tanpa izin bersama. Salah satu anak yang tidak setuju merasa haknya dimakan.", questions: [
                            { type: 'multiple-choice', question: "Tindakan menunda pembagian waris dengan alasan 'menunggu harga naik' termasuk dalam kategori...", options: ["Diperbolehkan demi kebaikan bersama", "Dianjurkan agar hasilnya maksimal", "Bentuk pengkhianatan dan ketidakamanahan", "Tidak ada hubungannya dengan hukum waris"], correctAnswer: 2 },
                            { type: 'essay', question: "Analisis kasus di atas. Dosa apa saja yang berpotensi terjadi akibat penundaan pembagian waris tersebut? Hubungkan dengan konsep 'makan harta haram' dan 'makan harta anak yatim'!", referenceAnswer: "Jawaban acuan: Dosa yang berpotensi terjadi: 1. **Makan Harta Haram:** Menggunakan harta yang belum jelas pembagiannya untuk kepentingan pribadi adalah termasuk memakan harta dengan jalan bathil. 2. **Makan Harta Anak Yatim:** Jika di antara ahli waris ada yang masih di bawah umur (yatim/piatu), maka harta tersebut adalah harta anak yatim. Menggunakannya tanpa hak dan izin adalah memakan harta anak yatim secara zalim. 3. **Zhalim:** Tindakan ini adalah bentuk kezaliman terhadap ahli waris lain yang haknya ditunda dan digunakan. 4. **Tidak Amanah:** Mereka tidak menunaikan amanah untuk menjaga harta sebelum dibagikan secara adil. 5. **Munafik:** Jika ada janji untuk segera membagi namun dilanggar, ini menunjukkan ciri-ciri munafik." }
                        ]},
                        // Tambahkan 6 soal lagi untuk mencapai 10 soal
                        { type: 'multiple-choice', question: "Menurut hadis, ilmu faraidh akan diangkat pertama kali dari masyarakat. Ini menunjukkan bahwa...", options: ["Ilmu ini paling sulit dipelajari", "Akan sedikit ulama yang ahli di bidang ini", "Ilmu ini akan hilang lebih dahulu", "Semua jawaban benar"], correctAnswer: 3 },
                        { type: 'multiple-choice', question: "Siapa yang mengatakan 'Pelajarilah ilmu faraidh sebagaimana kalian mempelajari sebuah surat dari Al-Qur'an'?", options: ["Rasulullah SAW", "Abu Bakar RA", "Umar bin Khattab RA", "Ali bin Abi Thalib RA"], correctAnswer: 2 },
                        { type: 'multiple-choice', question: "Dampak negatif utama dari ketidaktahuan ilmu waris di masyarakat adalah...", options: ["Banyaknya kasus sengketa keluarga", "Menurunnya kekayaan umat", "Banyaknya praktik riba", "Terjadinya konflik antar agama"], correctAnswer: 0 },
                        { type: 'essay', question: "Jelaskan bagaimana ilmu waris dapat menjadi pilar keadilan sosial dalam masyarakat modern!", referenceAnswer: "Jawaban acuan: Ilmu waris menjadi pilar keadilan sosial karena: 1. Memberikan aturan yang jelas dan adil dalam pembagian harta, mencegah dominasi yang kuat terhadap yang lemah. 2. Menghindari konflik keluarga yang dapat merusak tatanan sosial. 3. Menjamin hak setiap ahli waris tanpa memandang gender atau status sosial. 4. Mendorong transparansi dalam kekayaan keluarga. 5. Memberikan kepastian hukum yang mengurangi kasus penelantaran hak. 6. Menjadi dasar sistem ekonomi yang adil di tingkat mikro (keluarga). Dengan demikian, ilmu waris tidak hanya sekadar aturan teknis, tetapi fondasi masyarakat yang adil dan harmonis." },
                        { type: 'case-study', scenario: "Seorang pengusaha meninggal dunia dengan harta warisan berupa: 1 rumah senilai Rp 2 miliar, 1 apartemen senilai Rp 1,5 miliar, tanah kavling senilai Rp 3 miliar, dan deposito senilai Rp 500 juta. Ia meninggalkan istri, 2 anak laki-laki, dan 1 anak perempuan. Istrinya mengajak anak-anak untuk menjual semua aset dan membagi uangnya secara merata, dengan alasan 'supaya adil dan tidak ada yang merasa diunggulkan'.", questions: [
                            { type: 'multiple-choice', question: "Tindakan istri yang mengajak menjual semua aset dan membagi secara merata adalah...", options: ["Benar karena lebih adil", "Salah karena melanggar hukum waris Islam", "Boleh jika disetujui semua ahli waris", "Tidak ada kaitannya dengan hukum waris"], correctAnswer: 1 },
                            { type: 'essay', question: "Jelaskan bagaimana pembagian yang benar menurut hukum Islam! Hitung juga bagian masing-masing jika harta totalnya Rp 7 miliar (setelah dikurangi biaya pemakaman dan hutang)!", referenceAnswer: "Jawaban acuan: Pembagian yang benar menurut hukum Islam adalah dengan menerapkan sistem faraidh. Dalam kasus ini: Istri mendapat 1/8 = Rp 875 juta. Anak laki-laki masing-masing mendapat 2 bagian, anak perempuan mendapat 1 bagian. Total bagian anak = 2+2+1 = 5 bagian. Sisa harta setelah istri = Rp 7 miliar - Rp 875 juta = Rp 6,125 miliar. Setiap bagian anak = Rp 6,125 miliar / 5 = Rp 1,225 miliar. Maka anak laki-laki masing-masing mendapat Rp 2,45 miliar, dan anak perempuan mendapat Rp 1,225 miliar. Aset tidak harus dijual, tetapi dapat dibagi sesuai nilai nilainya. Jika ada aset yang tidak bisa dibagi rata, bisa dialokasikan dengan harga yang setara atau disepakati bersama." }
                        ]},
                        { type: 'multiple-choice-complex', question: "Menurut KHI Pasal 171, pembagian warisan di Indonesia harus berdasarkan...", options: ["Hukum adat setempat", "Hukum perdata sipil", "Hukum Islam", "Keputusan hakim"], correctAnswer: 2, explanation: "Kompilasi Hukum Islam (KHI) Pasal 171 menyatakan bahwa pembagian warisan bagi pemeluk agama Islam harus berdasarkan hukum Islam, yaitu hukum waris menurut mazhab Syafi'i yang menjadi mazhab resmi di Indonesia." },
                        { type: 'multiple-choice-complex', question: "Dalam kasus sengketa waris di Indonesia, penyelesaiannya dapat dilakukan melalui...", options: ["Mahkamah Agama saja", "Mahkamah Syariah dan Pengadilan Negeri", "Kekeluargaan saja", "Mediasi oleh tokoh masyarakat"], correctAnswer: 1, explanation: "Menurut UU No. 3 Tahun 2006 tentang Mahkamah Agama, sengketa waris di antara pemeluk agama Islam diselesaikan melalui Mahkamah Agama. Namun, jika para pihak berbeda agama, penyelesaiannya dilakukan melalui Pengadilan Negeri sesuai dengan hukum perdata sipil." }
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
        id: 'bab2', title: 'Bab 2: Rukun Waris & Penyimpangan',
        subChapters: [
            {
                id: 'sub2-1', 
                title: '2.1 Rukun & Detail Teknis Waris',
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
            },
            {
                id: 'sub2-2', 
                title: '2.2 Penyimpangan Umum dalam Pembagian Waris',
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
            }
        ]
    },
    {
        id: 'bab3', title: 'Bab 3: Ahli Waris Bagian Tetap (Ashabul Furudh)',
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
            },
            {
                id: 'sub3-2', 
                title: '3.2 Anak Perempuan dan Saudara Kandung Perempuan',
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
        id: 'bab4', title: 'Bab 4: Ahli Waris Pewaris Sisa (Asabah)',
        subChapters: [
            {
                id: 'sub4-1', 
                title: '4.1 Definisi, Jenis, dan Hirarki Asabah',
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
                                <div class="source-context"><strong>Konteks Hadis:</strong> Hadis ini diriwayatkan oleh Usamah bin Zaid RA, ia berkata bahwa Rasulullah SAW bersabda: "Berikanlah bagian yang telah ditetapkan (fardh) kepada ahlinya, maka apa yang tersisa adalah untuk laki-laki yang paling dekat (kerabat)."</div>
                                <div class="source-explanation"><strong>Penjelasan:</strong> Hadis ini menjadi dasar konsep 'asabah. Setelah semua ahli waris dengan bagian tetap (Ashabul Furudh) menerima hak mereka, sisa hartanya (jika ada) diberikan kepada kerabat laki-laki yang paling dekat dengan si mayit. Ini menciptakan hirarki yang jelas dalam pewarisan sisa harta.</div>
                                <div class="mazhab-reference">
                                    <h4>Referensi Mazhab:</h4>
                                    <p><strong>Imam Syafi'i:</strong> Dalam kitab Al-Umm, beliau menjelaskan bahwa ashabah adalah ahli waris yang tidak memiliki bagian tertentu, tetapi mendapat sisa setelah pembagian kepada ash-habul furudh.</p>
                                    <p><strong>Imam Hanafi:</strong> Menambahkan kategori 'asabah ma'al ghairi' yaitu ahli waris yang menjadi asabah bersama dengan ahli waris lainnya.</p>
                                </div>
                                <div class="indonesian-law">
                                    <h4>Hukum di Indonesia:</h4>
                                    <p>Menurut KHI Pasal 176, ahli waris yang tidak mendapat bagian tertentu (fardh) akan mendapat sisa harta setelah pembagian kepada ahli waris fardh. Sisa harta ini dibagikan sesuai dengan hirarki kekerabatan.</p>
                                </div>
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
                                <div class="mazhab-reference">
                                    <h4>Perbedaan Mazhab:</h4>
                                    <p><strong>Mazhab Syafi'i dan Maliki:</strong> Mengakui keempat kategori 'ashabah bil ghairi tersebut.</p>
                                    <p><strong>Mazhab Hanafi:</strong> Menambahkan cucu perempuan dari anak perempuan sebagai 'ashabah bil ghairi.</p>
                                </div>
                            </div>
                        `
                    },
                    {
                        title: 'Hirarki Asabah',
                        content: `
                            <p><strong>Hirarki Asabah:</strong></p>
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
                            <div class="mazhab-reference">
                                <h4>Perbedaan Mazhab:</h4>
                                <p><strong>Mazhab Syafi'i:</strong> Mengikuti hirarki standar seperti di atas.</p>
                                <p><strong>Mazhab Hanafi:</strong> Menempatkan kakek setara dengan saudara kandung dalam hirarki asabah.</p>
                                <p><strong>Mazhab Maliki:</strong> Memberikan preferensi kepada saudara kandung atas kakek dalam beberapa kasus.</p>
                            </div>
                            <div class="indonesian-law">
                                <h4>Hukum di Indonesia:</h4>
                                <p>Menurut KHI Pasal 176, hirarki asabah mengikuti mazhab Syafi'i yang menjadi mazhab resmi di Indonesia. Namun, dalam praktiknya, pengadilan sering mempertimbangkan pendapat mazhab lain untuk mencapai keadilan.</p>
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
                        title: 'Kasus Khusus Asabah',
                        content: `
                            <p><strong>Kasus-Kasus Khusus dalam Asabah:</strong></p>
                            <div class="case-box">
                                <h4>1. 'Ashabah Ma'al Ghairi</h4>
                                <p>Saudara perempuan kandung atau saudara perempuan sebapak menjadi 'ashabah bersama dengan anak perempuan atau cucu perempuan dari anak laki-laki.</p>
                                <p><strong>Contoh:</strong> Jika seorang meninggal dunia dan meninggalkan anak perempuan tunggal (1/2) dan saudara perempuan kandung, maka saudara perempuan kandung tersebut akan menjadi 'ashabah ma'al ghairi dan mendapatkan sisa warisan (1/2).</p>
                                <div class="mazhab-reference">
                                    <h4>Perbedaan Mazhab:</h4>
                                    <p><strong>Mazhab Syafi'i:</strong> Mengakui konsep 'ashabah ma'al ghairi.</p>
                                    <p><strong>Mazhab Hanafi:</strong> Lebih luas dalam mengakui konsep ini, termasuk cucu perempuan dari anak perempuan.</p>
                                </div>
                            </div>
                            <div class="case-box">
                                <h4>2. 'Ashabah Sababiyah</h4>
                                <p>Orang yang mendapatkan sisa warisan karena memerdekakan hamba sahaya yang meninggal tanpa ahli waris 'ashabah nasabiyah.</p>
                                <p><strong>Dasar Hukum:</strong> "Sesungguhnya wala' itu bagi yang memerdekakan (hamba sahaya)." (HR. Bukhari dan Muslim)</p>
                                <p><strong>Catatan:</strong> Pewarisan karena wala' hanya satu arah saja; wali (orang yang memerdekakan) mewarisi dari hamba sahaya yang dimerdekakan, tetapi hamba sahaya yang dimerdekakan tidak mewarisi harta walinya.</p>
                                <div class="indonesian-law">
                                    <h4>Hukum di Indonesia:</h4>
                                    <p>Praktik perbudakan telah dihapus di Indonesia, namun konsep wala' masih relevan dalam konteks sejarah hukum Islam. KHI tidak mengatur secara khusus tentang pewarisan karena wala' karena praktik perbudakan tidak lagi ada.</p>
                                </div>
                            </div>
                            <div class="case-box">
                                <h4>3. Perbedaan 'Ashabah Bil Ghairi dan Ma'al Ghairi</h4>
                                <p><strong>'Ashabah Bil Ghairi:</strong> Ahli waris wanita yang asalnya termasuk ash-habul furudh akan menjadi 'ashabah karena adanya saudara lakinya.</p>
                                <p><strong>'Ashabah Ma'al Ghairi:</strong> Pada asalnya tidak ada yang menjadi 'ashabah dengan sendirinya, namun kebersamaan mereka dengan sesamanya menyebabkan mereka menjadi 'ashabah.</p>
                            </div>
                            <div class="real-case-example">
                                <h4>Kasus Nyata: Pembagian Waris dengan Aset Beragam</h4>
                                <p>Seorang pengusaha meninggal dunia dengan harta warisan berupa: rumah senilai Rp 2 miliar, tanah kavling senilai Rp 3 miliar, deposito senilai Rp 500 juta, dan saham perusahaan senilai Rp 1,5 miliar. Ia meninggalkan istri, 2 anak laki-laki, dan 1 anak perempuan.</p>
                                <p><strong>Pembagian yang benar:</strong></p>
                                <ol>
                                    <li>Istri mendapat 1/8 = Rp 875 juta</li>
                                    <li>Sisa harta = Rp 7 miliar - Rp 875 juta = Rp 6,125 miliar</li>
                                    <li>Anak laki-laki masing-masing mendapat 2 bagian, anak perempuan mendapat 1 bagian</li>
                                    <li>Total bagian anak = 2+2+1 = 5 bagian</li>
                                    <li>Setiap bagian anak = Rp 6,125 miliar / 5 = Rp 1,225 miliar</li>
                                    <li>Anak laki-laki masing-masing mendapat Rp 2,45 miliar</li>
                                    <li>Anak perempuan mendapat Rp 1,225 miliar</li>
                                </ol>
                                <p><strong>Alokasi Aset:</strong> Keluarga sepakat untuk tidak menjual aset, tetapi mengalokasikannya sesuai nilai bagian masing-masing. Istri memilih rumah senilai Rp 875 juta. Anak pertama mendapat tanah kavling senilai Rp 2,45 miliar. Anak kedua mendapat saham dan deposito senilai Rp 2,45 miliar. Anak perempuan mendapat sisa tanah senilai Rp 550 juta dan uang tunai Rp 675 juta untuk menyamakan bagiannya.</p>
                            </div>
                        `
                    }
                ],
                quiz: { 
                    questions: [
                        { type: 'multiple-choice', question: "Siapa yang termasuk Asabah Binasab?", options: ["Anak laki-laki", "Ibu", "Istri", "Anak perempuan tunggal"], correctAnswer: 0 },
                        { type: 'essay', question: "Jelaskan mengapa anak laki-laki menjadi 'asabah yang paling utama dan dapat menghalangi ayahnya sendiri untuk menjadi 'asabah, meskipun ayah adalah orang tuanya!", referenceAnswer: "Jawaban acuan: Karena dalam hukum waris, prioritas utama adalah melanjutkan garis keturunan. Anak laki-laki adalah perpanjangan tangan langsung dari si mayit. Jika anak laki-laki ada, maka garis keturunan sudah jelas dan diwakili olehnya. Ayah, meskipun orang tua, berperan sebagai penopang generasi di atasnya. Jika anak laki-laki tidak ada, barulah ayah 'turun tangan' menjadi pewaris utama ('asabah) untuk memastikan garis keturunan tidak putus." },
                        // Tambahkan 7 soal lagi untuk mencapai 10 soal
                        { type: 'multiple-choice', question: "Siapa yang tidak termasuk dalam kategori 'ashabah bil ghairi'?", options: ["Anak perempuan", "Cucu perempuan dari anak laki-laki", "Saudara perempuan kandung", "Nenek dari pihak ibu"], correctAnswer: 3 },
                        { type: 'multiple-choice', question: "Dalam hirarki asabah, siapa yang lebih utama antara ayah dan saudara laki-laki kandung?", options: ["Ayah", "Saudara laki-laki kandung", "Sama-sama utama", "Tergantung kondisi"], correctAnswer: 1 },
                        { type: 'multiple-choice', question: "Menurut Mazhab Hanafi, siapa yang setara dengan saudara kandung dalam hirarki asabah?", options: ["Kakek", "Paman kandung", "Cucu laki-laki", "Anak dari saudara perempuan"], correctAnswer: 0 },
                        { type: 'essay', question: "Jelaskan perbedaan antara 'ashabah bil ghairi dan 'ashabah ma'al ghairi' beserta contohnya masing-masing!", referenceAnswer: "Jawaban acuan: 'Ashabah bil ghairi adalah ahli waris wanita yang menjadi ashabah karena keberadaan ahli waris laki-laki. Contoh: anak perempuan menjadi ashabah bersama anak laki-laki. 'Ashabah ma'al ghairi adalah perempuan yang menjadi ashabah bersama perempuan lainnya. Contoh: saudara perempuan kandung menjadi ashabah bersama anak perempuan. Perbedaan utamanya adalah pada 'ashabah bil ghairi ada ahli waris laki-laki yang menyebabkan status ashabah, sedangkan pada 'ashabah ma'al ghairi tidak ada ahli waris laki-laki, melainkan kebersamaan sesama perempuan." },
                        { type: 'case-study', scenario: "Seorang laki-laki meninggal dunia dengan meninggalkan harta warisan sebesar Rp 5 miliar. Ahli waris yang tersisa adalah: seorang istri, seorang anak perempuan, seorang ayah, dan seorang saudara laki-laki kandung. Istrinya mengusulkan agar rumah senilai Rp 1 miliar diberikan kepadanya, dan sisanya dibagi tunai.", questions: [
                            { type: 'multiple-choice', question: "Menurut hukum Islam, bagaimana seharusnya pembagian warisan dalam kasus ini?", options: ["Istri mendapat 1/8, anak perempuan 1/2, ayah 1/6, saudara laki-laki sebagai ashabah mendapat sisa", "Istri mendapat rumah Rp 1 miliar, sisanya dibagi tunai sesuai hukum Islam", "Istri mendapat 1/4, anak perempuan 1/2, ayah 1/6, saudara laki-laki mendapat sisa", "Semua harta dibagi tunai secara merata"], correctAnswer: 0 },
                            { type: 'essay', question: "Hitunglah bagian masing-masing ahli waris jika total harta Rp 5 miliar! Jelaskan juga bagaimana alokasi aset yang adil sesuai syariat!", referenceAnswer: "Jawaban acuan: Istri mendapat 1/8 = Rp 625 juta. Anak perempuan mendapat 1/2 = Rp 2,5 miliar. Ayah mendapat 1/6 = Rp 833,33 juta. Total bagian ash-habul furudh = 1/8 + 1/2 + 1/6 = 13/24. Sisa harta = 5 miliar - (13/24 × 5 miliar) = Rp 2,291,67 juta. Saudara laki-laki sebagai ashabah mendapat sisa tersebut. Untuk alokasi aset yang adil: istri bisa memilih rumah senilai Rp 625 juta (sesuai bagiannya). Anak perempuan bisa mendapatkan tanah atau properti senilai Rp 2,5 miliar. Ayah bisa mendapatkan deposito atau properti senilai Rp 833,33 juta. Saudara laki-laki mendapat sisa properti senilai Rp 2,291,67 juta. Jika ada aset yang tidak bisa dibagi rata, bisa dialokasikan dengan harga yang setara atau disepakati bersama." }
                        ]},
                        { type: 'multiple-choice-complex', question: "Menurut KHI Pasal 176, hirarki asabah di Indonesia mengikuti mazhab...", options: ["Hanafi", "Maliki", "Syafi'i", "Hanbali"], correctAnswer: 2, explanation: "Kompilasi Hukum Islam (KHI) Pasal 176 menyatakan bahwa hirarki asabah mengikuti mazhab Syafi'i yang menjadi mazhab resmi di Indonesia." },
                        { type: 'multiple-choice-complex', question: "Dalam kasus di mana seseorang meninggal tanpa ahli waris asabah nasabiyah, sisa harta setelah pembagian kepada ash-habul furudh akan...", options: ["Dikembalikan kepada negara", "Dibagikan kembali kepada ash-habul furudh (radd)", "Diberikan kepada ahli waris terdekat non-muslim", "Dibagikan kepada kerabat terdekat yang muslim"], correctAnswer: 3, explanation: "Menurut KHI Pasal 193, jika seseorang meninggal tanpa ahli waris asabah, maka harta warisnya diserahkan kepada baitul mal untuk kepentingan sosial." }
                    ]}
                }
        ]
    },
    {
    id: 'bab5', title: 'Bab 5: Kasus Khusus Pembagian (Radd & Aul)',
    subChapters: [
        {
            id: 'sub5-1', 
            title: '5.1 Konsep dan Implementasi Radd & Aul',
            slides: [
                {
                    title: 'Pengantar Radd & Aul',
                    content: `
                        <p>Dalam pembagian waris, ada dua kondisi khusus yang membuat perhitungan tidak sesederhana menjumlahkan bagian. Kedua kondisi ini adalah <strong>'Aul</strong> dan <strong>'Radd</strong>.</p>
                        <ul>
                            <li><strong>'Aul (عَوْل)</strong> terjadi ketika jumlah bagian Ashabul Furudh (ahli waris dengan bagian tetap) <strong>lebih besar</strong> dari total harta (1). Ini seperti membagi kue yang tidak cukup untuk semua pihak sesuai porsi semula, sehingga porsi semua harus dikurangi secara proporsional.</li>
                            <li><strong>'Radd (رَدّ)</strong> terjadi ketika jumlah bagian Ashabul Furudh <strong>lebih kecil</strong> dari total harta (1) dan <strong>tidak ada</strong> ahli waris Asabah (pewaris sisa). Sisa harta ini kemudian dikembalikan (dipulangkan) kepada Ashabul Furudh yang berhak, secara proporsional.</li>
                        </ul>
                        <p>Kedua konsep ini penting untuk memastikan <strong>tidak ada harta yang tersisa tanpa pemilik</strong> dan <strong>pembagian tetap adil</strong> meskipun ada perubahan kondisi.</p>
                    `
                },
                {
                    title: 'Konsep \'Aul (Pengurangan Bagian)',
                    content: `
                        <p><strong>Definisi 'Aul:</strong> 'Aul secara bahasa berarti 'condong' atau 'berlebih'. Dalam istilah fikih, 'Aul adalah pengurangan bagian (bagian tetap) seluruh Ashabul Furudh secara proporsional karena jumlah bagian mereka melebihi satu (seluruh harta).</p>
                        <div class="info-box">
                            <h4>Kapan Terjadi 'Aul?</h4>
                            <p>'Aul hanya terjadi jika semua ahli waris adalah dari golongan Ashabul Furudh, dan jumlah pecahan bagian mereka lebih dari 1.</p>
                            <p><strong>Contoh Kasus Klasik:</strong> Seorang mayit meninggalkan <strong>suami, ibu, dan dua saudara perempuan kandung.</strong></p>
                            <ul>
                                <li>Suami mendapat: 1/2</li>
                                <li>Ibu mendapat: 1/6</li>
                                <li>Dua saudara perempuan mendapat: 2/3</li>
                            </ul>
                            <p><strong>Perhitungan:</strong> 1/2 + 1/6 + 2/3 = 3/6 + 1/6 + 4/6 = 8/6. Karena 8/6 > 1, maka terjadi 'Aul.</p>
                        </div>
                        <div class="mazhab-reference">
                            <h4>Pandangan Mazhab & Muhammadiyah tentang 'Aul:</h4>
                            <p><strong>Mazhab Syafi'i, Maliki, dan Hanbali:</strong> Menerapkan 'Aul. Cara penyelesaiannya adalah dengan mencari penyebut (KPK) yang sama dan menjadikan total bagian baru sebagai dasar pembagian.</p>
                            <p><strong>Mazhab Hanafi:</strong> Juga menerapkan 'Aul', tetapi dengan istilah <em>tasbīh</em> (penyerupaan). Mekanismenya serupa, yaitu menyesuaikan bagian agar totalnya menjadi 1.</p>
                            <p><strong>Pandangan Muhammadiyah:</strong> Mengikuti Mazhab Syafi'i. 'Aul diterapkan dengan cara mencari KPK dari penyebut dan membagi sisa harta secara proporsional.</p>
                        </div>
                    `
                },
                {
                    title: 'Konsep \'Radd (Pengembalian Sisa Harta)',
                    content: `
                        <p><strong>Definisi 'Radd:</strong> 'Radd secara bahasa berarti 'kembali'. Dalam istilah fikih, 'Radd adalah pengembalian sisa harta warisan kepada Ashabul Furudh jika tidak ada ahli waris Asabah yang menerima sisanya.</p>
                        <div class="info-box">
                            <h4>Kapan Terjadi 'Radd?</h4>
                            <p>'Radd terjadi jika:</p>
                            <ol>
                                <li>Jumlah bagian Ashabul Furudh kurang dari 1.</li>
                                <li>Tidak ada ahli waris Asabah yang menerima sisa harta.</li>
                            </ol>
                            <p><strong>Contoh Kasus:</strong> Seorang mayit meninggalkan <strong>ibu dan seorang anak perempuan.</strong></p>
                            <ul>
                                <li>Ibu mendapat: 1/6</li>
                                <li>Anak perempuan mendapat: 1/2</li>
                            </ul>
                            <p><strong>Perhitungan:</strong> 1/6 + 1/2 = 1/6 + 3/6 = 4/6. Sisa harta adalah 1 - 4/6 = 2/6. Karena tidak ada Asabah, sisa ini (2/6) dilakukan 'Radd.</p>
                        </div>
                        <div class="mazhab-reference">
                            <h4>Pandangan Mazhab & Muhammadiyah tentang 'Radd:</h4>
                            <p><strong>Mazhab Syafi'i, Maliki, dan Hanbali:</strong> Menerapkan 'Radd. Namun, <strong>suami dan istri tidak menerima bagian Radd</strong>. Sisa harta hanya dibagikan kepada Ashabul Furudh lainnya (seperti anak, ibu, nenek, saudara perempuan) secara proporsional.</p>
                            <p><strong>Mazhab Hanafi:</strong> Juga menerapkan 'Radd', tetapi dengan pandangan yang unik. Mereka memberikan 'Radd kepada <strong>semua Ashabul Furudh kecuali suami atau istri</strong>. Jika ahli warisnya hanya istri (atau beberapa istri) dan Dzu Arham (kerabat jauh), menurut mereka sisa harta menjadi milik Baitul Mal (bukan 'Radd).</p>
                            <p><strong>Pandangan Muhammadiyah:</strong> Mengikuti Mazhab Syafi'i. Suami dan istri tidak menerima bagian 'Radd.</p>
                        </div>
                    `
                },
                {
                    title: 'Contoh Kasus \'Aul: Suami, Ibu, 2 Saudari',
                    content: `
                        <p><strong>Skenario:</strong> Seorang laki-laki meninggal dunia. Ahli waris yang tersisa adalah: seorang <strong>suami</strong>, seorang <strong>ibu</strong>, dan dua <strong>saudara perempuan kandung</strong>. Total harta warisan adalah Rp 600 juta.</p>
                        <div class="example-box">
                            <h4>Langkah 1: Tentukan Bagian Masing-Masing</h4>
                            <ul>
                                <li>Suami: 1/2</li>
                                <li>Ibu: 1/6</li>
                                <li>2 Saudara Perempuan: 2/3</li>
                            </ul>
                        </div>
                        <div class="example-box">
                            <h4>Langkah 2: Jumlahkan Bagian</h4>
                            <p>1/2 + 1/6 + 2/3 = 3/6 + 1/6 + 4/6 = 8/6.</p>
                            <p>Karena 8/6 > 1, maka terjadi <strong>'Aul</strong>.</p>
                        </div>
                        <div class="example-box">
                            <h4>Langkah 3: Penyelesaian dengan 'Aul (Metode Syafi'i/Muhammadiyah)</h4>
                            <ol>
                                <li>Cari KPK dari penyebut (2, 6, 3) adalah 6.</li>
                                <li>Jumlahkan semua bagian menjadi bilangan bulat: 3 (dari 3/6) + 1 (dari 1/6) + 4 (dari 4/6) = <strong>8 bagian</strong>.</li>
                                <li>Total harta (Rp 600 juta) sekarang dianggap memiliki 8 bagian.</li>
                                <li>Hitung nilai per bagian: Rp 600.000.000 / 8 = Rp 75.000.000.</li>
                            </ol>
                        </div>
                        <div class="example-box">
                            <h4>Langkah 4: Bagikan Harta</h4>
                            <ul>
                                <li><strong>Suami:</strong> 3 bagian x Rp 75.000.000 = <strong>Rp 225.000.000</strong> (awalnya 1/2 = Rp 300 juta, berkurang).</li>
                                <li><strong>Ibu:</strong> 1 bagian x Rp 75.000.000 = <strong>Rp 75.000.000</strong> (awalnya 1/6 = Rp 100 juta, berkurang).</li>
                                <li><strong>Masing-masing Saudari:</strong> 2 bagian x Rp 75.000.000 = <strong>Rp 150.000.000</strong> (awalnya 1/3 = Rp 200 juta, berkurang).</li>
                            </ul>
                            <p>Total: 225 + 75 + 150 + 150 = 600 juta. Semua harta terbagi dengan adil.</p>
                        </div>
                    `
                },
                {
                    title: 'Contoh Kasus \'Radd: Ibu dan Anak Perempuan',
                    content: `
                        <p><strong>Skenario:</strong> Seorang ibu meninggal dunia. Ahli waris yang tersisa adalah: seorang <strong>ayah</strong>, seorang <strong>ibu</strong> (nenek dari pihak ayah), dan seorang <strong>anak perempuan</strong>. Total harta warisan adalah Rp 1,2 miliar.</p>
                        <div class="example-box">
                            <h4>Langkah 1: Tentukan Bagian Masing-Masing</h4>
                            <ul>
                                <li>Ayah: Menjadi 'Asabah (karena ada anak perempuan).</li>
                                <li>Ibu (nenek): 1/6</li>
                                <li>Anak Perempuan: 1/2</li>
                            </ul>
                        </div>
                        <div class="example-box">
                            <h4>Langkah 2: Jumlahkan Bagian Ashabul Furudh</h4>
                            <p>1/6 (nenek) + 1/2 (anak perempuan) = 1/6 + 3/6 = 4/6.</p>
                            <p>Sisa harta setelah bagian Furudh adalah 1 - 4/6 = 2/6.</p>
                            <p>Karena ada Asabah (ayah), sisa 2/6 ini <strong>diserahkan kepada ayah</strong>. <strong>Tidak terjadi 'Radd</strong> dalam kasus ini.</p>
                        </div>
                        <hr>
                        <p><strong>Mari kita ubah skenario agar terjadi 'Radd':</strong> Seorang perempuan meninggal dunia. Ahli warisnya: <strong>ibu</strong> dan <strong>anak perempuan</strong>. Total harta Rp 1,2 miliar.</p>
                        <div class="example-box">
                            <h4>Langkah 1 (Baru): Tentukan Bagian</h4>
                            <ul>
                                <li>Ibu: 1/6</li>
                                <li>Anak Perempuan: 1/2</li>
                            </ul>
                        </div>
                        <div class="example-box">
                            <h4>Langkah 2 (Baru): Jumlahkan Bagian</h4>
                            <p>1/6 + 1/2 = 4/6. Sisa harta = 1 - 4/6 = 2/6.</p>
                            <p>Karena tidak ada Asabah, maka terjadi <strong>'Radd</strong>. Sisa 2/6 dikembalikan kepada Ibu dan Anak Perempuan.</p>
                        </div>
                        <div class="example-box">
                            <h4>Langkah 3 (Baru): Penyelesaian dengan 'Radd (Metode Syafi'i/Muhammadiyah)</h4>
                            <ol>
                                <li><strong>Proporsi bagian:</strong> Ibu : Anak Perempuan = 1/6 : 1/2 = 1 : 3. Total proporsi = 4 bagian.</li>
                                <li><strong>Sisa harta (2/6)</strong> dibagi berdasarkan proporsi. Setiap 1 bagian proporsi mendapat: (2/6) / 4 = 2/24 = 1/12.</li>
                                <li><strong>Hitung bagian akhir:</strong>
                                    <ul>
                                        <li><strong>Ibu:</strong> 1/6 + 1/12 = 2/12 + 1/12 = 3/12 = 1/4.</li>
                                        <li><strong>Anak Perempuan:</strong> 1/2 + 3/12 = 6/12 + 3/12 = 9/12 = 3/4.</li>
                                    </ul>
                                </li>
                            </ol>
                        </div>
                        <div class="example-box">
                            <h4>Langkah 4 (Baru): Bagikan Harta</h4>
                            <ul>
                                <li><strong>Ibu:</strong> 1/4 x Rp 1.200.000.000 = <strong>Rp 300.000.000</strong>.</li>
                                <li><strong>Anak Perempuan:</strong> 3/4 x Rp 1.200.000.000 = <strong>Rp 900.000.000</strong>.</li>
                            </ul>
                            <p>Total: 300 + 900 = 1,2 miliar. Semua harta terbagi.</p>
                        </div>
                    `
                },
                {
                    title: 'Tabel Perbandingan Pandangan',
                    content: `
                        <p>Berikut adalah ringkasan perbedaan pandangan mengenai 'Aul dan 'Radd:</p>
                        <table style="width:100%; border-collapse: collapse; font-size: 14px;">
                            <tr style="background-color:#f2f2f2;">
                                <th style="border:1px solid #ddd;padding:8px;">Konsep</th>
                                <th style="border:1px solid #ddd;padding:8px;">Mazhab Syafi'i, Maliki, Hanbali</th>
                                <th style="border:1px solid #ddd;padding:8px;">Mazhab Hanafi</th>
                                <th style="border:1px solid #ddd;padding:8px;">Pandangan Muhammadiyah</th>
                            </tr>
                            <tr>
                                <td style="border:1px solid #ddd;padding:8px;"><strong>'Aul (Pengurangan)</strong></td>
                                <td style="border:1px solid #ddd;padding:8px;">Diterapkan. Jumlah bagian Ashabul Furudh > 1.</td>
                                <td style="border:1px solid #ddd;padding:8px;">Diterapkan (disebut <em>tasbīh</em>).</td>
                                <td style="border:1px solid #ddd;padding:8px;">Mengikuti Mazhab Syafi'i. Diterapkan.</td>
                            </tr>
                            <tr>
                                <td style="border:1px solid #ddd;padding:8px;"><strong>'Radd (Pengembalian)</strong></td>
                                <td style="border:1px solid #ddd;padding:8px;">Diterapkan. Jumlah bagian Ashabul Furudh < 1 dan tidak ada Asabah.</td>
                                <td style="border:1px solid #ddd;padding:8px;">Diterapkan, dengan catatan khusus.</td>
                                <td style="border:1px solid #ddd;padding:8px;">Mengikuti Mazhab Syafi'i. Diterapkan.</td>
                            </tr>
                            <tr>
                                <td style="border:1px solid #ddd;padding:8px;"><strong>Penerima 'Radd</strong></td>
                                <td style="border:1px solid #ddd;padding:8px;">Ashabul Furudh kecuali suami/istri.</td>
                                <td style="border:1px solid #ddd;padding:8px;">Semua Ashabul Furudh kecuali suami/istri. Jika hanya istri & Dzu Arham, sisa ke Baitul Mal.</td>
                                <td style="border:1px solid #ddd;padding:8px;">Ashabul Furudh kecuali suami/istri.</td>
                            </tr>
                        </table>
                        <div class="note-box">
                            <p><strong>Catatan Penting:</strong> Perbedaan pandangan ini penting untuk dipahami, terutama dalam kasus di mana ahli warisnya hanya suami/istri atau ada kerabat jauh (Dzu Arham). Di Indonesia, KHI umumnya mengikuti Mazhab Syafi'i, namun pengadilan dapat mempertimbangkan pendapat lain untuk mencapai keadilan.</p>
                        </div>
                    `
                }
            ],
            quiz: { 
                questions: [
                    { type: 'multiple-choice', question: "Kapan terjadi 'Aul dalam pembagian waris?", options: ["Ketika total bagian Ashabul Furudh kurang dari 1", "Ketika total bagian Ashabul Furudh lebih dari 1", "Ketika ada ahli waris Asabah", "Ketika tidak ada ahli waris"], correctAnswer: 1 },
                    { type: 'multiple-choice', question: "Menurut Mazhab Syafi'i dan Muhammadiyah, siapa yang TIDAK menerima bagian 'Radd?", options: ["Anak perempuan", "Ibu", "Suami", "Nenek"], correctAnswer: 2 },
                    { type: 'essay', question: "Jelaskan perbedaan utama antara 'Aul dan 'Radd! Berikan contoh skenario singkat untuk masing-masing konsep!", referenceAnswer: "Jawaban acuan: 'Aul terjadi ketika jumlah bagian Ashabul Furudh melebihi total harta (>1), sehingga semua bagian harus dikurangi secara proporsional. Contoh: Mayit meninggalkan suami (1/2), ibu (1/6), dan 2 saudari (2/3). Totalnya 8/6, terjadi 'Aul. 'Radd terjadi ketika jumlah bagian Ashabul Furudh kurang dari total harta (<1) dan tidak ada Asabah, sehingga sisa harta dikembalikan kepada Ashabul Furudh (kecuali suami/istri). Contoh: Mayit meninggalkan ibu (1/6) dan anak perempuan (1/2). Totalnya 4/6, sisa 2/6 dilakukan 'Radd." },
                    { type: 'matching', question: "Jodohkan istilah dengan penjelasannya!", pairs: [{ term: "'Aul", match: "Pengurangan bagian karena total > 1" }, { term: "'Radd", match: "Pengembalian sisa harta karena total < 1" }, { term: "Asabah", match: "Ahli waris penerima sisa harta" }, { term: "Hijb", match: "Penghalang bagi ahli waris" }] },
                    { type: 'case-study', scenario: "Seorang wanita meninggal dunia dengan harta Rp 480 juta. Ahli warisnya: seorang suami, seorang ibu, dan seorang anak perempuan.", questions: [
                        { type: 'multiple-choice', question: "Berdasarkan skenario di atas, konsep apa yang akan diterapkan?", options: ["'Aul", "'Radd", "Tidak keduanya, karena ada Asabah", "Tidak keduanya, karena total bagian kurang dari 1"], correctAnswer: 1 },
                        { type: 'essay', question: "Hitunglah bagian masing-masing ahli waris secara lengkap menurut pandangan Mazhab Syafi'i/Muhammadiyah!", referenceAnswer: "Jawaban acuan: 1. Bagian awal: Suami 1/4, Ibu 1/6, Anak Perempuan 1/2. 2. Total bagian: 1/4 + 1/6 + 1/2 = 3/12 + 2/12 + 6/12 = 11/12. 3. Sisa harta: 1 - 11/12 = 1/12. 4. Terjadi 'Radd karena tidak ada Asabah. 5. Penerima 'Radd adalah Ibu dan Anak Perempuan (suami tidak menerima). 6. Proporsi Ibu : Anak Perempuan = 1/6 : 1/2 = 1:3. Total proporsi 4. 7. Sisa harta (1/12) dibagi 4 = 1/48 per proporsi. 8. Bagian akhir: Suami = 1/4 = 12/48 = Rp 120 juta. Ibu = 1/6 + 1/48 = 8/48 + 1/48 = 9/48 = Rp 90 juta. Anak Perempuan = 1/2 + 3/48 = 24/48 + 3/48 = 27/48 = Rp 270 juta. Total: 120+90+270 = 480 juta." }
                    ]},
                    { type: 'multiple-choice', question: "Seorang mayit meninggalkan istri, seorang anak laki-laki, dan seorang anak perempuan. Bagaimana pembagiannya?", options: ["Terjadi 'Aul", "Terjadi 'Radd", "Tidak keduanya", "Anak laki-laki mendapat semua sisa"], correctAnswer: 2 },
                    { type: 'essay', question: "Seorang mayit meninggalkan ibu, seorang istri, dan dua saudara perempuan kandung. Total harta Rp 300 juta. Jelaskan apakah terjadi 'Aul atau 'Radd, lalu hitung bagian masing-masing!", referenceAnswer: "Jawaban acuan: 1. Bagian awal: Ibu 1/6, Istri 1/4, 2 Saudari 2/3. 2. Total bagian: 1/6 + 1/4 + 2/3 = 2/12 + 3/12 + 8/12 = 13/12. 3. Karena 13/12 > 1, terjadi 'Aul. 4. KPK penyebut (6,4,3) adalah 12. 5. Total bagian baru: 2 + 3 + 8 = 13 bagian. 6. Nilai per bagian: Rp 300.000.000 / 13 ≈ Rp 23.076.923. 7. Bagian akhir: Ibu = 2 bagian ≈ Rp 46.153.846. Istri = 3 bagian ≈ Rp 69.230.769. Masing-masing Saudari = 4 bagian ≈ Rp 92.307.692." },
                    { type: 'case-study', scenario: "Pak Ahmad meninggal dan hanya meninggalkan seorang istri dan seorang ibu (nenek dari pihak Pak Ahmad). Total harta Rp 500 juta.", questions: [
                        { type: 'multiple-choice', question: "Menurut Mazhab Syafi'i, bagaimana sisa harta setelah pembagian awal ditangani?", options: ["Diberikan kepada istri dan ibu secara 'Radd", "Diberikan kepada ibu saja secara 'Radd", "Menjadi milik Baitul Mal", "Dibagi dua sama rata"], correctAnswer: 2 },
                        { type: 'essay', question: "Bandingkan hasil pembagian antara Mazhab Syafi'i dan Hanafi untuk kasus Pak Ahmad!", referenceAnswer: "Jawaban acuan: 1. Bagian awal: Istri 1/4, Ibu (nenek) 1/6. Total = 5/12. Sisa = 7/12. 2. <strong>Menurut Mazhab Syafi'i:</strong> Istri tidak menerima 'Radd. Sisa 7/12 seluruhnya diberikan kepada Ibu (nenek). Bagian akhir: Istri = 1/4 x 500 juta = Rp 125 juta. Ibu = 1/6 + 7/12 = 2/12 + 7/12 = 9/12 = 3/4. Ibu mendapat 3/4 x 500 juta = Rp 375 juta. 3. <strong>Menurut Mazhab Hanafi:</strong> Karena ahli warisnya hanya istri dan Dzu Arham (ibu/nenek), maka sisa harta (7/12) menjadi milik Baitul Mal. Bagian akhir: Istri = 1/4 x 500 juta = Rp 125 juta. Ibu = 1/6 x 500 juta = Rp 83,33 juta. Sisa harta Rp 291,67 juta menjadi milik Baitul Mal." }
                    ]},
                    { type: 'multiple-choice-complex', question: "Dalam kasus 'Aul, metode yang digunakan oleh Mazhab Syafi'i untuk menyelesaikannya adalah...", options: ["Mencari KPK penyebut dan menjadikan total bagian baru sebagai dasar", "Memberikan sisa harta kepada yang paling dekat", "Mengurangi bagian yang paling besar", "Membatalkan bagian ahli waris paling jauh"], correctAnswer: 0, explanation: "Metode Mazhab Syafi'i adalah dengan mencari Kelipatan Persekutuan Terkecil (KPK) dari penyebut semua pecahan bagian, lalu menjumlahkan pembilangnya untuk mendapatkan total bagian baru. Total harta kemudian dibagi dengan total bagian baru ini." },
                    { type: 'multiple-choice-complex', question: "Konsep 'Radd adalah penerapan dari kaidah 'la yuratsu', yang berarti...", options: ["Harta tidak boleh mubazir/tidak ada pemilik", "Yang lebih dekat menghalangi yang lebih jauh", "Bagian laki-laki sama dengan 2 bagian perempuan", "Hutang harus dilunasi terlebih dahulu"], correctAnswer: 0, explanation: "Kaidah 'la yuratsu' (لا يراث) adalah prinsip bahwa dalam Islam, harta tidak boleh terbengkalai tanpa pemilik. Konsep 'Radd adalah manifestasi dari kaidah ini untuk memastikan sisa harta tidak mubazir dan tetap berada di kalangan ahli waris yang berhak." }
                ]}
            }
        ]
    },
    {
        id: 'bab6', title: 'Bab 6: Praktik Pembagian & Kasus Khusus',
        subChapters: [
            {
                id: 'sub6-1', 
                title: '6.1 Prosedur Pembagian Waris',
                slides: [
                    {
                        title: 'Prosedur Pembagian Waris',
                        content: `
                            <p><strong>Prosedur Pembagian Waris:</strong> Pembagian waris di Indonesia harus mengikuti prosedur yang diatur dalam Kompilasi Hukum Islam (KHI) dan peraturan perundang-undangan yang berlaku.</p>
                            <div class="procedure-box">
                                <h4>📋 Langkah-Langkah Pembagian Waris:</h4>
                                <ol>
                                    <li><strong>Finalisasi Kematian:</strong> Memastikan pewaris telah benar-benar wafat dengan mendapatkan Surat Keterangan Kematian (SKK) dari rumah sakit atau dokter.</li>
                                    <li><strong>Inventarisasi Harta:</strong> Membuat daftar inventaris harta peninggalan yang lengkap, baik yang bergerak maupun tidak bergerak.</li>
                                    <li><strong>Identifikasi Ahli Waris:</strong> Menentukan siapa saja yang berhak menerima bagian waris sesuai hukum Islam.</li>
                                    <li><strong>Pelunasan Hutang:</strong> Melunasi semua hutang pewaris terlebih dahulu sebelum membagikan warisan.</li>
                                    <li><strong>Pelaksanaan Wasiat:</strong> Melaksanakan wasiat yang sah (maksimal 1/3 harta) jika ada.</li>
                                    <li><strong>Pembagian Warisan:</strong> Membagikan harta kepada ahli waris sesuai dengan hukum faraidh.</li>
                                    <li><strong>Pembuatan Berita Acara:</strong> Membuat berita acara pembagian waris sebagai bukti bahwa pembagian telah dilakukan.</li>
                                </ol>
                            </div>
                            <div class="source-detail">
                                <h4>QS. An-Nisa' : 12</h4>
                                <p class="verse-arabic">مِن بَعْدِ وَصِيَّةٍ يُوصِي بِهَا أَوْ دَيْنٍ ۗ آبَاؤُكُمْ وَأَبْنَاؤُكُمْ لَا تَدْرُونَ أَيُّهُمْ أَقْرَبُ لَكُمْ نَفْعًا ۚ فَرِيضَةً مِنَ اللَّهِ ۗ إِنَّ اللَّهَ كَانَ عَلِيمًا حَكِيمًا</p>
                                <p class="verse-translation"><strong>Terjemahan:</strong> "(Pembagian ini) sesudah dipenuhi wasiat (yang telah dibuatnya) dan sesudah (dibayarkan) hutangnya. (Pembagian itu dilakukan) supaya tidak ada kerugian (bagi) di antara kamu."</p>
                                <div class="source-context"><strong>Asbabun Nuzul:</strong> Ayat ini turun sebagai peringatan keras bagi orang-orang yang menentang syariat Islam, termasuk dalam hal pembagian warisan yang telah ditetapkan Allah. Ayat ini menegaskan bahwa pembagian warisan harus dilakukan setelah semua kewajiban terpenuhi.</div>
                                <div class="source-explanation"><strong>Tafsir Ringkas:</strong> Ayat ini menunjukkan urutan yang harus diperhatikan dalam pembagian waris: wasiat dan hutang harus dipenuhi terlebih dahulu sebelum harta dibagikan.</div>
                                <div class="mazhab-reference">
                                    <h4>Referensi Mazhab:</h4>
                                    <p><strong>Imam Syafi'i:</strong> Menyatakan bahwa wasiat dan hutang harus dipenuhi terlebih dahulu sebelum pembagian warisan.</p>
                                    <p><strong>Imam Hanafi:</strong> Menambahkan bahwa hutang yang terkait dengan harta waris harus diprioritaskan pembayarannya.</p>
                                </div>
                                <div class="indonesian-law">
                                    <h4>Hukum di Indonesia:</h4>
                                    <p>Menurut KHI Pasal 171, pembagian waris harus dilakukan setelah semua kewajiban dipenuhi. Pembagian dapat dilakukan secara musyawarah atau melalui pengadilan agama.</p>
                                </div>
                            </div>
                            <div class="real-case-example">
                                <h4>Kasus Nyata:</h4>
                                <p>Seorang pengusaha meninggal dunia dengan harta warisan senilai Rp 10 miliar. Setelah diinventarisasi, ternyata ia memiliki hutang senilai Rp 2 miliar dan wasiat sebesar Rp 1 miliar untuk pembangunan masjid. Ia meninggalkan istri, 2 anak laki-laki, dan 1 anak perempuan.</p>
                                <p><strong>Pembagian yang benar:</strong></p>
                                <ol>
                                    <li>Melunasi hutang Rp 2 miliar terlebih dahulu.</li>
                                    <li>Melaksanakan wasiat Rp 1 miliar.</li>
                                    <li>Sisa harta = Rp 7 miliar.</li>
                                    <li>Istri mendapat 1/8 = Rp 1,25 miliar.</li>
                                    <li>Anak-anak mendapat sisa harta Rp 5,75 miliar.</li>
                                    <li>Perhitungan bagian anak: 4 bagian total (2 anak laki-laki = 4 bagian anak perempuan).</li>
                                    <li>Setiap bagian anak laki-laki = Rp 1,437,5 juta.</li>
                                    <li>Anak perempuan = Rp 718,75 juta.</li>
                                </ol>
                                <p><strong>Alokasi Aset:</strong></p>
                                <ol>
                                    <li>Keluarga sepakat untuk tidak menjual aset, tetapi mengalokasikannya sesuai kebutuhan.</li>
                                    <li>Istri memilih rumah senilai Rp 1,25 miliar.</li>
                                    <li>Anak pertama mendapat tanah kavling senilai Rp 2,875 juta.</li>
                                    <li>Anak kedua mendapat mobil BPKB senilai Rp 1,437,5 juta.</li>
                                    <li>Anak perempuan mendapat uang tunai Rp 718,75 juta.</li>
                                </ol>
                            </div>
                        `
                    },
                    {
                        title: 'Alokasi Aset dalam Pembagian Waris',
                        content: `
                            <p><strong>Alokasi Aset dalam Pembagian Waris:</strong> Aset tidak likuid seperti rumah, tanah, atau kendaraan seringkali menimbulkan tantangan dalam pembagian waris. Berikut adalah metode yang dapat digunakan:</p>
                            <div class="allocation-methods">
                                <h4>🏠 Metode Alokasi Aset:</h4>
                                <div class="method">
                                    <p><strong>Penilaian Profesional:</strong> Menggunakan jasa penilai profesional untuk menentukan nilai pasar masing-masing aset.</p>
                                    <p><strong>Alokasi Langsung:</strong> Memberikan aset kepada ahli waris sesuai dengan nilai bagian mereka.</p>
                                    <p><strong>Penjualan dan Pembagian Tunai:</strong> Menjual aset dan membagi hasil penjualan secara tunai sesuai dengan bagian masing-masing.</p>
                                    <p><strong>Wakaf:</strong> Aset diwakafkan untuk kepentingan sosial dengan persetujuan ahli waris.</p>
                                </div>
                            </div>
                            <div class="real-case-example">
                                <h4>📋 Kasus Nyata:</h4>
                                <p>Seorang ayah meninggal dunia dengan harta warisan berupa: rumah senilai Rp 2 miliar, tanah kavling senilai Rp 3 miliar, dan deposito senilai Rp 500 juta. Ia meninggalkan istri, 2 anak laki-laki, dan 1 anak perempuan.</p>
                                <p><strong>Pembagian yang Adil:</strong></p>
                                <ol>
                                    <li>Total harta = Rp 5,5 juta</li>
                                    <li>Istri mendapat 1/8 = Rp 687,5 juta</li>
                                    <li>Sisa harta = Rp 4,812,5 juta</li>
                                    <li>Anak-anak mendapat sisa harta tersebut sesuai dengan hukum faraidh.</li>
                                    <li>Perhitungan bagian anak: 4 bagian total (2 anak laki-laki = 4 bagian anak perempuan).</li>
                                    <li>Setiap bagian anak laki-laki = Rp 1,203,125 juta.</li>
                                    <li>Anak perempuan = Rp 603,125 juta.</li>
                                </ol>
                                <p><strong>Alokasi Aset:</strong></p>
                                <ol>
                                    <li>Keluarga sepakat untuk tidak menjual aset, tetapi mengalokasikannya sesuai kebutuhan.</li>
                                    <li>Istri memilih rumah senilai Rp 687,5 juta.</li>
                                    <li>Anak pertama mendapat tanah kavling senilai Rp 2,406,25 juta.</li>
                                    <li>Anak kedua mendapat mobil BPKB senilai Rp 1,203,125 juta.</li>
                                    <li>Anak perempuan mendapat uang tunai Rp 603,125 juta.</li>
                                </ol>
                            </div>
                        `
                    },
                    {
                        title: 'Pembagian Waris dengan Hutang',
                        content: `
                            <p><strong>Pembagian Waris dengan Hutang:</strong> Hutang pewaris memiliki prioritas tinggi dalam pembagian waris dan harus dilunasi terlebih dahulu sebelum harta dibagikan.</p>
                            <div class="debt-priority">
                                <h4>📋 Prioritas Hutang:</h4>
                                <ol>
                                    <li><strong>Hutang Pajak:</strong> Hutang kepada negara (pajak dan retribusi) didahulukan terlebih dahulu.</li>
                                    <li><strong>Hutang Zakat:</strong> Zakat yang belum dibayar oleh pewaris harus dilunasi terlebih dahulu.</li>
                                    <li><strong>Hutang Mahr:</strong> Hutang mahr yang belum dibayar oleh suami kepada istri harus dilunasi terlebih dahulu.</li>
                                    <li><strong>Hutang KPR:</strong> Hutang kepada bank atau lembaga keuangan.</li>
                                    <li><strong>Hutang Qardh:</strong> Hutang kepada pihak lain yang jelas-jelas.</li>
                                </ol>
                            </div>
                            <div class="source-detail">
                                <h4>QS. An-Nisa' : 12</h4>
                                <p class="verse-arabic">مِن بَعْدِ وَصِيَّةٍ يُوصِي بِهَا أَوْ دَيْنٍ ۗ آبَاؤُكُمْ وَأَبْنَاؤُكُمْ لَا تَدْرُونَ أَيُّهُمْ أَقْرَبُ لَكُمْ نَفْعًا ۚ فَرِيضَةً مِنَ اللَّهِ ۗ إِنَّ اللَّهَ كَانَ عَلِيمًا حَكِيمًا</p>
                                <p class="verse-translation"><strong>Terjemahan:</strong> "(Pembagian ini) sesudah dipenuhi wasiat (yang telah dibuatnya) dan sesudah (dibayarkan) hutangnya. (Pembagian itu dilakukan) supaya tidak ada kerugian (bagi) di antara kamu."</p>
                                <div class="source-context"><strong>Asbabun Nuzul:</strong> Ayat ini turun sebagai peringatan keras bagi orang-orang yang menentang syariat Islam, termasuk dalam hal pembagian warisan yang telah ditetapkan Allah. Ayat ini menegaskan bahwa pembagian warisan harus dilakukan setelah semua kewajiban dipenuhi.</div>
                                <div class="source-explanation"><strong>Tafsir yang tidak ada kesalahan sintaksis, saya akan memperbaiki bagian ini.</p>
                                <div class="mazhab-reference">
                                    <h4>Referensi Mazhab:</h4>
                                    <p><strong>Imam Syafi'i:</strong> Menyatakan bahwa wasiat dan hutang harus dipenuhi terlebih dahulu sebelum pembagian warisan.</p>
                                    <p><strong>Imam Hanafi:</strong> Menambahkan bahwa hutang yang terkait dengan harta waris harus diprioritaskan pembayarannya.</p>
                                </div>
                                <div class="indonesian-law">
                                    <h4>Hukum di Indonesia:</h4>
                                    <p>Menurut KHI Pasal 113, hutang pewaris harus dilunasi terlebih dahulu sebelum pembagian warisan.</p>
                                </div>
                            </div>
                            <div class="real-case-example">
                                <h4>📋 Kasus Nyata:</h4>
                                <p>Seorang pengusaha meninggal dunia dengan harta warisan senilai Rp 10 miliar. Setelah diinventarisasi, ternyata ia memiliki hutang senilai Rp 2 miliar dan wasiat sebesar Rp 1 miliar untuk pembangunan masjid. Ia meninggalkan istri, 2 anak laki-laki, dan 1 anak perempuan.</p>
                                <p><strong>Pembagian yang Benar:</strong></p>
                                <ol>
                                    <li>Melunasi hutang Rp 2 miliar terlebih dahulu.</li>
                                    <li>Melaksanakan wasiat Rp 1 miliar.</li>
                                    <li>Sisa harta = Rp 7 miliar.</li>
                                    <li>Istri mendapat 1/8 = Rp 875 juta.</li>
                                    <li>Anak-anak mendapat sisa harta Rp 5,125 juta.</li>
                                </ol>
                                <p><strong>Perhitungan Bagian Anak:</strong></p>
                                <ol>
                                    <li>2 anak laki-laki = 4 bagian</li>
                                    <li>1 anak perempuan = 2 bagian</li>
                                    <li>Total = 6 bagian</li>
                                    <li>Setiap bagian anak laki-laki = 1/6 dari sisa harta.</li>
                                    <li>Setiap bagian anak perempuan = 1/12 dari sisa harta.</li>
                                    <li>Anak laki-laki masing-masing mendapat Rp 875 juta.</li>
                                    <li>Anak perempuan masing-masing mendapat Rp 437,5 juta.</li>
                                </ol>
                                <p><strong>Total bagian anak:</strong> 4 + 2 = 6 bagian (4 bagian anak laki-laki + 2 bagian anak perempuan)</p>
                                <p><strong>Perhitungan:</strong></p>
                                <ol>
                                    <li>Sisa harta setelah pembagian hutang dan wasiat = Rp 5,125 juta.</li>
                                    <li>Setiap bagian anak laki-laki = Rp 5,125 juta ÷ 6 = Rp 854,167 juta.</li>
                                    <li>Setiap bagian anak perempuan = Rp 5,125 juta ÷ 12 = Rp 427,083 juta.</li>
                                </ol>
                            </div>
                        `
                    }
                ],
                quiz: { 
                    questions: [
                        { type: 'multiple-choice', question: "Menurut KHI Pasal 171, pembagian waris bagi pemeluk agama Islam harus berdasarkan...", options: ["Hukum adat setempat", "Hukum perdata sipil", "Hukum Islam", "Keputusan hakim"], correctAnswer: 2 },
                        { type: 'essay', question: "Jelaskan prosedur yang benar dalam pembagian waris di Indonesia! Sebutkan dokumen-dokumen yang diperlukan!", referenceAnswer: "Jawaban acuan: Prosedur pembagian waris di Indonesia: 1. Finalisasi kematian dengan SKK; 2. Inventarisasi harta; 3. Identifikasi ahli waris; 4. Pelunasan kewajiban (biaya jenazah, hutang, wasiat); 5. Pembagian warisan; 6. Pembuatan berita acara. Dokumen yang diperlukan: SKK, akta kematian, sertifikat kematian, SHM/BPKB, KTP/KK ahli waris, akta nikah, surat kuasa, dokumen hutang, dan wasiat." },
                        { type: 'matching', question: "Jodohkan prosedur dengan urutan yang benar!", pairs: [{ term: "Finalisasi Kematian", match: "Langkah 1" }, { term: "Inventarisasi Harta", match: "Langkah 2" }, { term: "Pelunasan Kewajiban", match: "Langkah 3" }, { term: "Identifikasi Ahli Waris", match: "Langkah 4" }, { term: "Pelaksanaan Wasiat", match: "Langkah 5" }, { term: "Pembagian Warisan", match: "Langkah 6" }] },
                        { type: 'case-study', scenario: "Seorang pengusaha meninggal dunia dengan harta warisan berupa: rumah (SHM), mobil (BPKB), tabungan senilai Rp 500 juta, dan hutang kredit kendaraan Rp 100 juta. Ia meninggalkan istri, 2 anak laki-laki, dan 1 anak perempuan. Istrinya mengusulkan agar rumah tidak dijual dan dibagi secara tunai.", questions: [
                            { type: 'multiple-choice', question: "Bagaimana seharusnya menangani hutang dalam pembagian waris?", options: ["Hutang harus dilunasi terlebih dahulu", "Hutang dapat ditunda sampai harta terbagi", "Hutang dianggap sama sekali dengan bagian waris", "Hutang dihapus jika tidak ada ahli waris"], correctAnswer: 0 },
                            { type: 'essay', question: "Jelaskan bagaimana pembagian waris yang adil dalam kasus ini! Hitung juga bagian masing-masing jika total harta Rp 7 miliar!", referenceAnswer: "Jawaban acuan: Pembagian yang adil: 1. Melunasi hutang Rp 100 juta terlebih dahulu; 2. Melaksanakan wasiat Rp 1 miliar; 3. Sisa harta = Rp 5,9 juta. 4. Istri mendapat 1/8 = Rp 737,5 juta. 5. Sisa harta = Rp 5,162,5 juta. 6. Perhitungan bagian anak: 4 bagian total (2 anak laki-laki = 4 bagian anak perempuan). Setiap bagian anak laki-laki = Rp 1,293,125 juta. Anak perempuan = Rp 646,25 juta. 7. Anak laki-laki masing-masing mendapat Rp 2,586,25 juta." }
                        ]},
                        // Tambahkan 7 soal lagi untuk mencapai 10 soal
                        { type: 'multiple-choice', question: "Menurut KHI, pembagian waris bagi pemeluk agama Islam harus berdasarkan...", options: ["Hukum adat setempat", "Hukum perdata sipil", "Hukum Islam", "Keputusan hakim"], correctAnswer: 2 },
                        { type: 'multiple-choice', question: "Dalam kasus di mana seseorang meninggal tanpa ahli waris, harta warisnya akan...", options: ["Dibagikan kepada negara", "Dibagikan kepada ahli waris terdekat", "Dibagikan kepada baitul mal", "Dibagikan kepada baitul mal setelah 5 tahun"], correctAnswer: 3 },
                        { type: 'multiple-choice', question: "Menurut KHI, wasiat maksimal yang sah adalah...", options: ["1/4 harta", "1/3 harta", "1/2 harta", "Tidak ada batasan"], correctAnswer: 1 },
                        { type: 'multiple-choice-complex', question: "Seorang meninggal dunia dengan harta warisan Rp 8 miliar, meninggalkan istri, 2 anak laki-laki, dan 1 anak perempuan. Bagaimana pembagian yang benar?", options: ["Istri 1/8, anak laki-laki 2/3, anak perempuan 1/6", "Istri 1/8, anak laki-laki 2/3, anak perempuan 1/6, sisa 1/6 dibagi kembali", "Istri 1/8, anak laki-laki 2/3, anak perempuan 1/6, sisa 1/6 diberikan kepada baitul mal setelah 5 tahun"], correctAnswer: 1, explanation: "Istri mendapat 1/8 = Rp 1 juta, anak laki-laki masing-masing mendapat 2/3 = Rp 5,33 juta, anak perempuan mendapat 1/6 = Rp 666,667 juta. Total bagian ash-habul furudh = 1/8 + 2/3 + 1/6 = 7/8 = 7 juta. Sisa harta = 8 juta - 7 juta = 1 juta. Sisa 1 juta dibagi kembali kepada ash-habul furudh (ibu dan anak-anak) sesuai dengan proporsi bagian mereka." },
                        { type: 'case-study', scenario: "Seorang meninggal dunia dengan harta warisan berupa: tanah kavling, rumah, dan deposito bank. Ahli waris: istri, 2 anak laki-laki, dan 1 anak perempuan. Istri menginginkan agar tanah tidak dijual dan dibagi secara tunai.", questions: [
                            { type: 'multiple-choice', question: "Bagaimana seharusnya menangani tanah yang tidak bisa dibagi rata?", options: ["Dijual dan uangnya dibagi tunai", "Dijual dan uangnya dibagi merata, sisa dibagi tunai", "Dijual dan uangnya dialokasikan secara musyawarah", "Dibagi kepada ahli waris sesuai hukum faraidh"], correctAnswer: 1 },
                            { type: 'essay', question: "Jelaskan bagaimana alokasi tanah yang tidak bisa dibagi rata dalam pembagian waris!", referenceAnswer: "Jawaban acuan: Untuk tanah yang tidak bisa dibagi rata, dapat dialokasikan secara musyawarah untuk pembagian tunai, atau diwakafkan untuk kepentingan sosial. Jika tidak ada yang menerima, maka tanah tersebut menjadi milik negara setelah 5 tahun menurut Pasal 193 ayat (2)." }
                        ]},
                        { type: 'multiple-choice-complex', question: "Menurut KHI Pasal 176, harta tak bertuan menjadi milik negara setelah 5 tahun jika...", options: ["Hanya jika tidak ada ahli waris", "Jika tidak ada ahli waris", "Setelah 5 tahun", "Setelah 2 tahun"], correctAnswer: 2, explanation: "Menurut KHI Pasal 176, harta tak bertuan menjadi milik negara setelah 5 tahun jika tidak ada ahli waris." }
                        ]
                    }
            }
        ]
    }
];
// --- APLIKASI LOGIKA ---
let currentChapterId = null, currentSubChapterId = null, currentSlideIndex = 0;
let quizState = { 
    originalQuestions: [], // Menyimpan soal asli
    questions: [], // Menyimpan soal yang sudah diacak
    currentQuestionIndex: 0, 
    score: 0, 
    totalPossibleScore: 0,
    userAnswers: [], // Menyimpan jawaban pengguna
    canGoBack: true,
    isRandomized: false, // Flag untuk menandai apakah soal sudah diacak
    isReviewMode: false // Flag untuk menandai mode review
};
let caseStudyState = { answeredSubQuestions: new Set() };
let totalScore = 0, totalPossibleScore = 0;

const views = document.querySelectorAll('.view');

// --- UTILITAS PENYIMPANAN (STORAGE) ---
const storage = {
    get: (key) => { 
        try {
            const data = localStorage.getItem(key); 
            return data ? JSON.parse(data) : null; 
        } catch (error) {
            console.error('Error getting data from storage:', error);
            return null;
        }
    },
    set: (key, value) => { 
        try {
            localStorage.setItem(key, JSON.stringify(value)); 
        } catch (error) {
            console.error('Error setting data to storage:', error);
        }
    },
    getProgress: () => storage.get('mawarisProgress') || {},
    saveProgress: (progress) => storage.set('mawarisProgress', progress),
    markCompleted: (type, id) => { 
        const p = storage.getProgress(); 
        if (!p[type]) p[type] = {}; 
        p[type][id] = true; 
        storage.saveProgress(p); 
    },
    isCompleted: (type, id) => { 
        const p = storage.getProgress(); 
        return !!(p[type] && p[type][id]); 
    },
    getQuizScores: () => storage.get('mawarisQuizScores') || {},
    saveQuizScore: (id, score, total) => { 
        const s = storage.getQuizScores(); 
        s[id] = { score: score, total: total }; 
        storage.set('mawarisQuizScores', s); 
    },
    getQuizUserAnswers: () => storage.get('mawarisQuizUserAnswers') || {},
    saveQuizUserAnswers: (id, answers) => { 
        const a = storage.getQuizUserAnswers(); 
        a[id] = answers; 
        storage.set('mawarisQuizUserAnswers', a); 
    },
    getUserName: () => storage.get('mawarisUserName') || 'Pengguna',
    saveUserName: (name) => storage.set('mawarisUserName', name)
};

// --- UTILITAS RANDOMISASI ---
function shuffleArray(array) {
    if (!Array.isArray(array)) return [];
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function randomizeQuestions(questions) {
    // Validasi input
    if (!Array.isArray(questions)) return [];
    
    // Acak urutan soal
    const randomizedQuestions = shuffleArray(questions);
    
    // Untuk setiap soal, acak pilihan jawaban jika ada
    return randomizedQuestions.map(question => {
        if (!question || typeof question !== 'object') return question;
        
        const newQuestion = { ...question };
        
        if (question.type === 'multiple-choice' && Array.isArray(question.options)) {
            // Simpan indeks jawaban benar asli
            const originalCorrectAnswer = question.correctAnswer;
            
            // Acak opsi jawaban
            const shuffledOptions = shuffleArray(question.options);
            
            // Cari indeks baru dari jawaban benar setelah diacak
            const newCorrectAnswer = shuffledOptions.indexOf(question.options[originalCorrectAnswer]);
            
            // Update soal dengan opsi yang sudah diacak
            newQuestion.options = shuffledOptions;
            newQuestion.correctAnswer = newCorrectAnswer;
        }
        
        // Tambahkan penanganan untuk multiple-choice-complex
        if (question.type === 'multiple-choice-complex' && Array.isArray(question.options)) {
            // Simpan indeks jawaban benar asli
            const originalCorrectAnswer = question.correctAnswer;
            
            // Acak opsi jawaban
            const shuffledOptions = shuffleArray(question.options);
            
            // Cari indeks baru dari jawaban benar setelah diacak
            const newCorrectAnswer = shuffledOptions.indexOf(question.options[originalCorrectAnswer]);
            
            // Update soal dengan opsi yang sudah diacak
            newQuestion.options = shuffledOptions;
            newQuestion.correctAnswer = newCorrectAnswer;
        }
        
        if (question.type === 'matching' && Array.isArray(question.pairs)) {
            // Acak urutan pasangan
            newQuestion.pairs = shuffleArray(question.pairs);
        }
        
        if (question.type === 'case-study' && Array.isArray(question.questions)) {
            // Acak urutan sub-soal dalam case study
            newQuestion.questions = shuffleArray(question.questions).map(subQ => {
                if (!subQ || typeof subQ !== 'object') return subQ;
                
                const newSubQ = { ...subQ };
                if (subQ.type === 'multiple-choice' && Array.isArray(subQ.options)) {
                    // Simpan indeks jawaban benar asli
                    const originalCorrectAnswer = subQ.correctAnswer;
                    
                    // Acak opsi jawaban
                    const shuffledOptions = shuffleArray(subQ.options);
                    
                    // Cari indeks baru dari jawaban benar setelah diacak
                    const newCorrectAnswer = shuffledOptions.indexOf(subQ.options[originalCorrectAnswer]);
                    
                    // Update sub-soal dengan opsi yang sudah diacak
                    newSubQ.options = shuffledOptions;
                    newSubQ.correctAnswer = newCorrectAnswer;
                }
                return newSubQ;
            });
        }
        
        return newQuestion;
    });
}

// --- KONTROLER TAMPILAN (VIEW CONTROLLER) ---
function showView(viewId) { 
    if (!document.getElementById(viewId)) {
        console.error(`View with ID ${viewId} not found`);
        return;
    }
    views.forEach(v => v.classList.remove('active')); 
    document.getElementById(viewId).classList.add('active'); 
}

function renderDashboard() {
    const chapterList = document.getElementById('chapter-list'); 
    if (!chapterList) {
        console.error('Chapter list element not found');
        return;
    }
    
    chapterList.innerHTML = '';
    const userName = storage.getUserName();
    if (!userName) { 
        showView('welcome-view'); 
        return; 
    }
    
    let previousChapterCompleted = true;
    
    courseData.forEach((chapter, chapterIndex) => {
        if (!chapter || !chapter.subChapters) return;
        
        const card = document.createElement('div'); 
        card.className = 'chapter-card';
        card.innerHTML = `<h3>${chapter.title || 'Chapter'}</h3>`;
        const list = document.createElement('ul'); 
        list.className = 'sub-chapter-list';
        
        let chapterCompleted = true;
        
        chapter.subChapters.forEach((sub, subIndex) => {
            if (!sub || !sub.id) return;
            
            const item = document.createElement('li'); 
            item.className = 'sub-chapter-item';
            const isLessonDone = storage.isCompleted('lessons', sub.id);
            const isQuizDone = storage.isCompleted('quizzes', sub.id);
            
            // Check if previous chapter is completed
            let isAccessible = previousChapterCompleted;
            
            // For first chapter, check if previous subchapter is completed
            if (chapterIndex === 0 && subIndex > 0) {
                const prevSubId = chapter.subChapters[subIndex - 1].id;
                isAccessible = storage.isCompleted('lessons', prevSubId) && storage.isCompleted('quizzes', prevSubId);
            }
            
            // For subsequent chapters, check if all subchapters in previous chapter are completed
            if (chapterIndex > 0) {
                const prevChapter = courseData[chapterIndex - 1];
                if (prevChapter && prevChapter.subChapters) {
                    isAccessible = prevChapter.subChapters.every(prevSub => 
                        storage.isCompleted('lessons', prevSub.id) && storage.isCompleted('quizzes', prevSub.id)
                    );
                }
            }
            
            if (!isAccessible) {
                item.classList.add('locked');
                chapterCompleted = false;
            }
            
            if (isLessonDone && isQuizDone) item.classList.add('completed');
            
            item.innerHTML = `<a href="#">${sub.title || 'Subchapter'}</a><span class="status-icon">${isLessonDone && isQuizDone ? '✅' : (isAccessible ? '⏳' : '🔒')}</span>`;
            
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
    const progressBar = document.getElementById('progress-bar');
    if (!progressBar) return;
    
    const totalSubChapters = courseData.reduce((acc, ch) => acc + (ch.subChapters ? ch.subChapters.length : 0), 0);
    const progress = storage.getProgress();
    const completedLessons = Object.keys(progress.lessons || {}).length;
    const completedQuizzes = Object.keys(progress.quizzes || {}).length;
    const totalTasks = totalSubChapters * 2;
    const completedTasks = completedLessons + completedQuizzes;
    const percentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
    
    progressBar.style.width = `${percentage}%`; 
    progressBar.textContent = `${percentage}%`;
}

function checkCompletionStatus() {
    const certificateContainer = document.getElementById('certificate-button-container');
    if (!certificateContainer) return;
    
    const totalSubChapters = courseData.reduce((acc, ch) => acc + (ch.subChapters ? ch.subChapters.length : 0), 0);
    const progress = storage.getProgress();
    const completedQuizzes = Object.keys(progress.quizzes || {}).length;
    
    certificateContainer.style.display = 
        (completedQuizzes === totalSubChapters) ? 'block' : 'none';
}

// --- KONTROLER PEMBELAJARAN (LESSON CONTROLLER) ---
function showLesson(chapterId, subChapterId) {
    currentChapterId = chapterId; 
    currentSubChapterId = subChapterId;
    currentSlideIndex = 0;
    
    const chapter = courseData.find(ch => ch.id === chapterId);
    if (!chapter) {
        console.error(`Chapter with ID ${chapterId} not found`);
        return;
    }
    
    const subChapter = chapter.subChapters.find(sub => sub.id === subChapterId);
    if (!subChapter) {
        console.error(`Subchapter with ID ${subChapterId} not found in chapter ${chapterId}`);
        return;
    }
    
    const lessonTitle = document.getElementById('lesson-title');
    if (lessonTitle) {
        lessonTitle.textContent = subChapter.title || 'Lesson';
    }
    
    renderSlide();
    
    // Check if quiz is already completed
    const isQuizCompleted = storage.isCompleted('quizzes', subChapterId);
    const startQuizBtn = document.getElementById('start-quiz-btn');
    
    if (startQuizBtn) {
        if (isQuizCompleted) {
            startQuizBtn.textContent = 'Lihat Hasil Quiz';
            startQuizBtn.className = 'btn btn-info';
        } else {
            startQuizBtn.textContent = 'Mulai Quiz';
            startQuizBtn.className = 'btn btn-primary';
        }
    }
    
    showView('lesson-view'); 
    storage.markCompleted('lessons', subChapterId);
}

function renderSlide() {
    const chapter = courseData.find(ch => ch.id === currentChapterId);
    if (!chapter) return;
    
    const subChapter = chapter.subChapters.find(sub => sub.id === currentSubChapterId);
    if (!subChapter || !subChapter.slides) return;
    
    const slide = subChapter.slides[currentSlideIndex];
    if (!slide) return;
    
    const lessonContent = document.getElementById('lesson-content');
    if (lessonContent) {
        lessonContent.innerHTML = `
            <h3>${slide.title || 'Slide'}</h3>
            ${slide.content || ''}
        `;
    }
    
    const slideCounter = document.getElementById('slide-counter');
    if (slideCounter) {
        slideCounter.textContent = `Slide ${currentSlideIndex + 1}/${subChapter.slides.length}`;
    }
    
    const prevBtn = document.getElementById('prev-slide-btn');
    if (prevBtn) {
        prevBtn.disabled = currentSlideIndex === 0;
    }
    
    const nextBtn = document.getElementById('next-slide-btn');
    if (nextBtn) {
        nextBtn.disabled = currentSlideIndex === subChapter.slides.length - 1;
    }
}

// --- KONTROLER KUIS (QUIZ CONTROLLER) ---
function startQuiz() {
    try {
        const chapter = courseData.find(ch => ch.id === currentChapterId);
        if (!chapter) {
            console.error(`Chapter with ID ${currentChapterId} not found`);
            return;
        }
        
        const subChapter = chapter.subChapters.find(sub => sub.id === currentSubChapterId);
        if (!subChapter || !subChapter.quiz || !subChapter.quiz.questions) {
            console.error(`Quiz not found for subchapter ${currentSubChapterId}`);
            alert('Quiz tidak tersedia untuk bab ini.');
            return;
        }
        
        // Check if quiz is already completed
        const isQuizCompleted = storage.isCompleted('quizzes', currentSubChapterId);
        
        if (isQuizCompleted) {
            // Enter review mode
            quizState.isReviewMode = true;
            quizState.originalQuestions = JSON.parse(JSON.stringify(subChapter.quiz.questions));
            quizState.questions = quizState.originalQuestions; // Use original order for review
            quizState.userAnswers = storage.getQuizUserAnswers()[currentSubChapterId] || [];
            quizState.score = storage.getQuizScores()[currentSubChapterId]?.score || 0;
            quizState.totalPossibleScore = calculateTotalPossibleScore(quizState.questions);
            
            const quizTitle = document.getElementById('quiz-title');
            if (quizTitle) {
                quizTitle.textContent = `Review Asesmen: ${subChapter.title || 'Quiz'}`;
            }
            
            const backToDashboardBtn = document.getElementById('back-to-dashboard-quiz');
            if (backToDashboardBtn) {
                backToDashboardBtn.style.display = 'inline-block';
            }
            
            const quizContainer = document.getElementById('quiz-container');
            if (quizContainer) {
                quizContainer.style.display = 'block';
            }
            
            const resultContainer = document.getElementById('quiz-result');
            if (resultContainer) {
                resultContainer.style.display = 'block';
            }
            
            renderQuizReview();
            showView('quiz-view');
        } else {
            // Start new quiz
            quizState.isReviewMode = false;
            quizState.originalQuestions = JSON.parse(JSON.stringify(subChapter.quiz.questions));
            quizState.questions = randomizeQuestions(subChapter.quiz.questions);
            quizState.isRandomized = true;
            
            quizState.currentQuestionIndex = 0;
            quizState.score = 0;
            quizState.totalPossibleScore = calculateTotalPossibleScore(quizState.questions);
            quizState.userAnswers = new Array(quizState.questions.length).fill(null);
            quizState.canGoBack = true;
            caseStudyState.answeredSubQuestions = new Set(); // Reset case study state

            const quizTitle = document.getElementById('quiz-title');
            if (quizTitle) {
                quizTitle.textContent = `Asesmen: ${subChapter.title || 'Quiz'}`;
            }
            
            const backToDashboardBtn = document.getElementById('back-to-dashboard-quiz');
            if (backToDashboardBtn) {
                backToDashboardBtn.style.display = 'none';
            }
            
            const resultContainer = document.getElementById('quiz-result');
            if (resultContainer) {
                resultContainer.style.display = 'none';
            }
            
            const quizContainer = document.getElementById('quiz-container');
            if (quizContainer) {
                quizContainer.style.display = 'block';
            }
            
            renderQuestion();
            showView('quiz-view');
        }
    } catch (error) {
        console.error('Error starting quiz:', error);
        alert('Terjadi kesalahan saat memulai quiz. Silakan coba lagi.');
    }
}

function calculateTotalPossibleScore(questions) {
    if (!Array.isArray(questions)) return 0;
    
    let score = 0;
    questions.forEach(q => {
        if (!q || !q.type) return;
        
        if (q.type === 'multiple-choice' || q.type === 'essay' || q.type === 'multiple-choice-complex') score += 1;
        else if (q.type === 'matching' && Array.isArray(q.pairs)) score += q.pairs.length;
        else if (q.type === 'case-study' && Array.isArray(q.questions)) {
            q.questions.forEach(cq => {
                if (cq && (cq.type === 'multiple-choice' || cq.type === 'essay' || cq.type === 'multiple-choice-complex')) score += 1;
            });
        }
    });
    return score;
}

// PERBAIKAN: Fungsi baru untuk merender review quiz
function renderQuizReview() {
    try {
        // Hide navigation buttons
        const navContainer = document.getElementById('quiz-navigation');
        if (navContainer) {
            navContainer.style.display = 'none';
        }
        
        // Hide question-specific containers
        const optionsContainer = document.getElementById('quiz-options');
        if (optionsContainer) optionsContainer.style.display = 'none';
        
        const essayContainer = document.getElementById('quiz-essay-container');
        if (essayContainer) essayContainer.style.display = 'none';
        
        const matchingContainer = document.getElementById('quiz-matching-container');
        if (matchingContainer) matchingContainer.style.display = 'none';
        
        const caseStudyContainer = document.getElementById('quiz-case-study-container');
        if (caseStudyContainer) caseStudyContainer.style.display = 'none';
        
        // Hide complex multiple choice container
        const complexContainer = document.getElementById('quiz-complex-container');
        if (complexContainer) complexContainer.style.display = 'none';
        
        // Clear question text
        const questionText = document.getElementById('question-text');
        if (questionText) questionText.textContent = '';
        
        const progressInfo = document.getElementById('quiz-progress-info');
        if (progressInfo) progressInfo.textContent = '';
        
        // Show results
        const resultContainer = document.getElementById('quiz-result');
        if (resultContainer) {
            const resultsHTML = generateResultsHTML(quizState.questions, quizState.userAnswers, quizState.score, quizState.totalPossibleScore);
            
            resultContainer.innerHTML = `
                <h3>📊 Hasil Asesmen Anda</h3>
                <p>Anda mendapat skor <strong>${quizState.score} dari ${quizState.totalPossibleScore}</strong>.</p>
                <p>${quizState.score === quizState.totalPossibleScore ? 'Luar biasa! Anda sempurna.' : 'Bagus! Terus belajar untuk hasil yang lebih baik.'}</p>
                
                <div class="results-details">
                    <h4>Detail Jawaban:</h4>
                    ${resultsHTML}
                </div>
            `;
        }
    } catch (error) {
        console.error('Error rendering quiz review:', error);
        alert('Terjadi kesalahan saat menampilkan hasil quiz. Silakan coba lagi.');
    }
}

function generateResultsHTML(questions, userAnswers, score, totalPossibleScore) {
    if (!Array.isArray(questions)) return '<p>Tidak ada soal untuk ditampilkan.</p>';
    
    const resultsHTML = [];
    
    questions.forEach((question, qIndex) => {
        if (!question || !question.type) return;
        
        const userAnswer = userAnswers[qIndex];
        let resultHTML = '';
        
        if (question.type === 'multiple-choice' && Array.isArray(question.options)) {
            const isCorrect = userAnswer === question.correctAnswer;
            
            resultHTML = `
                <div class="result-item ${isCorrect ? 'correct' : 'incorrect'}">
                    <h4>Soal ${qIndex + 1}: ${question.question || 'Pertanyaan'}</h4>
                    <div class="options">
                        ${question.options.map((option, i) => 
                            `<div class="option ${i === question.correctAnswer ? 'correct-answer' : ''} ${i === userAnswer ? 'user-answer' : ''}">
                                <span class="option-text">${option}</span>
                                ${i === question.correctAnswer ? '<span class="badge correct">Jawaban Benar</span>' : ''}
                                ${i === userAnswer && i !== question.correctAnswer ? '<span class="badge incorrect">Jawaban Anda</span>' : ''}
                                ${i === userAnswer ? '<span class="selection-indicator"><i class="fas fa-check-circle"></i></span>' : ''}
                            </div>`
                        ).join('')}
                    </div>
                </div>
            `;
        } 
        // Tambahkan penanganan untuk multiple-choice-complex
        else if (question.type === 'multiple-choice-complex' && Array.isArray(question.options)) {
            const isCorrect = userAnswer === question.correctAnswer;
            
            resultHTML = `
                <div class="result-item ${isCorrect ? 'correct' : 'incorrect'}">
                    <h4>Soal ${qIndex + 1}: ${question.question || 'Pertanyaan'}</h4>
                    <div class="options">
                        ${question.options.map((option, i) => 
                            `<div class="option ${i === question.correctAnswer ? 'correct-answer' : ''} ${i === userAnswer ? 'user-answer' : ''}">
                                <span class="option-text">${option}</span>
                                ${i === question.correctAnswer ? '<span class="badge correct">Jawaban Benar</span>' : ''}
                                ${i === userAnswer && i !== question.correctAnswer ? '<span class="badge incorrect">Jawaban Anda</span>' : ''}
                                ${i === userAnswer ? '<span class="selection-indicator"><i class="fas fa-check-circle"></i></span>' : ''}
                            </div>`
                        ).join('')}
                    </div>
                    ${question.explanation ? `<div class="explanation"><strong>Penjelasan:</strong> ${question.explanation}</div>` : ''}
                </div>
            `;
        }
        else if (question.type === 'essay') {
            const isCorrect = userAnswer && userAnswer.trim().length > 0;
            
            resultHTML = `
                <div class="result-item ${isCorrect ? 'correct' : 'incorrect'}">
                    <h4>Soal ${qIndex + 1}: ${question.question || 'Pertanyaan'}</h4>
                    <div class="essay-result">
                        <div class="user-answer">
                            <h5>Jawaban Anda:</h5>
                            <p>${userAnswer || 'Tidak ada jawaban'}</p>
                        </div>
                        <div class="reference-answer">
                            <h5>Jawaban Acuan:</h5>
                            <p>${question.referenceAnswer || 'Tidak ada jawaban acuan'}</p>
                        </div>
                    </div>
                </div>
            `;
        } else if (question.type === 'matching' && Array.isArray(question.pairs)) {
            let correctCount = 0;
            const matchingResults = [];
            
            question.pairs.forEach(pair => {
                if (!pair || !pair.term) return;
                
                const userMatch = userAnswer && userAnswer[pair.term] ? userAnswer[pair.term] : '';
                const isMatchCorrect = userMatch === pair.match;
                if (isMatchCorrect) correctCount++;
                
                matchingResults.push(`
                    <div class="matching-result ${isMatchCorrect ? 'correct' : 'incorrect'}">
                        <span class="term">${pair.term}:</span>
                        <span class="user-match">${userMatch || 'Tidak dijawab'}</span>
                        <span class="correct-match">${pair.match || ''}</span>
                        ${isMatchCorrect ? '<span class="badge correct">Benar</span>' : '<span class="badge incorrect">Salah</span>'}
                    </div>
                `);
            });
            
            resultHTML = `
                <div class="result-item">
                    <h4>Soal ${qIndex + 1}: ${question.question || 'Pertanyaan'}</h4>
                    <div class="matching-results">
                        ${matchingResults.join('')}
                    </div>
                    <p>Skor: ${correctCount} dari ${question.pairs.length}</p>
                </div>
            `;
        } else if (question.type === 'case-study' && Array.isArray(question.questions)) {
            let subScore = 0;
            const subResults = [];
            
            question.questions.forEach((subQ, subIndex) => {
                if (!subQ || !subQ.type) return;
                
                const subUserAnswer = userAnswer && userAnswer[subIndex] !== undefined ? userAnswer[subIndex] : null;
                let isSubCorrect = false;
                
                if (subQ.type === 'multiple-choice' && Array.isArray(subQ.options)) {
                    isSubCorrect = subUserAnswer === subQ.correctAnswer;
                    if (isSubCorrect) subScore++;
                    
                    subResults.push(`
                        <div class="sub-result ${isSubCorrect ? 'correct' : 'incorrect'}">
                            <h5>Sub-soal ${subIndex + 1}: ${subQ.question || 'Pertanyaan'}</h5>
                            <div class="options">
                                ${subQ.options.map((option, i) => 
                                    `<div class="option ${i === subQ.correctAnswer ? 'correct-answer' : ''} ${i === subUserAnswer ? 'user-answer' : ''}">
                                        <span class="option-text">${option}</span>
                                        ${i === subQ.correctAnswer ? '<span class="badge correct">Jawaban Benar</span>' : ''}
                                        ${i === subUserAnswer && i !== subQ.correctAnswer ? '<span class="badge incorrect">Jawaban Anda</span>' : ''}
                                        ${i === subUserAnswer ? '<span class="selection-indicator"><i class="fas fa-check-circle"></i></span>' : ''}
                                    </div>`
                                ).join('')}
                            </div>
                        </div>
                    `);
                } 
                // Tambahkan penanganan untuk multiple-choice-complex dalam case study
                else if (subQ.type === 'multiple-choice-complex' && Array.isArray(subQ.options)) {
                    isSubCorrect = subUserAnswer === subQ.correctAnswer;
                    if (isSubCorrect) subScore++;
                    
                    subResults.push(`
                        <div class="sub-result ${isSubCorrect ? 'correct' : 'incorrect'}">
                            <h5>Sub-soal ${subIndex + 1}: ${subQ.question || 'Pertanyaan'}</h5>
                            <div class="options">
                                ${subQ.options.map((option, i) => 
                                    `<div class="option ${i === subQ.correctAnswer ? 'correct-answer' : ''} ${i === subUserAnswer ? 'user-answer' : ''}">
                                        <span class="option-text">${option}</span>
                                        ${i === subQ.correctAnswer ? '<span class="badge correct">Jawaban Benar</span>' : ''}
                                        ${i === subUserAnswer && i !== subQ.correctAnswer ? '<span class="badge incorrect">Jawaban Anda</span>' : ''}
                                        ${i === subUserAnswer ? '<span class="selection-indicator"><i class="fas fa-check-circle"></i></span>' : ''}
                                    </div>`
                                ).join('')}
                            </div>
                            ${subQ.explanation ? `<div class="explanation"><strong>Penjelasan:</strong> ${subQ.explanation}</div>` : ''}
                        </div>
                    `);
                }
                else if (subQ.type === 'essay') {
                    isSubCorrect = subUserAnswer && subUserAnswer.trim().length > 0;
                    if (isSubCorrect) subScore++;
                    
                    subResults.push(`
                        <div class="sub-result ${isSubCorrect ? 'correct' : 'incorrect'}">
                            <h5>Sub-soal ${subIndex + 1}: ${subQ.question || 'Pertanyaan'}</h5>
                            <div class="essay-result">
                                <div class="user-answer">
                                    <h6>Jawaban Anda:</h6>
                                    <p>${subUserAnswer || 'Tidak ada jawaban'}</p>
                                </div>
                                <div class="reference-answer">
                                    <h6>Jawaban Acuan:</h6>
                                    <p>${subQ.referenceAnswer || 'Tidak ada jawaban acuan'}</p>
                                </div>
                            </div>
                        </div>
                    `);
                }
            });
            
            resultHTML = `
                <div class="result-item">
                    <h4>Soal ${qIndex + 1}: ${question.question || 'Pertanyaan'}</h4>
                    <div class="case-study-results">
                        ${subResults.join('')}
                    </div>
                    <p>Skor: ${subScore} dari ${question.questions.length}</p>
                </div>
            `;
        }
        
        resultsHTML.push(resultHTML);
    });
    
    return resultsHTML.join('');
}

function renderQuestion() {
    try {
        if (quizState.currentQuestionIndex >= quizState.questions.length) { 
            showQuizResult(); 
            return; 
        }
        
        const question = quizState.questions[quizState.currentQuestionIndex];
        if (!question || !question.type) {
            console.error('Invalid question data:', question);
            quizState.currentQuestionIndex++;
            renderQuestion();
            return;
        }
        
        const progressInfo = `Soal ${quizState.currentQuestionIndex + 1} / ${quizState.questions.length}`;
        const progressInfoElement = document.getElementById('quiz-progress-info');
        if (progressInfoElement) {
            progressInfoElement.textContent = progressInfo;
        }
        
        // Hide all question containers first
        const optionsContainer = document.getElementById('quiz-options');
        if (optionsContainer) optionsContainer.style.display = 'none';
        
        const essayContainer = document.getElementById('quiz-essay-container');
        if (essayContainer) essayContainer.style.display = 'none';
        
        const matchingContainer = document.getElementById('quiz-matching-container');
        if (matchingContainer) matchingContainer.style.display = 'none';
        
        const caseStudyContainer = document.getElementById('quiz-case-study-container');
        if (caseStudyContainer) caseStudyContainer.style.display = 'none';
        
        // Hide complex multiple choice container
        const complexContainer = document.getElementById('quiz-complex-container');
        if (complexContainer) complexContainer.style.display = 'none';
        
        // Setup navigation buttons
        setupQuizNavigation();

        switch(question.type) {
            case 'multiple-choice': renderMultipleChoice(question); break;
            case 'multiple-choice-complex': renderMultipleChoiceComplex(question); break; // Tambahkan ini
            case 'essay': renderEssay(question); break;
            case 'matching': renderMatching(question); break;
            case 'case-study': renderCaseStudy(question); break;
            default:
                console.error('Unknown question type:', question.type);
                quizState.currentQuestionIndex++;
                renderQuestion();
        }
    } catch (error) {
        console.error('Error rendering question:', error);
        alert('Terjadi kesalahan saat menampilkan soal. Silakan coba lagi.');
    }
}

function setupQuizNavigation() {
    try {
        let navContainer = document.getElementById('quiz-navigation');
        if (!navContainer) {
            navContainer = document.createElement('div');
            navContainer.id = 'quiz-navigation';
            navContainer.className = 'quiz-navigation';
            
            const quizContainer = document.getElementById('quiz-container');
            if (quizContainer) {
                quizContainer.appendChild(navContainer);
            } else {
                console.error('Quiz container not found');
                return;
            }
        }
        
        navContainer.style.display = 'flex'; // Make sure it's visible
        
        navContainer.innerHTML = `
            <button id="quiz-prev-btn" class="btn btn-secondary" ${quizState.currentQuestionIndex === 0 || !quizState.canGoBack ? 'disabled' : ''}>
                <i class="fas fa-arrow-left"></i> Kembali
            </button>
            <button id="quiz-hesitate-btn" class="btn btn-warning">
                <i class="fas fa-question-circle"></i> Ragu-ragu
            </button>
            <button id="quiz-next-btn" class="btn btn-primary" ${quizState.userAnswers[quizState.currentQuestionIndex] !== null ? '' : 'disabled'}>
                Lanjut <i class="fas fa-arrow-right"></i>
            </button>
        `;
        
        const prevBtn = document.getElementById('quiz-prev-btn');
        if (prevBtn) {
            prevBtn.onclick = () => {
                if (quizState.canGoBack && quizState.currentQuestionIndex > 0) {
                    quizState.currentQuestionIndex--;
                    renderQuestion();
                }
            };
        }
        
        const hesitateBtn = document.getElementById('quiz-hesitate-btn');
        if (hesitateBtn) {
            hesitateBtn.onclick = () => {
                // Mark question as hesitant for review
                const hesitantQuestions = storage.get('mawarisHesitantQuestions') || [];
                const questionId = `${currentSubChapterId}-${quizState.currentQuestionIndex}`;
                if (!hesitantQuestions.includes(questionId)) {
                    hesitantQuestions.push(questionId);
                    storage.set('mawarisHesitantQuestions', hesitantQuestions);
                }
                alert('Soal ditandai untuk review nanti.');
            };
        }
        
        const nextBtn = document.getElementById('quiz-next-btn');
        if (nextBtn) {
            nextBtn.onclick = () => {
                if (quizState.userAnswers[quizState.currentQuestionIndex] !== null) {
                    quizState.canGoBack = false; // Disable going back after moving forward
                    quizState.currentQuestionIndex++;
                    renderQuestion();
                }
            };
        }
    } catch (error) {
        console.error('Error setting up quiz navigation:', error);
    }
}

function enableNextButton() {
    const nextBtn = document.getElementById('quiz-next-btn');
    if (nextBtn) {
        nextBtn.disabled = false;
    }
}

// PERBAIKAN: Fungsi renderMultipleChoice yang diperbaiki dengan indikator visual
function renderMultipleChoice(question) {
    try {
        if (!question || !Array.isArray(question.options)) {
            console.error('Invalid question data for multiple choice:', question);
            return;
        }
        
        const optionsContainer = document.getElementById('quiz-options');
        if (!optionsContainer) {
            console.error('Options container not found');
            return;
        }
        
        optionsContainer.style.display = 'block';
        
        const questionText = document.getElementById('question-text');
        if (questionText) {
            questionText.textContent = question.question || 'Pertanyaan';
        }
        
        optionsContainer.innerHTML = '';
        
        // Check if user has already answered this question
        const userSelectedIndex = quizState.userAnswers[quizState.currentQuestionIndex];
        
        question.options.forEach((option, index) => {
            const li = document.createElement('li'); 
            li.className = 'quiz-option';
            if (userSelectedIndex !== null && userSelectedIndex === index) {
                li.classList.add('selected');
            }
            
            // Create option content with text and indicator
            const optionContent = document.createElement('div');
            optionContent.className = 'option-content';
            
            const optionText = document.createElement('span');
            optionText.className = 'option-text';
            optionText.textContent = option || '';
            
            const indicator = document.createElement('span');
            indicator.className = 'selection-indicator';
            indicator.innerHTML = '<i class="fas fa-check-circle"></i>';
            
            optionContent.appendChild(optionText);
            optionContent.appendChild(indicator);
            li.appendChild(optionContent);
            
            li.onclick = () => {
                // Remove previous selection
                document.querySelectorAll('.quiz-option').forEach(opt => {
                    opt.classList.remove('selected');
                });
                
                // Mark current selection
                li.classList.add('selected');
                
                // Save user answer
                quizState.userAnswers[quizState.currentQuestionIndex] = index;
                
                enableNextButton();
            };
            optionsContainer.appendChild(li);
        });
    } catch (error) {
        console.error('Error rendering multiple choice question:', error);
    }
}

// PERBAIKAN: Fungsi baru untuk menangani multiple-choice-complex
function renderMultipleChoiceComplex(question) {
    try {
        // Buat container untuk complex multiple choice jika belum ada
        let complexContainer = document.getElementById('quiz-complex-container');
        if (!complexContainer) {
            complexContainer = document.createElement('div');
            complexContainer.id = 'quiz-complex-container';
            
            const quizContainer = document.getElementById('quiz-container');
            if (quizContainer) {
                quizContainer.appendChild(complexContainer);
            } else {
                console.error('Quiz container not found');
                return;
            }
        }
        
        complexContainer.style.display = 'block';
        
        const questionText = document.getElementById('question-text');
        if (questionText) {
            questionText.textContent = question.question || 'Pertanyaan';
        }
        
        // Buat HTML untuk soal kompleks
        complexContainer.innerHTML = `
            <div class="complex-question">
                <div class="options-container">
                    ${question.options.map((option, index) => `
                        <div class="quiz-option ${quizState.userAnswers[quizState.currentQuestionIndex] === index ? 'selected' : ''}" data-index="${index}">
                            <div class="option-content">
                                <span class="option-text">${option}</span>
                                <span class="selection-indicator"><i class="fas fa-check-circle"></i></span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        
        // Tambahkan event listener untuk setiap opsi
        document.querySelectorAll('#quiz-complex-container .quiz-option').forEach(option => {
            option.addEventListener('click', function() {
                const index = parseInt(this.dataset.index);
                
                // Hapus pilihan sebelumnya
                document.querySelectorAll('#quiz-complex-container .quiz-option').forEach(opt => {
                    opt.classList.remove('selected');
                });
                
                // Tandai pilihan saat ini
                this.classList.add('selected');
                
                // Simpan jawaban pengguna
                quizState.userAnswers[quizState.currentQuestionIndex] = index;
                
                enableNextButton();
            });
        });
    } catch (error) {
        console.error('Error rendering multiple choice complex question:', error);
    }
}

function renderEssay(question) {
    try {
        if (!question) {
            console.error('Invalid question data for essay:', question);
            return;
        }
        
        const essayContainer = document.getElementById('quiz-essay-container');
        if (!essayContainer) {
            console.error('Essay container not found');
            return;
        }
        
        essayContainer.style.display = 'block';
        
        const questionText = document.getElementById('question-text');
        if (questionText) {
            questionText.textContent = question.question || 'Pertanyaan';
        }
        
        // Get user's previous answer if exists
        const userAnswer = quizState.userAnswers[quizState.currentQuestionIndex] || '';
        
        essayContainer.innerHTML = `
            <textarea id="essay-answer" placeholder="Ketik jawaban Anda di sini...">${userAnswer}</textarea>
        `;
        
        const essayAnswer = document.getElementById('essay-answer');
        if (essayAnswer) {
            essayAnswer.addEventListener('input', () => {
                if (essayAnswer.value.trim().length > 0) {
                    quizState.userAnswers[quizState.currentQuestionIndex] = essayAnswer.value.trim();
                    enableNextButton();
                } else {
                    quizState.userAnswers[quizState.currentQuestionIndex] = null;
                    const nextBtn = document.getElementById('quiz-next-btn');
                    if (nextBtn) {
                        nextBtn.disabled = true;
                    }
                }
            });
            
            // Enable next button if user already has an answer
            if (userAnswer.length > 0) {
                enableNextButton();
            }
        }
    } catch (error) {
        console.error('Error rendering essay question:', error);
    }
}

function renderMatching(question) {
    try {
        if (!question || !Array.isArray(question.pairs)) {
            console.error('Invalid question data for matching:', question);
            return;
        }
        
        const matchingContainer = document.getElementById('quiz-matching-container');
        if (!matchingContainer) {
            console.error('Matching container not found');
            return;
        }
        
        matchingContainer.style.display = 'block';
        
        const questionText = document.getElementById('question-text');
        if (questionText) {
            questionText.textContent = question.question || 'Pertanyaan';
        }
        
        matchingContainer.innerHTML = `<div class="matching-container"></div>`;
        const matchingInnerContainer = matchingContainer.querySelector('.matching-container');
        
        // Get user's previous answers if exist
        const userAnswers = quizState.userAnswers[quizState.currentQuestionIndex] || {};
        
        question.pairs.forEach((pair, index) => {
            if (!pair || !pair.term) return;
            
            const itemDiv = document.createElement('div'); 
            itemDiv.className = 'matching-item';
            itemDiv.innerHTML = `<label>${pair.term}:</label><select data-term="${pair.term}"><option value="">-- Pilih --</option></select>`;
            matchingInnerContainer.appendChild(itemDiv);
        });
        
        const allMatches = [...new Set(question.pairs.map(p => p.match).filter(m => m))];
        document.querySelectorAll('#quiz-matching-container select').forEach(select => {
            allMatches.forEach(match => {
                const option = document.createElement('option'); 
                option.value = match; 
                option.textContent = match; 
                select.appendChild(option);
            });
            
            // Set previous user answer if exists
            const term = select.dataset.term;
            if (userAnswers[term]) {
                select.value = userAnswers[term];
            }
            
            select.addEventListener('change', () => {
                // Save user answers
                const currentAnswers = quizState.userAnswers[quizState.currentQuestionIndex] || {};
                document.querySelectorAll('#quiz-matching-container select').forEach(s => {
                    currentAnswers[s.dataset.term] = s.value;
                });
                quizState.userAnswers[quizState.currentQuestionIndex] = currentAnswers;
                
                // Check if all selects have a value
                const allSelected = Array.from(document.querySelectorAll('#quiz-matching-container select'))
                    .every(s => s.value !== '');
                
                if (allSelected) {
                    enableNextButton();
                } else {
                    const nextBtn = document.getElementById('quiz-next-btn');
                    if (nextBtn) {
                        nextBtn.disabled = true;
                    }
                }
            });
        });
        
        // Enable next button if all questions are already answered
        if (Object.keys(userAnswers).length === question.pairs.length && 
            Object.values(userAnswers).every(val => val !== '')) {
            enableNextButton();
        }
    } catch (error) {
        console.error('Error rendering matching question:', error);
    }
}

// PERBAIKAN: Fungsi renderCaseStudy yang diperbaiki dengan indikator visual
function renderCaseStudy(question) {
    try {
        if (!question || !Array.isArray(question.questions)) {
            console.error('Invalid question data for case study:', question);
            return;
        }
        
        const caseStudyContainer = document.getElementById('quiz-case-study-container');
        if (!caseStudyContainer) {
            console.error('Case study container not found');
            return;
        }
        
        caseStudyContainer.style.display = 'block';
        
        // Build complete HTML structure first
        let html = `<div class="case-study-scenario"><strong>Skenario:</strong><br>${question.scenario || ''}</div>`;
        html += '<div id="sub-questions-container">';
        
        // Get user's previous answers if exist
        const userAnswers = quizState.userAnswers[quizState.currentQuestionIndex] || {};
        
        question.questions.forEach((subQ, index) => {
            if (!subQ || !subQ.type) return;
            
            html += `<div class="case-study-sub-question"><p><strong>${index + 1}. ${subQ.question || 'Pertanyaan'}</strong></p>`;
            
            if (subQ.type === 'multiple-choice' && Array.isArray(subQ.options)) {
                html += '<ul class="quiz-options">';
                subQ.options.forEach((opt, i) => {
                    const isSelected = userAnswers[index] !== undefined && userAnswers[index] === i;
                    html += `
                        <li class="quiz-option ${isSelected ? 'selected' : ''}" data-sub-index="${index}" data-option-index="${i}">
                            <div class="option-content">
                                <span class="option-text">${opt}</span>
                                <span class="selection-indicator"><i class="fas fa-check-circle"></i></span>
                            </div>
                        </li>
                    `;
                });
                html += '</ul>';
            } 
            // Tambahkan penanganan untuk multiple-choice-complex dalam case study
            else if (subQ.type === 'multiple-choice-complex' && Array.isArray(subQ.options)) {
                html += '<div class="quiz-options">';
                subQ.options.forEach((opt, i) => {
                    const isSelected = userAnswers[index] !== undefined && userAnswers[index] === i;
                    html += `
                        <div class="quiz-option ${isSelected ? 'selected' : ''}" data-sub-index="${index}" data-option-index="${i}">
                            <div class="option-content">
                                <span class="option-text">${opt}</span>
                                <span class="selection-indicator"><i class="fas fa-check-circle"></i></span>
                            </div>
                        </div>
                    `;
                });
                html += '</div>';
            }
            else if (subQ.type === 'essay') {
                const userEssayAnswer = userAnswers[index] || '';
                html += `<textarea id="case-essay-${index}" placeholder="Ketik jawaban Anda..." data-sub-index="${index}">${userEssayAnswer}</textarea>`;
            }
            html += '</div>';
        });
        
        html += '</div>';
        caseStudyContainer.innerHTML = html;
        
        // Attach event listeners after DOM is created
        document.querySelectorAll('#sub-questions-container .quiz-option').forEach(option => {
            option.addEventListener('click', function() {
                const subIndex = parseInt(this.dataset.subIndex);
                const optionIndex = parseInt(this.dataset.optionIndex);
                
                // Remove previous selection for this sub-question
                document.querySelectorAll(`#sub-questions-container .quiz-option[data-sub-index="${subIndex}"]`).forEach(opt => {
                    opt.classList.remove('selected');
                });
                
                // Mark current selection
                this.classList.add('selected');
                
                // Save user answer
                const currentAnswers = quizState.userAnswers[quizState.currentQuestionIndex] || {};
                currentAnswers[subIndex] = optionIndex;
                quizState.userAnswers[quizState.currentQuestionIndex] = currentAnswers;
                
                checkCaseStudyCompletion();
            });
        });
        
        document.querySelectorAll('#sub-questions-container textarea').forEach(textarea => {
            textarea.addEventListener('input', function() {
                const subIndex = parseInt(this.dataset.subIndex);
                
                // Save user answer
                const currentAnswers = quizState.userAnswers[quizState.currentQuestionIndex] || {};
                currentAnswers[subIndex] = this.value.trim();
                quizState.userAnswers[quizState.currentQuestionIndex] = currentAnswers;
                
                checkCaseStudyCompletion();
            });
        });
        
        const questionText = document.getElementById('question-text');
        if (questionText) {
            questionText.textContent = 'Analisislah skenario berikut dengan cermat.';
        }
        
        // Check if all sub-questions are already answered
        checkCaseStudyCompletion();
    } catch (error) {
        console.error('Error rendering case study question:', error);
    }
}

function checkCaseStudyCompletion() {
    try {
        const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
        if (!currentQuestion || !Array.isArray(currentQuestion.questions)) return;
        
        const userAnswers = quizState.userAnswers[quizState.currentQuestionIndex] || {};
        
        // Check if all multiple choice questions are answered
        const mcQuestions = currentQuestion.questions.filter(q => q.type === 'multiple-choice');
        const mcAnswered = mcQuestions.every((q, index) => {
            const qIndex = currentQuestion.questions.indexOf(q);
            return userAnswers[qIndex] !== undefined;
        });
        
        // Check if all multiple choice complex questions are answered
        const mcComplexQuestions = currentQuestion.questions.filter(q => q.type === 'multiple-choice-complex');
        const mcComplexAnswered = mcComplexQuestions.every((q, index) => {
            const qIndex = currentQuestion.questions.indexOf(q);
            return userAnswers[qIndex] !== undefined;
        });
        
        // Check if all essay questions have content
        const essayQuestions = currentQuestion.questions.filter(q => q.type === 'essay');
        const essayAnswered = essayQuestions.every((q, index) => {
            const qIndex = currentQuestion.questions.indexOf(q);
            return userAnswers[qIndex] && userAnswers[qIndex].trim().length > 0;
        });
        
        if (mcAnswered && mcComplexAnswered && essayAnswered) {
            enableNextButton();
        }
    } catch (error) {
        console.error('Error checking case study completion:', error);
    }
}

function showQuizResult() {
    try {
        const quizContainer = document.getElementById('quiz-container');
        if (quizContainer) {
            quizContainer.style.display = 'none';
        }
        
        const backToDashboardBtn = document.getElementById('back-to-dashboard-quiz');
        if (backToDashboardBtn) {
            backToDashboardBtn.style.display = 'inline-block';
        }
        
        const resultContainer = document.getElementById('quiz-result');
        if (!resultContainer) {
            console.error('Result container not found');
            return;
        }
        
        resultContainer.style.display = 'block';
        
        // Save user answers before showing results
        storage.saveQuizUserAnswers(currentSubChapterId, quizState.userAnswers);
        
        // Calculate score based on user answers
        let score = 0;
        const resultsHTML = generateResultsHTML(quizState.questions, quizState.userAnswers, score, quizState.totalPossibleScore);
        
        quizState.questions.forEach((question, qIndex) => {
            if (!question || !question.type) return;
            
            const userAnswer = quizState.userAnswers[qIndex];
            
            if (question.type === 'multiple-choice') {
                if (userAnswer === question.correctAnswer) score++;
            } 
            // Tambahkan penanganan untuk multiple-choice-complex
            else if (question.type === 'multiple-choice-complex') {
                if (userAnswer === question.correctAnswer) score++;
            }
            else if (question.type === 'essay') {
                if (userAnswer && userAnswer.trim().length > 0) score++;
            } else if (question.type === 'matching' && Array.isArray(question.pairs)) {
                question.pairs.forEach(pair => {
                    if (!pair || !pair.term) return;
                    
                    const userMatch = userAnswer && userAnswer[pair.term] ? userAnswer[pair.term] : '';
                    if (userMatch === pair.match) score++;
                });
            } else if (question.type === 'case-study' && Array.isArray(question.questions)) {
                question.questions.forEach((subQ, subIndex) => {
                    if (!subQ || !subQ.type) return;
                    
                    const subUserAnswer = userAnswer && userAnswer[subIndex] !== undefined ? userAnswer[subIndex] : null;
                    
                    if (subQ.type === 'multiple-choice') {
                        if (subUserAnswer === subQ.correctAnswer) score++;
                    } 
                    // Tambahkan penanganan untuk multiple-choice-complex dalam case study
                    else if (subQ.type === 'multiple-choice-complex') {
                        if (subUserAnswer === subQ.correctAnswer) score++;
                    }
                    else if (subQ.type === 'essay') {
                        if (subUserAnswer && subUserAnswer.trim().length > 0) score++;
                    }
                });
            }
        });
        
        // Update quiz state with calculated score
        quizState.score = score;
        
        resultContainer.innerHTML = `
            <h3>🎉 Asesmen Selesai!</h3>
            <p>Anda mendapat skor <strong>${quizState.score} dari ${quizState.totalPossibleScore}</strong>.</p>
            <p>${quizState.score === quizState.totalPossibleScore ? 'Luar biasa! Anda sempurna.' : 'Bagus! Terus belajar untuk hasil yang lebih baik.'}</p>
            
            <div class="results-details">
                <h4>Detail Jawaban:</h4>
                ${resultsHTML}
            </div>
        `;
        
        storage.saveQuizScore(currentSubChapterId, quizState.score, quizState.totalPossibleScore);
        storage.markCompleted('quizzes', currentSubChapterId);
    } catch (error) {
        console.error('Error showing quiz result:', error);
        alert('Terjadi kesalahan saat menampilkan hasil quiz. Silakan coba lagi.');
    }
}

function showCertificate() {
    try {
        const userName = storage.getUserName();
        const scores = storage.getQuizScores();
        let totalScore = 0, totalPossible = 0;
        
        courseData.forEach(ch => {
            if (!ch || !ch.subChapters) return;
            
            ch.subChapters.forEach(sub => {
                if (!sub || !sub.id || !scores[sub.id]) return;
                
                totalScore += scores[sub.id].score;
                totalPossible += scores[sub.id].total;
            });
        });
        const finalPercentage = totalPossible > 0 ? Math.round((totalScore / totalPossible) * 100) : 0;
        
        const certificateName = document.getElementById('certificate-name');
        if (certificateName) {
            certificateName.textContent = userName;
        }
        
        const certificateScore = document.getElementById('certificate-score');
        if (certificateScore) {
            certificateScore.textContent = `${finalPercentage}% (${totalScore}/${totalPossible} poin)`;
        }
        
        const certificateDate = document.getElementById('certificate-date');
        if (certificateDate) {
            certificateDate.textContent = new Date().toLocaleDateString('id-ID');
        }
        
        showView('certificate-view');
    } catch (error) {
        console.error('Error showing certificate:', error);
        alert('Terjadi kesalahan saat menampilkan sertifikat. Silakan coba lagi.');
    }
}

// --- EVENT LISTENERS ---
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed. Attaching event listeners.");
    
    try {
        const startLearningBtn = document.getElementById('start-learning-btn');
        if (startLearningBtn) {
            startLearningBtn.onclick = () => {
                const nameInput = document.getElementById('user-name-input');
                const name = nameInput ? nameInput.value.trim() : '';
                if (name) { 
                    storage.saveUserName(name); 
                    renderDashboard(); 
                } else { 
                    alert('Silakan masukkan nama Anda.'); 
                }
            };
        }
        
        const backToDashboardLessonBtn = document.getElementById('back-to-dashboard-lesson');
        if (backToDashboardLessonBtn) {
            backToDashboardLessonBtn.onclick = () => renderDashboard();
        }
        
        const backToDashboardQuizBtn = document.getElementById('back-to-dashboard-quiz');
        if (backToDashboardQuizBtn) {
            backToDashboardQuizBtn.onclick = () => renderDashboard();
        }
        
        const startQuizBtn = document.getElementById('start-quiz-btn');
        if (startQuizBtn) {
            startQuizBtn.onclick = startQuiz;
        }
        
        const viewCertificateBtn = document.getElementById('view-certificate-btn');
        if (viewCertificateBtn) {
            viewCertificateBtn.onclick = showCertificate;
        }
        
        const printCertificateBtn = document.getElementById('print-certificate-btn');
        if (printCertificateBtn) {
            printCertificateBtn.onclick = () => window.print();
        }
        
        const backToDashboardCertBtn = document.getElementById('back-to-dashboard-cert');
        if (backToDashboardCertBtn) {
            backToDashboardCertBtn.onclick = () => renderDashboard();
        }
        
        // Slide navigation
        const prevSlideBtn = document.getElementById('prev-slide-btn');
        if (prevSlideBtn) {
            prevSlideBtn.onclick = () => {
                if (currentSlideIndex > 0) {
                    currentSlideIndex--;
                    renderSlide();
                }
            };
        }
        
        const nextSlideBtn = document.getElementById('next-slide-btn');
        if (nextSlideBtn) {
            nextSlideBtn.onclick = () => {
                const chapter = courseData.find(ch => ch.id === currentChapterId);
                if (!chapter) return;
                
                const subChapter = chapter.subChapters.find(sub => sub.id === currentSubChapterId);
                if (!subChapter || !subChapter.slides) return;
                
                if (currentSlideIndex < subChapter.slides.length - 1) {
                    currentSlideIndex++;
                    renderSlide();
                }
            };
        }

        const userName = storage.getUserName();
        // PERBAIKAN: Cek apakah nama yang tersimpan bukan nama default
        if (userName !== 'Pengguna') { 
            renderDashboard(); 
        } else { 
            showView('welcome-view'); 
        }
    } catch (error) {
        console.error('Error initializing event listeners:', error);
    }
});
