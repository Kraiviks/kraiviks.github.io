export default class Scroll {
    constructor(selector, upSelector) {
        this.selector = document.querySelectorAll(selector);
        this.upElem = document.querySelector(upSelector);
    }

    init() {

        window.addEventListener('scroll', () => {
            if (document.documentElement.scrollTop > 700) {
                this.upElem.classList.add('animated', 'fadeIn');
                this.upElem.classList.remove('fadeOut');
            } else {
                this.upElem.classList.add('fadeOut');
                this.upElem.classList.remove('fadeIn');
            }
        });

        this.selector.forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                const id = link.getAttribute('href');

                document.querySelector(id).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        });
    }
}



