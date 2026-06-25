import { hitungTotal } from './kalkulasi.js';
import { perbaruiTotalLayar } from './tampilan.js';
import { cekValidAngka } from './validasi.js';

// Simulasi data input kasir
const hargaBarang = 50000;  // Rp 50.000
const jumlahBeli = 3;       // 3 buah
const diskonPersen = 10;    // Diskon 10%

// Alur logika kasir
if (cekValidAngka(hargaBarang) && cekValidAngka(jumlahBeli)) {
    // 1. Hitung totalnya menggunakan modul kalkulasi
    const hasilAkhir = hitungTotal(hargaBarang, jumlahBeli, diskonPersen);
    
    // 2. Tampilkan ke layar menggunakan modul tampilan
    perbaruiTotalLayar(hasilAkhir); 
    
    console.log("Transaksi Berhasil!");
} else {
    console.log("Input tidak valid!");
}