"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLeap = void 0;
function isLeap(year) {
    if (year % 400 === 0) {
        return true;
    }
    if (year % 4 === 0 && year % 100 !== 0) {
        return true;
    }
    return false;
}
exports.isLeap = isLeap;
//# sourceMappingURL=HelloWorld.js.map