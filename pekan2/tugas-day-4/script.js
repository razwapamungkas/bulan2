console.log('nomer 1')
let angka = -7;
if (angka > 0) {
    console.log('positif');
} else if (angka < 0) {
    console.log('negatif');
} else {
    console.log('nol');
}


console.log('nomer 2')
let i = 27
if (i % 2 === 0) {
    console.log('genap')
    }
    else {
    console.log('ganjil')
    }


console.log('nomer 3')
let nilai = 70;
let diterima;
if (nilai >= 75) {
    diterima = 'selamat anda lulus';
} else if (nilai <= 74) {
    diterima = 'maaf anda tidak lulus';
}
console.log(diterima);


console.log('nomer 4')
let umur = 17
let syarat;
if (umur >= 17) {
    syarat = 'umur anda memenuhu syarat untuk membuat SIM';
} else if (umur <= 17) {
    syarat = 'umur anda tidak memenuhi syarat untuk mebuat SIM';
}
console.log(syarat)


console.log('nomer 5')
let number1 = 92;
let number2 = 51;
let terbesar ;

if (number1 >= number2) {
    terbesar = number1;    //menampilkan angka yg paling besar
} else if(number2 >= number1) {
    terbesar = number2
}
console.log(terbesar)


console.log('nomer 6')
let angka1 = 47;
let angka2 = 70;
let angka3 = 101;

let palingBesar ;

if (angka1 >= angka2 && angka1 >= angka3) {
    palingBesar = angka1;    //menampilkan angka yg paling besar
} else if(angka2 >= angka1 && angka2 >= angka3) {
    palingBesar = angka2
} else {
    palingBesar = angka3
}
console.log(palingBesar)


console.log('nomer 7')
let usia = 23;
let kategori;
if (usia >= 60) {
    kategori = 'Lansia';
} else if (usia >= 26) {
    kategori = 'Dewasa';
} else if (usia >= 12) {
    kategori = 'Remaja';
} else if (usia >= 5) {
    kategori = 'Anak-anak';
}
console.log(`usia ${usia} tahun maksuk kategori ${kategori}`);


console.log('nomer 8')
let num1 = 12;
let operator = "*"; // bisa diisi: +, -, *, /, %
let num2 = 5;

switch (operator) {
    case "+":
        console.log("Hasil: " + (num1 + num2));
        break;
    case "-":
        console.log("Hasil: " + (num1 - num2));
        break;
    case "*":
        console.log("Hasil: " + (num1 * num2));
        break;
    case "/":
        console.log("Hasil: " + (num1 / num2));
        break;
    case "%":
        console.log("Hasil: " + (num1 % num2));
        break;
    default:
        console.log("Operator matematika tidak dikenal!");
}


console.log('nomer 9')
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


console.log('nomer 10')
let regUser = "razwaganteng";
let regPass = "12345678";
let regEmail = "123@mail.com";

if (regUser === "") {
    console.log("Registrasi Gagal: Username tidak boleh kosong!");
} else if (regPass.length < 8) {
    console.log("Registrasi Gagal: Password harus minimal 8 karakter!");
} else if (!regEmail.includes("@")) {
    console.log("Registrasi Gagal: Format email salah (harus ada '@')!");
} else {
    console.log("Registrasi Berhasil! Akun Anda telah terdaftar.");
}