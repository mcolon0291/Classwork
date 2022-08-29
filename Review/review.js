//I. variables& Datatypes//
//a1- The equal will assign a value to a variable. ex- (let B = 22)
//a2- Will need to be resigned with a new value.
//a3- We will combine each variable to new variable. 
//a4- Declare , Assign , Define ex -( let X = 22) value
//a5- pseudcoding -writing out the syntax or explaination of the problem. It helps you set up the syntax. 
//a6- 70/30 percent should be spent.

//b1-b2- const firstVariable = 'Hello World'
//b3- let firstVariable = 22
//b4- let firstVariable = secondVariable
//b5- let secondVariable = 'hey'
//b6- hey
// let secondVariable = 'hey';
// let firstVariable = secondVariable;
// console.log(firstVariable)
//b7- 
// let yourName = 'Marleni'
// console.log('Hello, my name is ' + yourName)

//c1- 
// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';

// console.log(a < b);
// console.log(c > d);
// console.log('Name' === 'Name');
// console.log(true || false);
// console.log(false && false && false && false && false || true);
// console.log(false == false);
// console.log(e === 'Kevin');
// console.log(a != b || c);
// console.log(a * a === d);
// console.log(48 == '48');

// D1-4- 
// let animal = "dog";
// if (animal === "cow"){
//     console.log ("mooooo")
//  }
//  else {
//     console.log("Hey! You're not a cow.")
//  }

// //E1- E2 
// let age = 10
// if (age >= 16 ){
// console.log ('Here are the keys!')
// }
// else if (age < 16){
//     console.log("Sorry, you're too young.")
// }

//Loops 
// // A1- 
// for (let i = 0; i <= 10; i++){
//     console.log(i)
// }
// A2-
// for (let i = 10; i <= 400; i++){
//     console.log(i)
// }
// A3- 
// for(let i = 12; i <= 4000; i+=3){
// console.log(i)
// }

//B1-B2 
// for(let i = 1; i <= 100; i++ ){
//     if (i % 2 === 0){
//     console.log(i + '<-- is an even number')
//     }
//     else{
//     console.log(i)
//     }
// }

// C1- C3
// for(let i = 1; i <= 100; i++){
//     if (i % 5 === 0 && i % 3 === 0){
//         console.log("I found a " + i + " High five!")
//         console.log("I found a " + i + " Three is a crowd.")
//     }
//     else if (i % 5 === 0){
//         console.log("I found a " + i + " High five!")

//     }
//     else if(i % 3 === 0){
//         console.log("I found a " + i + " Three is a crowd.")

//     }
  
// }

//D1- 
// let bank_Account = () => {
//     let sum= 0
//     for (let i = 0; i <= 10; i++){
//     sum += i
// }
// return sum

// }
// console.log(bank_Account())

// let bank_Account = () => {
// let sum = 0
// for (let i = 0; i <= 100; i++){
//     sum += i 
// }
// return sum * 2
// }
// console.log(bank_Account())

// //Arrays & Control flow
// A1- Elements 
// A2- Yes, the order that you create.
//A3- Shopping list, grocery list

// B1- 
// let quotes = [ 'Be yourself', 'Be practical', 'Love yourself']

// C1- randomThings[0]
// C2-C3 
// const randomThings = [1, 10, 'Hello', true]
// randomThings[2] = 'World'
// console.log(randomThings)

// const ourClass = ['Slaty', 'Zoom', 'Sardine', 'Slack', 'Github']
// // D1- ourClass[3]
// // D2- 
// // ourClass[4] = 'Octocat'
// // console.log(ourClass)

// // D3-
//  ourClass.push('Cloud City')
//  console.log(ourClass)

// E1-E5
// const myArray = [5, 10, 500, 20]
// myArray.push('Aegon', 'music')
// myArray.shift()
// myArray.unshift('Bob Marley')
// myArray.pop()
// myArray.reverse()
// console.log(myArray)
// yes, the array was mutated. Mutate means to change the original structure. yes, it returned the original array backwards.


// F1- F2
// let number = 120
// if (number < 100){
//     console.log('little number')
// }
// else {
//     console.log('big number')
// }

// G1- G3
// let number = 6
// if (number < 5){
//     console.log('little number')
// } else if (number > 10){
//     console.log('big number')
// } else {
//     console.log('monkey')
// }

// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     "right sock",
//     "GA hoodie",
//     "green pants",
//     "yellow knit hat",
//     "marshmallow peeps"
//   ];
  
//   // Thom's closet is more complicated. Check out this nested data structure!!
//   const thomsCloset = [
//     [
//       // These are Thom's shirts
//       "grey button-up",
//       "dark grey button-up",
//       "light blue button-up",
//       "blue button-up",
//     ],[
//       // These are Thom's pants
//       "grey jeans",
//       "jeans",
//       "PJs"
//     ],[
//       // Thom's accessories
//       "wool mittens",
//       "wool scarf",
//       "raybans"
//     ]
  

//H1 
// console.log('Kristyn is rocking that ' + kristynsCloset[2] + ' today!');
// H2- 
// kristynsCloset.splice(6,0,'raybans');
// console.log(kristynsCloset)
// //H3- 
// kristynsCloset[5] = 'stained knit hat'
// console.log(kristynsCloset)
// H4- console.log(thomsCloset[0][0])
//H5- 
// console.log(thomsCloset[1][1])
// H6-
// console.log(thomsCloset[2][1])
//H7- 
// console.log('Thom is looking fierce in a ' + thomsCloset[0][0] + ', ' + thomsCloset[1][1] + ' and ' + thomsCloset [2][1] + '!');
// H8-
// thomsCloset[1][2] = 'footie pajamas'
// console.log(thomsCloset)

// IV-functions
// // A- 
// function printGreeting(name) {
//     return "Hello there,  " + name + " !";}
//     console.log(printGreeting('Mamdouh'));
    
// //B- 
// function printCool(name) {
//     console.log(name + ' is cool!');
// }
// printCool('Marleni')

//C- 
// function calculateCube(a) {
//     volume = a * a * a;
//     console.log(volume);
// }
// console.log(calculateCube(5));

// D 
// function isVowel(letter){
//     let result;
//     result = letter.toLowerCase() == "a" || letter == "e" || letter =="i" || letter =="o" || letter =="u";
// return result;
// }
// console.log(isVowel('A'))

//E
// function getTwoLengths(string1, string2){
//     let array = [];
//     array.push(string1.length);
//     array.push(string2.length);
//     return array;
// }


// console.log(getTwoLengths('hank', 'Hippopopalous'))

//F
// function getMultipleLengths(array){
// let newArray = []; 
// for(let i = 0; i <array.length; i++){
//     newArray.push(array[i].length);
// }
// return newArray
// }
// console.log(getMultipleLengths(['hello', 'whats', 'is', 'up', 'dude']));

//G 
// maxOfThree = (num1, num2, num3) => {
//     if (num1 >= num2 && num1 >= num3) {
//         return num1;
//     } else if (num2 >= num3 && num2 >= num1) {
//         return num2;
//     } else if (num3 >= num1 && num3 >= num2) {
//         return num3;
// }
// }
// console.log(maxOfThree(8, 6, 4))

