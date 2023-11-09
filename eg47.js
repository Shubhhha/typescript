"use strict";
// the following wont compile
var AABulb1 = /** @class */ (function () {
    function AABulb1() {
        this.wattage = 0;
    }
    AABulb1.prototype.setWattage = function (wattage) {
        this.wattage = wattage;
    };
    AABulb1.prototype.getWattage = function () {
        return this.wattage;
    };
    return AABulb1;
}());
function eg47() {
    var b;
    b = new AABulb1();
    b.setWattage(60);
    console.log(b.getWattage());
}
eg47();
