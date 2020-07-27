function openLeftNav() {
    const examplesBtn = document.querySelector('.viks'),
          leftNav = document.querySelector('.left-nav'),
          sectionShadow = document.querySelector('section');

    examplesBtn.addEventListener('click', ()=>{
        leftNav.classList.toggle('show-left-nav');
        sectionShadow.classList.toggle('border-left-shadow');
    });
}

export default openLeftNav;