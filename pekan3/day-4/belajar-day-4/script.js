// Tanpa Array — tidak praktis
let siswa1 = "Budi";
let siswa2 = "Asep";
let siswa3 = "Joko";
// ... hingga siswa50

// Dengan Array — ringkas dan mudah dikelola
let siswa = ["Budi", "Asep", "Joko", "Dewi", "Rina"];
for (let i = 0; i < siswa.length; i++) {
    if (i === 3) {
        siswa[i] = `razwa`;
    }
     console.log((i + 1) + ', ' + siswa [i])
}

let namaBulan = ["Januari", "Februari", "Maret"];

namaBulan.push("April");
console.log(namaBulan);
// Output: ["Januari", "Februari", "Maret", "April"]

// push() juga mengembalikan panjang array setelah penambahan
let panjangBaru = namaBulan.push("Mei");
console.log(panjangBaru); // Output: 5

let namaBln = ["Februari", "Maret"];

namaBln.unshift("Januari");
console.log(namaBln);
// Output: ["Januari", "Februari", "Maret"]

let daftarObat = ["Paracetamol", "Amoxicillin", "Vitamin C"];

let dihapus = daftarObat.pop();
console.log(dihapus); // Output: "Vitamin C"
console.log(daftarObat); // Output: ["Paracetamol", "Amoxicillin"]

let antrian = ["Budi", "Ani", "Citra"];

let dilayani = antrian.shift();
console.log(dilayani); // Output: "Budi"
console.log(antrian); // Output: ["Ani", "Citra"]



const warna = ["merah", "hijau", "biru", "hijau"];

console.log(warna.indexOf("biru")); // Output: 2
console.log(warna.indexOf("hijau")); // Output: 1 — hanya indeks pertama
console.log(warna.indexOf("kuning")); // Output: -1 — tidak ditemukan

const izinAkses = ["admin", "editor", "viewer"];

console.log(izinAkses.includes("admin")); // Output: true
console.log(izinAkses.includes("superuser")); // Output: false

// Penggunaan praktis dalam kondisi if
const rolePengguna = "editor";
if (izinAkses.includes(rolePengguna)) {
  console.log("Akses diberikan.");
} else {
  console.log("Akses ditolak.");
}
// Output: Akses diberikan.


let kota = ["Jakarta", "Bandung", "Surabaya", "Medan"];

// Menghapus 1 elemen mulai dari indeks 1
let hapus = kota.splice(1, 1);
console.log(hapus); // Output: ["Bandung"]
console.log(kota); // Output: ["Jakarta", "Surabaya", "Medan"]

// Menyisipkan elemen di posisi tertentu tanpa menghapus
kota.splice(1, 0, "Yogyakarta");
console.log(kota); // Output: ["Jakarta", "Yogyakarta", "Surabaya", "Medan"]

// Mengganti elemen
kota.splice(2, 1, "Semarang");
console.log(kota); // Output: ["Jakarta", "Yogyakarta", "Semarang", "Medan"]



const angka = [10, 20, 30, 40, 50];

console.log(angka.slice(1, 4)); // Output: [20, 30, 40] — indeks 1 sampai sebelum 4
console.log(angka.slice(2)); // Output: [30, 40, 50] — dari indeks 2 hingga akhir
console.log(angka.slice(-2)); // Output: [40, 50] — dua elemen terakhir
console.log(angka); // Output: [10, 20, 30, 40, 50] — array asli tidak berubah


// Method	Fungsi	Mengubah Array Asli?
// .length	Mengembalikan jumlah elemen	Tidak (properti)
// .push(nilai)	Menambahkan elemen di akhir	Ya
// .unshift(nilai)	Menambahkan elemen di awal	Ya
// .pop()	Menghapus dan mengembalikan elemen terakhir	Ya
// .shift()	Menghapus dan mengembalikan elemen pertama	Ya
// .indexOf(nilai)	Mencari indeks elemen pertama yang cocok	Tidak
// .includes(nilai)	Memeriksa apakah elemen ada dalam array	Tidak
// .splice(i, n)	Menghapus, menyisipkan, atau mengganti elemen 	Ya
// .slice(i, j)	Mengembalikan salinan sebagian array	Tidak 




let baris = 5;

for(let i = 1; i <= baris; i++) {
    let kolom = ' ';

    for (let j = 1; j <= baris - i; j++) {
        kolom += ' '
    }

    for (let k = 1; k <= (2 * i - 1); k++) {
        kolom = '*'
    }
    console.log(kolom);
}