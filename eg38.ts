class Bulb1 {
    wattage: number;
    constructor(wattage: number) {
        this.wattage = wattage;
        console.log(`Bulb instantiated and wattage set to ${this.wattage}`);
    }
    printInfo(): void {
        console.log("Philips bulb with wattage  as " + this.wattage);
    }
}
function eg38() {
    let b: Bulb1;
    b = new Bulb1(60);
    b.printInfo();
}
eg38();
