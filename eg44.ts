// for compiling use : tsc --strict name.ts
class Bulb8 {
    wattage: number;
    price?: number; // strict initialization check will not be applied for price.
    constructor() {
        this.wattage = 0
        console.log("Bulb instantiated");
    }
    printInfo(): void {
        console.log(`Philips bulb with wattage ${this.wattage}`);
        if (this.price != undefined) {
            console.log(`Price is ${this.price}`);
        }
    }
    setWattage(wattage: number) {
        this.wattage = wattage;
    }
    setPrice(price: number) {
        this.price = price;
    }
}

function eg44() {
    let b: Bulb8;
    b = new Bulb8();
    b.setWattage(60)
    b.setPrice(100)
    b.printInfo();
}
eg44();