function solution(s){
    let p_count = 0
    let y_count = 0
    const lowerS = s.toLowerCase();

    for(let i = 0; i < lowerS.length; i++ ){
        if(lowerS[i] === 'p'){
            p_count += 1
        } else if (lowerS[i] === 'y'){ 
            y_count += 1
        }
    }
    return p_count === y_count;
}