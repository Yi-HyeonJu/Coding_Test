function solution(price) {
    return price < 100000 ? price
    : price < 300000 ? Math.floor(price-(price*0.05))
    : price < 500000 ? Math.floor(price-(price*0.1))
    : Math.floor(price-(price*0.2));
}