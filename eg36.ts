class Bulb {
    printBrand(): void {
        console.log("Philips");
    }
}
function eg36() {
    let b: Bulb; // data type of b is bulb ; it can store addresss of bulb type object 
    b = new Bulb();
    b.printBrand();
}
eg36();