export function fectWithTimeout(delay) {
    return new Promise(resolve => setTimeout(resolve, delay));
}