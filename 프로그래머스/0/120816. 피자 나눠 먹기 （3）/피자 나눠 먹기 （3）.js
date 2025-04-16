function solution(slice, n) {
    let count = 0;
    for (let i = 1; ; i++) {
        if (i * slice >= n) {
            count = i;
            break;
        }
    }
    return count;
}
