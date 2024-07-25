let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


// navbar.style.display = "none";

function menutoggle(){
    if(navbar.style.display == "block"){
        navbar.style.display = "none"
    }
    else{
        navbar.style.display = "block"
    }
}