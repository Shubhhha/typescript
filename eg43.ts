// for compiling use : tsc --strict name.ts
class Bulb7 {
    wattage: number;
    price!: number; // strict initialization check will not be applied for price.
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

function eg43() {
    let b: Bulb7;
    b = new Bulb7();
    b.setWattage(60)
    b.setPrice(100)
    b.printInfo();
}
eg43();