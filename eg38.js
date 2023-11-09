var Bulb1 = /** @class */ (function () {
    function Bulb1(wattage) {
        this.wattage = wattage;
        console.log("Bulb instantiated and wattage set to ".concat(this.wattage));
    }
    Bulb1.prototype.printInfo = function () {
        console.log("Philips bulb with wattage  as " + this.wattage);
    };
    return Bulb1;
}());
function eg38() {
    var b;
    b = new Bulb1(60);
    b.printInfo();
}
eg38();
