AOS.init();

let hamBurger = document.querySelector(".hamburger");
let navBar = document.querySelector(".for-pc-view");
let portfolio = document.querySelector(".portfolio");

hamBurger.addEventListener("click", hamBurgerFunction);


function hamBurgerFunction(){
    if(navBar.classList.contains("mobile-nav-bar")){
        navBar.classList.remove("mobile-nav-bar");
        hamBurger.classList.remove("active-hamburger");
        portfolio.style.display = "flex";
    } else{
        navBar.classList.add("mobile-nav-bar");
        hamBurger.classList.add("active-hamburger");
        portfolio.style.display = "none";
    }
}
