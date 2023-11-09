interface Bulb {
    wattage: number;
    setWattage(wattage: number): void;
    getWattage(): number
}
// the following wont compile 
class AABulb implements Bulb {
}