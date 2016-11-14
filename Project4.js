/**
 *   @author Schwartz, Harris (hfschwartz21@gmail.com)
 *   @version 0.0.3
 *   @summary Project 4 code || created: 10.24.2016
 *   @todo
 */

"use strict";
const PROMPT = require('readline-sync');
const TITLE = 0;

let whichTask, averageRating, movieRatingPick;
let movies = [];

function main() {
    const NEW_RATING = 0;
    let infinite = 0;
    while (infinite < 1) {
        if (movies.length < 1) {
            populateMovies();
            setWhichTask();
        } else {
            setWhichTask();
            if (whichTask === NEW_RATING) {
                populateMovies();
            } else {
                chooseMovieRating();
                setAverageRatings();
                printRatings();
            }
        }
    }
}

main();

function setWhichTask() {
    while (typeof whichTask === 'undefined' || isNaN(whichTask) || whichTask < 0 || whichTask > 1) {
        whichTask = Number(PROMPT.question(`\nWhat would you like to do? [0=Enter a movie, 1=Display average ratings]: `));
    }
}

function populateMovies() {
    const COLUMNS = 4, TITLE = 0, RATING = 1, TOTAL_RATING = 2, NUM_RATINGS = 3, MIN_RATING = 0, MAX_RATING = 5;
    movies[movies.length] = [];
    let moviePick, newTitle;
    for (let i = 0; i < movies.length; i++) {
        console.log(`\t${i} = ${movies[i][TITLE]}`);
        newTitle = i;
    }
    while (typeof moviePick === 'undefined' || isNaN(moviePick) || moviePick < 0 || moviePick > movies.length) {
        moviePick = Number(PROMPT.question(`\nPlease enter a movie's number or enter ${newTitle} to enter your own movie: `));
    }
    if (moviePick != newTitle) {
        movies[moviePick][RATING] = -1;
        while (isNaN(movies[moviePick][RATING]) || movies[moviePick][RATING] < MIN_RATING || movies[moviePick][RATING] > MAX_RATING) {
            movies[moviePick][RATING] = Number(PROMPT.question(`\nPlease enter your rating for ${movies[moviePick][TITLE]} [0 = WORST'''5 = BEST]: `));
        }
        movies[moviePick][TOTAL_RATING] = movies[moviePick][TOTAL_RATING] + movies[moviePick][RATING];
        movies[moviePick][NUM_RATINGS] = movies[moviePick][NUM_RATINGS]++;
        whichTask = -2;
        return setWhichTask();
    } else {
        movies[newTitle] = [];
        for (let j = 0; j < COLUMNS; j++) {
            if (j === TITLE) {
                while (typeof movies[newTitle][TITLE] === 'undefined' || !/(^[a-zA-Z0-9 ]+$){1,35}/i.test(movies[newTitle][TITLE])) {
                    movies[newTitle][TITLE] = PROMPT.question(`\nEnter the title of the movie you'd like to rate: `)
                }
            } else if (j === RATING) {
                while (typeof movies[newTitle][TITLE] === 'undefined' || isNaN(movies[newTitle][RATING]) || movies[newTitle][RATING] < MIN_RATING || movies[newTitle][RATING] > MAX_RATING) {
                    movies[newTitle][RATING] = Number(PROMPT.question(`\nPlease enter movie rating (0-5 stars): `));
                }
            } else if (j === TOTAL_RATING) {
                movies[newTitle][TOTAL_RATING] = movies[newTitle][TOTAL_RATING] + movies[newTitle][RATING];
            } else if (j === NUM_RATINGS) {
                movies[newTitle][NUM_RATINGS] = movies[newTitle][NUM_RATINGS]++;
            }
        }
    }
    whichTask = -1;
    return setWhichTask();
}

function chooseMovieRating() {
    while (typeof movieRatingPick === 'undefined' || isNaN(movieRatingPick) || movieRatingPick < 0 || movieRatingPick > movies.length - 1) {
        for (let i = 0; i < movies.length; i++) {
            console.log(`\t${i} = ${movies[i][TITLE]}`);
        }
        movieRatingPick = Number(PROMPT.question("enter a movie's number to see its rating: "));
    }
}

function setAverageRatings() {
    const TOTAL_RATING = 2, NUM_RATINGS = 3;
    averageRating = Number(movies[movieRatingPick][TOTAL_RATING])/Number((movies[movieRatingPick][NUM_RATINGS]));
}

function printRatings() {
    console.log(`The average rating for ${movies[movieRatingPick][TITLE]} is ${averageRating}`);
}