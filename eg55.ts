// this code will not compile
class aaa5 {
    x: number;
}
class bbb5 extends aaa5 {
    y: number;
}
function eg55() {
    let a: aaa5;
    let b: bbb5;
    a = new bbb5();
    b = new aaa5();
}
eg55();