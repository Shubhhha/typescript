function eg20_some(x: number) {
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

function eg20() {
    let a = eg20_some(5);
    console.log('a: ', a);
    a[3] = 33;
    console.log('a: ', a);


}
eg20();