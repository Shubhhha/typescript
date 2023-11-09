// for compiling use : tsc --strict name.ts
// this example wont conmpile 
class Bulb4 {
    wattage: number;
    constructor() {
        console.log("Bulb instantiated");
    }
    printInfo(): void {
        console.log(`Philips bulb with wattage ${this.wattage}`);
    }
    setWattage(wattage: number) {
        this.wattage = wattage;
    }
}

function eg40() {
    let b: Bulb4;
    b = new Bulb4();
    b.printInfo();
}
eg40();