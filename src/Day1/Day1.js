"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Day1p2 = exports.Day1p1 = void 0;
const ReadDataFile_1 = require("../ReadDataFile/ReadDataFile");
const sort = (x, y) => {
    return (x - y);
};
const splitArrayByMarker = (objs) => {
    let object = [];
    let result = [object];
    for (var i = 0; i < objs.length; i++) {
        if (objs[i].trim().length === 0) {
            object = [];
            result.push(object);
        }
        else {
            object.push(Number(objs[i]));
        }
    }
    return result;
};
const getSums = (input) => {
    return input.map((i) => i.reduce((a, b) => a + b, 0));
};
function Day1p1(filename) {
    // Read the file
    let datas = (0, ReadDataFile_1.ReadDataFile)(__dirname + '/' + filename);
    let foo = splitArrayByMarker(datas);
    let bar = getSums(foo);
    return (Math.max(...bar));
}
exports.Day1p1 = Day1p1;
function Day1p2(filename) {
    // Read the file
    let datas = (0, ReadDataFile_1.ReadDataFile)(__dirname + '/' + filename);
    let foo = splitArrayByMarker(datas);
    let bar = getSums(foo);
    return bar.sort(function (x, y) { return x - y; })
        .slice(-3)
        .reduce((accumulator, current) => {
        return accumulator + current;
    }, 0);
}
exports.Day1p2 = Day1p2;
console.log(Day1p1("demo.txt"));
console.log(Day1p1("p1.txt"));
console.log(Day1p2("demo.txt"));
console.log(Day1p2("p1.txt"));
//# sourceMappingURL=Day1.js.map