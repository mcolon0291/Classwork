var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

  let mainEl = document.querySelector("main")

  mainEl.style.backgroundColor = "var(--mar-bg)";

  mainEl.innerHTML = "<h1>SEI Rocks!</h1>"

  mainEl.classList.add("flex-ctr")
 
  let topMenuEl = document.
  getElementById ("top-menu")


  topMenuEl.style.height = "100%";
  topMenuEl.style.backgroundColor ="var (--top-menu-bg)";
  topMenuEl.classList.add("flex-around");