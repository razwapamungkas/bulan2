console.log('soal no 1')
let antrian = ["Andi", "Budi", "Citra", "Dina"];
antrian.push("Eka");
console.log(antrian);

let antrianBaru = antrian.unshift("Fajar");
console.log(antrianBaru);


console.log('soal no 2')
let barang = ["Mouse", "Keyboard", "Monitor", "Printer"];

barang.splice(2, 1, "Leptop")
console.log(barang);  //output ['Mouse', 'Keyboard', 'Leptop', 'Printer']

barang.splice(3, 0, "Scanner")
console.log(barang);  //output ['Mouse', 'Keyboard', 'Leptop', 'Scanner', 'Printer']


console.log('soal no 3')
let siswa = ["Aisyah", "Bagus", "Dewi", "Fikri", "Galih"];

let indeksDewi = siswa.indexOf("Dewi");
console.log("indeks Dewi: " + indeksDewi); // Output: 2

let indeksRahma = siswa.indexOf("Rahma");
console.log("indeks Rahma: " + indeksRahma); // Output: -1 (artinya tidak ketemu)

let adaGalih = siswa.includes("Galih");
console.log("Galih: " + adaGalih); // Output: true

let adaZidan = siswa.includes("Zidan");
console.log("Zidan : " + adaZidan); // Output: false


console.log('soal no 4')
let angka = [5, 10, 15, 20, 25, 30, 35, 40];

let angkaBaru = angka.slice(2, 6);

console.log("Array Baru: ", angkaBaru); // Output: [15, 20, 25, 30]
console.log("Array Asli tetep aman: ", angka);


console.log('soal no 5')
let pegawai = ["Anton", "Beni", "Caca", "Dedi", "Eka", "Farah"];

pegawai.splice(1, 1);  //["Anton", "Caca", "Dedi", "Eka", "Farah"]

pegawai.splice(2, 1);  //["Anton", "Caca", "Eka", "Farah"]

pegawai.splice(1, 0, "Dedi");  //["Anton", "Dedi", "Caca", "Eka", "Farah"]

pegawai.splice(4, 1, "Gilang");

console.log(pegawai); 
//["Anton", "Dedi", "Caca", "Eka", "Gilang"]


console.log('soal no 6')
let data = ["A", "B", "C", "D"];

data.shift();
data.push("E");
data.splice(1, 1);
data.unshift("Z");
data.pop();

console.log("isi akhir array: ", data);  //["Z", "B", "D"]

console.log("panjang array akhirnya: " + data.length); // 3


console.log('soal no 7')
let pengguna = ["admin", "operator", "kasir", "manager"];
let inputUsername = "kasir";

let posisiIndeks = pengguna.indexOf(inputUsername);

if (posisiIndeks !== -1) {
    console.log("User ditemukan pada indeks ke-" + posisiIndeks);
} else {
    console.log("User tidak ditemukan");
}


console.log('soal no 8')
let arr = [10, 20, 30, 40, 50, 60];

arr.pop();
arr.unshift(5);
arr.splice(3, 1, 35);

console.log(arr); //[5, 10, 20, 35, 40, 50]


console.log('soal no 9')
let kota = ["Jakarta", "Bandung", "Surabaya", "Medan", "Makassar"];

kota.splice(1, 1); 

kota.splice(2, 0, "Yogyakarta");

kota.unshift("Bali");

kota.pop();

console.log("Isi array akhir: ", kota);  // Output: ["Bali", "Jakarta", "Surabaya", "Yogyakarta", "Medan"]

console.log("Panjang array akhir: " + kota.length);  // Output: 5

console.log("Indeks Yogyakarta: " + kota.indexOf("Yogyakarta"));  // Output: 3


console.log('soal no 10')
let warna = ["merah", "biru", "hijau", "kuning", "ungu", "hitam"];

warna.pop(); 

warna.splice(0, 3, "putih", "merah", "hijau", "oranye");

console.log(warna);
// Output ["putih", "merah", "hijau", "oranye", "kuning", "ungu"]


console.log('bonus')
let dataAngka = ["A", "B", "C", "D", "E", "F", "G"];

let hurufG = dataAngka.pop(); //["A", "B", "C", "D", "E", "F"]

dataAngka.unshift(hurufG); //["G", "A", "B", "C", "D", "E", "F"]

dataAngka.splice(2, 1, "X"); //["G", "A", "X", "C", "D", "E", "F"]

dataAngka.splice(5, 1, "Y"); //["G", "A", "X", "C", "D", "Y", "F"]

console.log(dataAngka);
// Output ["G", "A", "X", "C", "D", "Y", "F"]