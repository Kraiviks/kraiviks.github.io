window.addEventListener('DOMContentLoaded', ()=> {
    'use strict';

    //Timer - Start

    const deadline = '2020-07-06';

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
              days = Math.floor(t / (1000 * 60 * 60 * 24)),
              hours = Math.floor(t / (1000 * 60 * 60) % 24),
              minutes = Math.floor((t / 1000 / 60) % 60),
              seconds = Math.floor((t / 1000) % 60);

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }


    function setClock(selector, endTime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);
        
        
        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endTime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0){
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadline);

    //Timer - End

    //Modal window - Start

    const modal = document.querySelector('.modal'),
          btn = document.querySelectorAll('[data-modal]'),
          btnClose = document.querySelector('[data-close]');
          
    btn.forEach(item =>{
        item.addEventListener('click', ()=>{
            modal.style.display = "block";
        });
    });

    btnClose.addEventListener('click', ()=>{
        modal.style.display = "none";
    });

    modal.addEventListener('click', (event) =>{
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
    
    document.addEventListener('keydown', (event)=>{
        if (event.code === 'Escape') {
            modal.style.display = "none";
        }
    });
    //Modal windows - End
}); 