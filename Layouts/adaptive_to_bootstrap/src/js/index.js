// Main js file

window.addEventListener('DOMContentLoaded', ()=>{
    try {
        baguetteBox.run('.gallery');
        console.log("Kraiivks");
    } catch (error) {
        console.log(`Oops error: ${error}`);
    }
});