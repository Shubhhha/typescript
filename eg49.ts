// very very imp example
interface Bulb14 {
    wattage: number;
    setWattage(wattage: number): void;
    getWattage(): number
}
class AABulb3 {
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


function eg49() {
    let b: Bulb14;
    b = new AABulb3();
    b.setWattage(60);
    console.log(b.getWattage());
}
eg49();