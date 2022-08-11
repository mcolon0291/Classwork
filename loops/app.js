// for ( let i = 0; i <10; i++) {
//     console.log(i)



//inside parenthesis we have 
//three statements:

// statement 1: 
// declare and initialize a variable 
//scoped to the for loop

//statement 2:
// a condition that whne true runs the 
//code in the for loop

//statment 3:
//incrementing of the variable in
//order to eventually break the loop

//1: declare and initialize varibale
//2: check if condition is true
//3: console log runs and prints 0
//4: the variable i increments from 0 + 1

//5: repeat step 2
//6: repeat step 3
//7: repeat step 4

// for (let i = 2; i> 1; i++){
//     console.log(i)
// }

//1:declare and initialize variable 
//2: check if condition is true
//3: console log runs and prints 0
//4: the variable i increments from 0 to 1
//5: check if condition is true
//6: console log runs and prints 1
//7: i increments from 1 to 2
//8: check if condition is true (its not)
//9: exit loop, continue with rest of code

// // //Excercise 1
// for (let i = 10;  i>0;  i-- ){
//  console.log(i);
//  if(i<1)
// }



// //Exercise 2
// for (let i = 1; i <= 10; i = i + 2){
//     console.log(i)
// }

// // //Exercise 3 

// for (let index = 6; index < 61; index+=3){
//     console.log(index)
// }

// // Exercise 4
// let text ="";

// //While loop
// while (i <10) {

// }

//Exercise 7 
// let i =1 

// while(i < 35){
//     console.log(i)
//     i += 3
// }

// //Exercise 8
// let i =5 
//  while (i<= 100){
//     console.log(i)
//      i += 5
//  }

 //Exercise 9
let i= 0

while (i < 60){ 
console.log(i) 
if ( i % 2 ==0){
    i *= 3
}else {
    continue;
}
}