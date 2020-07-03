"use strict";

let personalMovieDB = {
    count: 0,
    movies:{},
    actors:{},
    genres:[],
    privat:true,
    start: () =>{
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

        while(personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count) ){
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    rememberMyFilms: () =>{
        for (let i = 0; i < 2; i++) {
            const a = prompt("Один из последних просмотренных фильмов?", ""),
                  b = +prompt("На сколько оцените его?", "");
                  
            if (a != null && b != null && a != "" && b != "" && a.length <= 50) {
                personalMovieDB.movies[a] = b;
                console.log("dore");
            } else {
                console.log("error");
                i--;
            }
        }
    },
    detectPersonalLevel: () =>{
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        }else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
            console.log("Вы классический зритель");
        }else if(personalMovieDB.count >= 30){
            console.log("Вы киноман");
        }else{
            console.log("error");
        }
    },
    showMyDB: () =>{
        if(!personalMovieDB.privat){
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: () =>{
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        }else{
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: () =>{
        // for (let i = 1; i <= 3; i++) {
        //     let genre = prompt(`Ваш любимый жанр под номером ${i}`);
            
        //     if (genre == null || genre == "") {
        //         console.log("Вы ввели некорректные данные или оставили пустую строку!");
        //         i--;
        //     } else {
        //         personalMovieDB.genres[i - 1] = genre;
        //     }
            
        // }
        for (let i = 1; i <= 2; i++) {
            let genres = prompt(`Введите любимые жанры через запятую!`).toLowerCase();
            
            if (genres == null || genres == "") {
                console.log("Вы ввели некорректные данные или оставили пустую строку!");
                i--;
            } else {
                personalMovieDB.genres = genres.split(", ");
                personalMovieDB.genres.sort();
            }
            
        }
        personalMovieDB.genres.forEach((item, i)=>{
            console.log(`Любимый жанр # ${i + 1} - это ${item}`);
        });
    }
};

personalMovieDB.start();

personalMovieDB.rememberMyFilms();

personalMovieDB.detectPersonalLevel();

personalMovieDB.showMyDB();

personalMovieDB.writeYourGenres();