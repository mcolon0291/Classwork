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

//E1-E5
// const myArray = [5, 10, 500, 20]
// myArray.push('Aegon', 'music')
// myArray.shift()
// myArray.unshift('Bob Marley')
// myArray.pop()
// myArray.reverse()
// yes, the array was mutated. Mutate means to change the original structure. yes, it returned the original array backwards.


// F1- F2
// let number = 95
// if (number < 100){
//     console.log('little number')
// }
// else {
//     console.log('big number')
// }

// G1- G3
// let number = 11
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
// A- 
function printGreeting(name) {
    return "Hello there,  " + name + " !";}
    console.log(printGreeting('Mamdouh'));
    
