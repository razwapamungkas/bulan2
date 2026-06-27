console.log('no 1')
let angka = [10, 22, 15, 30, 42, 55, 12, 17, 8, 90, 11, 14, 20, 25, 60, 65, 70, 75, 82, 85];
let jumlah = 0;
for (let i = 0; i < angka.length; i++) {
    if (i % 2 !== 0) {
        if (angka[i] % 2 === 0) {
            jumlah += angka[i];
        }
    }
}
console.log(jumlah);


console.log('no 2')
let data = [12, 5, 18, 5, 7, 12, 20, 18, 25];
let hapu = data.slice(3);

console.log(data.slice(3))


console.log('no 3')
let dataAsli = ["A", "B", "C", "D", "E"];
let dataTerbalik = [];

for (let i = dataAsli.length - 1; i >= 0; i--) {
    dataTerbalik.push(dataAsli[i]);
}
console.log(dataTerbalik); //["E", "D", "C", "B", "A"]


console.log('no 4')
let nilai = [75, 90, 45, 88, 60, 92, 77];
let total = 0;
let hasil = 0;

for (let r = 0; r < nilai.length; r++) {    //length untuk menghitung angka
    if (nilai[r] > 70) {
        total += nilai[r];
        hasil++;
    }
}
let rata = total / hasil;
console.log(rata);


console.log('no 5')
let array = [12, 45, 7, 23, 56, 34];

let terbesar = 0;
let terbesarKedua = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] > terbesar) {
        terbesarKedua = terbesar;
        terbesar = array[i];
    } 
     else if (angka[i] > terbesarKedua) {
        terbesarKedua = array[i];
    }
}
console.log(terbesarKedua);  // 34


console.log('no 6')
let kata = ["javascript", "html", "css", "react", "nodejs"];
let hasilSaring = [];

for (let i = 0; i < kata.length; i++) {
    if (kata[i].length > 5) {
        hasilSaring.push(kata[i]);
    }
}
console.log(hasilSaring);  // ["javascript", "nodejs"]


console.log('no 7')
function jumlahkanPrima(kumpulanAngka) {
    let total = 0;

    for (let i = 0; i < kumpulanAngka.length; i++) {
        let angkaSaatIni = kumpulanAngka[i];
        
        if (angkaSaatIni > 1) {
            let apakahPrima = true;
        for (let j = 2; j < angkaSaatIni; j++) {
                if (angkaSaatIni % j === 0) {
                    apakahPrima = false;
                }
            }
            if (apakahPrima === true) {
                total = total + angkaSaatIni;
            }
        }
    }
    return total;
}

let daftarAngka = [1, 2, 3, 4, 5, 6, 7];
console.log(jumlahkanPrima(daftarAngka));   // 2 + 3 + 5 + 7 = 17


console.log('no 8')
function cariIrisan(arr1, arr2) {
    let hasilSama = [];

    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            hasilSama.push(arr1[i]);
        }
    }
    return hasilSama;
}
let arrayA = [1, 2, 3, 4];
let arrayB = [3, 4, 5, 6];
console.log(cariIrisan(arrayA, arrayB));   // [3, 4]


console.log('no 9')
function hitungKarakter(teks) {
    let catatanHuruf = {};

    for (let i = 0; i < teks.length; i++) {
        let huruf = teks[i];
        if (catatanHuruf[huruf]) {
            catatanHuruf[huruf] = catatanHuruf[huruf] + 1;
        } 
        else {
            catatanHuruf[huruf] = 1;
        }
    }
    return catatanHuruf;
}

console.log(hitungKarakter("hallo"));   // { h: 1, a: 1, l: 2, o: 1 }


console.log('no 10')
let daftar = [20, 10, 50, 30, 40];

for (let i = 0; i < daftarAngka.length; i++) {
    for (let j = 0; j < daftarAngka.length - 1; j++) {
        if (daftar[j] < daftar[j + 1]) {
            let wadahSementara = daftar[j];
            daftar[j] = daftar[j + 1];
            daftar[j + 1] = wadahSementara;
        }
    }
}
console.log(daftar);  // [50, 40, 30, 20, 10]


console.log('n0 11')
const student = {
    name: "Ahmad",
    age: 17,
    scores: [80, 75, 90, 88],
    
    hitungRataRata: function() {
        let total = 0;
        for (let i = 0; i < this.scores.length; i++) {
            total = total + this.scores[i];
        }
        
        return total / this.scores.length
    }
};
console.log(student.hitungRataRata());  // Hasil: 83.25


