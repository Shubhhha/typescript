// for compiling use : tsc --strict name.ts
class Bulb5 {
    wattage: number;
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

function eg41() {
    let b: Bulb5;
    b = new Bulb5();
    b.printInfo();
}
eg41();