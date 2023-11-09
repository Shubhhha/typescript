interface Bulb13 {
    wattage: number;
    setWattage(wattage: number): void;
    getWattage(): number
}
// the following wont compile
class AABulb2 implements Bulb13 {
    wattage: number;
    constructor() {
        this.wattage = 0;
    }
    setWattage(wattage: number): void {
        this.wattage = wattage;
    }
    getWattage(): number {
        return this.wattage
    }
    printBrand(): void {
        console.log("Philips");
    }
}


function eg47() {
    let b: Bulb13;
    b = new AABulb2();
    b.setWattage(60);
    console.log(b.getWattage());
    b.printBrand(); // incorrect 
}
eg47();