function solution(n){
    return String(n).split('').reduce((sum, cur) => sum + +cur, 0);
}