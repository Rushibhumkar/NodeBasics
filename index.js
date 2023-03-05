// type in terminal node and type any input like console.log("Hello")

// console.log("Hello Everyone2");
// console.warn("Hello Everyone");
// command for run in terminal is : node .\App.js

// loops executing in node js are : for, while ,if else
// also var ,const ,let .... are also execute

// import data from other files in node json
// const app = require("./App");
// console.log(app.x, app.y, app.name);
// console.log(app);
// console.log(app.z());

// const arr = [4, 3, 7, 1, 2, 5, 8, 4, 6, 2, 3, 6];
// console.warn(arr[4]);
// const result = arr.filter((item) => {
//   console.log(item);
//   //   return item === 3;
// });
// console.warn(result);

// create file using fs
// const fs = require("fs");
// fs.writeFileSync("hello2.txt", "Hello Rushikesh Bhumkar");

// directory name , file name print
// console.log(__dirname);
// console.log(__filename);
//Note : fs is import when we use fs.writefilesync and fs.anything

// const fs = require("fs").writeFileSync;
// fs("abc.txt", "Hello Text");

// another method
// const gs = require("fs").writeFileSync;
// gs("xyz.txt", "Hello Text");

// create server
// const http = require("http");
// http
//   .createServer((req, res) => {
//     res.write("<h1>Hello this is Rushi</h1>");
//     // res.write(`<h1>Hello this is Rushi</h1>`);
//     res.end();
//   })
//   .listen(4000);

// can also another method to create server
// const http = require("http");
// function dataControl(req, res) {
//   res.write("<h1>Hello this is Rushi</h1>");
//   res.end();
// }
// http.createServer(dataControl).listen(4000);

// difference between function and arrow function
// function test(a) {
//   return a * 10;
// }
// console.log(test);
// const test = (a) => a * 10;
// console.log(test);

console.log("Hello World");
