// this code will compile 
class aaa6 {
    x: number
}
class bbb6 extends aaa6 {
    y?: number
}
function eg56() {
    let a: aaa6;
    let b: bbb6;
    a = new bbb6();
    b = new aaa6();

}
eg56();