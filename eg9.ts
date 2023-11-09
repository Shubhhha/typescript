function eg9() {
    type WattageType = {
        wattage: number;
    }
    type BrandType = {
        brand: string;
    }
    let bulb = {
        wattage: 60,
        brand: "Philips"
    }
    let a: WattageType = bulb;
    let b: BrandType = bulb;
    console.log('a: ', a);
    console.log(' b: ', b);
    console.log('typeof a: ', typeof a.wattage);
    console.log('typeof : ', typeof a.brand);
    console.log("typeof", typeof b.wattage);
    console.log("typeof", typeof b.brand);


}
eg9();