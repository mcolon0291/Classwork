let quotes = [
    `I live my life a quarter mile at a time`,
    `I said a ten-second car, not a ten-minute car`,
    `You can have any brew you want... as long as it's a Corona.`,
    `You almost had me? You never had me - you never had your car!`,
    `I don't have friends. I have family.`,
    `It don't matter if you win by an inch or a mile. Winning's winning.`
  ];

  document.addEventListener("DOMContentLoaded", function(event) {
    // Random quote of the day generator
    const randomQuote = function() {
      document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
    };
    randomQuote();
    
    // Do all of your work inside the document.addEventListener  

    // Part 1
let hi = document.querySelector('#main-title')
hi.textContent = "Dom Toretto's Page"

    // Part 2
let body = document.querySelector('body')
body.style.backgroundColor = 'orange'

    // Part 3
let myList = document.querySelector('#favorite-things');
let last = myList.querySelector('li:last-child')
myList.removeChild(last)

    // Part 4
let prt = document.querySelectorAll('.special-title')
prt.forEach(item => item.style.fontSize ='2rem')

    // Part 5
let ul = document.querySelector('#past-races')
let lis = ul.querySelectorAll('li')
ul.removeChild(lis[3])
   
    // Part 6
const li = document.createElement('li');
li.textContent = "New York";
ul.append(li);
   
// Part 7
const div = document.createElement('div');
div.classList.add('blog-post', 'purple');
const h1 = document.createElement('h1');
h1.textContent = "New York";
const p = document.createElement('p');
p.textContent = " I love this City";
div.appendChild(h1);
div.appendChild(p);
// console.log(div)
const key = document.querySelector('.main')
key.appendChild(div)

    // Part 8


    // Part 9




  });