import openLeftNav from './modules/leftNav';

window.addEventListener('DOMContentLoaded', () =>{
    'use strict';
    
    openLeftNav();

    // class sectionCard {
    //     constructor(tittle, parentSelector, ...classes) {
    //         this.tittle = tittle;
    //         this.parent = document.querySelector(parentSelector);
    //         this.classes = classes;
    //     }

    //     render() {
    //         const element = document.createElement('section');

    //         if (this.classes.length === 0) {
    //             this.classes = ['close'];
    //         }

    //         this.classes.forEach(className => element.classList.add(className));

    //         element.innerHTML = `${this.tittle}`;
    //         this.parent.append(element);
    //     }
    // }
    
    // new sectionCard(
    //     'About me',
    //     'article',
    //     'hide'
    // ).render();
    // new sectionCard(
    //     'My scills',
    //     'article',
    //     'hide'
    // ).render();
});