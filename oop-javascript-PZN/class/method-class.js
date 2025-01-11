// method di dalam class sangat berbeda dari method di dalam constructor funtion, di class kita tidak perlu menggunakan kata kunci this dan function

class Nama {
  constructor(arg) {
    this.first = arg;
  }
  // disini kita tak menggunakan kata kunci this dan function karena method di dalam class lebih baik ditambahkan kedalam instance object
  say() {
    console.log("Hallo", this.first);
  }
}

const nama = new Nama("Man");

console.log(nama);

// memanggil methodnya
nama.say();
