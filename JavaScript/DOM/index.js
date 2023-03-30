// alert("Hii")

// let beellBoy1 = {
//     name:"Tushar",
//     age: 25,
//     hasWorkPermit: true,
//     languages:["English","French","German"]
// }
// console.log(bellBoy1.name+" "+bellBoy1.age);


//for many employees whe can't do like this so we can use constructor function

class BellBoy{
constructor(name,age,hasWorkPermit,languages)
{
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
    }
   
}


var bellBoy1 = new BellBoy("Timmy", 19, true, [English, French]);
console.log(bellBoy1.languages[0]);
let bellBoy2 = new BellBoy("Jimmy", 20, true, [English, French, German]);
let bellBoy3 = new BellBoy("Eimmy", 21, true, [English, French, German]);
