 
// Menggunakan method dalam constructor-function

function Nama(first, two) {
  this.firstChild = first;
  this.secondChild = two;
  this.sayIt = function (three) {
    return `hi ${this.firstChild} and ${this.secondChild}, i'm ${three}`;
  };
}

// Pertama - tama mari kita masukin constructor-function kedalam variable object seperti biasa
const nama = new Nama("budi", "roger");

// jika kita ingin memanggil method di dalam constructor-function kita bisa menggunakan cara seperti ini
console.log(nama.sayIt("your Dad"));

{
  //contoh tak menggunakan kata kunci return
  function Nama(first, two) {
    this.firstChild = first;
    this.secondChild = two;
    this.sayIt = function (three) {
      return `hi ${this.firstChild} and ${this.secondChild}, i'm ${three}`;
    };
    this.sayHello = function (say) {
      console.log(`hi i'm ${say}`);
    };
  }

  // masukin constructor-function kedalam variable object seperti biasa
  const nama = new Nama("budi", "roger");

  // panggil method yang menggunakan console.log
  nama.sayHello("kanibal");
}
