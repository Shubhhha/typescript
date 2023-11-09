// this code will compile
class aaa7 {
    x: number
}
class bbb7 extends aaa7 {
    y?: number
}
function eg57() {
    let a: aaa7;
    let b: bbb7;
    a = new bbb7();
    b = new aaa7();
    b.x = 10;
    b.y = 20; // dynamically a property will be added
    console.log('b.x: ', b.x);
    console.log(' b.y: ', b.y);
}
eg57();