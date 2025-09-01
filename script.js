// Scope
// function hello() {
//   var a = 5;
//   let b = 10;

//   if (true) {
//     var c = "var inside if";
//     let d = "let inside if";
//   }
// }

// hello();

// context - this
// console.log(this);

// obj1 = {
//   age: 30,

//   method: function () {
//     return this;
//   },
// };

// obj2 = {
//   age: 20,

//   method: () => {
//     return this;
//   },
// };

// console.log(obj1.method()); // points to obj1
// console.log(obj2.method()); // points to Window

// const myFnc = function () {
//   console.log(this);
// };

// obj3 = {
//   firstName: "John",
//   method() {
//     setTimeout(
//       //   function () {
//       //   console.log(this);
//       // },
//       myFnc,
//       1000
//     );
//   },
// };
// obj3.method();

// Date
