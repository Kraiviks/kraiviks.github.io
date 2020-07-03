'use strict';

document.addEventListener("DOMContentLoaded", ()=>{
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    movieDB.movies.sort();
    
    const ads = document.getElementsByClassName("promo__adv"),
          genre = document.querySelector(".promo__genre"),
          bg = document.querySelector('.promo__bg'),
          listFilms = document.querySelector(".promo__interactive-list"),
          addForm = document.querySelector('.add'),
          addInput = addForm.querySelector('.adding__input'),
          checkbox = addForm.querySelector('[type="checkbox"]');
    
    function addNewFilm(event) {
        event.preventDefault();
        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (newFilm){

            if (newFilm.length >= 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            movieDB.movies.push(newFilm);
            movieDB.movies.sort();
            console.log(movieDB.movies);
            createMovieList(movieDB.movies, listFilms);
        }

        if (favorite) {
            console.log("Добавляем любимый фильм");
        }
        event.target.reset();
    }

    addForm.addEventListener('submit', addNewFilm);

    ads[0].remove();
    
    genre.textContent = "Драма";
    
    bg.style.backgroundImage = "url(img/bg.jpg)";
 
    function createMovieList(films, parent){
        parent.innerHTML = "";
        films.sort();

        films.forEach((film, i)=>{
            // listFilms[i].innerHTML = `${i+1}. ${item}`; my)
            parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${film}
                <div class="delete"></div>
            </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) =>{
            btn.addEventListener('click', ()=>{
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(films, parent); 
            });
        });
        
    } 
    createMovieList(movieDB.movies, listFilms);  
});

