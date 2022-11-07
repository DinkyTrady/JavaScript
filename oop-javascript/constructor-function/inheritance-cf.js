// Pertama - tama mari kita buat constructor-function yang ingin di wariskan
function Boss(first) {
  this.name = first
  this.sayMe = function (nama) {
    console.log(`hello ${this.name} i'm your boss ~~${nama}`)
  }
}

// nah cara untuk mewarisi constructor-function ialah dengan menambahkan nama constructor-function yang akan diwarisi dengan .call(this, /*nama parameter yang ada di function yang akan diwarisi !jangan lupa masukin paremeter yang ada di function sebelumnya kedalam function yang telah diwarisi*/) contoh : 

function Officer(first, last) {
  Boss.call(this, first)
  this.gaji = last
}



// kita panggil semua constructor-function tadi
const boss = new Boss('pekerja');
const office = new Officer('pekerja', 100);

// kita console.log
console.log(boss)
boss.sayMe('Budi')
console.log(office)
office.sayMe('Kanto')
