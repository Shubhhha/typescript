var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// this code will compile 
var aaa7 = /** @class */ (function () {
    function aaa7() {
    }
    return aaa7;
}());
var bbb7 = /** @class */ (function (_super) {
    __extends(bbb7, _super);
    function bbb7() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return bbb7;
}(aaa7));
function eg57() {
    var a;
    var b;
    a = new bbb7();
    b = new aaa7();
    b.x = 10;
    b.y = 20; // dynamically a property will be added 
    console.log('b.x: ', b.x);
    console.log(' b.y: ', b.y);
}
eg57();
