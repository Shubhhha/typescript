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
var aaa4 = /** @class */ (function () {
    function aaa4() {
    }
    return aaa4;
}());
var bbb4 = /** @class */ (function (_super) {
    __extends(bbb4, _super);
    function bbb4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return bbb4;
}(aaa4));
function eg54() {
    var a;
    var b;
    a = new bbb4();
    b = new aaa4();
}
eg54();
