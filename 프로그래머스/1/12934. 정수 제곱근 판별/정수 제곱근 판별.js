function solution(n) {
   for(let i = 1; i * i <= n; i++){
       if(i * i == n){
           return Math.pow(i + 1, 2);
       }
   }
    return -1
}