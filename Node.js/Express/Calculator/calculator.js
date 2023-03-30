// const { application } = require("express");
const calci = require("express");
const bodyParser = require("body-parser");

const app = calci();
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
  //                  |
  //c:\Users\hp\OneDrive\Desktop\Node.js\Express\Calculator\index.html
  //console.log(__dirname);
  // __dirname stores the directory on the sever to refer the html file for access the web application.
  //if we just put filename then server doesn't know where the file is located
});

app.post("/", function (req, res) {
  var num1 = parseInt(req.body.num1);
  var num2 = parseInt(req.body.num2);
  var num3 = req.body.num3;
  switch (num3) {
    case "+":
      res.send("The result is: " + parseInt(num1 + num2));
      break;
    case "-":
      res.send("The result is: " + parseInt(num1 - num2));
      break;
    case "/":
      res.send("The result is: " + parseInt(num1 / num2));
      break;
    case "%":
      res.send("The result is: " + parseInt(num1 % num2));
      break;
    case "log":
      var result = Math.log(parseInt(num1));
      res.send("The result is: " + result);
      break;

    default:
      res.send("Wrong Option");
  }
});

app.listen(port, () => {
  console.log("Port is working");
});
//to check port is connected and working.

//npm body parser is used to fetch the data.
