"use strict";
// for compiling use : tsc --strict name.ts
// this example wont conmpile 
var Bulb4 = /** @class */ (function () {
    function Bulb4() {
    }
    Bulb4.prototype.Bulb = function () {
        console.log("Bulb instantiated");
    };
    Bulb4.prototype.printInfo = function () {
        console.log("Philips bulb with wattage ".concat(this.wattage));
    };
    Bulb4.prototype.setWattage = function (wattage) {
        this.wattage = wattage;
    };
    return Bulb4;
}());
function eg40() {
    var b;
    b = new Bulb4();
    b.printInfo();
}
eg40();
