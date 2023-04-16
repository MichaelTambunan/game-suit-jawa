var mulai = document.getElementById("mulai");
var permainan = document.getElementById("permainan");
var gajah = document.getElementById("gajah");
var semut = document.getElementById("semut");
var orang = document.getElementById("orang");
var hasil = document.getElementById("hasil");
var ulang = document.getElementById("ulang");

// sembunyikan elemen permainan dan hasil di awal
permainan.style.display = "none";
hasil.style.display = "none";

// fungsi untuk menentukan pilihan komputer
function pilihanKomputer() {
	var comp = Math.random();
	if (comp < 0.34) {
		return "gajah";
	} else if (comp >= 0.34 && comp < 0.67) {
		return "orang";
	} else {
		return "semut";
	}
}

// fungsi untuk menentukan hasil permainan
function hasilPermainan(pilihan) {
	var pilihanKom = pilihanKomputer();
	var hasilPer = "";
	if (pilihan == pilihanKom) {
		hasilPer = "Seri";
	} else if (pilihan == "gajah") {
		hasilPer = pilihanKom == "semut" ? "Kalah" : "Menang";
	} else if (pilihan == "semut") {
		hasilPer = pilihanKom == "orang" ? "Kalah" : "Menang";
	} else if (pilihan == "orang") {
		hasilPer = pilihanKom == "gajah" ? "Kalah" : "Menang";
	}
	hasil.innerHTML = "Kamu memilih " + pilihan + ", komputer memilih " + pilihanKom + ". Hasil: " + hasilPer;
	hasil.style.display = "block";
}

// ketika tombol mulai diklik, tampilkan permainan
mulai.onclick = function () {
	mulai.style.display = "none";
	permainan.style.display = "block";
};

// ketika salah satu pilihan dipilih, tentukan hasil permainan
gajah.onclick = function () {
	hasilPermainan("gajah");
};
semut.onclick = function () {
	hasilPermainan("semut");
};
orang.onclick = function () {
	hasilPermainan("orang");
};

// ketika tombol ulang diklik, reset permainan
ulang.onclick = function () {
	hasil.style.display = "none";
	permainan.style.display = "block";
};

var resetBtn = document.getElementById("resetBtn");

resetBtn.addEventListener("click", function () {
	location.reload();
});
