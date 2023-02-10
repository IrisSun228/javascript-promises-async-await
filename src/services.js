export function fetchWithTimeout(delay) {
    return new Promise(resolve => setTimeout(resolve, delay));
}

export function fetchMovies() {}