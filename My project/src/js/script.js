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

    class MenuCard {
        constructor(tittle, parentSelector, ...classes) {
            this.tittle = tittle;
            this.parent = document.querySelector(parentSelector);
            this.classes = classes;
        }

        render() {
            const element = document.createElement('section');

            if (this.classes.length === 0) {
                this.classes = ['close'];
            }

            this.classes.forEach(className => element.classList.add(className));

            element.innerHTML = `${this.tittle}`;
            this.parent.append(element);
        }
    }
    
    new MenuCard(
        'About me',
        'article',
        'hide'
    ).render();
    new MenuCard(
        'My scills',
        'article',
        'hide'
    ).render();
});