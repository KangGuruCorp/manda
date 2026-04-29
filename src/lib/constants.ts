export type DimensionGroup = { dimensi: string; qs: string[] };

export const LINGKUNGAN_BELAJAR_Q: DimensionGroup[] = [
    {
        dimensi: "Dimensi I: Gigih",
        qs: [
            "Saya tetap berusaha menyelesaikan soal meskipun sulit",
            "Saya mencoba berbagai cara untuk menyelesaikan tugas",
            "Saya menyelesaikan tugas sampai tuntas",
            "Saya terus mencoba meskipun pernah gagal",
            "Saya berhenti mengerjakan soal saat menemui kesulitan",
            "Saya memilih meninggalkan tugas yang terasa sulit",
            "Saya mengerjakan soal seperlunya saja",
            "Saya cepat merasa cukup sebelum tugas selesai"
        ]
    },
    {
        dimensi: "Dimensi II: Mengelola Impulsivitas",
        qs: [
            "Saya berpikir sebelum menjawab pertanyaan",
            "Saya membaca soal dengan teliti sebelum menjawab",
            "Saya merencanakan langkah sebelum mengerjakan tugas",
            "Saya berusaha tenang saat mengerjakan soal",
            "Saya menjawab soal secara spontan tanpa pertimbangan",
            "Saya terburu-buru dalam mengerjakan tugas",
            "Saya langsung menulis jawaban tanpa membaca soal lengkap",
            "Saya mengerjakan soal dengan tergesa-gesa"
        ]
    },
    {
        dimensi: "Dimensi III: Metakognitif",
        qs: [
            "Saya memikirkan cara terbaik untuk menyelesaikan tugas",
            "Saya mengevaluasi hasil pekerjaan saya",
            "Saya menyadari kesalahan yang saya lakukan",
            "Saya mengetahui strategi belajar yang cocok untuk saya",
            "Saya mengerjakan tugas tanpa memikirkan strategi",
            "Saya jarang mengecek kembali jawaban",
            "Saya langsung selesai tanpa meninjau hasil pekerjaan",
            "Saya mengerjakan soal tanpa mempertimbangkan langkah"
        ]
    },
    {
        dimensi: "Dimensi IV: Berpikir Fleksibel",
        qs: [
            "Saya menerima pendapat orang lain",
            "Saya mencoba cara lain jika cara pertama belum berhasil",
            "Saya mau mengubah cara berpikir jika diperlukan",
            "Saya mempertimbangkan berbagai solusi",
            "Saya hanya menggunakan satu cara dalam menyelesaikan soal",
            "Saya bertahan pada cara sendiri meskipun kurang tepat",
            "Saya mengabaikan ide dari teman",
            "Saya menggunakan satu jawaban tanpa mempertimbangkan alternatif"
        ]
    },
    {
        dimensi: "Dimensi V: Kreatif & Inovatif",
        qs: [
            "Saya memiliki ide baru dalam menyelesaikan tugas",
            "Saya suka mencoba hal baru dalam belajar",
            "Saya menggunakan imajinasi dalam menyelesaikan masalah",
            "Saya membuat cara sendiri dalam memahami pelajaran",
            "Saya menggunakan cara yang sama setiap kali belajar",
            "Saya mengikuti contoh tanpa mengembangkan ide sendiri",
            "Saya jarang mencoba pendekatan baru",
            "Saya menunggu contoh sebelum mulai mengerjakan",
            "Sebagai pengecekan konsentrasi membaca, mohon pilih opsi 'Tidak Setuju' (TS) untuk pernyataan ini."
        ]
    }
];

