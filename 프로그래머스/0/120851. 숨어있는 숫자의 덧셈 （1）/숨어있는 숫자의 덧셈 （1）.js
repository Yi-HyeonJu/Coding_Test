function solution(my_string) {
    return my_string
        .split("")
        .filter(string => !isNaN(string))
        .map(Number)
        .reduce((acc, cur) => acc + cur, 0);
}