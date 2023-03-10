// type in terminal node and type any input like console.log("Hello")

// const middleware = require("./middleware");

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
//   res.write("<h1>Hello this Rushi</h1>");
//   res.end();
// }
// http.createServer(dataControl).listen(4000);
// console.log("server is running at port 4000");

// difference between function and arrow function
// function test(a) {
//   return a * 10;
// }
// console.log(test);
// const test = (a) => a * 10;
// console.log(test);

// create simple api
// const http = require("http");
// http
//   .createServer((req, res) => {
//     res.writeHead(200, { "content-type": "applicationjson" });
//     res.write(
//       JSON.stringify([
//         { id: 1033, name: "Rushikesh", email: "rushi@gmail.com" },
//       ])
//     );
//     res.end();
//   })
//   .listen(4000);

// import data from other files
// const data = require("./data");
// const http = require("http");
// http
//   .createServer((req, res) => {
//     res.writeHead(200, { "content-type": "applicationjson" });
//     res.write(JSON.stringify(data));
//     res.end();
//   })
//   .listen(4000);

// argument vector file shown in terminal
// console.log(process.argv);
// console.log(process.argv[2]);

// file system
// const fs = require("fs");
// const input = process.argv;
// fs.writeFileSync(input[2], input[3]);
// when we write in terminal node index.js apple.txt 'this is a fruit' then one file is created with the help of above code

// write command in terminal node index.js add / remove <filename> <content in file>
// const fs = require("fs");
// const input = process.argv;
// if (input[2] == "add") {
//   fs.writeFileSync(input[3], input[4]);
// } else if (input[2] == "remove") {
//   fs.unlinkSync(input[3]);
// } else {
//   console.log("Invalid Input");
// }

// making files in folder using command
// const fs = require("fs");
// const path = require("path");
// const dirPath = path.join(__dirname, "files");
// console.log(dirPath);
// for (i = 0; i < 5; i++) {
//   fs.unlinkSync(
//     dirPath + `/hello${i}.txt`,
//     "a simple file in " + i + "th generation"
//   );
// }
// fs.readdir(dirPath, (err, files) => {
//   files.forEach((item) => {
//     console.log(item);
//   });
// });

// const { rejects } = require("assert");
// const fs = require("fs");
// const { resolve } = require("path");
// const path = require("path");
// const dirPath = path.join(__dirname, "files");
// fs.writeFileSync(`${dirPath}/apple.txt`, `This is a simple text file`);
// <------or----->
// const filePath = `${dirPath}/apple.txt`;
// fs.readFile(filePath, (err, item) => {
//   console.log(item);
// });
// <------or----- Read File >
// const filePath = `${dirPath}/apple.txt`;
// fs.readFile(filePath, "utf-8", (err, item) => {
//   console.log(item);
// });
// <------or----- Append File >
// const filePath = `${dirPath}/apple.txt`;
// fs.appendFile(filePath, "and file name is apple dot txt", (err) => {
//   if (!err) console.log("File is updated");
// });
// <------or----- Rename File >
// const filePath = `${dirPath}/apple.txt`;
// fs.rename(filePath, `${dirPath}/fruit.txt`, (err) => {
//   if (!err) console.log("File is renamed");
// });
// <------or----- Delete File >
// fs.unlinkSync(`${dirPath}/fruit.txt`);

// <----setTimeout Function---->
// setTimeout(() => {
//   console.log("Hello Everyone after 4 sec");
// }, 4000);
// setTimeout(() => {
//   console.log("Hello Everyone after 2 sec");
// }, 2000);
// setTimeout(() => {
//   console.log("Hello Everyone after 5 sec");
// }, 5000);
// console.log("hello");

// <----setTimeout Function---->
// let a = 10;
// let b = 5;
// setTimeout(() => {
//   b = 20;
// }, 2000);
// console.log(a + b);
// setTimeout(() => {
//   console.log(a + b);
// }, 3000);

// let a = 10;
// let b = 5;
// let waitingData = new Promise((resolve, rejects) => {
//   setTimeout(() => {
//     resolve(30);
//   }, 2000);
// });
// waitingData.then((data) => {
//   console.log(a + data);
// });
// console.log(a + b);

// <------EXPRESS START------->
// <-----Below two const are mandatory for all----------->
// const express = require("express");
// const app = express();

// app.get("", (req, res) => {
//   console.log("data sent by browser", req.query.name);
//   res.send("Hello this is home page");
// });
// app.get("/about", (req, res) => {
//   res.send("Hello this is about page");
// });
// app.listen(4200);

// <-------Name given by browser using request method------>
// app.get("", (req, res) => {
//   console.log("data sent by browser", req.query.name);
//   res.send("Welcome " + req.query.name);
// });
// app.listen(4200);

// app.get("", (req, res) => {
//   res.send(`<h1>Welcome ,Everyone</h1><a href='/about'>Go to About page</a>`);
// });
// app.get("/about", (req, res) => {
//   res.send(`
//           <input type='text' placeholder='username'/>
//           <button>Submit</button>
//           `);
// });
// app.get("/help", (req, res) => {
//   res.send({
//     name: "rushi",
//     email: "rushibhumkar11@gmail.com",
//     mobile: 7972755589,
//   });
// });

// const path = require("path");
// const publicPath = path.join(__dirname, "public");

// app.use(express.static(publicPath));
// app.set("view engine", "ejs");
// console.log(__dirname);
// app.get("", (req, res) => {
//   res.sendFile(`${publicPath}/index.html`);
// });
// <---------How to use ejs--------->
// <-------Dynamic Page using ejs------->
// app.get("/profile", (req, res) => {
//   const user = {
//     name: "rushikesh bhumkar",
//     email: "rushibhumkar11@gmail.com",
//     mobile: "7987654321",
//     city: "Pune",
//     skills: ["php", "c", "c++", "js", "java"],
//   };
//   res.render(`profile`, { user });
// });
// app.get("/login", (req, res) => {
//   res.render(`login`);
// });
// app.get("/about", (req, res) => {
//   res.sendFile(`${publicPath}/about.html`);
// });
// app.get("/help", (req, res) => {
//   res.sendFile(`${publicPath}/help.html`);
// });
// app.listen(4200);

// <-------Middleware-------->
// <-------1 application-level Middleware/Middleware in same file-------->
// const express = require("express");
// const reqFilter = require("./middleware");
// const app = express();
// const route = express.Router();

// // app.use(reqFilter);
// route.use(reqFilter);
// app.get("/", (req, res) => {
//   res.send(`welcome to homepage`);
// });
// app.get("/users", (req, res) => {
//   res.send(`welcome to user page`);
// });
// route.get("/about", (req, res) => {
//   res.send(`welcome to About page`);
// });
// route.get("/contact", (req, res) => {
//   res.send(`welcome to contact page`);
// });
// app.use("/", route);
// app.listen(3000);

// <-----------middleware End--------->

// <----------Express End--------->

// <----------Mongodb Start--------->
// const { MongoClient } = require("mongodb");
// const url = "mongodb://localhost:27017";
// const database = "e-comm";
// const client = new MongoClient(url);
// async function getData() {
//   let result = await client.connect();
//   let db = result.db(database);
//   let collection = db.collection("product");
//   let response = await collection.find({}).toArray();
//   console.log(response);
// }
// getData();

const MongoClient = require("mongodb").MongoClient;
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect((err) => {
  const collection = client.db("e-comm").collection("products");
  // perform actions on the collection object
  console.log(collection);
  client.close();
});
