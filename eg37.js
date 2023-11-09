var Bulb = /** @class */ (function () {
    function Bulb() {
        console.log("Instance of the bulb instantiated");
    }
    Bulb.prototype.printBrand = function () {
        console.log("philips");
    };
    return Bulb;
}());
function eg37() {
    var b;
    b = new Bulb();
    b.printBrand();
}
eg37();