export const EFIKASI_DIRI_Q: DimensionGroup[] = [
    {
        dimensi: "Dimensi I: Magnitude",
        qs: [
            "Saya yakin mampu menyelesaikan soal matematika yang mudah.",
            "Saya mampu mengerjakan soal dengan tingkat kesulitan sedang.",
            "Saya percaya diri menghadapi soal yang lebih menantang.",
            "Saya tetap berusaha menyelesaikan soal yang sulit.",
            "Saya merasa ragu saat menghadapi soal dengan tingkat kesulitan tinggi.",
            "Saya merasa kemampuan saya terbatas pada jenis soal tertentu.",
            "Saya mudah kehilangan keyakinan saat soal semakin sulit.",
            "Saya merasa kesulitan ketika tingkat soal meningkat."
        ]
    },
    {
        dimensi: "Dimensi II: Strength",
        qs: [
            "Saya yakin dengan kemampuan saya dalam belajar matematika.",
            "Saya tetap percaya diri meskipun pernah melakukan kesalahan.",
            "Saya yakin dapat memperbaiki kesalahan saya.",
            "Saya memiliki keyakinan kuat saat mengerjakan soal.",
            "Keyakinan saya mudah berubah saat mengalami kesulitan.",
            "Saya sering merasa ragu dengan jawaban saya.",
            "Saya mudah terpengaruh oleh pendapat teman.",
            "Saya merasa kurang yakin dengan kemampuan saya sendiri."
        ]
    },
    {
        dimensi: "Dimensi III: Generality",
        qs: [
            "Saya yakin mampu memahami berbagai materi matematika.",
            "Saya percaya diri mempelajari topik matematika apa pun.",
            "Saya mampu mengerjakan soal dari berbagai materi.",
            "Saya yakin bisa belajar matematika dalam berbagai situasi.",
            "Saya merasa hanya mampu pada materi tertentu saja.",
            "Saya merasa kurang percaya diri saat menghadapi materi baru.",
            "Saya merasa kesulitan jika bentuk soal berbeda.",
            "Saya merasa bingung saat menghadapi variasi soal."
        ]
    },
    {
        dimensi: "Dimensi IV: Efikasi Pembelajaran",
        qs: [
            "Saya yakin dapat memahami konsep baru dalam matematika.",
            "Saya mampu mengikuti penjelasan guru dengan baik.",
            "Saya yakin bisa menguasai materi yang diajarkan.",
            "Saya mampu belajar mandiri memahami materi.",
            "Saya merasa kesulitan memahami konsep baru.",
            "Saya sering merasa bingung saat belajar matematika.",
            "Saya merasa kurang memahami penjelasan guru.",
            "Saya merasa pembelajaran matematika sulit diikuti."
        ]
    },
    {
        dimensi: "Dimensi V: Pemecahan Masalah",
        qs: [
            "Saya yakin dapat menyelesaikan soal secara mandiri.",
            "Saya mampu menemukan cara penyelesaian sendiri.",
            "Saya percaya diri saat menghadapi masalah matematika.",
            "Saya mampu memilih strategi penyelesaian yang tepat.",
            "Saya merasa kesulitan menemukan solusi dari soal.",
            "Saya merasa bingung menentukan langkah penyelesaian.",
            "Saya merasa ragu dengan strategi yang saya pilih.",
            "Saya merasa kemampuan saya belum cukup untuk menyelesaikan soal.",
            "Sekadar untuk memastikan Anda tetap fokus, pilihlah 'Sangat Setuju' (SS) pada baris ini."
        ]
    }
];

export interface EssayQuestion {
    id: number;
    text: string;
    indicator: string;
    subject: string;
    cognitiveLevel: string;
    rubric: string[];
    scoringCriteria: {
        4: string;
        3: string;
        2: string;
        1: string;
        0: string;
    };
}

