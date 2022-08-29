
var menuLinks = [
    { text: "about", href: "/about" },
    { text: "catalog", href: "/catalog" },
    { text: "orders", href: "/orders" },
    { text: "account", href: "/account" }
  ];
  
  const mainEl = document.querySelector("main");
  
  mainEl.style.backgroundColor = "var(--main-bg)";
  
  mainEl.innerHTML = "<h1>SEI Rocks!</h1>";
  
  mainEl.classList.add("flex-ctr");
  
  const topMenuEl = document.querySelector("#top-menu");
  
  topMenuEl.style.height = "100%";
  topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
  topMenuEl.classList.add("flex-around");
  
  for (link of menuLinks) {
    let aEl = document.createElement("a");
    aEl.setAttribute("href", link.href);
    aEl.textContent = link.text;
    topMenuEl.append(aEl);
  }
  //used ta help, classmates and did google to verify functions as much as I could that made sense.