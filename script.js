// MOBILE MENU

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});



// SCROLL REVEAL ANIMATION

window.addEventListener("scroll", reveal);

function reveal(){

  let reveals = document.querySelectorAll(".reveal");

  for(let i = 0; i < reveals.length; i++){

    let windowHeight = window.innerHeight;

    let revealTop = reveals[i].getBoundingClientRect().top;

    let revealPoint = 100;

    if(revealTop < windowHeight - revealPoint){

      reveals[i].classList.add("active");

    }

  }

}