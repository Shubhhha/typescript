"use strict";
var AABulb3 = /** @class */ (function () {
    function AABulb3() {
        this.wattage = 0;
    }
    AABulb3.prototype.setWattage = function (wattage) {
        this.wattage = wattage;
    };
    AABulb3.prototype.getWattage = function () {
        return this.wattage;
    };
    AABulb3.prototype.printBrand = function () {
        console.log("Philips");
    };
    return AABulb3;
}());
function eg49() {
    var b;
    b = new AABulb3();
    b.setWattage(60);
    console.log(b.getWattage());
}
eg49();
