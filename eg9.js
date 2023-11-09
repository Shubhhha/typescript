function eg9() {
    var bulb = {
        wattage: 60,
        brand: "Philips"
    };
    var a = bulb;
    var b = bulb;
    console.log('typeof a: ', typeof a.wattage);
    console.log('typeof b: ', typeof b.wattage);
}
eg9();
