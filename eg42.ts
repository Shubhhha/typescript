// for compiling use : tsc --strict name.ts
class Bulb6 {
    wattage: number;
    price!: number; // strict initialization check will not be applied for price.
    constructor() {
        this.wattage = 0
        console.log("Bulb instantiated");
    }
    printInfo(): void {
        console.log(`Philips bulb with wattage ${this.wattage}`);
    }
    setWattage(wattage: number) {
        this.wattage = wattage;
    }
}

function eg42() {
    let b: Bulb6;
    b = new Bulb6();
    b.printInfo();
}
eg42();