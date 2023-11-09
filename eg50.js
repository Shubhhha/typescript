"use strict";
var AABulb4 = /** @class */ (function () {
    function AABulb4() {
        this.wattage = 0;
    }
    AABulb4.prototype.setWattage = function (wattage) {
        this.wattage = wattage;
    };
    return AABulb4;
}());
function eg50() {
    var b;
    b = new AABulb4();
    b.setWattage(60);
    console.log(b.getWattage());
}
eg50();
