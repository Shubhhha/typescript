"use strict";
// for compiling use : tsc --strict name.ts
var Bulb8 = /** @class */ (function () {
    function Bulb8() {
        this.wattage = 0;
        console.log("Bulb instantiated");
    }
    Bulb8.prototype.printInfo = function () {
        console.log("Philips bulb with wattage ".concat(this.wattage));
        if (this.price != undefined) {
            console.log("Price is ".concat(this.price));
        }
    };
    Bulb8.prototype.setWattage = function (wattage) {
        this.wattage = wattage;
    };
    Bulb8.prototype.setPrice = function (price) {
        this.price = price;
    };
    return Bulb8;
}());
function eg44() {
    var b;
    b = new Bulb8();
    b.setWattage(60);
    b.setPrice(100);
    b.printInfo();
}
eg44();
