console.log("soal no 1")
let number = 75     // buat deklarasi
let string = "75"
let boolean = true   
console.log(typeof number)    //untuk menampilkan variabel
console.log(typeof string)
console.log(typeof boolean)

console.log("soal no 2")
let a = 10;
let b = "5";
console.log(a + b); //Output: 105
// Karena b adalah string, JavaScript mengubah a menjadi string "10" lalu menggabungkannya dengan "5".

console.log("soal no 3");
let x = 10;
let y = 5;
let z = 2;
console.log(x * y + z - x / y % z) // Output: 52

console.log("soal no 4")
let x1 = 8;
x1 += 4;
x1 *= 2;
x1 -= 6;
console.log(x1) // Output: 18

console.log("soal no 5")
let numberr =53;
if(numberr % 2 === 0) {
    if(number >0) {
        console.log('genap positif');
    } else if (numberr < 0) {
        console.log('genap negatif');
    } else {
        console.log('nol adalah netral(genap)');
    }
} else {
    if (numberr >0) {
        console.log('ganjil positif');
    } else if (numberr <0) {
        console.log('hanjil negatif');
    } else {
        console.log('nol adalah netral(genap)');
    }
}

console.log("soal no 6")
let nilai = 130;
let kategori;
if (nilai >= 90) {
    kategori = 'A';
} else if (nilai >= 80) {
    kategori = 'B';
} else if (nilai >= 70) {
    kategori = 'C';
} else if (nilai >= 50) {
    kategori = 'D';
} else {
    kategori = 'E';
}
console.log(`Nilai: ${nilai} -> kategori: ${kategori}`);

console.log("soal no 7")
let number1 = 45;
let number2 = 82;
let number3 = 51;

let terbesar ;

if (number1 >= number2 && number1 >= number3) {
    terbesar = number1;    //menampilkan angka yg paling besar
} else if(number2 >= number1 && number2 >= number3) {
    terbesar = number2
} else {
    terbesar = number3
}
console.log(terbesar)

console.log("soal no 8")
let e = 5;
let f = 10;
let g = (e > 3 && f < 15) || e === 8;    //tidak ada operasi matematika adanya oprasi logoka
console.log(g);                          //knp jawabanny true bkn hasil?, karna dia oprator perbansingan bukan logoka

console.log("soal no 9")
let tahun = 2026;
if ((tahun % 400 === 0) || (tahun % 4 === 0 && tahun % 100 !== 0)) {  
    console.log(`tahun ${tahun} adalah tahun Kabisat`);
} else {
    console.log(`tahun ${tahun} bukan tahun kabisat`);
}

console.log("soal no 10")
for (let number = 1; number <= 50; number++) {
    if (number % 3 === 0 && number % 5 === 0) {
        console.log("FizzBuzz");
    } else if (number % 3 === 0) {
        console.log("Fizz");
    } else if (number % 5 === 0) {
        console.log("Buzz");
    } else{
        console.log(number)
    }
}

console.log("soal no 11")
let h = 4;
let i = h++ + ++h;
console.log(i); //Output: 10
//h++ artinya: "Pakai nilainya sekarang dulu, baru setelah baris ini selesai, angkanya ditambah 1." pos ingkremen
//++h artinya: "Tambahkan angkanya 1 sekarang juga, baru pakai nilai barunya." pre ingkremen
//Maka perhitungannya: 4 + 6 = 10.

console.log("soal no 12")
let hasil = 0;
for (let number = 1; number <= 100; number++) {
    if (number % 2 !== 0) {
        hasil += number;
    }
}
console.log("hasil bilangan ganjil adalah:" , hasil);

console.log("soal no 13")
let stars ="";
for (let number = 1; number <= 5; number++) {
    stars +="*";
    console.log(stars)
}

console.log("soal no 14")
let angka = [12, 5, 18, 7, 21, 30, 2];
let jumlah = 0;

for (let r = 0; r < angka.length; r++) {    //length untuk menghitung angka
    if (angka[r] > 10) {
        jumlah += angka[r]; // Jumlahkan jika angka di dalam array lebih besar dari 10
    }
}
console.log("jumlahnya adalah: " + jumlah); // Output: 81

console.log("soal no 15")
for (let i = 2; i <= 100; i++) {
    let prima = true;
    
for (let j = 2; j < i; j++) {
    if (i % j === 0) {
    prima = false;
    break;
}
    }
    if (prima) {
        console.log(i);
    }
}
//bilangan prima hanya bisa di bagi dengan angka 1 dan angka itu sendiri

console.log("soal no 16")
let l = 2;
let m = 3;
let n = 4;
if (l < m) {     //if (l < m) (2 < 3) bernilai Benar (true), program masuk ke dalam blok IF pertama.
 if (m > n) {     //if (m > n) (3 > 4) bernilai Salah (false).
 console.log("L");
 } else {
 console.log("M");
 }
} else {
 console.log("N");
}
//Output: M
//Karena salah, program langsung melompat ke bagian else di dalam blok tersebut, yaitu mencetak "M".

console.log("soal no 17")
let inputUser = "razwa";
let inputPass = "12345";

let userBenar = "razwa";
let passBenar = "12345";

if (inputUser === userBenar && inputPass === passBenar) {
    console.log("login berhasil, selamat datang.");
} else if (inputUser !== userBenar && inputPass === passBenar) {
    console.log("login gagal, username salah");
} else if (inputUser === userBenar && inputPass !== passBenar) {
    console.log("login gagal, password salah");
} else {
    console.log("login gagal, username dan password salah");
}

console.log("soal no 18")
let bulan = 2; // Contoh Februari
let tahunSekarang = 2026; 

switch (bulan) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        console.log("31 Hari");
        break;
    case 4: case 6: case 9: case 11:
        console.log("30 Hari");
        break;
    case 2:
        // Cek khusus bulan Februari apakah kabisat atau tidak
        if ((tahunSekarang % 4 === 0 && tahunSekarang % 100 !== 0) || tahunSekarang % 400 === 0) {
            console.log("29 Hari");
        } else {
            console.log("28 Hari"); // Tahun 2026 bukan kabisat, jadi 28 hari
        }
        break;
    default:
        console.log("Bulan tidak valid!");
}

console.log("soal no 19")
for (let i = 1; i <= 64; i *= 2) {
    console.log(i); // Setiap perulangan, nilai i dikalikan 2
}

console.log("soal no 20")
let total = 0;
for (let i = 1; i <= 10; i++) {
 if (i % 2 === 0) {
 total += i;
 } else {
 total -= i;
 }
}
console.log(total); //Output: 5
// -1+2-3+4-5+6-7+8-9+10 