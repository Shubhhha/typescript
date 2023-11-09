interface Bulb {
    wattage: number;
    setWattage(wattage: number): void;
    getWattage(): number
}
// the following wont compile 
class AABulb implements Bulb {
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


function eg46() {
    let b: Bulb;
    b = new Bulb(); // incorrect , interface cannot be instantiated
}
eg46();