//H 
// const printLongestWord = function (arr){
//     let longest = '';
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i].length > longest.length){
//             longest = arr[i]
//         }
//     }
//     return longest
// }
// console.log(printLongestWord(['BoJack', 'Princess', 'letword', 'Happy', 'word' ]))

//Objects
//A- 1-2
<<<<<<< HEAD
// let user = {
//   name: "Marleni",
//   email: "mcolon0291@gmail.com", 
//   age: 31,
//   purchased: []
// }

// // //B- without changing the orginial user object, update the email value to a new email.
// user.email = "marlenicolon@yahoo.com"
// user.age++
// console.log(user)

// // //C- add a new key location to the object and give it a string value
// user.location = "New York"
// console.log(user)

// // //D1-adding value to the purchase array using push method
// user.purchased.push("carbohydrates")

// // //D2- adding peace of mind value to purchae array using push method
// user.purchased.push("peace of mind")

// // //D3- adding Merino jodhpurs using push method
// user.purchased.push("merino jodhpurs")

// // //D4-console log (merino jodhpurs)
// console.log(user.purchased[2])

// // //E1 -Write a friend object and give friend name, location, purchased array
// user.friend = {
//     name: "Isaiah",
//     age: 2,
//     location: "New York",
//     purchased: [],
// }
// // //E2- console log friends name
// console.log(user.friend.name)

// // //E3- console log friend location 
// console.log(user.friend.location)

// // //E4 - change friends age to 55
// user.friend.age = 55

// // //E5- using push method add the ring one to purchased array
// user.friend.purchased.push("The One Ring")

// // //E6- using push method add a latte to purchased array
// user.friend.purchased.push("A latte")

// // //E7- console log only a latte
// console.log(user.friend.purchased[1])

// // //F1-  write for loop for user array
// for (let i = 0; i < user.purchased.length; i++){
//     console.log(user.purchased[i])
// }

// // //F2- write for loop for friend array
// for (let j = 0; j < user.friend.purchased.length; j++){
//     console.log(user.friend.purchased[j])
// }
// //G1-3
// function upDateUser(){
//     user.age++;
//     user.name.toUpperCase();
// }

// //G2- 
// function oldAndLoud(person)  {
//  console.log(person.age++);
// console.log(person.name.toUpperCase());
// }
// oldAndLoud(user)

// // Cat Combinator
// //1-Mama cat
//  let cat1 = {
//     name: "Henry", 
//     breed: "Ragdoll", 
//     age: 12,
//  }
// console.log(cat1.age)
// console.log(cat1.breed)

// //2- Papa cat
// let cat2 = {
//     name: "Bret",
//     breed: "Persian",
//     age: 13,
// }

// //3- Combine cats
// function combineCats(cat1, cat2){
// let twoCats ={
//     age: 1,
//     name: cat1. name + cat2. name,
//     breed: cat1. breed + "-" + cat2. breed
// };
// return twoCats;
// }
// console.log(combineCats(cat1, cat2));

// //4-
// console.log(combineCats(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)), combineCats(combineCats(cat1, cat2), combineCats(cat1,cat2))))
=======
let user = {
  name: "Marleni",
  email: "mcolon0291@gmail.com", 
  age: "31",
  purchased: []
}

// //B- without changing the orginial user object, update the email value to a new email.
user.email = "marlenicolon@yahoo.com"
user.age++
console.log(user)

// //C- add a new key location to the object and give it a string value
user.location = "New York"
console.log(user)

// //D1-adding value to the purchase array using push method
user.purchased.push("carbohydrates")

// //D2- adding peace of mind value to purchae array using push method
user.purchased.push("peace of mind")

// //D3- adding Merino jodhpurs using push method
user.purchased.push("merino jodhpurs")

// //D4-console log (merino jodhpurs)
console.log(user.purchased[2])

// //E1 -Write a friend object and give friend name, location, purchased array
user.friend = {
    name: "Isaiah",
    age: 2,
    location: "New York",
    purchased: [],
}
// //E2- console log friends name
console.log(user.friend.name)

// //E3- console log friend location 
console.log(user.friend.location)

// //E4 - change friends age to 55
user.friend.age = 55

// //E5- using push method add the ring one to purchased array
user.friend.purchased.push("The One Ring")

// //E6- using push method add a latte to purchased array
user.friend.purchased.push("A latte")

// //E7- console log only a latte
console.log(user.friend.purchased[1])

// //F1-  write for loop for user array
for (let i = 0; i < user.purchased.length; i++){
    console.log(user.purchased[i])
}

// //F2- write for loop for friend array
for (let j = 0; j < user.friend.purchased.length; j++){
    console.log(user.friend.purchased[j])
}
//G1-3
function upDateUser(){
    user.age++;
    user.name.toUpperCase();
}

//G2- 
function oldAndLoud(person)  {
 console.log(person.age++);
console.log(person.name.toUpperCase());
}
oldAndLoud(user)

// Cat Combinator
//1-Mama cat
 let cat1 = {
    name: "Henry", 
    breed: "Ragdoll", 
    age: 12,
 }
console.log(cat1.age)
console.log(cat1.breed)

//2- Papa cat
let cat2 = {
    name: "Bret",
    breed: "Persian",
    age: 13,
}

//3- Combine cats
function combineCats(cat1, cat2){
let twoCats ={
    age: 1,
    name: cat1. name + cat2. name,
    breed: cat1. breed + "-" + cat2. breed
};
return twoCats;
}
console.log(combineCats(cat1, cat2));

//4-
console.log(combineCats(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)), combineCats(combineCats(cat1, cat2), combineCats(cat1,cat2))))
>>>>>>> c5b8abce86f8397e03e700bdc2b924f389f7a97b
