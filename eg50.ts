// very very imp example
interface Bulb15 {
    wattage: number;
    setWattage(wattage: number): void;
    getWattage(): number
}
class AABulb4 {
    wattage: number;
    constructor() {
        this.wattage = 0;
    }
    setWattage(wattage: number): void {
        this.wattage = wattage;
    }
}


function eg50() {
    let b: Bulb15;
    b = new AABulb4();
    b.setWattage(60);
    console.log(b.getWattage());
}
eg50();