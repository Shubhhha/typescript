"use strict";
// for compiling use : tsc --strict name.ts
var Bulb3 = /** @class */ (function () {
    function Bulb3() {
    }
    Bulb3.prototype.Bulb = function () {
        console.log("Bulb instantiated");
    };
    Bulb3.prototype.printInfo = function () {
        console.log("Philips bulb with wattage ".concat(this.wattage));
    };
    return Bulb3;
}());
function eg39() {
    var b;
    b = new Bulb3();
    b.printInfo();
}
eg39();
