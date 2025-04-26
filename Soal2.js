const readline = require('readline-sync');

function tambah(a, b) {
  return a + b;
}

function kurang(a, b) {
  return a - b;
}

function kali(a, b) {
  return a * b;
}

function bagi(a, b) {
  return b !== 0 ? a / b : "Tidak bisa dibagi dengan nol";
}

console.log("Pilih operasi:");
console.log("1. Tambah");
console.log("2. Kurang");
console.log("3. Kali");
console.log("4. Bagi");

let operasi = parseInt(readline.question("Masukkan pilihan (1-4): "));
let angka1 = parseFloat(readline.question("Masukkan angka pertama: "));
let angka2 = parseFloat(readline.question("Masukkan angka kedua: "));
let hasil;

switch (operasi) {
  case 1:
    hasil = tambah(angka1, angka2);
    break;
  case 2:
    hasil = kurang(angka1, angka2);
    break;
  case 3:
    hasil = kali(angka1, angka2);
    break;
  case 4:
    hasil = bagi(angka1, angka2);
    break;
  default:
    hasil = "Operasi tidak valid";
}

console.log("Hasil:", hasil);
