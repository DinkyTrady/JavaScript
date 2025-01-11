class Name {
  constructor(nama) {
    this.nama = nama;
  }
}

const nama = new Name("Ghost");

console.log(nama);

class Other extends Name {
  // untuk memanggunakan kata kunci super kita perlu menyamakan parameter
  // yang ada di class yang kita extends jadi kita tak perlu lagi menggunakan
  // kata kunci this di dalam constructor dikarenakan parents dari class ini sudah ada deklarasi this
  constructor(nama, age) {
    super(nama);
    this.age = age;
  }
}

const other = new Other("Animals", 15);

console.log(other);
