function solution(my_string, n) {
    const step1 = my_string.split('')
    
    const answer = step1.map(step => {
        return step.repeat(n);
    });
                           
    return answer.join('');;
}