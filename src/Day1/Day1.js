"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Day1p2 = exports.Day1p1 = void 0;
const ReadDataFile_1 = require("../ReadDataFile/ReadDataFile");
function Day1p1(filename) {
    // Read the file
    let datas = (0, ReadDataFile_1.ReadDataFile)(__dirname + '/' + filename);
    let lastMax = -1;
    let elfNumber = 0;
    let elfCalorie = 0;
    for (let data of datas) {
        if (data.trim().length > 0) {
            let calCount = Number(data);
            elfCalorie += calCount;
        }
        else {
            // Next elf...
            if (elfCalorie > lastMax) {
                lastMax = elfCalorie;
            }
            elfCalorie = 0;
        }
    }
    return lastMax;
}
exports.Day1p1 = Day1p1;
function Day1p2(filename) {
    // Read the file
    let datas = (0, ReadDataFile_1.ReadDataFile)(__dirname + '/' + filename);
    let maxes = [];
    let elfNumber = 0;
    let elfCalorie = 0;
    for (let data of datas) {
        if (data.trim().length > 0) {
            let calCount = Number(data);
            elfCalorie += calCount;
        }
        else {
            // Next elf...
            maxes.push(elfCalorie);
            elfCalorie = 0;
        }
    }
    // edge case - last elf needs ot be added.
    maxes.push(elfCalorie);
    maxes.sort((x, y) => x > y ? 1 : x < y ? -1 : 0);
    const result = maxes.slice(-3).reduce((accumulator, current) => {
        return accumulator + current;
    }, 0);
    return result;
}
exports.Day1p2 = Day1p2;
console.log(Day1p1("demo.txt"));
console.log(Day1p1("p1.txt"));
console.log(Day1p2("demo.txt"));
console.log(Day1p2("p1.txt"));
//# sourceMappingURL=Day1.js.map