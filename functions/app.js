// let moveRight;
// let moveLeft; 

// // function declaration/ definition
// function sayHello(){
//      return'Hello!'
// } 

// // function expression
// const sayHi = funciton() {
//     console.log ("Hi!")
//      return 'Hi!'
// }


// //arrow function
// const sayHey =() => 'Hey!'

// console.log(sayHello!())
// console.log( sayHi!())
// console.log(sayHey!())

// function add(num1, num2){ // () list of parameters
//     //num1   2
//     //num2   3
//     return num1 + num2
// }


// //add ()   5

// console.log(add(2,3))
// console.log(add(5,5))
// console.log(add (10,1))
// console.log(add(3,8))
// console.log (add('Bob', 'The Builder'))



//Exercise 1 -Write a function declaration

function computerArea(width, height){
    console.log("The area of rectangle with a width of " + width + " and a height of " + height + "is" + (width*height) + "square units.")
}
  
computerArea(3,4)

//Exercise 2- Write a function expression

const planetHasWater = function(planet) {
    var planet1 = planet.toLowerCase();
     if (planet1 == "earth" || planet1 =="mars") {
        return "true"
     } else {
        return "false"
     }
}
console.log(planetHasWater("earth"))
console.log(planetHasWater("Mar"))

//Extra Excerise 
