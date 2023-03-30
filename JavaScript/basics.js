// var a = 3;
// var b = 8;
// var temp;
// temp = a;
// a = b;
// b = temp;

// console.log(a);
// console.log(b);


// function BMI(weight,height)
// {
//     var bmi = weight / Math.pow(height, 2);
//     return Math.round(bmi);
// }
// var bmi = BMI(65, 1.8);
// console.log("The BMI of the body is " + bmi);


// prompt("What is your name");
// prompt("What is your name");
// var n = Math.random(); //0 inclusive and not including upto 1
// n *= 6;
// n = Math.floor(n)+1;
// console.log(n);




// var str = "Tushar";
// var lastname = "Bhansali";
// var loveScore = Math.random() * 100;
// loveScore = Math.floor(loveScore) + 1;
// console.log(loveScore)
// if (loveScore < 100)
// {
//  console.log(loveScore)
// }
// else {
//     console.log("Not valid")
//     }
// console.log(loveScore)
// console.log(str+" "+lastname+" luck score is "+loveScore)






// function bmiCalculator (weight, height) {
//     var bmi = weight / Math.pow(height, 2);
//        if (bmi < 18.5) {
//          console.log("Your BMI is " + bmi + ",so you are underweight.");
//          return bmi;
//        }
//        if (bmi > 18.5 && bmi <=24.9) {
//          console.log(
//            "Your BMI is " + bmi + ",so you have a normal weight."
//          );
//          return bmi;
//        }
//        if (bmi > 24.9) {
//          cosole.log("Your BMI is " + bmi + ",so you are overweight.");
//          return bmi;
//        }
//        return Math.round(bmi);
//      }

//      var bmi = bmiCalculator(65, 1.8);
//      console.log("The BMI of the body is " + bmi);





// function leapYear(year) {
//     if (year % 4 == 0)
//     {
//         if (year % 100 == 0)
//         {
//             if (year % 400 == 0) {
//                 console.log("Leap Year");
//                 return year;
//             }
//             else {
//                 console.log("Not leap");
//                 return year;
//             }
//         }
//         else {
//             console.log("Leap year");
//             return year;
//         }
//     }
//     else {
//         console.log("Not a leap year");
//         return year;
//     }
// }
// var year = leapYear(2024);
// console.log("Year you choosed is: "+year)



// var friendNames = ["Tushar", "Aditya", "Sachin", "Nikhil", "Ninad", "Jalaj"];
// console.log(friendNames.length);
// console.log(friendNames);
// console.log(friendNames[0]);
// console.log(friendNames.includes("Tushar"));

// if (friendNames.includes("Tushar") == true)
// {
//     console.log("Welcome!");
// }
// else {
//     console.log("Exit");
// }

// for (var i = 1; i <=15 ; i++)
// {
//     console.log("Number is: "+i);
//     if (i % 3 == 0) {
//         console.log("Fizz");
//     }
//     if (i % 5 == 0)
//     {
//         console.log("Buzz");
//     }
//     if (i % 3 == 0 && i % 5 == 0)
//     {
//         console.log("FizzBuzz");
//     }
// }

//Angela Soln
// var output = [];
// var count = 1;

// function FizzBuzz() {
//     output.push(count);
//     count++;
//     console.log(count);
    
//     if (count % 3 == 0)
//     {
//         output[count] = "Fizz";
//     }
//     if (count % 5 == 0)
//     {
//         output[count] = "Buzz";
//     }
//     if (count % 3 == 0 && count % 5==0)
//     {
//         output[count] = "FizzBuzz";
//         }
// }

// for (let i = 0; i < 15; i++)
// {
//     FizzBuzz();
// }
// console.log(output);

// function whoPaying()
// {
//     var names = ["Angela", "Ben", "Jenny", "Micheal", "Chloe"];
//     var numberOfPeople = names.length;
//     var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);

//     var randomPerson = names[randomPersonPosition];

//     return randomPerson + " is going to buy lunch today!";
// }
// var a = whoPaying();
// console.log(a);








// var output = [];
// var count = 1;

// function FizzBuzz() {
   
//     while (count <= 50) {
//         if (count % 3 == 0) {
//             output[count] = "Fizz";
//         }
//        if (count % 5 == 0) {
//             output[count] = "Buzz";
//         }
//         if (count % 3 == 0 && count % 5 == 0) {
//             output[count] = "FizzBuzz";
//         }
//         else {
//             output.push(count);
//         }
        
//         count++;
//     }
//     console.log(output);
// }
//     FizzBuzz();


// var i = 99;
// while (i>=0)
// {
//     console.log(i + " bottles of beer on the wall, " + i + " bottles of beer.");
//     console.log(" Take one down and pass it around " + (i - 1)+ " bottles of beer on the wall.");
//     i--;
// }



// var ans = 0;
// for (var i = 1; i <=5; i++)
// {
//     ans += i;
    
// console.log(ans);
// }


var ans = 0;
function FabnocciSeries(n) {
    var output = [];
    output[0] = 0;
    output[1] = 1; 

    for (let i = 2; i <= n; i++)
    {
        
            output[i] = output[i - 1] + output[i - 2];
        

    }
    console.log(output);
}

FabnocciSeries(5);