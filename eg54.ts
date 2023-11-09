// this code will compile
class aaa4 {
    x: number
}
class bbb4 extends aaa4 {

}

function eg54() {
    let a: aaa4;
    let b: bbb4;
    a = new bbb4();
    b = new aaa4()
}
eg54();