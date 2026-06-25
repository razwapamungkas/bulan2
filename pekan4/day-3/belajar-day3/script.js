// const judulUtama = document.getElementById("judul-utama");
// console.log(judulUtama);

// const status = document.querySelector("#status");

// // textContent — hanya mengubah teks biasa
// // Tag HTML yang disisipkan akan ditampilkan sebagai teks literal, bukan dirender
// status.textContent = "Kamu sudah logout.";

// // innerHTML — mengubah teks sekaligus merender tag HTML di dalamnya
// status.innerHTML = "Status: <strong>Aktif</strong>";

const halaman = document.querySelector("#halaman");
const tobol = document.querySelector("#tombol-tema");

function gantiTema() {
  halaman.classList.toggle("gelap");
  const tema = halaman.classList.contains("gelap") ? "gelap" : "terang";
  tombol.textContent = "tema: " + tema;
}

function tambahItem() {
  const list = document.querySelector("ol");
  const itemBaru = document.createElement("li");

  itemBaru.textContent = "item baru";
  list.appendChild(itemBaru);
}

function hapusItem() {
  const list = document.querySelector("ol");
  const lastItem = list.lastElementChild;
  if (lastItem) {
    list.removeChild(lastItem);
  }
}




const kolomPencarian = document.querySelector("#kolom-pencarian");
const body = document.querySelector('body');

body.addEventListener("keydown", (e) => {
  // Jalankan pencarian saat tombol Enter ditekan
  if (e.key === "Enter") {
    kolomPencarian.focus();
  }
});



const kolomNama = document.querySelector("#kolom-nama");
const pratinjau = document.querySelector("#pratinjau");

kolomNama.addEventListener("input", (e) => {
  pratinjau.textContent = "Halo, " + e.target.value + "!";
});




const form = document.querySelector("#form-daftar");
const pesan = document.querySelector("#pesan-status");
const inputSandi = document.querySelector("#sandi");

// Validasi real-time — tampilkan peringatan jika kata sandi terlalu pendek
inputSandi.addEventListener("input", (e) => {
  if (e.target.value.length < 8) {
    inputSandi.style.borderColor = "red";
    pesan.textContent = "Kata sandi minimal 8 karakter.";
    pesan.style.color = "red";
  } else {
    inputSandi.style.borderColor = "green";
    pesan.textContent = "";
  }
});

// Proses pengiriman formulir tanpa reload halaman
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nama = document.querySelector("#nama").value.trim();
  const email = document.querySelector("#email").value.trim();
  const sandi = document.querySelector("#sandi").value;

  if (!nama || !email || !sandi) {
    pesan.textContent = "Semua kolom wajib diisi.";
    pesan.style.color = "red";
    return;
  }

  if (sandi.length < 8) {
    pesan.textContent = "Kata sandi terlalu pendek.";
    pesan.style.color = "red";
    return;
  }

  pesan.textContent = "Pendaftaran berhasil! Selamat datang, " + nama + ".";
  pesan.style.color = "green";
  form.reset();
});