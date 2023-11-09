"use strict";
// for compiling use : tsc --strict name.ts
var Bulb5 = /** @class */ (function () {
    function Bulb5() {
        this.wattage = 0;
        console.log("Bulb instantiated");
    }
    Bulb5.prototype.printInfo = function () {
        console.log("Philips bulb with wattage ".concat(this.wattage));
    };
    Bulb5.prototype.setWattage = function (wattage) {
        this.wattage = wattage;
    };
    return Bulb5;
}());
function eg41() {
    var b;
    b = new Bulb5();
    b.printInfo();
}
eg41();
