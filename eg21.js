function eg21_some(x) {
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
function eg21() {
    var _a = eg21_some(5), num = _a[0], sqr = _a[1], fact = _a[2];
    console.log('fact: ', fact);
    console.log('num: ', num);
    console.log('sqr: ', sqr);
}
eg21();
