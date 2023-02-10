export function fetchWithTimeout(delay) {
    return new Promise(resolve => setTimeout(resolve, delay));
}

export function fetchMovies() {
    return fetch("./data/movies.json")
        .then(response => response.json())
        .then(movies => movies)
        .catch(error => console.log(error));
}