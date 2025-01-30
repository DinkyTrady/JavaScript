// Source: https://www.youtube.com/watch?v=sM880A3lS5I

// bruh is a high order function
// it's because he need parameter of function that called a `callback`
// act are the `callback`
function bruh(a, act /* act is callback */) {
  for (let i = 0; i < a; i++) {
    act(a);
  }
}

bruh(5, console.log);

const angka = [-1, 2, 1, 3, 4, 8, 9, -5, -4, 0];

// filter method will give back new arraylist with specific condition
// like this example it give back the value of array angka higher than 3
const newAngka = angka.filter((a) => a >= 3);
// output: 3, 4, 8, 9
console.log(newAngka);

// reduce method used for doing some acumulation of all the data in array
// the default current are `0`
const newAngkaReduce = angka.reduce((acu, curr) => {
  console.log(`prev is ${acu} and current is ${curr}`);
  //
  return acu + curr;
});

// output: 17
console.log(newAngkaReduce);
