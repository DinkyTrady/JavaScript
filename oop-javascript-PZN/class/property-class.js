// property didalam class sama saja dengan property di dalam constructor function, sama - sama mengggunakan kata kunci {this}

class Nama {
  constructor(args) {
    this.first = args;
  }
}

const nama = new Nama("Hello");

console.log(nama);
