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
var aaa3 = /** @class */ (function () {
    function aaa3() {
    }
    aaa3.prototype.sam = function () {
        console.log("great");
    };
    return aaa3;
}());
var bbb3 = /** @class */ (function (_super) {
    __extends(bbb3, _super);
    function bbb3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return bbb3;
}(aaa3));
function eg53() {
    var a;
    var b;
    a = new bbb3();
    b = new aaa3();
}
eg53();
