function eg21_some(x: number) {
    let square = x * x;
    let e, factorial;
    e = 1;
    factorial = 1;
    while (e <= x) {
        factorial = e * factorial;
        e++;
    }
    return [x, square, factorial];
}

function eg21() {
    let [num, sqr, fact] = eg21_some(5);
    console.log('fact: ', fact);
    console.log('num: ', num);
    console.log('sqr: ', sqr);

}
eg21();