console.log('no 12')
const rekening = {
    saldo: 500000,
    
    melihatSaldo: function() {
        console.log("Saldo Anda saat ini: Rp" + this.saldo);
    },
    
    menabung: function(jumlah) {
        this.saldo = this.saldo + jumlah;
        console.log("Berhasil menabung: Rp" + jumlah);
    },
    
    menarikUang: function(jumlah) {
        if (this.saldo >= jumlah) {
            this.saldo = this.saldo - jumlah;
            console.log("Berhasil menarik: Rp" + jumlah);
        } else {
            console.log("Gagal! Saldo Anda tidak cukup.");
        }
    }
};
rekening.menabung(100000);   // Saldo jadi 600000
rekening.menarikUang(50000);  // Saldo jadi 550000
rekening.melihatSaldo();      // Cetak: Rp550000


console.log('no 13')
function cariJuara(daftarSiswa) {
    let nilaiTertinggi = 0;
    let namaJuara = "";

    for (let i = 0; i < daftarSiswa.length; i++) {
        if (daftarSiswa[i].score > nilaiTertinggi) {
            nilaiTertinggi = daftarSiswa[i].score;
            namaJuara = daftarSiswa[i].name;
        }
    }
    return namaJuara;
}

let dataSiswa = [
    { name: "Andi", score: 75 },
    { name: "Budi", score: 90 },
    { name: "Citra", score: 82 }
];

console.log(cariJuara(dataSiswa));  // Hasil: Budi


console.log('no 14')
const product = {
    id: 1,
    name: "Laptop",
    price: 12000000,
    stock: 5
};
let tampungArray = [];
for (let properti in product) {
    tampungArray.push([properti, product[properti]]);
}
console.log(tampungArray);


console.log('no 15')


console.log('n0 16')
function kelompokkanJurusan(daftar) {
    let hasil = {};

    for (let i = 0; i < daftar.length; i++) {
        let mhs = daftar[i];
        if (!hasil[mhs.major]) {
            hasil[mhs.major] = [];
        }
        hasil[mhs.major].push(mhs.name);
    }
    return hasil;
}

let mhs = [
 { name: "Ali", major: "TI" },
 { name: "Budi", major: "SI" },
 { name: "Citra", major: "TI" },
 { name: "Dina", major: "MI" },
 { name: "Eko", major: "TI" }
];
console.log(kelompokkanJurusan(mhs));  // Hasil: { TI: ["Ali", "Citra", "Eko"], SI: ["Budi"], MI: ["Dina"] }


console.log('no 17')
function hitungAngka(obj) {
    let total = 0;

    for (let kunci in obj) {
        if (typeof obj[kunci] === "number") {
            total = total + obj[kunci];
        } 
        else if (typeof obj[kunci] === "object") {
            total = total + hitungAngka(obj[kunci]);
        }
    }
    return total;
}
let dataSarang = { a: 10, b: { c: 20, d: { e: 30 } }, f: 5 };
console.log(hitungAngka(dataSarang));   // Hasil: 10 + 20 + 30 + 5 = 65


console.log('no 18')
let transaksi = [
 { type: "income", amount: 500000 },
 { type: "expense", amount: 200000 },
 { type: "income", amount: 300000 },
 { type: "expense", amount: 100000 }
];

let saldo = 0;

for (let i = 0; i < transaksi.length; i++) {
    if (transaksi[i].type === "income") {
        saldo = saldo + transaksi[i].amount; // Tambah saldo
    } else if (transaksi[i].type === "expense") {
        saldo = saldo - transaksi[i].amount; // Kurang saldo
    }
}
console.log(saldo);   // Hasil: 500rb - 200rb + 300rb - 100rb = 500000


console.log('n0 19')
const inventaris = {
    listBarang: [],

    menambahBarang: function(barangBaru) {
        this.listBarang.push(barangBaru);
        console.log("Barang berhasil ditambah!");
    },
    menghapusBarang: function(idBarang) {
        for (let i = 0; i < this.listBarang.length; i++) {
            if (this.listBarang[i].id === idBarang) {
                this.listBarang.splice(i, 1);
                console.log("Barang ID " + idBarang + " berhasil dihapus.");
                return;
            }
        }
    },

    mencariBarang: function(namaBarang) {
        for (let i = 0; i < this.listBarang.length; i++) {
            if (this.listBarang[i].nama === namaBarang) {
                return this.listBarang[i]; // Kembalikan data barangnya jika ketemu
            }
        }
        return "Barang tidak ditemukan";
    },

    menampilkanSeluruhBarang: function() {
        console.log("--- Daftar Seluruh Barang ---", this.listBarang);
    }
};

inventaris.menambahBarang({ id: 101, nama: "Buku", stok: 5 });
inventaris.menambahBarang({ id: 102, nama: "Pena", stok: 10 });
inventaris.menampilkanSeluruhBarang();

console.log(inventaris.mencariBarang("Buku")); // Cari buku

inventaris.menghapusBarang(101); // Hapus buku berdasarkan ID 101
inventaris.menampilkanSeluruhBarang(); // Sisa pena saja


console.log('no 20')