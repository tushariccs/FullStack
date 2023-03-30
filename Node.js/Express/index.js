//jshint  esversion:6

const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.send("<h1>Hello World</h1>");
  //res.send("<i>Hii</i>"); // sends data to browser.// we can use html tags
  console.log("Hello World");
  //   console.log(req);
  //   console.log(res);
});

//localhost:3000/
// |              |
// root           names of the further pages.

app.get("/contact", (req, res) => {
  //here get is the higher order function with parameters action(pages),callbackl function
  res.send("My email id:tushar@gmail.com");
});
//localhost:3000/contact
// |              |
// root           names of the further pages.

app.get("/about", (req, res) => {
  res.send("I love sleeping and code again and again and happy Diwali to all");
});

app.get("/hobbies", (req, res) => {
  res.send("<ul><li>Cricket</li><li>Code</li><li>Sleep</li></ul>");
});

app.listen(port, () => {
  console.log("Example app listening on port 3000 ");
});
//used port is created properly or not
