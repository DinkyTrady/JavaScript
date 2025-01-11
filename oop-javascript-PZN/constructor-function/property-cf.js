/* eslint-disable no-redeclare */
// Cara membuat property di constructor-function sangatlah mudah kita bisa menggunakan kata kunci (this)
// Contoh :
function Nama() {
  this.firstName = "Budi";
  this.middleName = "Roger";
}

// buat object dengan isi constructor-function yang telah kita buat
const name = new Nama();

// panggil dengan console.log
console.log(name);

//menggunakan property dengan parameter
function Name(first, mid) {
  this.firstName = first;
  this.middleName = mid;
}

//Masukan parameter disaat memasukan constructor-function kedalam sebuah object
const nama = new Name("Budi", "Saputro");

//Panggil objectnya
console.log(nama);
