let btn = document.querySelector('.btn');

if (btn) {
    btn.addEventListener('click', Animations);
}

function Animations() {
    const box = document.querySelector('.box');
    let pos = 0;
    
    let id = setInterval(frame, 10);

    function frame(){
        if (pos < 300) {
            pos++;
            box.style.top = pos + 'px';
            box.style.left = pos + 'px';
        } else {
            clearInterval(id);
        }
    }
}

