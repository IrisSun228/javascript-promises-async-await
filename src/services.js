export function fecthWithTimeout(delay) {
    return new Promise(resolve => setTimeout(resolve, delay));
}