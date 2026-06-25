const formSiswa = document.getElementById("formSiswa");
const inputNama = document.getElementById("nama");
const inputUmur = document.getElementById("umur");
const inputKelas = document.getElementById("kelas");
const tabelSiswa = document.getElementById("tabelSiswa");
const totalSiswa = document.getElementById("totalSiswa");
const tombolSimpan = document.getElementById("tombolSimpan");

let barisDiedit = null;

function hitungSiswa() {
  totalSiswa.innerText = tabelSiswa.rows.length;
}

formSiswa.addEventListener("submit", function (event) {
  event.preventDefault();

  if (barisDiedit !== null) {
    barisDiedit.cells[0].innerText = inputNama.value;
    barisDiedit.cells[1].innerText = inputUmur.value;
    barisDiedit.cells[2].innerText = inputKelas.value;

    tombolSimpan.innerText = "Tambah";
    barisDiedit = null;
  } else {
    const barisBaru = document.createElement("tr");

    barisBaru.innerHTML = `
            <td>${inputNama.value}</td>
            <td>${inputUmur.value}</td>
            <td>${inputKelas.value}</td>
            <td>
                <button class="btn-edit">Edit</button>
                <button class="btn-hapus">Hapus</button>
            </td>
        `;

    barisBaru
      .querySelector(".btn-hapus")
      .addEventListener("click", function () {
        barisBaru.remove();
        hitungSiswa();
      });

    barisBaru.querySelector(".btn-edit").addEventListener("click", function () {
      inputNama.value = barisBaru.cells[0].innerText;
      inputUmur.value = barisBaru.cells[1].innerText;
      inputKelas.value = barisBaru.cells[2].innerText;

      tombolSimpan.innerText = "Simpan";
      barisDiedit = barisBaru;
    });

    tabelSiswa.appendChild(barisBaru);
  }

  formSiswa.reset();

  hitungSiswa();
});
