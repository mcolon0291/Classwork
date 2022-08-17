// let car ={

// }

// let car1 = {

// }

// let car2 = {

// }

//OOP stands for -Object-oriented programming
//an encapsulation is to bundle everything inside that object. 
//classes are special functions 

//instance- an object created by a class
//instantiate- we instantiat a class to create an object 
//instatiation- the process of creating an object


// class Vehicle{
//     constructor(vinParam, makeParam, modelParam) { // when adding a property just add it to the constructor.
//         this.vin = vinParam;
//         this.vin = makeParam;
//         this.model = modelParam;
//         this.running = false;
//         console.log('creating a new instance of Vehicle')
//     }

//     start() {
//         this.running = true;
//         console.log('running')
//     }
//     start () {
//         this. running = false;
//         console.log('stopped')
//     }
// }

// const toyoto = new Vehicle ('X123Y' , 'Boeing' , 'Shine')
// const telsa = new Vehicle()


// console.log( toyoto,telsa)

// toyoto.start()
// telsa.start()

// toString(){ //to override use toString method built in
//     return 'Vehicle (' + this.vin + ') is a ' + 
// }


//example 1 
// class Cat {
//     constructor(name, age, sex) {
//       this.name = name
//       this.age = age
//       this.sex = sex
//     }
  
//     eat() {
//     console.log(`${this.name} is eating`)
//     }
  
//     birthday() {
//     console.log(
//     `It's ${this.name}'s birthday and ${
//     this.sex.toLowerCase() === 'male' ? 'he' : 'she'
//    } is ${(this.age += 1)}`
//       )
//     }
  
//     takesNap() {
//     console.log(`${this.name} is taking a nap`)
//     }
//   }
  
//   const sam = new Cat('Sam', 8, 'Male')
//   console.log(sam)
//   sam.eat()
//   sam.birthday()
//   sam.takesNap()
  
//   console.log('\n')
  
//   const lucy = new Cat('Lucy', 6, 'Female')
//   console.log(lucy)
//   lucy.eat()
//   lucy.birthday()
//   lucy.takesNap()
  
//   console.log('\n')
  

//example 2
class Pirate {
    constructor(name, power, secretWeapon) {
    this.name = name
    this.power = power
    this.secretWeapon = secretWeapon
    this.takesSoul = false
    }
  
    getsHit() {
    console.log(
    `${this.name} was just hit and their power is ${(this.power -= 10)}`
      )
    }
  
    powerUp() {
    console.log(`${this.name} just powered up to ${(this.power += 10)}`)
    }
  
    soulSnatched() {
    this.takesSoul = true
    console.log(`${this.takesSoul && "Just took someone's soul"}`)
    }
  }
  
  const jollyRoger = [
    new Pirate('Jax The Ripper', 100, 'Machete with poison'),
    new Pirate('Wave Crasher', 90, 'Controller of water'),
    new Pirate('Crazy Pirate', 93, 'Paralizes with his thoughts'),
  ]
  
  jollyRoger[0].powerUp()
  
  jollyRoger.forEach(pirate => {
    console.log(
      `Name: ${pirate.name} \n Power: ${pirate.power} \n Secret Weapon: ${pirate.secretWeapon}`
    )
  })
  
  console.log('\n')


//Example 3 -didnt finsish


//child class and/ or sub class
//use extend to inherit properties and methods
//from parent and/or super class 



// class Hobbit extends Character {
//     steal (){
//         console.log('woohoo!')
//     }
// }

// const frodo = new Hobbit ('Frodo')
// console.log(frodo)
// frodo.steal()
// froso.smite()
// frodo.greet('Bob')

//example 1 
// class Governor {     
//    static passVote() {         
//     console.log('Yes!!!')     
//     }    
//     static goCorrupt() {       
//     console.log('No way!!') 
//     }    
//     static fundRaiser(funds) {             
//         console.log(funds)       
//     }  
// }
// Governor.passVote()
// Governor.goCorrupt()
// Governor.fundRaiser(10)

//example 2

