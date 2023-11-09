// for compiling use : tsc --strict name.ts
class Bulb3 {
    wattage: number;
    constructor() {
        console.log("Bulb instantiated");
    }
    printInfo(): void {
        console.log(`Philips bulb with wattage ${this.wattage}`);
    }
}

function eg39() {
    let b: Bulb3;
    b = new Bulb3();
    b.printInfo();
}
eg39();