function solution(n) {
    const num = Math.sqrt(n)
    return Number.isInteger(num) ? 1 : 2;
}