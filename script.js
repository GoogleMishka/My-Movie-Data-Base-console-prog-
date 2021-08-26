'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели? ' , '');

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    private : false
};



const 
answer1 = prompt('Один из просмотренных фильмов', ''),
answer2 = +prompt('На сколько оцените его?', ''),
answer3 = prompt('Один из просмотренных фильмов', ''),
answer4 = +prompt('На сколько оцените его?', '');

personalMovieDB.movies[answer1] = answer2;
personalMovieDB.movies[answer3] = answer4;


console.log(personalMovieDB);