export const ESSAY_QUESTIONS: EssayQuestion[] = [
    {
        id: 1,
        text: "Toko alat tulis 'Cerdas' sedang memberikan promo paket belajar. Paket A berisi 3 buku tulis dan 2 pulpen dengan harga Rp18.000,00. Paket B berisi 2 buku tulis dan 4 pulpen dengan harga Rp20.000,00. Toko tersebut buka setiap hari dari pukul 08.00 sampai 20.00 dan terletak di dekat pasar. Siska ingin mengetahui harga satuan buku tulis dan pulpen untuk membandingkan harga di toko lain.\n\nPertanyaan: Tentukan data yang digunakan dan tidak digunakan untuk menentukan harga satu buku tulis dan satu pulpen, lalu jelaskan alasanmu!",
        indicator: "Mengidentifikasi data relevan & tidak relevan",
        subject: "SPLDV",
        cognitiveLevel: "C4",
        rubric: [
            "Data yang digunakan: Paket A (3 buku tulis dan 2 pulpen = Rp18.000) dan Paket B (2 buku tulis dan 4 pulpen = Rp20.000).",
            "Data yang tidak digunakan: Nama toko, Jam buka (08.00-20.00), Lokasi toko (dekat pasar), dan Tujuan Siska membandingkan harga.",
            "Alasan: Data yang digunakan adalah data yang berhubungan langsung dengan jumlah barang dan harga untuk membentuk persamaan. Data lainnya tidak mempengaruhi perhitungan harga satuan."
        ],
        scoringCriteria: {
            4: "Menyebutkan semua data relevan dan tidak relevan dengan tepat dan lengkap.",
            3: "Menyebutkan sebagian besar benar, ada 1 kesalahan kecil.",
            2: "Menyebutkan sebagian data relevan/tidak relevan tetapi kurang lengkap.",
            1: "Jawaban tidak tepat, hanya menebak sebagian kecil.",
            0: "Tidak menjawab atau tidak sesuai konteks."
        }
    },
    {
        id: 2,
        text: "Di kantin sekolah, Roni melihat daftar harga paket makanan yang tertulis di papan. Pada papan tersebut tertulis bahwa 3 bungkus keripik dan 5 botol jus dijual dengan harga Rp21.000,00. Saat jam istirahat, kantin terlihat cukup ramai karena banyak siswa yang sedang membeli makanan. Roni berencana membeli 2 bungkus keripik dan 2 botol jus. Ia juga membawa uang Rp20.000,00. Roni ingin mengetahui harga satuan keripik dan jus agar bisa menghitung apakah uangnya cukup.\n\nPertanyaan: Tentukan data yang digunakan dan tidak digunakan untuk membuat persamaan, lalu jelaskan alasanmu!",
        indicator: "Mengidentifikasi data relevan & tidak relevan",
        subject: "SPLDV",
        cognitiveLevel: "C4",
        rubric: [
            "Data yang digunakan: 3 keripik dan 5 jus = Rp21.000.",
            "Data yang tidak digunakan: Kantin ramai, Uang Roni Rp20.000, dan Rencana membeli 2 keripik dan 2 jus.",
            "Alasan: Untuk membuat persamaan, hanya diperlukan hubungan jumlah barang dan total harga. Data lainnya tidak digunakan dalam penyusunan persamaan."
        ],
        scoringCriteria: {
            4: "Mengidentifikasi seluruh data relevan dan menyusun model SPLDV dengan benar.",
            3: "Data benar tetapi model sedikit kurang rapi/ada kesalahan kecil.",
            2: "Hanya sebagian data relevan atau model belum lengkap.",
            1: "Data dan model sebagian besar salah.",
            0: "Tidak menjawab."
        }
    },
    {
        id: 3,
        text: "Sebuah kandang berisi ayam dan kambing. Jumlah seluruh hewan adalah 20 ekor dan jumlah seluruh kaki hewan adalah 56 buah.\n\nPertanyaan: Tuliskan anggapan yang digunakan tentang jumlah kaki setiap hewan agar masalah tersebut dapat dibuat dalam bentuk persamaan!",
        indicator: "Mengidentifikasi asumsi",
        subject: "SPLDV",
        cognitiveLevel: "C2",
        rubric: [
            "Anggapan: Ayam memiliki 2 kaki dan Kambing memiliki 4 kaki.",
            "Penjelasan: Anggapan ini diperlukan agar jumlah kaki dapat dimodelkan dalam bentuk persamaan matematika."
        ],
        scoringCriteria: {
            4: "Menyebutkan semua asumsi (2 kaki ayam, 4 kaki kambing, kondisi normal) dengan tepat.",
            3: "Asumsi benar tetapi tidak lengkap.",
            2: "Hanya menyebut sebagian asumsi.",
            1: "Jawaban tidak tepat/keliru.",
            0: "Tidak menjawab."
        }
    },
    {
        id: 4,
        text: "Selisih umur seorang ayah dan anak adalah 26 tahun. Lima tahun yang lalu, jumlah umur mereka adalah 40 tahun.\n\nPertanyaan: Tuliskan anggapan tentang hubungan umur sekarang dengan umur lima tahun yang lalu!",
        indicator: "Mengidentifikasi asumsi",
        subject: "SPLDV",
        cognitiveLevel: "C2",
        rubric: [
            "Asumsi: Misal umur ayah sekarang = x (maka 5 tahun lalu = x-5) dan umur anak sekarang = y (maka 5 tahun lalu = y-5).",
            "Penjelasan: Anggapan ini digunakan untuk menghubungkan kondisi umur sekarang dengan kondisi 5 tahun yang lalu. Karena untuk menyelesaikan SPLDV diperlukan dua variabel (seperti harga baju dan celana) sehingga perlu diketahui harga masing-masing secara terpisah."
        ],
        scoringCriteria: {
            4: "Menjelaskan hubungan sekarang-masa lalu dan menyusun model SPLDV dengan benar.",
            3: "Konsep benar tetapi penjelasan kurang lengkap.",
            2: "Hanya memahami sebagian hubungan waktu.",
            1: "Jawaban kurang tepat.",
            0: "Tidak menjawab."
        }
    },
    {
        id: 5,
        text: "Harga 2 baju dan 1 celana adalah Rp170.000,00, sedangkan harga 1 baju dan 3 celana adalah Rp185.000,00.\n\nPertanyaan: Buatlah satu pertanyaan matematika dari data di atas yang dapat diselesaikan menggunakan persamaan linear dua variabel. Jelaskan alasanmu!",
        indicator: "Menyusun pertanyaan disertai alasan",
        subject: "SPLDV",
        cognitiveLevel: "C5",
        rubric: [
            "Pertanyaan: Berapakah harga satu baju dan satu celana?",
            "Alasan: Karena untuk mengetahui harga dalam jumlah tertentu, kita perlu mengetahui harga satuan terlebih dahulu agar dapat dihitung dengan tepat. (Jawaban bisa bervariasi selama relevan dan logis)"
        ],
        scoringCriteria: {
            4: "Pertanyaan relevan + alasan logis dan sesuai SPLDV.",
            3: "Pertanyaan tepat tetapi alasan kurang kuat.",
            2: "Pertanyaan kurang tepat atau alasan lemah.",
            1: "Hanya membuat pertanyaan tanpa alasan jelas.",
            0: "Tidak menjawab."
        }
    },
    {
        id: 6,
        text: "Harga 2 baju dan 1 celana adalah Rp170.000,00, sedangkan harga 1 baju dan 3 celana adalah Rp185.000,00.\n\nPertanyaan: Jelaskan alasan kamu mengapa kita perlu menentukan harga satuan baju dan celana terlebih dahulu sebelum menghitung total pembelian dalam jumlah yang lebih banyak!",
        indicator: "Menyusun pertanyaan disertai alasan",
        subject: "SPLDV",
        cognitiveLevel: "C4",
        rubric: [
            "Alasan: Kita perlu mengetahui harga satuan baju dan celana agar dapat menghitung total harga dengan tepat. Jika tidak diketahui harga satuannya, maka sulit menentukan harga untuk jumlah barang yang berbeda."
        ],
        scoringCriteria: {
            4: "Alasan jelas, logis, dan sesuai konsep SPLDV.",
            3: "Alasan benar tetapi kurang mendalam.",
            2: "Alasan kurang tepat atau masih umum.",
            1: "Alasan tidak sesuai konsep.",
            0: "Tidak menjawab."
        }
    },
    {
        id: 7,
        text: "Diketahui dua persamaan:\nx + y = 10\nx - y = 4\nSeorang siswa menyelesaikan sebagai berikut : x = 7, y = 3\n\nPertanyaan: Periksa kebenaran jawaban tersebut dengan cara mensubstitusikan kedua persamaan. Jika terdapat kesalahan, jelaskan letak kesalahannya!",
        indicator: "Memeriksa kebenaran argumen/pernyataan/proses solusi",
        subject: "SPLDV",
        cognitiveLevel: "C4",
        rubric: [
            "Pengecekan: Substitusi ke x + y = 10 -> 7 + 3 = 10 (Benar); Substitusi ke x - y = 4 -> 7 - 3 = 4 (Benar).",
            "Kesimpulan: Hasil benar karena memenuhi kedua persamaan tersebut. (Jika siswa di soal menjawab salah, contoh 8 dan 2, maka jelaskan letak kesalahannya pada persamaan kedua)."
        ],
        scoringCriteria: {
            4: "Memeriksa seluruh langkah dan menemukan benar/salah dengan tepat.",
            3: "Pengecekan benar tetapi tidak lengkap.",
            2: "Hanya mengecek sebagian langkah.",
            1: "Jawaban tidak tepat.",
            0: "Tidak menjawab."
        }
    },
    {
        id: 8,
        text: "Perhatikan pernyataan berikut:\n“Jika diketahui jumlah dua bilangan adalah 20, maka kedua bilangan tersebut dapat langsung ditentukan tanpa informasi tambahan.”\n\nPertanyaan: Apakah pernyataan tersebut benar ? Jelaskan alasanmu secara matematis !",
        indicator: "Memeriksa kebenaran argumen/pernyataan/proses solusi",
        subject: "SPLDV",
        cognitiveLevel: "C4",
        rubric: [
            "Kesimpulan: Argumen tersebut tidak sepenuhnya benar.",
            "Alasan: Dalam SPLDV diperlukan dua persamaan untuk dua variable. Informasi tentang satu jenis barang saja tidak cukup untuk menentukan harga barang lain, Diperlukan hubungan dengan barang kedua agar sistem persamaan dapat diselesaikan."
        ],
        scoringCriteria: {
            4: "Menilai argumen dengan benar dan memberi alasan matematis lengkap.",
            3: "Penilaian benar tetapi alasan kurang kuat.",
            2: "Jawaban benar tetapi tanpa alasan jelas.",
            1: "Jawaban tidak tepat.",
            0: "Tidak menjawab."
        }
    },
    {
        id: 9,
        text: "Jumlah dua bilangan adalah 30. Salah satu bilangan dua kali dari bilangan yang lain.\n\nPertanyaan: Tentukan kedua bilangan tersebut dengan cara membuat persamaan terlebih dahulu, kemudian selesaikan. Jelaskan langkah-langkahmu.",
        indicator: "Menyelesaikan masalah matematika disertai alasan",
        subject: "SPLDV",
        cognitiveLevel: "C3",
        rubric: [
            "Misal: x = bilangan pertama, y = bilangan kedua. Model SPLDV: x + y = 30; x = 2y.",
            "Substitusi: x + y = 30 -> 2y + y = 30 -> 3y = 30 -> y = 10. Maka x = 20.",
            "Jawaban: bilangan pertama = 20, bilangan kedua = 10."
        ],
        scoringCriteria: {
            4: "Model SPLDV benar + langkah lengkap + jawaban tepat.",
            3: "Langkah benar tetapi ada kesalahan kecil.",
            2: "Model benar tetapi penyelesaian kurang lengkap.",
            1: "Banyak kesalahan konsep.",
            0: "Tidak menjawab."
        }
    },
    {
        id: 10,
        text: "Di sebuah tempat parkir terdapat motor dan mobil. Dari hasil perhitungan diperoleh bahwa jumlah motor adalah 30 dan jumlah mobil adalah 20. Total kendaraan di tempat parkir tersebut adalah 50.\n\nPertanyaan: Apakah hasil tersebut sudah sesuai dengan persamaan, jelaskan mengapa jawabanmu benar!",
        indicator: "Menyelesaikan masalah matematika disertai alasan",
        subject: "SPLDV",
        cognitiveLevel: "C3",
        rubric: [
            "Pengecekan: Jumlah motor + mobil = 30 + 20 = 50 (Sesuai total kendaraan).",
            "Penjelasan: Jika substitusi ke model SPLDV menghasilkan pendapatan yang sesuai, maka hasil tersebut konsisten dengan semua data dalam soal, Artinya solusi SPLDV memenuhi kedua persamaan sekaligus."
        ],
        scoringCriteria: {
            4: "Menjelaskan konsistensi hasil dengan data secara logis dan lengkap.",
            3: "Penjelasan benar tetapi kurang mendalam.",
            2: "Penjelasan masih umum/kurang tepat.",
            1: "Tidak mampu menghubungkan hasil dengan data.",
            0: "Tidak menjawab."
        }
    }
];

// Legacy support for parts of the app still using the string
export const TES_SOAL = ESSAY_QUESTIONS[0].text;
