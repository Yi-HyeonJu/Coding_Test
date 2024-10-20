function solution(n, k) {
    const free = Math.floor(n/10)
    return n*12000 + (k-free)*2000
}