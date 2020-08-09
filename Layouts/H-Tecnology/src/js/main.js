import Scroll from './scroll';
import YoutubeWindow from './youtubeWindow';
// Main js file

window.addEventListener('DOMContentLoaded', ()=>{
    new Scroll('a[href^="#"]', '.arrow-up').init();
    new YoutubeWindow('.watch_video', '.video__overlay').init();
    console.log("Hello Kraiviks");
});
