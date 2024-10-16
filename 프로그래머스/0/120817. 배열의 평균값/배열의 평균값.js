function solution(numbers) {
    return numbers.reduce(
        (accumulator, currentValue) => accumulator + currentValue, 0
    ) / numbers.length;
}