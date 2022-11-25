// pertama - tama mari buat class yang akan menjadi pewarisnya
class Teacher {
  sayHello(hi) {
    console.log(`hello ${hi}, i'm ${this.name}`);
  }
}

const nama = new Teacher();
nama.name = "Farhan a Teacher in this schools";

nama.sayHello("Sigit");

// jadi yang diperlukan untuk melakukan inheritance kita hanya perlu menambahlan kata kunci extends diikuti oleh nama class yang akan di wariskan
class Student extends Teacher {
  // sayHello(hi) {
  //   console.log(`hello ${hi}, i'm ${this}`);
  // }
}

const student = new Student();
student.name = "Reza a student in this schools too";

// meskipun kita sebelumnya tak mengisikan method tapi kita telah menambahkan method di dalam class yang diwariskan
student.sayHello("Icikiwir");
