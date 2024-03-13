//1
// function fruit() {
//   console.log(name);
//   console.log(price);
//   var name = "apple";
//   let price = 20;
// }
// fruit();

// // output: undefined
// //         ReferenceError

// 2
// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1);
// }

// output:
// 3; due to var is global scope use let
// 3;
// 3;

// 3
// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1);
// }
// output:
// 0
// 1
// 2

//4

// console.warn(+true); 1; // + operator , type coersion
// console.warn(typeof +true); //number

//5
// console.log(!"hey") // false
// console.log(typeof !"hey"); // boolean

//6
// let data = "size";

// const bird = {
//   size: "small",
// };
// console.log(bird[data]); // small -> data takes value from let
// console.log(bird["size"]); // small ->size check inside bird object as it is string key
// console.log(bird.size); //small  -> acces indise value only
// console.log(bird.data); //undefined -> no key like data inside bird object

//7
// let c = { name: "ram" };

// let d;
// d = c;
// c.name = "hello";

// console.log(d); // d stores reftrence of c so if "c" change "d" change

//8
// var x;
// var x = 10
//     console.log(x); //10 , redeclaire many time

//9
// var x;
// let x = 10;
// console.log(x); //Identifier 'x' has already been declared , let dont allow to redeclair

//10

// let a = 3;
// let b = new Number(3);
// console.log(a == b); //true
// console.log(a === b); //false , data type of "b" is object

//11
// let name;
// mane = 10;
// console.log(name); // undefined  / /conceprt undefined is not assigne value to variable

//12

// function hey() {
//     console.log("hello")
// }

// hey.name = "kanha" //

// hey() //hello // extra property does not impact function

//13

// function sum(a, b) {
//     return a+b
// }

// sum(2,"2") //22

//14

// let n = 0;
// console.log(n++) // 0
// console.log(++n) // 2
// console.log(n)  //2

//15

// function x(...arg) {
//   console.log(typeof arg);
// }

// x(21); // object // arg is special paramter

//16
// function x() {
// "use strict"; // not allow hoisting gconcept
// age = 20;
//   console.log(age); //  age is not defined
// }
// x()

//17

// const sum = eval("10*10+5")
// console.log(sum) // 105

//18

// const s = { 1: "a", 2: "b", hello: 3 };

// console.log(s.hasOwnProperty(1)); // true
// console.log(s.hasOwnProperty("1")); // true
// console.log(s.hasOwnProperty("hello")); // true
// console.log(s.hasOwnProperty(hello)); //hello not defined

//19

// const s = { 1: "a", 2: "b", 1: 3 };

// output / / {1:3 , 2:"b"}

//20
// for (let i = 1; i < 5; i++) {
//     if (i === 3) continue;
//     console.log(i)
// }
// output:
// 1
// 2
// 4

//21
// const foo = () => console.log('First');
// const bar = () => setTimeout(() => console.log('Second'));
// const baz = () => console.log('Third');
// bar();
// foo();
// baz();

// first
// third
// second

//|
//23
// ...const person.=. { name: 'Lydia' };
// function sayHi(age) {
// return `${this.name} is ${age}`;
I;
//...console.log(sayHi.call(person, 21)); // Lydia is 21
// console.log(sayHi.bind(person, -21) ()); //function itself

//24
// function sayHi() {
//   return (() => 0)();
// }
// console.log(sayHi()); // output 0
// console.log(typeof sayHi()); // output number

//25
// function sayHi() {
//   return () => 0;
// }
// console.log(sayHi()); // output fn itself
// console.log(typeof sayHi()); // output function

//26

// console.log(typeof typeof 1); // string

//27
// const x = [1,2,3]
// x[9] = 11

// output = [1,2,3, empty*6,11]
