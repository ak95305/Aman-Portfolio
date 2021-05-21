AOS.init();

let hamBurger = document.querySelector(".hamburger");
let navBar = document.querySelector(".for-pc-view");
let portfolio = document.querySelector("#portfolio");
let BG = document.querySelector(".bgblur");

hamBurger.addEventListener("click", hamBurgerFunction);
navBar.addEventListener("click", optionFunction);


function hamBurgerFunction(){
    if(navBar.classList.contains("mobile-nav-bar")){
        navBar.classList.remove("mobile-nav-bar");
        hamBurger.classList.remove("active-hamburger");
        portfolio.style.opacity = "1";
    } else{
        navBar.classList.add("mobile-nav-bar");
        hamBurger.classList.add("active-hamburger");
        portfolio.style.opacity = "0";
    }
}


function optionFunction(){
    navBar.classList.remove("mobile-nav-bar");
    portfolio.style.opacity = "1";
    hamBurger.classList.remove("active-hamburger");
}