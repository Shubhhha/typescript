"use strict";
// for compiling use : tsc --strict name.ts
var Bulb6 = /** @class */ (function () {
    function Bulb6() {
        this.wattage = 0;
        console.log("Bulb instantiated");
    }
    Bulb6.prototype.printInfo = function () {
        console.log("Philips bulb with wattage ".concat(this.wattage));
    };
    Bulb6.prototype.setWattage = function (wattage) {
        this.wattage = wattage;
    };
    return Bulb6;
}());
function eg42() {
    var b;
    b = new Bulb6();
    b.printInfo();
}
eg42();
