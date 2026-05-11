import type { Book } from '../types';

export const initialBooks: Book[] = [
  {
    id: 'b1',
    title: 'Atomic Habits',
    author: 'James Clear',
    isbn: '978-0735211292',
    category: 'Non-Fiksi',
    coverImage: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=600',
    description: 'Cara Mudah dan Terbukti Membentuk Kebiasaan Baik & Menghilangkan Kebiasaan Buruk.',
    publisher: 'Penguin Random House',
    publishedYear: 2018,
    totalCopies: 5,
    availableCopies: 3,
    isDigital: true,
    pages: 320,
    rating: 4.8
  },
  {
    id: 'b2',
    title: 'Clean Code',
    author: 'Robert C. Martin',
    isbn: '978-0132350884',
    category: 'Teknologi',
    coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600',
    description: 'A Handbook of Agile Software Craftsmanship.',
    publisher: 'Prentice Hall',
    publishedYear: 2008,
    totalCopies: 3,
    availableCopies: 3,
    isDigital: true,
    pages: 464,
    rating: 4.7,
    content: `Bab 1: Clean Code

Kode yang bersih (clean code) adalah kode yang dapat dibaca dan dipahami dengan mudah oleh siapa saja dalam tim. Kode yang bersih dapat dibaca dan ditingkatkan oleh developer lain selain penulis aslinya. Dengan kode yang mudah dipahami, maka kode tersebut menjadi mudah dibaca, diubah, dikembangkan, dan dipelihara.

Bab 2: Penamaan yang Bermakna

Nama ada di mana-mana dalam pembuatan perangkat lunak. Kita menamai variabel, fungsi, argumen, kelas, dan paket kita. Kita menamai file sumber dan direktori yang memuatnya. Karena kita banyak melakukan penamaan, sebaiknya kita melakukannya dengan baik. Pastikan nama yang dipilih benar-benar menjelaskan fungsinya.

Bab 3: Fungsi

Fungsi adalah baris pertama organisasi dalam setiap program. Menulis fungsi dengan baik sangatlah penting. Aturan pertama dari fungsi adalah mereka harus berukuran kecil. Aturan kedua dari fungsi adalah mereka harus lebih kecil daripada itu. Fungsi seharusnya hanya melakukan satu hal saja dan melakukannya dengan baik.

Tamat.`
  },
  {
    id: 'b3',
    title: 'Sapiens: Riwayat Singkat Umat Manusia',
    author: 'Yuval Noah Harari',
    isbn: '978-6024814890',
    category: 'Sejarah',
    coverImage: 'https://images.unsplash.com/photo-1447015237013-0e80b2786ddc?auto=format&fit=crop&q=80&w=600',
    description: 'Menelusuri sejarah manusia, dari zaman batu hingga abad ke-21.',
    publisher: 'KPG (Kepustakaan Populer Gramedia)',
    publishedYear: 2011,
    totalCopies: 10,
    availableCopies: 8,
    isDigital: true,
    pages: 536,
    rating: 4.9,
    content: `Bab 1: Kebangkitan Homo Sapiens

Kita bermula dari makhluk yang tak lebih penting dari kera atau babun di padang sabana Afrika. Namun, entah bagaimana, sebuah revolusi kognitif yang magis dan tak terduga mengubah jalan hidup kita selamanya. Kita mulai bisa berimajinasi, menyatukan tujuan, dan yang terpenting: menciptakan mitos bersama.

Bayangkan momen ketika Sapiens pertama menatap langit berbintang dan menyadari bahwa kita bisa menguasai dunia, atau ketika mereka bekerja sama melumpuhkan mamut raksasa. Itu adalah saat-saat mendebarkan di mana serigala mulai dijinakkan menjadi sahabat sejati, dan api menjadi pelita di tengah malam yang membeku.

Bab 2: Harga Sebuah Kemajuan

Namun, setiap langkah maju selalu diiringi harga yang harus dibayar. Saat kita beralih dari pemburu-pengumpul menjadi petani, kita mengadopsi gaya hidup yang mengubah segalanya. 

Ada rasa haru yang mendalam saat menyadari betapa banyaknya kebebasan yang harus dikorbankan umat manusia pertama kali. Kita kehilangan koneksi murni dengan alam liar, namun membangun peradaban, seni, dan budaya sebagai gantinya. Ribuan tahun berlalu, kita membangun pelabuhan, candi, dan piramida dari keringat dan air mata nenek moyang kita.

Bab 3: Menyatukan Dunia

Meski sejarah panjang kita terukir oleh konflik, ada magis di balik bagaimana Sapiens selalu berhasil menemukan jalan untuk saling terhubung. Di atas perbedaan dan jarak yang membentang luas, kita menciptakan jaringan perdagangan, ilmu pengetahuan, dan nilai-nilai bersama yang menyatukan miliaran orang. 

Sungguh sebuah keajaiban yang menggugah hati, menyadari bahwa kita semua terhubung oleh satu cerita besar umat manusia. Buku ini bukan hanya sejarah masa lalu, melainkan cermin untuk melihat betapa hebatnya, rentannya, dan indahnya menjadi manusia.

Tamat.`
  },
  {
    id: 'b4',
    title: 'Bumi Manusia',
    author: 'Pramoedya Ananta Toer',
    isbn: '978-9799731234',
    category: 'Sastra',
    coverImage: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=600',
    description: 'Kisah Minke dan pergerakan kebangkitan nasional Indonesia.',
    publisher: 'Lentera Dipantara',
    publishedYear: 1980,
    totalCopies: 4,
    availableCopies: 4,
    isDigital: true,
    pages: 535,
    rating: 4.9,
    content: `Bab 1: Awal Sebuah Pertemuan

Cerita bermula di akhir abad ke-19, di tanah Hindia Belanda. Minke, seorang pemuda pribumi cerdas yang mendapat hak istimewa bersekolah di HBS (Harmonishe Burger School), sebuah sekolah yang didominasi oleh anak-anak keturunan Eropa. Minke bukan sekadar murid biasa; ia memiliki pemikiran maju dan bakat menulis yang mengagumkan, menjadikannya anomali di antara kaumnya saat itu.

Suatu hari, takdir mempertemukannya dengan seorang gadis Indo-Eropa bernama Annelies Mellema, dan ibunya, Nyai Ontosoroh. Pertemuan ini tidak hanya menjadi awal dari sebuah kisah cinta yang mendalam, tetapi juga membuka mata Minke terhadap kerasnya realitas kolonialisme yang membelenggu bangsanya.

Bab 2: Kekuatan Seorang Nyai

Nyai Ontosoroh bukanlah perempuan biasa. Meski berstatus sebagai "nyai" – gundik dari seorang pria Eropa bernama Herman Mellema – ia adalah sosok yang teguh, mandiri, dan cerdas. Nyai Ontosoroh mengelola perusahaan besar milik suaminya dan mendidik Annelies dengan tegas.

Melalui Nyai Ontosoroh, Minke belajar banyak tentang kehidupan, bisnis, dan martabat. Sang Nyai mengajarkan Minke untuk tidak tunduk pada penindasan, melainkan melawannya dengan pengetahuan dan tulisan. Kata-kata legendarisnya terngiang di benak Minke: "Kita telah melawan, Nak, Nyo. Sebaik-baiknya, sehormat-hormatnya."

Bab 3: Cinta yang Terhalang

Cinta Minke dan Annelies tumbuh semakin kuat seiring berjalannya waktu. Mereka menikah dengan adat Islam, sebuah langkah yang menantang norma pada masa itu. Annelies yang rapuh menemukan tempat berlindung pada keberanian Minke. Di saat yang sama, Minke semakin aktif menulis, menyuarakan ketidakadilan yang dialami pribumi, menggunakan nama pena "Max Tollenaar".

Namun, kebahagiaan mereka mulai terusik ketika masalah hukum menghantam keluarga Mellema. Hukum kolonial Belanda yang diskriminatif tidak mengakui pernikahan Minke dan hak-hak Nyai Ontosoroh.

Bab 4: Perlawanan dan Harapan

Puncak konflik terjadi ketika hukum Eropa memutuskan bahwa Annelies harus dibawa ke Belanda, memisahkannya dari Minke dan Nyai Ontosoroh. Ini adalah pukulan telak yang menghancurkan hati. Meski mereka telah berjuang sekuat tenaga, hukum penguasa tidak berpihak pada mereka.

Di tengah kesedihan dan kekalahan, Minke menyadari bahwa jalan perjuangan masih panjang. Ia tahu bahwa satu-satunya cara untuk mengubah nasib bangsanya adalah melalui pendidikan, tulisan, dan pergerakan. Peristiwa ini membakar semangat kemerdekaan di dalam dadanya, mengubah seorang pemuda pencinta sastra menjadi martir pergerakan kebangkitan kebangsaan.

Tamat.`
  },
  {
    id: 'b5',
    title: 'The Pragmatic Programmer',
    author: 'David Thomas, Andrew Hunt',
    isbn: '978-0135957059',
    category: 'Teknologi',
    coverImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600',
    description: 'Your journey to mastery in software development.',
    publisher: 'Addison-Wesley Professional',
    publishedYear: 2019,
    totalCopies: 2,
    availableCopies: 2,
    isDigital: true,
    pages: 352,
    rating: 4.8,
    content: `Bab 1: Filosofi Pragmatis

Apa yang menjadikan seseorang sebagai Programmer Pragmatis? Kami merasa ini adalah sebuah sikap, sebuah gaya, filosofi dalam mendekati berbagai masalah dan mencari solusinya. Mereka berpikir di luar masalah yang terjadi saat ini, namun menempatkannya dalam konteks yang lebih luas dan berusaha untuk menyadari gambaran besarnya.

Bab 2: Pendekatan Pragmatis

Ada beberapa tips dan trik yang berlaku pada semua tingkatan pengembangan perangkat lunak, ide-ide yang hampir menjadi aksioma, dan proses yang secara virtual bersifat universal. Namun demikian, pendekatan ini jarang sekali didokumentasikan sebagaimana mestinya; biasaya Anda hanya menemukannya sebagai sebuah asumsi yang mendasari diskusi-diskusi lainnya.

Bab 3: Perkakas Dasar

Perkakas atau alat bantu (tools) memperkuat kemampuan Anda. Semakin baik perkakas yang digunakan, dan semakin baik Anda mengetahui cara menggunakannya, maka Anda akan semakin produktif. Mulailah dengan seperangkat perkakas dasar yang umum digunakan dalam pengembangan. Biarkan kebutuhan membimbing Anda seiring dengan memperluas kumpulan perkakas tersebut.

Tamat.`
  },
  {
    id: 'b6',
    title: 'Petualangan Kucing Oyen Mencari Teman',
    author: 'Bunda Rara',
    isbn: '978-6020612345',
    category: 'Fiksi',
    coverImage: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&q=80&w=600',
    description: 'Kucing Oyen berkeliling taman untuk mencari teman bermain. Ada kupu-kupu, kelinci, dan kura-kura. Cerita bergambar yang sangat menyenangkan untuk anak balita tentang indahnya pertemanan.',
    publisher: 'Pustaka Anak',
    publishedYear: 2023,
    totalCopies: 8,
    availableCopies: 8,
    isDigital: true,
    pages: 24,
    rating: 4.9,
    content: `Bab 1: Pagi yang Cerah

Di sebuah perumahan yang asri, tinggallah seekor kucing kecil berwarna oranye. Namanya Oyen. Oyen memiliki bulu yang sangat halus dan mata bulat yang berbinar-binar. Setiap pagi, Oyen selalu bangun lebih awal dari kucing lainnya.

"Mengeong! Mengeong! Pagi yang cerah!" seru Oyen sambil meregangkan tubuhnya.

Hari ini, matahari bersinar terang. Burung-burung berkicau riang di pepohonan. Oyen merasa sangat bersemangat. Ia memutuskan untuk pergi ke taman di ujung jalan. Ia ingin mencari teman bermain!

Bab 2: Kupu-Kupu yang Cantik

Sesampainya di taman, Oyen melihat seekor kupu-kupu yang sangat cantik. Kupu-kupu itu terbang berpindah-pindah dari satu bunga ke bunga lainnya. Sayapnya berwarna-warni, seperti pelangi!

"Hai, Kupu-kupu! Bolehkah aku bermain bersamamu?" sapa Oyen dengan riang.

Kupu-kupu itu tersenyum kecil. "Tentu saja, Oyen! Ayo, kejar aku jika kau bisa!"

Oyen pun kegirangan. Ia berlari ke sana kemari mengejar Kupu-kupu. Ia mencoba menangkap Kupu-kupu dengan cakarnya yang mungil, namun Kupu-kupu itu terlalu lincah. Mereka tertawa bersama, menikmati pagi yang indah.

Bab 3: Kelinci yang Cepat

Setelah puas bermain dengan Kupu-kupu, Oyen melanjutkan perjalanannya. Di dekat semak-semak, ia melihat seekor kelinci yang sedang memakan wortel. Telinganya panjang dan ekornya bulat seperti bola kapas.

"Hai, Kelinci! Wah, wortelmu terlihat enak sekali. Namaku Oyen, maukah kau menjadi temanku?" tanya Oyen ramah.

Kelinci itu menghentikan kunyahannya. "Hai, Oyen! Tentu saja. Namaku Boni. Wah, kau mengagetkanku. Ayo buat perlombaan lari!" tantang Boni.

"Ayo!" seru Oyen bersemangat.

Mereka pun berlomba lari dari semak-semak hingga ke pohon mangga besar. Oyen berlari sekuat tenaga dengan keempat kakinya, tapi Boni sangat cepat! Boni melompat dengan lincah dan mencapai pohon terlebih dahulu. Walaupun kalah, Oyen sangat senang. Ia telah menemukan teman baru yang sangat cepat!

Bab 4: Kura-kura yang Bijaksana

Hari semakin siang. Oyen merasa sedikit haus. Ia berjalan menuju kolam kecil di tengah taman. Di pinggir kolam, ia melihat seekor kura-kura sedang berjemur. Tempurungnya berwarna kecoklatan dan terlihat sangat keras.

"Hai, Kura-kura! Wah, kau pasti sudah sangat tua. Bolehkah aku bergabung denganmu?" tanya Oyen dengan sopan.

Kura-kura itu membuka matanya perlahan. "Tentu saja, Oyen kecil. Panggil saja aku Kakek Kura. Berjemur di sini sangat nyaman."

Oyen merebahkan diri di samping Kakek Kura. Mereka berdua terdiam, menikmati kehangatan matahari. Oyen merasa sangat tenang. Ia kini mengerti bahwa teman tidak harus selalu bermain dan berlari. Berteman juga berarti bisa menikmati ketenangan bersama-sama.

Bab 5: Teman-Teman Baru

Matahari mulai terbenam. Langit berubah warna menjadi jingga kemerahan. Oyen merasa sangat bahagia. Hari ini, ia telah menemukan teman-teman baru yang sangat luar biasa. Kupu-kupu yang cantik, Kelinci yang cepat, dan Kura-kura yang bijaksana.

Ia berjanji akan selalu mengunjungi taman ini setiap hari. Ia ingin bermain, belajar, dan tumbuh bersama teman-teman barunya.

"Sampai jumpa besok, teman-teman!" seru Oyen sambil melambaikan tangan (atau tepatnya, cakarnya!) ke arah taman.

Dengan hati yang riang, Oyen pulang ke rumahnya. Ia tertidur pulas dengan senyum menghiasi wajahnya. Dalam mimpinya, ia kembali berlari dan bermain bersama teman-teman kesayangannya.

Tamat.`
  },
  {
    id: 'b7',
    title: 'Gajah Kecil yang Berani',
    author: 'Kak Andi',
    isbn: '978-6232167890',
    category: 'Fiksi',
    coverImage: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&q=80&w=600',
    description: 'Kisah seekor anak gajah bernama Ello yang belajar mengatasi rasa takutnya saat harus menyeberang sungai untuk bermain bersama teman-temannya. Buku bergambar penuh warna dengan pesan moral berani mencoba.',
    publisher: 'Pustaka Anak',
    publishedYear: 2022,
    totalCopies: 5,
    availableCopies: 5,
    isDigital: true,
    pages: 32,
    rating: 4.8,
    content: `Bab 1: Ello yang Pemalu

Di sabana yang luas, hiduplah kawanan gajah yang besar dan kuat. Di antara mereka, ada seekor anak gajah bernama Ello. Berbeda dengan teman-temannya yang suka berlarian kesana-kemari, Ello lebih suka bersembunyi di balik kaki ibunya.

"Ayo main, Ello!" ajak Bima, anak gajah badannya paling besar.

Ello menggeleng pelan. "Aku... aku takut jatuh, Bima," cicitnya malu. 

Ibu Ello tersenyum lembut dan membelai kepala Ello dengan belalainya. "Tidak apa-apa, Nak. Setiap gajah punya waktunya sendiri untuk berani."

Bab 2: Sungai yang Deras

Suatu hari, musim kemarau tiba. Rumput-rumput di sabana mulai menguning dan air mulai mengering. Kawanan gajah harus pindah mencari tempat yang lebih banyak airnya. Perjalanan mereka memakan waktu berhari-hari. 

Akhirnya, mereka tiba di tepi sungai yang sangat lebar dan airnya mengalir cukup deras. Di seberang sungai, terlihat hutan yang hijau dan pohon-pohon yang rindang.

"Kita sudah sampai!" seru ketua kawanan gajah. "Kita harus menyeberangi sungai ini."

Ello melihat ke arah sungai dengan ketakutan. Airnya terlihat sangat dalam dan arusnya kuat. "Ibu, aku tidak berani," bisik Ello, merapatkan tubuhnya pada ibunya.

Bab 3: Langkah Pertama

Satu per satu gajah mulai masuk ke dalam air. Mereka menggunakan belalai mereka untuk saling berpegangan agar tidak terbawa arus. 

Ibu Ello menoleh padanya. "Ayo, Ello. Ibu akan berada tepat di sebelahmu. Pegang ekor Ibu kuat-kuat."

Ello menarik napas panjang. Kakinya gemetar saat menyentuh air yang dingin. Satu langkah... dua langkah... air mulai naik hingga ke perutnya. Tiba-tiba, kaki Ello terpeleset batu licin!

"Ibuuu!" teriak Ello panik. 

Namun, belalai ibunya dengan sigap menangkap tubuh Ello. "Tenang, Nak. Ibu di sini," kata ibunya menenangkan.

Bab 4: Ello Sekuat Gajah

Merasakan pelukan ibunya yang kuat, rasa takut Ello perlahan menghilang. Ia mulai menggerakkan kakinya lagi. Kali ini lebih mantap. Ia mengikuti irama langkah ibunya dan gajah-gajah lain di depannya. 

"Ternyata aku bisa!" batin Ello kegirangan. Ia bahkan mulai berani mengibaskan air dengan belalainya, membuat cipratan air ke arah Bima. 

"Hahaha, rasakan ini, Ello!" balas Bima sambil menyemprotkan air dengan belalainya.

Mereka pun tertawa bersama sambil terus menyeberangi sungai. Ello merasa sangat bangga pada dirinya sendiri.

Bab 5: Sampai di Seberang

Akhirnya, seluruh kawanan gajah berhasil menyeberangi sungai dengan selamat. Hutan tropis yang rimbun menyambut mereka dengan kesejukan dan makanan yang melimpah. 

Bima menghampiri Ello. "Kamu hebat, Ello! Kau menyeberang seperti gajah dewasa!" pujinya. 

Ello tersenyum lebar. Ia tidak lagi menjadi Ello yang pemalu. Ia tahu bahwa ia sama kuat dan beraninya dengan gajah-gajah lainnya. Sejak hari itu, Ello selalu ikut bermain dan berpetualang bersama teman-temannya. Ia membuktikan bahwa di balik ukuran yang kecil, ia adalah Gajah Kecil yang Berani.
    
Tamat.`
  },
  {
    id: 'b8',
    title: 'Tito Si Semut Pemberani',
    author: 'Kak Budi',
    isbn: '978-6231112223',
    category: 'Fiksi',
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Ant_%28Formica_rufa%29.jpg/600px-Ant_%28Formica_rufa%29.jpg',
    description: 'Kisah Tito, seekor semut kecil yang pemberani, dalam petualangannya menyelamatkan makanan untuk koloninya di musim kemarau. Cerita seru untuk anak-anak dengan pesan tentang keberanian dan kerja sama.',
    publisher: 'Pustaka Anak',
    publishedYear: 2024,
    totalCopies: 10,
    availableCopies: 10,
    isDigital: true,
    pages: 40,
    rating: 4.9,
    content: `Di bawah pohon beringin yang rindang, terdapat sebuah kerajaan semut yang sangat besar dan damai.

Di antara ribuan semut itu, ada satu semut kecil bernama Tito. Ukuran tubuhnya lebih mungil dari teman-temannya.

Walaupun kecil, Tito memiliki hati yang sangat berani dan selalu ingin membantu koloninya.

Suatu pagi, Sang Ratu Semut mengumpulkan seluruh pekerja. Musim kemarau panjang akan segera tiba.

"Kita harus mencari banyak cadangan makanan dan membawanya ke sarang," titah Ratu Semut dengan bijaksana.

Semua semut pekerja segera berbaris dengan rapi, membentuk antrean panjang keluar dari sarang.

Tito sangat bersemangat. Ia berada di barisan paling depan, siap untuk menjelajahi hutan luas.

Perjalanan sangat jauh. Mereka harus melewati bebatuan besar yang terasa seperti gunung bagi para semut.

Tiba-tiba, angin bertiup kencang. Daun-daun kering beterbangan, membuat antrean semut menjadi kacau.

"Tetap dalam barisan! Jangan terpencar!" teriak Jenderal Semut memberi komando.

Tito berpegangan erat pada sehelai akar rumput, mencoba bertahan agar tidak tertiup angin bandel itu.

Setelah angin mereda, Tito menyadari bahwa ia terpisah dari rombongannya. Ia kini sendirian di tempat asing.

Bukannya menangis, Tito mencoba mengingat jalan. Ayahnya pernah berkata, "Semut pemberani pantang menyerah."

Sambil berjalan, Tito mencium aroma manis yang sangat lezat. Bau itu berasal dari balik semak-semak.

Ia merayap perlahan dan mendapati sebuah piknik keluarga manusia yang tertinggal. Ada sepotong besar kue madu!

"Wah, ini makanan yang sangat berlimpah! Ratu pasti senang," pikir Tito. Namun kue itu terlalu besar.

Masalah lain muncul. Tiba-tiba tanah bergetar pelan. Seekor belalang hijau raksasa mendarat tepat di depan kue.

Belalang itu tampak lapar dan bersiap memakan kue tersebut. Tito harus melakukan sesuatu!

Dengan sisa keberaniannya, Tito maju ke depan. "Maaf Tuan Belalang, kue ini sangat kami butuhkan untuk musim kemarau."

Belalang itu tertawa terbahak-bahak melihat semut sekecil Tito berani menegurnya. "Hahaha, kau terlalu kecil untuk mencegahku!"

Tito tidak kehabisan akal. Ia teringat bahwa belalang sangat benci pada kelitik.

Dengan gesit, Tito memanjat kaki belakang belalang dan mulai mengelitik sela-sela sendi kaki belalang itu.

"Hei! Hentikan! Itu geli sekali! Wahahaha!" Belalang itu melompat-lompat menahan geli.

Akhirnya, belalang menyerah dan melompat jauh meninggalkan kue madu tersebut. Tito berhasil menyelamatkannya!

Tak lama kemudian, rombongan Jenderal Semut lewat di dekat sana sedang mencari Tito.

"Tito! Syukurlah kau selamat!" seru teman-teman semutnya melihat Tito menari-nari di atas kue madu.

Jenderal Semut sangat kagum. "Bagaimana kau bisa menemukan harta karun ini, Tito kecil?"

Tito menceritakan pertemuannya dengan si belalang hijau. Semua semut bertepuk tangan memuji keberanian Tito.

Kini, saatnya memotong kue dan membawanya pulang. Ratusan semut bekerja sama membagi raksasa kue itu.

Tito memanggul sepotong madu manis di punggungnya. Beban itu terasa ringan karena hatinya gembira.

Perjalanan pulang terasa lebih cepat. Mereka bernyanyi bersama sepanjang jalan menuju kerajaan di bawah beringin.

Ratu Semut menyambut kedatangan mereka dengan senyuman. Ia melihat gunungan makanan yang berlimpah.

Jenderal menceritakan jasa besar Tito. Ratu menghampiri semut kecil itu dan memberinya sebuah medali khusus.

"Terima kasih, Tito. Kau telah menjadi pahlawan bagi kerajaan ini. Tubuhmu kecil, tapi keberanianmu luar biasa."

Sejak hari itu, tidak ada lagi semut yang meremehkan Tito. Ia dikenal sebagai 'Tito Si Semut Pemberani'.

Ketika musim kemarau tiba, cuaca menjadi sangat panas dan persediaan makanan di luar habis.

Namun di dalam sarang beringin, perut para semut selalu kenyang berkat kue madu hasil temuan Tito.

Tito kecil kini sering menceritakan petualangannya kepada para semut muda yang baru menetas.

Pesan moral dari ceritanya selalu sama: "Jangan pernah takut mencoba, walaupun kau merasa paling kecil."

Begitulah kisah Tito Si Semut Pemberani, pahlawan kecil yang selamanya akan dikenang di kerajaan bawah pohon beringin.`
  },
  {
    id: 'b9',
    title: 'Peta Harta di Pulau Terlupakan',
    author: 'Leo Kapten',
    isbn: '978-6238883331',
    category: 'Fiksi',
    coverImage: 'https://images.unsplash.com/photo-1594246830571-0ae89e24ec14?auto=format&fit=crop&q=80&w=600',
    description: 'Petualangan seru tiga sahabat menemukan harta karun tersembunyi di pulau misterius dengan petunjuk dari peta kuno.',
    publisher: 'Pustaka Petualang',
    publishedYear: 2023,
    totalCopies: 7,
    availableCopies: 7,
    isDigital: true,
    pages: 45,
    rating: 4.9,
    content: `Bab 1: Penemuan di Loteng Kakek

Pada liburan musim panas, Banyu dan kedua sahabatnya, Raka dan Dini, sedang membantu membersihkan gudang di loteng kakek Banyu. Di antara tumpukan kardus tua, Banyu menemukan sebuah kotak kayu kecil yang ukirannya sudah memudar.

"Coba buka, Nyu!" seru Raka penasaran. Banyu mencongkel gembok karatan itu. Krak! Terbuka. Di dalamnya hanya ada sebuah gulungan kertas kulit yang sudah menguning dan rapuh.

Dini membentangkan gulungan itu. "Ini... ini peta harta karun!" matanya membelalak kaget. Di peta itu tergambar sebuah pulau dengan bentuk seperti tengkorak, lengkap dengan tulisan 'Pulau Terlupakan' pudar di sudutnya. Titik silang merah besar ada di bagian mata tengkorak.

Malam harinya, kakek Banyu bercerita bahwa itu adalah peta milik buyut mereka yang dulunya seorang penjelajah lautan. "Banyak yang mencari pulau itu, namun tak pernah kembali," kata Kakek dengan nada misterius. Tiga sahabat itu saling berpandangan, mereka tahu apa yang harus mereka lakukan. Petualangan!

Bab 2: Memulai Pelayaran

Mereka menyiapkan segalanya. Bekal, kompas, senter, dan menyewa sebuah perahu motor kecil milik paman Dini. Berbekal koordinat bintang yang ada di peta, mereka berlayar perlahan meninggalkan dermaga pada pagi yang berkabut.

"Angin laut terasa sangat kuat hari ini," kata Dini sambil memegang kemudi. Banyu terus mencocokkan arah dengan kompas. Setelah lima jam berlayar di laut lepas tanpa melihat daratan, ombak tiba-tiba menjadi sangat ganas.

"Pegangan erat-erat!" teriak Raka saat ombak setinggi dua meter menghantam sisi perahu. Mereka terombang-ambing di tengah badai tiba-tiba. Langit menjadi gelap gulita.

Tiba-tiba, suara benturan keras terjadi. Brak! Perahu mereka menabrak sesuatu. Mereka terlempar ke air yang dingin, ombak menggulung mereka ke pantai. Saat mereka membuka mata keesokan paginya, perahu mereka rusak berat. Mereka telah terdampar.

Bab 3: Hutan Berbisik

Mereka terbangun di hamparan pasir putih. Memandang ke depan, hutan lebat dengan pepohonan raksasa menghalangi pandangan. "Lihat batu itu!" tunjuk Raka. Batu besar di pintu masuk hutan itu memiliki ukiran tengkorak—mirip dengan yang ada di peta.

"Kita sudah sampai di Pulau Terlupakan," bisik Banyu. Mereka nekat memasuki hutan untuk mencari jalan ke arah bukit kapur yang menjadi simbol mata di peta.

Suasana hutan sangat aneh. Tidak ada suara burung, yang ada hanya suara angin yang berhembus melalui celah tebing, terdengar seperti bisikan orang memanggil nama mereka. "Teerooous... Ke saaaanaaa..." Dini merinding. 

Tiba-tiba tanah pijakan Raka amblas! "Tolong!" Raka nyaris jatuh ke dalam jurang tersembunyi yang dipenuhi duri mematikan. Banyu dan Dini dengan sekuat tenaga menarik Raka menggunakan akar gantung pohon beringin raksasa. Mereka berhasil. Perjalanan ini ternyata penuh jebakan.

Bab 4: Penjaga Harta Karun

Setelah melewati rawa-rawa berbisa dan gua kelelawar, mereka akhirnya tiba di bukit kapur dengan dua lubang besar berbentuk mata. Mereka masuk ke gua yang sebelah kiri. Gelap dan lembab.

Di ujung gua, cahaya keemasan terpancar terang. Sebuah peti harta karun besar terbuka setengah, berisi koin emas, permata, dan mahkota bertahtakan rubi! 

Namun, sebelum mereka bisa menyentuhnya, sesosok bayangan besar bangkit dari tanah. Itu adalah penyu raksasa purba yang cangkangnya penuh dengan ukiran bercahaya. Ia adalah penjaga pulau ini.

Penyu itu menatap mereka tajam. "Hanya yang berhati murni yang bisa membawa pulang harta sang pelaut. Kalian harus menjawab teka-tekiku," suara penyu itu menggema di dalam pikiran mereka.

Teka-tekinya: "Aku lebih berharga dari harta ini, tapi tak bisa disentuh. Aku bisa hilang, tapi jika dijaga dengan baik, aku akan abadi. Apakah aku?"

Bab 5: Pulang Membawa Kenangan

Banyu, Raka, dan Dini berpikir keras. Apa yang tak bisa disentuh tapi berharga? Emas bisa disentuh.

Raka tiba-tiba tersenyum. Ia menatap kedua sahabatnya. "Persahabatan!" jawab Raka lantang. 

Penyu purba itu mengangguk pelan. Mulutnya membentuk senyuman lambat. "Tepat sekali." Ia membiarkan mereka mengambil satu koin emas besar sebagai lambang keberhasilan mereka, sisa hartanya akan tetap dijaga demi keseimbangan pulau.

Penyu purba itu bahkan berbaik hati menunjukkan jalan pintas rahasia keluar dari pulau dan memperbaiki perahu mereka dengan kekuatannya. Dalam sekejap mata, ombak tenang membawa mereka pulang.

Meski mereka tak membawa sekotak harta, satu koin emas dan petualangan yang tak tergantikan telah menjadikan persahabatan mereka lebih berharga dari permata apapun. Mereka telah menaklukkan Pulau Terlupakan.

Tamat.`
  },
  {
    id: 'b10',
    title: 'Bayangan di Balik Cermin',
    author: 'Kiki Ananda',
    isbn: '978-6234455667',
    category: 'Misteri',
    coverImage: 'https://images.unsplash.com/photo-1505322022379-7c3353ee6291?auto=format&fit=crop&q=80&w=600',
    description: 'Buku ini mengisahkan tentang petualangan seru dan menegangkan seorang gadis yang tak sengaja menemukan dunia cermin dan sebuah misteri yang sangat mengejutkan di sebuah rumah tua pamannya.',
    publisher: 'Pustaka Seru',
    publishedYear: 2023,
    totalCopies: 4,
    availableCopies: 4,
    isDigital: true,
    pages: 40,
    rating: 4.9,
    content: `Bab 1: Cermin Tua di Loteng

Keluarga Maya baru saja pindah ke rumah paman mereka yang sangat antik. Rumah itu besar dan sedikit berdebu. Saat membereskan kamarnya, Maya melihat sesuatu mengkilap dari celah pintu menuju loteng. 

Karena penasaran, ia naik perlahan ke loteng yang gelap dan diterangi sinar dari satu jendela kecil. Di sana, tertutup kain putih, ada sebuah cermin oval yang dihiasi ukiran naga di bingkainya. 

Maya membuka kain itu. Cermin itu memantulkan dirinya, tetapi ada yang aneh. Bayangannya tidak tersenyum saat Maya tersenyum. Bayangannya tampak ketakutan!

Bab 2: Suara Panggilan Minta Tolong

Maya sangat kaget. "Si.. siapa kamu?" tanyanya gemetar. Bayangannya menempelkan tangannya ke kaca cermin. Lalu, sesuatu terjadi.

Cermin itu memancarkan cahaya kebiruan dan seakan menghisap Maya masuk ke dalamnya. Maya berteriak pelan sebelum terjatuh ke atas lantai batu putih. 

Ia berada di tempat aneh yang serba terbalik. Pepohonan tumbuh dengan akar di atas, langit berwarna ungu, dan tidak ada matahari. Dari mana-mana, terdengar suara bisikan, "Tolong kami... Sang Penjaga Cahaya telah dicuri oleh Monster Kabut."

Bab 3: Pencarian Sang Penjaga

Arah dari suara itu menuntun Maya kepada makhluk kecil bersayap yang mengaku sebagai Peri Cermin. Ia menunjuk ke arah Kastil Kabut di ufuk yang muram. 

"Sang Penjaga Cahaya kita dirampas semalam, ia yang menjaga agar dunia cermin bersinar," bisiknya sedih. 

Maya yang merasa terpanggil segera mengangguk. "Aku akan membantu kalian!" ujarnya yakin. Ia kemudian diberi sebuah kristal yang mencerahkan jalan. Maya melewati Hutan Terbalik yang penuh serigala pelahap cahaya. Dengan kristal dari peri, ia mampu menghalau serigala-serigala itu.

Bab 4: Monster Kabut dan Teka-teki

Di gerbang Kastil Kabut, Maya berhadapan dengan si Monster Kabut. Makhluk raksasa ini tak bermata, namun suaranya sangat mengerikan. 

"Kau takkan bisa mengambil Penjaga Cahaya kecuali kau memecahkan tiga tekaku!" seru Monster itu. Maya setuju. 

Teka-teki pertama dan kedua dijawab Maya dengan cerdas dengan bantuan buku pengetahuannya yang sering dibacanya di dunia nyata. Saat teka-teki ketiga dilontarkan, "Apa yang akan menghilang saat kau menyebutnya?", seketika Maya mengerti. 

"Keheningan!" teriaknya. KRAK! Tiba-tiba Monster Kabut itu menyusut karena hanya takut pada kebijaksanaan. 

Bab 5: Kembalinya Cahaya dan Kepulangan

Ternyata, Penjaga Cahaya adalah sebuah Permata Bintang kuno. Maya membawa Permata itu kembali pada Peri Cermin. Seketika, Dunia Cermin yang muram kembali bercahaya! Langit menjadi cerah, dan bayangan-bayangan pun kembali seperti dunia nyata.

Cermin itu pun memancarkan portal. "Terima kasih, Maya!" seru para penghuni cermin. Maya tersedot kembali dan terjatuh di depan cermin tua loteng di waktu yang sama ketika ia jatuh.

Sejak saat itu, saat Maya becermin, bayangannya selalu tersenyum hangat, mengingat rahasia petualangan seru yang hanya mereka berdua ketahui di Balik Cermin.

Tamat.`
  },
  {
    id: 'b11',
    title: 'Sahabat yang Jadi Pacar',
    author: 'Aulia Rahman',
    isbn: '978-6237778889',
    category: 'Fiksi',
    coverImage: 'https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?auto=format&fit=crop&q=80&w=600',
    description: 'Kisah cinta manis tentang dua sahabat masa kecil yang perlahan menyadari perasaan mereka masing-masing saat beranjak remaja.',
    publisher: 'Romansa Media',
    publishedYear: 2024,
    totalCopies: 6,
    availableCopies: 6,
    isDigital: true,
    pages: 150,
    rating: 4.8,
    content: `Bab 1: Tawa di Bawah Hujan

Sore itu hujan turun rintik-rintik. Rara dan Kevin memutuskan berteduh di sebuah pos ronda yang atapnya mulai bocor. Mereka berdua sudah bersahabat sejak masih duduk di bangku taman kanak-kanak.

"Tuh kan, aku bilang juga apa. Bawa payung," kata Kevin sambil membersihkan sisa air hujan dari pundaknya.

Rara cemberut, "Mana aku tahu bakal hujan deras, lagian kan ramalan cuaca bilang cerah."

Kevin hanya tertawa melihat wajah sahabatnya. Ia melepaskan jaket denimnya dan menyampirkannya ke bahu Rara. "Pakai ini, biar nggak kedinginan."

Rara terdiam sejenak. Ada desiran aneh di dadanya. Perasaan yang belum pernah ia rasakan sebelumnya saat bersama Kevin.

Bab 2: Pandangan yang Berbeda

Sejak kejadian di bawah hujan itu, ada yang berubah dalam diri Rara. Ia mulai sering memperhatikan Kevin secara diam-diam. Saat Kevin bermain basket, saat Kevin tertawa lepas, atau bahkan saat Kevin sedang serius mengerjakan tugas.

Rara menyadari bahwa sahabat kecilnya itu kini telah tumbuh menjadi sosok laki-laki yang sangat menarik. Namun, ia mencoba menepis perasaan itu. "Kami hanya sahabat. Tidak boleh lebih," batinnya.

Di sisi lain, Kevin pun merasakan perubahan pada Rara. Rara menjadi lebih pendiam dan sering salah tingkah saat berada di dekatnya. Tapi Kevin tak berani bertanya karena takut merusak persahabatan mereka.

Bab 3: Malam Pentas Seni

Acara puncak pentas seni sekolah tiba. Rara dan Kevin kebagian tugas menjadi panitia seksi panggung. Mereka harus memastikan semua properti tertata dengan baik.

Malam itu, Rara tampak cantik mengenakan gaun pastel sederhana. Kevin sempat terpana melihatnya. "Cantik juga sahabatku ini," gumamnya pelan, hampir tak terdengar.

Saat acara hampir selesai, lampu tiba-tiba padam karena korsleting ringan. Suasana panggung menjadi riuh. Di tengah keremangan, tangan seseorang menggenggam erat tangan Rara.

Itu tangan Kevin. "Tenang, ada aku," bisiknya di telinga Rara. Degupan jantung Rara semakin tak beraturan. Kegelapan dan genggaman tangan itu seperti mengunci dunia hanya untuk mereka berdua.

Bab 4: Pengakuan

Besoknya, mereka janjian bertemu di kafe biasa tempat mereka sering mengerjakan tugas bersama. Suasana terasa sedikit canggung setelah kejadian malam tadi.

"Ra," panggil Kevin memecah kesunyian. "Boleh aku jujur soal perasaanku?"

Rara menyeruput minumannya pelan, menutupi rasa gugupnya. "Iya, kenapa Vin?"

Kevin menatap lurus ke dalam bola mata Rara. "Mungkin ini terdengar klise, tapi aku nggak bisa lagi bohongin perasaan aku. Aku sayang sama kamu, Ra. Lebih dari sekadar sahabat."

Hening. Rara tak menyangka kata-kata itu akan keluar dari mulut Kevin. Selama ini ia mengira hanya dirinya yang memendam perasaan.

Bab 5: Babak Baru

Air mata haru menetes perlahan di pipi Rara. Ia tersenyum, "Aku juga, Vin. Aku ngerasain hal yang sama."

Kevin tersenyum lega. Beban berat yang selama ini mengganjal perasaannya akhirnya terangkat. Ia memegang tangan Rara dengan lembut.

"Jadi, mulai hari ini... kita bukan sekadar sahabat lagi?" goda Kevin.

Rara tertawa kecil sambil mengangguk. Mulai saat itu, mereka membuka babak baru dalam hidup. Dari dua anak kecil yang berebut mainan, menjadi dua remaja yang saling berbagi kasih dan cerita. Persahabatan mereka tak pernah hilang, justru tumbuh menjadi cinta yang tulus dan menguatkan satu sama lain.

Tamat.`
  },
  {
    id: 'b12',
    title: 'Lovasket',
    author: 'Luna Torashyngu',
    isbn: '978-9792225380',
    category: 'Fiksi',
    coverImage: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=600',
    description: 'Kisah cinta manis dan semangat juang di lapangan basket. Vira yang tomboy dan gila basket menemukan teman sehati yang mengerti passion-nya.',
    publisher: 'Gramedia Pustaka Utama',
    publishedYear: 2007,
    totalCopies: 5,
    availableCopies: 5,
    isDigital: true,
    pages: 200,
    rating: 4.9,
    content: `Bab 1: Lapangan Basket Tua

Bagi Vira, suara pantulan bola basket di lapangan adalah melodi yang paling indah. Lapangan basket tua di sekolahnya sudah seperti rumah kedua. Setiap sore, gadis tomboy itu selalu berlatih di sana, men-dribble, lalu melempar bola, berharap masuk tepat ke dalam jaring.

"Shooot!" seru Vira sambil melompat. Bola melayang mulus dan masuk tanpa mengenai ring (swish).

"Nggak buruk buat ukuran cewek yang tingginya cuma segitu," terdengar suara berat dari pinggir lapangan.

Vira menoleh kesal. Di sana berdiri Alvian, kapten tim basket putra yang selalu terlihat sok keren dan menyebalkan. "Tinggi badanku nggak ngaruh! Lemparanku selalu akurat, kan?" balas Vira.

Bab 2: Latihan Bersama

Entah kenapa, sejak hari itu Alvian sering muncul di lapangan tua saat Vira berlatih. Awalnya Vira merasa terganggu, tapi pelan-pelan ia menyadari bahwa Alvian tidak mencoba pamer. Laki-laki itu justru membantunya.

"Kalau mau lemparan tiga angka, siku lo harus ditekuk sedikit lagi," saran Alvian suatu senja. Ia berdiri di belakang Vira dan membantu memperbaiki postur lengannya.

Wajah Vira tiba-tiba terasa panas. Tangan Alvian yang memegang lengannya terasa hangat. Konsentrasinya buyar seketika, dan bola lemparannya meleset jauh.

Alvian tertawa kecil. "Lo grogi, ya?"

"Enak aja! Ini karena anginnya kenceng," bantah Vira salah tingkah.

Bab 3: Turnamen Sekolah

Hari turnamen basket antarsekolah akhirnya tiba. Tim putri sekolah Vira berhasil masuk final. Pertandingan berlangsung sengit. Vira bermain habis-habisan, tapi tim lawan sangat tangguh.

Di kuarter terakhir, Vira merasa energinya hampir habis. Ia menatap ke tribun penonton dan melihat Alvian berdiri di barisan depan.

"Ayo, Vir! Tunjukin akurasi lo!" teriak Alvian mengalahkan gemuruh suara penonton.

Teriakan itu seolah memberi Vira tenaga baru. Di detik-detik terakhir, Vira mendapat umpan balik. Ia men-dribble bola, melewati satu pemain, berbalik, dan melompat... Tiga angka!

Peluit panjang berbunyi. Tim Vira menang! Sorak-sorai pecah di seluruh lapangan.

Bab 4: Perayaan Kemenangan

Sore harinya, saat sekolah sudah sepi, Vira kembali ke lapangan basket tua. Ia duduk di pinggir lapangan sambil memeluk bola basketnya dengan senyum lebar.

Terdengar langkah kaki mendekat. Alvian datang dengan dua botol minuman dingin. Ia melempar satu kepada Vira dan duduk di sebelahnya.

"Selamat ya, MVP," ucap Alvian sambil tersenyum.

"Makasih," jawab Vira perlahan. "Makasih juga udah nemenin gue latihan selama ini."

Alvian menghela napas panjang dan menatap Vira dengan serius. "Vir, lo tau nggak alasan gue selalu datang ke mari tiap sore?"

Vira menggeleng polos.

Bab 5: Cinta di Lapangan Basket

"Karena ada cewek bawel yang lemparan tiga angkanya bikin gue selalu kepikiran," kata Alvian. 

Vira menelan ludah, detak jantungnya berpacu lebih cepat daripada saat pertandingan final.

"Gue suka sama lo, Vir," lanjut Alvian. "Lebih dari sekadar partner main basket. Lo mau nggak jadi pacar gue?"

Vira menatap mata Alvian. Tidak ada lagi wajah usil dan menyebalkan, yang ada hanya ketulusan. Vira tak bisa menahan senyumnya yang perlahan merekah.

Ia memantulkan bola basketnya perlahan, lalu menangkapnya lagi. "Asal lo janji nggak bakal kalah kalau on-on-one sama gue."

Alvian tertawa lepas dan mengangguk bahagia. Di bawah cahaya jingga matahari terbenam sore itu, lapangan basket tua menjadi saksi sebuah kisah cinta yang manis. Dari sekadar persaingan di dunia basket, tumbuh menjadi kasih sayang tulus yang saling menguatkan.

Tamat.`
  },
  {
    id: 'b13',
    title: 'Pensil Ajaib',
    author: 'Penulis Anak Cerdas Indonesia',
    isbn: '978-6021234567',
    category: 'Anak',
    coverImage: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600',
    description: 'Cerita yang sangat lucu dan menarik tentang detektif cilik berkacamata yang menemukan pensil ajaib yang bisa membuat semua gambarnya menjadi nyata.',
    publisher: 'PACI',
    publishedYear: 2020,
    totalCopies: 8,
    availableCopies: 8,
    isDigital: true,
    pages: 48,
    rating: 4.8,
    content: `Bab 1: Penemuan Misterius

Rina, yang sering dipanggil 'Detective Kacamata' karena hobi menyelidikinya, sedang berjalan di taman dekat rumah. Ia menemukan sebuah pensil unik dengan penghapus berbentuk kepala kelinci di ujungnya yang berkilau di bawah sinar matahari.

"Pensil siapa ini?" gumam Rina sambil memungutnya dan mengamatinya dengan kaca pembesarnya. Saat ia memegang pensil itu, entah mengapa ia merasa ada semacam keajaiban.

Bab 2: Gambar yang Hidup

Sesampainya di rumah, Rina mencoba menggunakan pensil itu untuk menggambar seekor kucing kecil di buku gambarnya. Tiba-tiba, keajaiban benar-benar terjadi. Kucing yang ia gambar mulai bergerak, lalu melompat keluar dari kertas!

"Meow!" kucing kecil itu mengeong lucu.

Rina membelalakkan matanya di balik kacamata besarnya. "I... ini pensil ajaib!" Rina sangat kegirangan sekaligus terkejut.

Bab 3: Masalah Datang

Rina menggunakan pensilnya untuk membantu teman-temannya. Ia menggambar payung untuk temannya yang kehujanan, dan menggambar bola baru untuk anak-anak yang kehilangan bola. Namun, karena terlalu bersemangat, ia iseng menggambar sebuah dinosaurus mini yang lalu lepas dan membuat kekacauan di kebun sekolah.

"Astaga, aku harus menangkapnya!" seru Rina panik.

Bab 4: Aksi Detective Kacamata

Dinosaurus itu mulai memakan tanaman hias favorit kepala sekolah. Rina harus menghentikannya sebelum ketahuan. Menggunakan kecerdasan dan insting detektifnya, Rina melacak jejak dinosaurus tersebut.

Dengan sigap, Rina menggunakan pensil ajaibnya untuk menggambar sebuah jaring besar yang langsung jatuh menjebak hewan kecil yang nakal itu di bawahnya.

Bab 5: Pelajaran Berharga

Setelah berhasil menangkap dinosaurus itu, Rina menggunakan penghapus berbentuk kelinci pada pensilnya untuk menghapus gambar jaring dan dinosaurus itu, mengembalikannya menjadi kertas kosong. Rina menghela napas lega.

Ia menyadari bahwa memiliki barang ajaib berarti memiliki tanggung jawab yang besar. Rina lalu menyimpan pensil ajaib itu di dalam tas ranselnya dan berjanji hanya akan menggunakannya untuk hal-hal yang benar-benar penting. Hari itu, Detective Kacamata mendapat pelajaran berharga.

Tamat.`
  },
  {
    id: 'b14',
    title: 'Planet Luna',
    author: 'Ray Antariksa & Yasmine',
    isbn: '978-6230011223',
    category: 'Non-Fiksi',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600',
    description: 'Buku non-fiksi yang menggabungkan ilustrasi cantik dengan sains, mengajak pembaca menjelajahi keajaiban tata surya bersama gadis bernama Luna.',
    publisher: 'Elex Media Komputindo',
    publishedYear: 2021,
    totalCopies: 12,
    availableCopies: 12,
    isDigital: true,
    pages: 120,
    rating: 4.8,
    content: `Bab 1: Gadis dengan Kepala Penuh Planet

Luna bukanlah anak perempuan biasa. Sementara teman-temannya sibuk membicarakan mainan atau film terbaru, kepala Luna selalu dipenuhi oleh bintang, komet, dan planet-planet. Ia sering dijuluki "Gadis Planet" karena pengetahuannya yang luas tentang tata surya. 

Buku ini bukan sekadar cerita, melainkan panduan seru untuk mengenali alam semesta tempat kita tinggal, disusun dengan gaya bahasa yang menyenangkan dan penuh fakta sains astronomi yang menakjubkan.

Bab 2: Kucing Angkasa dan Bunga Matahari

Dalam buku ini, Luna mengajak kita berkeliling galaksi, dijelaskan melalui ilustrasi kucing kesayangannya yang seolah melayang di gravitasi nol, dan bunga matahari yang selalu menghadap cahaya. 

Tahukah kamu bahwa di luar angkasa tidak ada suara? Atau bahwa satu hari di planet Venus lebih lama daripada satu tahun di bumi? Luna akan menjelaskan semua fakta ilmiah ini dengan cara yang seru dan mudah dipahami bagi pembaca.

Bab 3: Sabuk Asteroid dan Planet Kerdil

Pernahkah kamu mendengar tentang sabuk asteroid atau planet kerdil bernama Pluto yang malang? Melalui pandangan mata dan pikiran Luna, kita diajak menyelami materi-materi astronomi yang biasanya rumit menjadi petualangan sains visual yang menawan.

Fakta-fakta tentang planet Jupiter yang merupakan gas raksasa, cincin indah Saturnus, hingga badai merah yang tak pernah berhenti, semua dibahas lengkap dengan sumber data yang akurat.

Bab 4: Orbit Pengetahuan

Kepala Luna yang dihiasi lintasan planet-planet di sampul buku menggambarkan bahwa alam semesta yang luas juga dapat dipelajari dari keingintahuan dan imajinasi pikiran kita. Buku non-fiksi ini membuktikan bahwa mempelajari sains dan astronomi tak pernah membosankan.

Bersama buku "Planet Luna", wawasan sains kita akan diperluas menembus batas atmosfer bumi, melesat jauh menuju keajaiban antariksa. Sebuah bacaan wajib bagi kamu yang selalu penasaran dengan apa yang ada di balik pekatnya langit malam.

Tamat.`
  }
];
