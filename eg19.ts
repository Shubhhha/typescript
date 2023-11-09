function eg19_some(x: number, y: number) {
    console.log(x + "," + y);
}
function eg19() {
    let a: [number, number];
    a = [10, 20];
    eg19_some(...a)
}
eg19(); // wrong