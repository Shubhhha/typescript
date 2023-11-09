class Bulb {
    constructor() {
        console.log("Instance of the bulb instantiated");
    }
    printBrand(): void {
        console.log("philips");
    }
}
function eg37() {
    let b: Bulb;
    b = new Bulb();
    b.printBrand();
}
eg37();