function eg19_some(x, y) {
    console.log(x + "," + y);
}
function eg19() {
    var a;
    a = [10, 20];
    eg19_some.apply(void 0, a);
}
eg19(); // wrong
