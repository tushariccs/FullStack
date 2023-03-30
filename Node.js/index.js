// console.log("Hello World!");

// const fs = require("fs");
// fs.copyFileSync("file1.txt", "file2.txt");
var superheroes = require("superheroes");
//var mysuperheroesname = superheroes.random();
var mysuperheroesname = superheroes.random();
console.log(mysuperheroesname);

var marvel = require("marvel-characters");
console.log(marvel());
var list = marvel.characters;
console.log(list);
