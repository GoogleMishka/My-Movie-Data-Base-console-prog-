'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели? ', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели? ', '');
        }
    },
    remeberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const answer1 = prompt('Один из просмотренных фильмов', ''),
                  answer2 = +prompt('На сколько оцените его?', '');
            if (answer1 != null && answer2 != null && answer1 != '' && answer1 != '' && answer1.length < 50) {
                personalMovieDB.movies[answer1] = answer2;
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотренно довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count > 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function() {
        if (!personalMovieDB.private) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for (let i = 0; i < 3; i++) {
            let a = prompt(`Ваш любимый жанр под номером ${i + 1}`);
            while (a == null || a == ""){
                a = prompt(`Ваш любимый жанр под номером ${i + 1}`);
            }
            personalMovieDB.genres[i] = a;
        }
        personalMovieDB.genres.forEach(function(item, i) {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    },
    toggleVisibleMyDB: function() {
        personalMovieDB.private = !personalMovieDB.private;
    }
};

personalMovieDB.start();

personalMovieDB.remeberMyFilms();

personalMovieDB.detectPersonalLevel();

// personalMovieDB.toggleVisibleMyDB();

personalMovieDB.writeYourGenres();

personalMovieDB.showMyDB();