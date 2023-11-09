"use strict";
// the following wont compile 
var AABulb = /** @class */ (function () {
    function AABulb() {
        this.wattage = 0;
    }
    AABulb.prototype.setWattage = function (wattage) {
        this.wattage = wattage;
    };
    AABulb.prototype.getWattage = function () {
        return this.wattage;
    };
    return AABulb;
}());
function eg46() {
    var b;
    b = new Bulb(); // incorrect , interface cannot be instantiated
}
eg46();
