// this code will compile 
class aaa {

}

class bbb extends aaa {
}

function eg51() {
    let a: aaa;
    let b: bbb;
    a = new bbb();
    b = new aaa();
}
eg51();