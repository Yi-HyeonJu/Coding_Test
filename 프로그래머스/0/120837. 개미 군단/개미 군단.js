function solution(hp) {
    const five = Math.floor(hp / 5);
    const three = Math.floor((hp - 5 * five) / 3);
    const one = hp - (5 * five + 3 * three);

    return five + three + one;
}