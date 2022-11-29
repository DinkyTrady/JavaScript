class Name {
  say() {
    console.log("hallo");
  }
}

class Bos extends Name {
  say() {
    super.say();
    console.log("holla");
  }
}

const nama = new Name();
const bos = new Bos();

nama.say();

bos.say();
