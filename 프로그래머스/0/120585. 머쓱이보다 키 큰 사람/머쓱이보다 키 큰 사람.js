function solution(array, height) {
    var answer = 0;
    array.filter(a => {if(height < a){answer++}})
    return answer;
}