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
// // 1 
// favMovies.sort()
// console.log(favMovies)
// // the .sort method put the elements in alphabetical order by the first character of each element.

// // //2
// favMovies.pop()
// console.log(favMovies)
// //the pop method removed the last element of the array (removed "the fellowship of the ring")

// // //3 
// favMovies.push('Guardians of the Galaxy')
// console.log(favMovies)

// // //4 
// favMovies.reverse()
// console.log(favMovies)

// // //5
// favMovies.shift()
// console.log(favMovies)

// // //6
// // favMovies.unshift('Princess and the Pauper');
// // console.log(favMovies)
// // //returns the new length of array

// //7
// console.log(favMovies.indexOf('Django Unchained'))
// console.log(favMovies.splice(favMovies.indexOf('Django Unchained'),1,"Avatar",))
// console.log(favMovies.length)
// //Splice permanently alters the array


// //8

// console.log(favMovies)
// let afterSlice=favMovies.slice(Math.floor((favMovies.length)/2))
// //does not alters the original array permanently

// //9
// console.log(afterSlice)

// //10 
// console.log(favMovies)

// //11
// console.log(afterSlice.indexOf('Fast and Furious'))

// //12
// // if you want the array to be mutated, declare it with const.
// // if you want the array to get reassigned, declare it with let.

// ////////Where is Waldo///////

// //where is waldo
// const whereIsWaldo =[['Timmy','Frank'],'Eggbert',['Lucinda','Jacc','Neff','Snoop'],['Petunia',['Baked Goods','Waldo']]]

//  whereIsWaldo.splice(1,1)
// //   console.log(whereIsWaldo)

//   whereIsWaldo[1][2]='No One'
// console.log(whereIsWaldo)

// console.log(whereIsWaldo[2][1][1])


//////////////Excited kitten/////////////
for (let i = 0; i < 20; i++) {
    console.log(`Love me,pet me!HSSSSSS!`)
}
//random message
let array=['..human...why you taking pictures of me?...','...the catnip made me do it...','...why does the red dot always get away...']
for (let i = 0; i < 20; i++) {
    if ( i %2  ===0 ) console.log (`${array[Math.floor(Math.random() * array.length)]}`)
        else console.log(`Love me,pet me!HSSSSSS!`)
}

///find the median////
const nums=[14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12]

const sorted = nums.sort((a, b) => a - b);

console.log(sorted)
let median
let middle = Math.floor(sorted.length/2)
for (let i = 0; i < sorted.length;i++) {
if (sorted.length %2 === 0 ){
   median=(sorted[middle]+sorted[middle+1])/2
}else {
    median =sorted[middle]
}}
console.log(median)

/////Return of the Closets/////

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right socks",
    "GA hoodie",
    "green pants",
    "yellow knit hats",
    "marshmallow peeps",
  ];
  const thomsCloset = [
    [
      "grey button-up",
      "dark gery button-up",
      "light blut button-up",
      "blue button-up",
    ],
    ["grey jeans", "jeans", "PJs"],
    ["wool mittens", "wool scarf", "raybans"],
  ];
  
  ///////Alien Attire////////
  kristynsShoe = kristynsCloset[0];
  
  //Adding left shoe to thom's closet
  thomsCloset[2].push(kristynsShoe);
  console.log(thomsCloset);

////Dress Us Up///////
//1.
for (let i = 0; i < 3; i++) {
    console.log(
      `Krystin is wearing a ${
        kristynsCloset[Math.floor(Math.random() * kristynsCloset.length)]
      }, ${
        kristynsCloset[Math.floor(Math.random() * kristynsCloset.length)]
      } and ${kristynsCloset[Math.floor(Math.random() * kristynsCloset.length)]}`
    );
  }

  for(let i=0;i<thomsCloset.length;i++){
    let index1= Math.floor(Math.random() * thomsCloset.length);
  console.log(`Thom is wearing a ${thomsCloset[index1][Math.floor(Math.random() * thomsCloset[index1].length)]} , 
      ${thomsCloset[index1][Math.floor(Math.random() * thomsCloset[index1].length)]
    } and ${thomsCloset[index1][Math.floor(Math.random() * thomsCloset[index1].length)]}`
  );
}

/////Dirty Laundry////
for (const cloth of kristynsCloset) {
    console.log(`WHIRR: Now washing ${cloth}`);
  }

  ////Inventory///
  for (let i = 0; i < thomsCloset.length; i++) {
    for (let j = 0; j < thomsCloset[i].length; j++) {
      console.log(thomsCloset[i][j]);
    }
  }