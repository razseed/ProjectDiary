//const menuBtn = document.querySelector('.menu-btn');
//let menuOpen = false;
//menuBtn.addEventListener('click', () => {
    //if(!menuOpen) {
   //     menuBtn.classList.add('open');
   //     menuOpen = true;
   // } else {
 //       menuBtn.classList.remove('open');
//        menuOpen = false;
//    }
//}); Iteration 1 of Navbar 

//New Navbar by Simone @Homunculus84

const navToggle = document.querySelector('.nav__toggle');

navToggle.addEventListener('click',() => {
    document.body.classList.toggle('nav-open');
});    