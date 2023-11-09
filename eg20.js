function eg20_some(x) {
    var square = x * x;
    var e, factorial;
    e = 1;
    factorial = 1;
    while (e <= x) {
        factorial = e * factorial;
        e++;
    }
    return [x, square, factorial];
}
function eg20() {
    var a = eg20_some(5);
    console.log('a: ', a);
    a[3] = 33;
    console.log('a: ', a);
}
eg20();
