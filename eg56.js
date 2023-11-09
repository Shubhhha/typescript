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
var aaa6 = /** @class */ (function () {
    function aaa6() {
    }
    return aaa6;
}());
var bbb6 = /** @class */ (function (_super) {
    __extends(bbb6, _super);
    function bbb6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return bbb6;
}(aaa6));
function eg56() {
    var a;
    var b;
    a = new bbb6();
    b = new aaa6();
}
eg56();
