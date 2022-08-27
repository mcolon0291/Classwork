//first select the element we want and store it in a variable which is called (btn)
const btn = document.querySelector("button") //stored in this // btn is the button on the webpage

//then attach an event listener to that element
btn.addEventListener("click", function(event){//this is when they click on the button. (callback function)
    //everytime they click on it our callback function will run
   
   
    //evt is a special paramete representing the event object
    //the event object has all the infor you'll ever need
    //the event that occured and the element that casued it
    // console.log(event.target) //-->
    // console.log(this)
//btn, event.target, and this all represent the same thing:
//button element

//create a brand new li tag and store it in a variable
const li = document.createElement('li')
console.log(li)

//select the input element and store it in a variable (input)
const input = document.querySelector('input')
console.dir(input)

// for input elements we'll need to acces the "value" 
console.log(input.value)
//we target the textContent property of the li tag
// and we assign it the value of our input
li.textContent = input.value

//we first select the ul tag and then we add (append)
//the new li tag, which has our new comment, to the 
//selected ul

document.querySelector('ul').appendChild(li)

const ul = document.querySelector('ul').addEventListener
("click"), (e) => {
    
}