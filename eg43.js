"use strict";
// for compiling use : tsc --strict name.ts
var Bulb7 = /** @class */ (function () {
    function Bulb7() {
        this.wattage = 0;
        console.log("Bulb instantiated");
    }
    Bulb7.prototype.printInfo = function () {
        console.log("Philips bulb with wattage ".concat(this.wattage));
        if (this.price != undefined) {
            console.log("Price is ".concat(this.price));
        }
    };
    Bulb7.prototype.setWattage = function (wattage) {
        this.wattage = wattage;
    };
    Bulb7.prototype.setPrice = function (price) {
        this.price = price;
    };
    return Bulb7;
}());
function eg43() {
    var b;
    b = new Bulb7();
    b.setWattage(60);
    b.setPrice(100);
    b.printInfo();
}
eg43();
