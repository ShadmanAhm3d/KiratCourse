//str lenght
/* function getL(str) {
  console.log("orignal str", str);

  console.log("string lengt = ", str.length);
}
getL("Shadman");
*/
//findindexof
// indexOf , lastIndexOf;

/* function findidx(str) {
  console.log("orignal str", str);
  let res = str.lastIndexOf("d");
  return res + 1;
}

console.log(findidx("shadmadn")); */

//Slice (does not include nth index)
/* function slicee(str) {
  console.log("orignal str", str);
  console.log("after slice", str.slice(0, 5));
}

slicee("Shadman"); */

//Splits the words into an array
/* const val = "hi my name is shad";
const words = val.split(" ");//" " is a delimeter 
console.log(words); */

//

//Parse : Parse from one datatype to another data type

/* const res = parseInt("9999");
console.log(res);
console.log(typeof res); */

//Arrays
//shift:-> removes the first element from the array
//unshift :-> adds element in the front of the array

/* const arr = [1, 2, 3, 4];
const arr2 = [4, 5, 6, 6];
// arr.unshift(0);
// console.log(arr);
const finalarray = arr.concat(arr2);
console.log(finalarray); */

//Class

/* class Person {
  constructor(namwa, school, gender) {
    this.name = namwa;
    this.school = school;
    this.gender = gender;
  }

  namwa() {
    console.log("tumhara naam ", this.name);
  }
}

let Shadman = new Person("Shadman", "Kiet", "Male");
let aman = new Person("aman", "Kiet", "Male");
Shadman.namwa();
aman.namwa(); */

//Callbacks

// Calling a fucntion insides the params of another function is called Callbacks function

/* function square(n) {
  return n * n;
}

function cube(n) {
  return n * n * n;
}

function calc(a, b, fn) {
  const v1 = fn(a);
  const v2 = fn(b);

  return v1 + v2;
}

const res = calc(3, 3, square);
console.log(res); */

// Synchronous and Asyncronous

/* function findsum(a) {
  let ans = 0;
  for (let index = 0; index < a; index++) {
    ans = ans + index;
  }

  console.log(ans);
}

function finDSum1000() {
  return findsum(1000);
}
//this is async fucntion
setTimeout(finDSum1000, 2000);
console.log("Program has ended"); */
/* const fs = require("node:fs");
fs.readFile("./pew.txt", "utf8", function (err, data) {
  console.log(data);
});

console.log("Ending"); */

//call backs only makes sense in async functions

//Promises : Promises are synctactical sugarCoat that makes your code slightly more readable

//The reason to introduce Promises are just to get rid of call backs

//basic

/* const fs = require("fs");

function reader() {
  return new Promise(function (resolve) {
    fs.readFile("./pew.txt", "utf8", (err, data) => {
      resolve(data);
    });
  });
}

function printer(data) {
  console.log(data);
}

function printer1(data) {
  console.log("Konichiwwa mf ");
  console.log(data);
}
reader().then(printer);
reader().then(printer1); */

/* const fs = require("fs");

fs.readFile("./pew.txt", "utf8", function (err, data) {
  printer(data);
});

function printer(data) {
  console.log(data);
}
function printer2(data) {
  console.log(data);
} */

// way to initalize promise

//Promise takes an callback as param during initialization and this is a must do process , promises alaways takes an callback

/* let x = new Promise((resolve) => {
  resolve("TER");
});

function p() {
  let a = 0;
  for (let i = 0; i < 100000000; i++) {
    a++;
  }
  console.log(a);
}

//jab promise aajaye to uspe ye p wala function chala dena aur bina kuch soche aage badh jana

x.then(p);

console.log("This is a test");
console.log(x); */

/* let d = new Promise((resolve) => {
  resolve("Foo");
});

function callback() {
  console.log(d);
}

console.log(d);
d.then(callback); */
//NOTE: Promises are just classes that makes callbancks and async functions slightly more readaable

//NOTE: Async Await - still just synctactical sugar that uses promises under the hood
// It utilizes Promises and make the code more readable and clearner

// function TMK() {
//   let x = new Promise((resolve) => {
//     //do some operations and that takes some time
//     setTimeout(() => {
//       resolve("hi from promise");
//     }, 2000);
//   });
//
//   return x;
// }
//
// async function main() {
//   /* TMK().then((val) => {
//     console.log(val);
//   }); */
//   let v = await TMK();
//   console.log(v);
// }
//
// main();
// console.log("Hello i am under the water");

//NOTE:************************PROMISES HITESH ******************************

/* const res = new Promise((resolve, reject) => {
  //db calls , fetch , kuch be time consuming task hi hota hai yaha
  setTimeout(() => {
    console.log("setTimeout ke andar hu");
    resolve();
  }, 2000);
});

res.then(() => {
  console.log("Hello i am under the water");
}); */

//Syntax 2
/* new Promise((res, rej) => {
  setTimeout(() => {
    console.log("setTimeout ke andar hu");
    res();
  }, 4000);
}).then(() => {
  console.log("Hello i am under the water 2");
}); */

//syntax3

/* const promiseThree = new Promise((res, rej) => {
  setTimeout(() => {
    res({
      username: "Shaktiman",
      email: "emailhiab",
      age: 2,
    });
  }, 1000);
}); */

/* promiseThree.then((shaktimann) => {
  console.log(shaktimann);
  console.log(shaktimann.age);
}); */

//Perfect Preffered Syntax 4
/* const promiseFour = new Promise((res, reject) => {
  setTimeout(() => {
    let err = false;
    if (!err) {
      res({
        username: "Batman",
        email: "IamBatman",
        age: 9,
      });
    } else {
      reject("error : Something went wrong");
    }
  }, 2000);
}); */

/* promiseFour
  .then((batman) => {
    return batman.age;
  })
  .then((age) => {
    console.log("the age of batman is" + age);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => console.log("The Promise has finished executing")); */

//This is Syntax5;
/* const promiseFive = new Promise((res, rej) => {
  setTimeout(() => {
    let err = false;
    if (!err) {
      res({
        username: "Spiderman",
        email: "MainMakdihun",
        age: 17,
      });
    } else {
      reject("error : Spiderman went wrong");
    }
  }, 6000);
});

async function consumePromiseFive() {
  try {
    const res = await promiseFive;
    console.log(res);
  } catch (err) {
    console.log("ERROR J");
  }
}

consumePromiseFive(); */

/* async function getThemusers() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log("Error : ", e);
  }
}

getThemusers(); */

/* fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    return res.json();
  })
  .then((d) => {
    console.log(d);
  })
  .catch((e) => {
    console.log("error hai bhaiya ", e);
  }); */

//NOTE: //FETCH  : This shit can go very deep read about it

//NOTE : FILTER, MAP , REDUCE

/* const arr = ["shadman", "Ahmed", "is", "in", "kiet"];

arr.forEach((val) => {
  console.log(val);
}); */

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Filter ;
// FIlter values return karta hai, retruns an array normally

const arr2 = arr.filter((numb) => {
  return numb > 5;
});

console.log(arr2);
