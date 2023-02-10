import {fetchWithTimeout, fetchMovies, fetchBooks, asyncFetchMovies, asyncFetchBooks} from "./services";
const movies = require("./data/movies.json");

function getBooksAndMovies() {
    return Promise.all([fetchBooks(), fetchMovies()])
        .then(([books, movies ]) => ({
            books,
            movies
        }))
        .catch(error => console.log("Error fetching books and movies", error));
}

const getBooksAndMoviesPromise = getBooksAndMovies();
getBooksAndMoviesPromise.then(results => {console.log('getBooksAndMoviesPromise', results)});

function getBooksOrMovies() {
    return Promise.race([fetchBooks(), fetchMovies()])
        .then(results => results)
        .catch(error => console.log("Error waiting for the promise race", error));
}

const getBooksOrMoviesPromise = getBooksOrMovies();
getBooksOrMoviesPromise.then(results => {console.log('getBooksOrMoviesPromise', results)});

async function getBooksAndMoviesAsync() {
    try {
        const [books, movies] = await Promise.all([asyncFetchBooks(), asyncFetchMovies()]);
        return {books, movies};
    } catch (error) {
        console.log("Error fetch books and movies", error);
    }
}

async function getBooksOrMoviesAsync() {
    try {

    } catch (error) {
        console.error("Error waiting for the promise race", error);
    }
}