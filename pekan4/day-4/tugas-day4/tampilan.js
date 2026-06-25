export function perbaruiTotalLayar(nilai) {
    const elemen = document.getElementById("total-harga");
    if (elemen) {
        elemen.innerText = `Rp ${nilai.toLocaleString('id-ID')}`;
    }
}