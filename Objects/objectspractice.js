// let cat = {
//     name: 'Mr. Bean'
//     fur: ' grey, black and white',
//     legs: 4
//     age: 3,
//     favoriteThings: [ 'yarn' , 'string', 'food'],
//     canSpeakFrench: false,
//     meow: function(){ // methods
//         console.log('meow')
// //     }
// }

// //access a property with dot notation
// console.log(cat.name)
// console.log(cat.fur)
// console.log(cat.legs)

// //we can also access properties with brackets
// console.log(cat['name'])
// console.log(cat['fur'])
// console.log(cat['legs'])

// let propName= 'fur'
// console.log(cat[propName]) // this is another way to do it 
//                             //if you do not have the actual value


// // if you want to add a property you can by
// console.log(cat)
// cat.breed = ' calico '
// console.log(cat)

// //when you want to change it 
// //you can by doing the same as adding (check above)

// //arr.forEach()
// //arr.map()
// //arr.filter()
// //arr.reduce()

// //for . . .in loop is for objects
// for (let key in cat){
//     //key represents . . . fur, name, legs, age, meow
//     console.log('key: ', key)
//     //key is a string value
//     console.log('value: ', cat[key])// give us the value of key
// console.log()
// }

//Exercise 
let lipgloss = {
    name: 'victoria Secret',
    color: ['pink', 'white', 'clear'],
    texture: ['glossy', 'sticky'],
    whenToWear: ['nights', 'party', 'events'],
    displayName: function () {
        console.log(lipgloss['name'])

    }
}
console.log(lipgloss.color)
lipgloss.displayName()


//Exercise 
const Countchar= function(str){
    let myObj = {};
    for( let s of str){
        if (my Obj [s]) {
            myObj[s]++
    } else {
        myObj[s] = 1
    }
}
    return myObj;
}
console.log(countChar)

// Exercise 
function change(num, cost) {
    num *= 100
    cost *= 100
    //rC stands for returned Change
    let rC = {
        fifty: 0,
        twenty: 0,
        ten: 0,
        five: 0,
        one: 0,
        quarter: 0,
        dime: 0,
        nickel: 0,
        penny: 0,
    }
    while (num > cost) {
        if (num >= cost + 5000) {
            num -= 5000;
            rC.fifty++;
        } else if (num >= cost + 2000) {
            num -= 2000;
            rC.twenty++;
        } else if (num >= cost + 1000) {
            num -= 1000;
            rC.ten++;
        } else if (num >= cost + 500) {
            num -= 50;
            rC.five++;
        } else if (num >= cost + 100) {
            num -= 100;
            rC.one++;
        } else if (num >= cost + 25) {
            num -= 25;
            rC.quarter++;
        } else if (num >= cost + 10) {
            num -= 10;
            rC.dime++;
        } else if (num >= cost + 5) {
            num -= 5;
            rC.nickel++;
        } else if (num >= cost + 1) {
            num--;
            rC.penny++;
        }
    }
    return (rC)
}
console.log(change 300, 190)



