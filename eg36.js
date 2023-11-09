var Bulb = /** @class */ (function () {
    function Bulb() {
    }
    Bulb.prototype.printBrand = function () {
        console.log("Philips");
    };
    return Bulb;
}());
function eg36() {
    var b; // data type of b is bulb ; it cana store addresss of bulb type object 
    b = new Bulb();
    b.printBrand();
}
eg36();
