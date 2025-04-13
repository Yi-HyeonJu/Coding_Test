function solution(sides) {
    const max = Math.max(...sides);
    const sum = sides.reduce((acc, cur) => acc + cur, 0);
    
    const remainingNum = sum - max;
    
    return max < remainingNum ? 1 : 2;
}
