let sideNav = document.querySelector("#navList");
console.log(sideNav);

let btnBurger = document.querySelector("#burgerImg");
console.log(btnBurger);

let navMobile = document.querySelector(".nav-list-mobile");


btnBurger.addEventListener("click", () => {
    if (sideNav.style.display === "none") {
        navMobile.style.right = "0";
        sideNav.style.display = "block";
        console.log(sideNav.style.display);
    } else {
        navMobile.style.right = "-100%";
        setTimeout(()=>{
            sideNav.style.display = "none";
        }, 500);
    }
});

sideNav.addEventListener("click", () => {
    if (sideNav.style.display === "block") {
        navMobile.style.right = "-100%";
        setTimeout(()=>{
            sideNav.style.display = "none";
        }, 500);
    }
});