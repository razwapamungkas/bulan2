// 1. Mendefinisikan fungsi
function tampilkanSambutan() {
  console.log("Selamat datang! Silakan selesaikan proses pembayaran.");
}

// 2. Memanggil fungsi
tampilkanSambutan();
// Output: Selamat datang! Silakan selesaikan proses pembayaran.



// "namaDepan" dan "namaBelakang" adalah parameter
function sapa(namaDepan, namaBelakang) {
  console.log("Halo,", namaDepan, namaBelakang + "!");
}

// "Budi" dan "Santoso" adalah argumen
sapa("razwa", "pamungkas"); // Output: Halo, Budi Santoso!
sapa("Ani", "Rahayu"); // Output: Halo, Ani Rahayu!



function hitungDiskon(harga, persentase = 10) {
  return harga - (harga * persentase) / 100;
}

console.log(hitungDiskon(100000, 20)); // Output: 80000 — menggunakan persentase 20
console.log(hitungDiskon(100000)); // Output: 90000 — menggunakan default 10



function tampilkanProduk(nama, harga, stok) {
  console.log("Produk :", nama);
  console.log("Harga  : Rp", harga);
  console.log("Stok   :", stok, "unit");
  console.log("---");
}

tampilkanProduk("Sepatu Lari", 350000, 25);
tampilkanProduk("Kaos Polos", 85000, 100);
// Output:
// Produk : Sepatu Lari
// Harga  : Rp 350000
// Stok   : 25 unit
// ---
// Produk : Kaos Polos
// Harga  : Rp 85000
// Stok   : 100 unit
// ---



// Function Expression — fungsi disimpan dalam variabel
const hitungLuasPersegiPanjang = function (panjang, lebar) {
  return panjang * lebar;
};

console.log(hitungLuasPersegiPanjang(5, 3)); // Output: 15



// Function Expression (cara lama)
const kali = function (x, y) {
  return x * y;
};

// Arrow Function (cara modern)
const bintang = (x, y) => {
  return x * y;
};

// Arrow Function ringkas — jika hanya satu ekspresi, kurung kurawal dan return dapat dihilangkan
const start = (x, y) => x * y;

console.log(start(3, 4)); // Output: 12



// Tanpa parameter
const salam = () => "Halo!";
console.log(salam()); // Output: Halo!

// Satu parameter — tanda kurung boleh dihilangkan
const kuadrat = (n) => n * n;
console.log(kuadrat(5)); // Output: 25

// Dua parameter atau lebih — tanda kurung wajib ada
const tambah = (a, b) => a + b;
console.log(tambah(3, 7)); // Output: 10

// Lebih dari satu baris — kurung kurawal dan return diperlukan kembali
const hitungPPN = (harga) => {
  const tarif = 0.11;
  const pajak = harga * tarif;
  return harga + pajak;
};
console.log(hitungPPN(100000)); // Output: 111000



const dataPengguna = {
  nama: 'Budi Santoso',
  umur: 28,
}
console.log(dataPengguna.nama + " " + dataPengguna.umur)
console.log(dataPengguna['umur'])



const kantin = {
    teh: {
        harga: 5000,
        rasa: 'pahit',
        satuan: {
            id: 1,
            code: 'cp',
            nama: 'cup'
        }
    }
}
console.log(kantin.teh.harga);
console.log(kantin.teh.rasa);
console.log(kantin.teh.satuan.id);
console.log(kantin.teh.satuan.code);
console.log(kantin.teh.satuan.nama);
console.log


const ksatria = {
  nama: "Bima",
  nyawa: 100,

  // Sintaks method ringkas — tanpa kata kunci "function"
  serang() {
    console.log(this.nama + " menyerang!");
  },

  terkenaSerangan(damage) {
    this.nyawa -= damage;
  },
};


const produk = {
  nama: "Laptop Gaming",
  merek: "ASUS",
  harga: 15000000,
  stok: 10,
};

for (let key in produk) {
  console.log(key + ":", produk[key]);
}
// Output:
// nama: Laptop Gaming
// merek: ASUS
// harga: 15000000
// stok: 10

//console.log(Object.keys(produk));
// Output: ["nama", "merek", "harga", "stok"]

//console.log(Object.values(produk));
// Output: ["Laptop Gaming", "ASUS", 15000000, 10]

//console.log(Object.entries(produk));
// Output: [["nama", "Laptop Gaming"], ["merek", "ASUS"], ...]


const data = {
            courses: [
                {
                    id: 30,
                    name: "Advance React Application System",
                    code: "ARAS - 1",
                    price: 1000000,
                    is_free: false,
                    discount_enabled: false,
                    discount_value: 0,
                    students_count: 1,
                    status: "published",
                    target_audience: [
                        "All People",
                        "All children"
                    ],
                    learning_outcomes: [
                        "Design complex web application"
                    ],
                    benefits: [
                        {
                            name: "Lifetime access",
                            is_enabled: true
                        },
                        {
                            name: "Download material",
                            is_enabled: true
                        }
                    ],
                    course_syllabus: [
                        {
                            session_title: "New Session 1"
                        }
                    ],
                    created_at: "2026-06-11T01:45:59.763753Z",
                    updated_at: "2026-06-15T14:52:47.890961Z"
                },
            ],
            total: 1,
            page: 1,
            page_size: 10,
            total_pages: 1
        }
        console.log(data.courses[0])