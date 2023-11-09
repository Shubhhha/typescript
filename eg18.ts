function eg18_some(x: number, y: number) {
    console.log(x + "," + y);
}
function eg4() {
    let a = [10, 20];
    eg18_some(...a);
}
eg18(); // wrong