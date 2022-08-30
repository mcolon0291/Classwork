// ///////Easy Going///////////

// // for (let i = 0; i <= 20; i++){
// //     console.log(i);
// // }

// ///////Get Even///////////
// for (let i =0; i <= 200; i++){
//  if(i % 2 == 0){
//     console.log(i);
//  }
// }

/////////Fizz Buzz///////////////
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 != 0) {
//         console.log("Fizz")
//     } else {
//         if (i % 5 == 0 && i % 3 != 0) {
//             console.log("Buzz")
//         } else {
//             if (i % 3 == 0 && i % 5 == 0) {
//                 console.log('FizzBuzz')
//             } else {
//                 console.log(i)
//             }
//         }
//     }
// // }
// ///////Wild Wild West//////
//  const wolfy = ['Wolfy', 'wolf', 16, 'yukon territory']
//  const sharky = [ 'Sharky', 'shark', 20, 'Left Coast']
//  const plantee = ['Plantee', 'plant', 5000, 'Mordor']
//  const porgee = [ 'Porgee', 'Porge', 186, 'Ahch-To']
//  const dart = ['DArt', 'Demogorgan Dog', 2, 'Upside Down']

//  //1-
// //   plantee[2] = 5001
// //   console.log(plantee)
// //  //2-
// //  wolfy[3] ='Gotham City'
// //  console.log(wolfy)

// //3-
// // dart.push('Hawkins')
// // console.log(dart)

// //4-
// wolfy.splice(0, 1,'Gameboy')
// console.log(wolfy)

// ////////Yell at the Ninja Turtles////

// let ninjaTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo']
// for (let element of ninjaTurtles){
//     console.log(element.toUpperCase())
// }

/////Methods, Revisited //// 
const favMovies = [ 
'Jaws',
'The Fellowship of the Ring',
'Howls Moving Castle',
'Django Unchained '
]
// 1 
favMovies.sort()
console.log(favMovies)
// the .sort method put the elements in alphabetical order by the first character of each element.

// //2
favMovies.pop()
console.log(favMovies)
//the pop method removed the last element of the array (removed "the fellowship of the ring")

// //3 
favMovies.push('Guardians of the Galaxy')
console.log(favMovies)

// //4 
favMovies.reverse()
console.log(favMovies)

// //5
favMovies.shift()
console.log(favMovies)

//6
favMovies.unshift()
console.log(favMovies)
//does not return anything unless something is in the parentheses

//7








////////Where is Waldo///////

