export function hitungTotal(harga, jumlah, diskon = 0) {
    const totalKotor = harga * jumlah;
    const potongan = totalKotor * (diskon / 100);
    return totalKotor - potongan;
}