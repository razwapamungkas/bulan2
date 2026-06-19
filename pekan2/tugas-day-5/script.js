console.log("soal no 1");
for (let number = 1; number <= 10; number++) {
    console.log(number);
}

console.log("soal no 2");
for (let number = 10; number >= 1; number--) {
    console.log(number);
}

console.log("soal no 3");
for (let number = 1; number <= 20; number++) {
    if (number % 2 === 0) {
    console.log(number);
    }
}

console.log("soal no 4");
for (let number = 1; number <= 20; number++) {
    if (number % 2 !== 0) {
    console.log(number);
    }
}

console.log("soal no 5");
for (let pengali = 1; pengali <= 10; pengali++) {
    console.log(`5 x ${pengali} = ${5 * pengali}`);
}

console.log("soal no 6");
let sum = 0;
for (let number = 1; number <= 50; number++) {
    sum += number;
}
console.log(`${sum}`);

console.log("soal no 7");
for (let number = 1; number <= 10; number++) {
    console.log(`${number} x ${number} = ${number * number}`);
}

console.log("soal no 8");
let stars = "";
for (let number = 1; number <= 10; number++) {
    stars += "*";
    console.log(stars);
}

console.log("soal no 9");
for (let number = 100; number >= 0; number--) {
    if (number % 10 === 0) {
    console.log(number);}
}

console.log("soal no 10");
for (let number = 1; number <= 15; number++) {
    if (number % 2 === 0) {
    console.log(`${number} adalah Genap`);
}  else if(number % 2 !== 0) {
    console.log(`${number} adalah ganjil`)
}
}

console.log("soal no 11");
let makanan = ["Nasi Goreng", "Sate", "Bakso", "Rendang", "Gado-Gado"];
console.log(makanan[0]);
console.log(makanan[1]);
console.log(makanan[2]);
console.log(makanan[3]);
console.log(makanan[4]);

console.log("soal no 12");
let nilai = [12, 45, 7, 23, 89, 34];
let terbesar = nilai[0];
for (let number = 1; number < nilai.length; number++) {
    if (nilai[number] > terbesar) {
        terbesar = nilai[number];
    }
}
console.log(`Angka terbesar adalah: ${terbesar}`);

console.log("soal no 13");
let skor = [55, 19, 82, 8, 43, 26];
let terkecil = skor[0];
for (let number = 1; number < skor.length; number++) {
    if (skor[number] < terkecil) {
        terkecil = skor[number];
    }
}
console.log(`Angka terkecil adalah: ${terkecil}`);

console.log("soal no 14");
let kumpulanAngka = [10, 20, 30, 40, 50];
let total = 0;
for (let number = 0; number < kumpulanAngka.length; number++) {
    total += kumpulanAngka[number];
}
let average = total / kumpulanAngka.length;
console.log(`Nilai rata-rata adalah: ${average}`);

console.log("soal no 15");
let acak = [7, 2, 9, 7, 5, 7, 1, 3, 7];
let jumlah = 0;
for (let number = 0; number < acak.length; number++) {
    if (acak[number] === 7) {
        jumlah++;
    }
}
console.log(`Angka 7 muncul sebanyak: ${jumlah}`);

console.log("soal no 16")
let huruf = ["A", "B", "C", "D", "E"];

console.log("Soal nomor 16");
let array = ["A", "B", "C", "D", "E"];
for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
}

console.log("soal no 17")
let arrayLama = [100, 200, 300, 400];
let arrayBaru = [];
for (let i = 0; i < arrayLama.length; i++) {
    arrayBaru.push(arrayLama[i]);
}
console.log(arrayBaru);

console.log("soal no 18")
let data = [4, 15, 8, 23, 2, 11, 9, 18];
for (let i = 0; i < data.length; i++) {
    if (data[i] > 10) {
        console.log(data[i]);
    }
}

console.log("soal no 19")
let harga = [10000, 25000, 50000, 12000];
for (let i = 0; i < harga.length; i++) {
    let hargaBaru = harga[i] * 1.1;
    console.log(hargaBaru);
}

console.log("soal no 20")
let buah = ["Jeruk", "Mangga", "Apel", "Pisang", "Anggur"];
for (let i = 0; i < buah.length; i++) {
    if (buah[i] === "Apel") {
        console.log("Ketemu!");
    }
}