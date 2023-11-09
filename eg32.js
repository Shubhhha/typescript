function eg32() {
    var b;
    b = {
        wattage: 40,
        printWattage: function () {
            console.log(this.wattage); // this means is object k wattage property ki bat ho rhi hai.
        }
    };
    console.log('   b : ', b);
    var c;
    c = {
        wattage: 240,
        printWattage: function () {
            console.log("Wattage is ".concat(this.wattage));
        }
    };
    console.log('c: ', c);
}
eg32();
