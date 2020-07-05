window.addEventListener('DOMContentLoaded', () =>{
    'use strict';

    const examplesBtn = document.querySelector('.skills-examples'),
          leftNav = document.querySelector('.left-nav');

    function openLeftNav() {
        examplesBtn.addEventListener('click', ()=>{
            leftNav.classList.toggle('show-left-nav');
        });
    }

    openLeftNav();
});