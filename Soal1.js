const readline = require('readline-sync');

function kategoriUsia(usia) {
  if (usia >= 0 && usia <= 12) return "Anak-anak";
  else if (usia >= 13 && usia <= 17) return "Remaja";
  else if (usia >= 18 && usia <= 59) return "Dewasa";
  else if (usia >= 60) return "Lansia";
  else return "Usia tidak valid";
}

let jumlahKategori = {
  "Anak-anak": 0,
  "Remaja": 0,
  "Dewasa": 0,
  "Lansia": 0
};

let jumlahData = parseInt(readline.question("Masukkan jumlah orang yang ingin diklasifikasikan: "));

for (let i = 0; i < jumlahData; i++) {
  let usia = parseInt(readline.question(`Masukkan usia orang ke-${i + 1}: `));
  let kategori = kategoriUsia(usia);
  
  if (jumlahKategori[kategori] !== undefined) {
    jumlahKategori[kategori]++;
  } else {
    console.log(`Usia ${usia} tidak valid.`);
  }
}

console.log("\nHasil Klasifikasi Usia:");
for (let kategori in jumlahKategori) {
  console.log(`${kategori}: ${jumlahKategori[kategori]} orang`);
}
