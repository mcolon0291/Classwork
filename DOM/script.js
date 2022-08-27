var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '/catalog'},
  {text: 'orders', href: '/orders'},
  {text: 'account', href: '/account'},
]; 

//1.0
  let mainEl = document.querySelector("main")
//1.1
  mainEl.style.backgroundColor = "var(--main-bg)";
//1.2
  mainEl.innerHTML = "<h1>SEI Rocks!</h1>"
//1.3
  mainEl.classList.add("flex-ctr")
 //2.0
  let topMenuEl = document.
  getElementById ("top-menu")
//2.1
  topMenuEl.style.height = "100%";
 //2.2
  topMenuEl.style.backgroundColor ="var(--top-menu-bg)";
  //2.3
  topMenuEl.classList.add("flex-around");
//3.1
for (let i = 0; i < menuLinks.length; i++){
  let link = document.createElement('a');
  link.href = menuLinks[i].href
  link.innerText = menuLinks[i].text
  topMenuEl.appendChild(link)
}

//4.0
let subMenuEl = document.getElementById("sub-menu")
console.log(subMenuEl)
//4.1
subMenuEl.style.height ="100%"
//4.2
subMenuEl.style.background = "var(--sub-menu-bg)"
//4.3
subMenuEl.classList.add("flex-around");
//4.4
subMenuEl.style.position="absolute";
//4.5
subMenuEl.style.top ="0";
//5.1
let topMenuLinks = topMenuEl.querySelectorAll("a");
let showingSubMenu= false;
//5.2
topMenuEl.addEventListener("click", (event)=> {
  event.preventDefault();
  if (event.target.tagName !== "A") return;
  console.log(event.target.textContent);
});
//5.3
topMenuEl.addEventListener("click", function(a) {
  //5.3.1
  a.target.classList.remove("active");
  //5.3.2
  showingSubMenu = false;
  // 5.3.3 
  showingSubMenu = false;
  // 5.3.4
  subMenuEl.style.top = "0";
  return;
});