"use strict";
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
var aaa = /** @class */ (function () {
    function aaa() {
    }
    return aaa;
}());
var bbb = /** @class */ (function (_super) {
    __extends(bbb, _super);
    function bbb() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return bbb;
}(aaa));
function eg51() {
    var a;
    var b;
    a = new bbb();
    b = new aaa();
}
eg51();
