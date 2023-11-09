class aaa3 {
    sam(): void {
        console.log("great");
    }
}
class bbb3 extends aaa3 {
    tom(): void {
        console.log("cool");
    }
}
function eg53() {
    let a: aaa3;
    let b: bbb3;
    a = new bbb3();
    b = new aaa3(); // this is incorrect 
}
eg53();