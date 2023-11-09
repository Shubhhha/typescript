function eg32() {
    interface Buld {
        wattage: number;
        printWattage(): void;
    }
    let b: Buld
    b = {
        wattage: 40,
        printWattage(): void {
            console.log(this.wattage); // this means is object k wattage property ki bat ho rhi hai.
        }
    }
    console.log('   b : ', b);
    let c: Buld;
    c = {
        wattage: 240,
        printWattage(): void {
            console.log(`Wattage is ${this.wattage}`);
        }
    }
    console.log('c: ', c);
}
eg32();