interface Bulb12 {
    wattage: number;
    setWattage(wattage: number): void;
    getWattage(): number
}
// the following wont compile
class AABulb1 implements Bulb12 {
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
}


function eg47() {
    let b: Bulb12;
    b = new AABulb1();
    b.setWattage(60);
    console.log(b.getWattage());
}
eg47();