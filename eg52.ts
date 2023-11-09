// this code will compile
class a2 {
    sam(): void {
        console.log("great");
    }
}

class b2 extends a2 {
}
function eg52() {
    let a: a2;
    let b: b2;
    a = new b2();
    b = new a2();
    a.sam();
    b.sam();
}
eg52();