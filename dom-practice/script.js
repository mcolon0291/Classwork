let h1Tag = document.getElementById("title")

console.log(h1Tag)
console.log(h1Tag.innerText)

let pTag = document.querySelector("p")
console.log(pTag)

let pEl = document.querySelector('.cool')
console.log(pEl)

console.dir(pTag)

h1Tag.style.textAlign = 'center'

h1Tag.style.color = 'blue'


let aLink = document.querySelector("a")

aLink.setAttribute('href' , "https://www.google.com")


let liTags = document.getElementsByTagName('li')
console.log(liTags[2])

let liTags = 
