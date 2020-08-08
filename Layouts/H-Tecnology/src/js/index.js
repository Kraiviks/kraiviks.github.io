import Scroll from './scroll';


// Main js file

window.addEventListener('DOMContentLoaded', ()=>{
    new Scroll('a[href^="#"]', '.arrow-up').init();
    console.log("Hello Kraiviks");
});
