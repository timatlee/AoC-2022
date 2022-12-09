"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadDataFileAsync = exports.isNumber = exports.ReadDataFile = void 0;
const lineByLine = require('n-readlines');
function ReadDataFile(filename) {
    let DataToReturn = [];
    let liner = new lineByLine(filename);
    let line;
    // let lineNumber:number = 0;
    while (line = liner.next()) {
        //console.log('Line ' + lineNumber + ': ' + line.toString());
        //lineNumber++;
        DataToReturn.push(line.toString());
    }
    return DataToReturn;
}
exports.ReadDataFile = ReadDataFile;
function isNumber(numStr) {
    return !isNaN(parseFloat(numStr)) && !isNaN(+numStr);
}
exports.isNumber = isNumber;
const fs = require('fs');
const readline = require('readline');
function ReadDataFileAsync(filename) {
    let DataToReturn = [];
    console.log("Reading from " + filename);
    void (async function (return_data) {
        const rl = readline.createInterface({
            input: fs.createReadStream(filename),
            crlfDelay: Infinity,
        });
        for await (const line of rl) {
            console.log(line);
            return_data.push(line);
        }
        await new Promise((res) => rl.once('close', res));
        return return_data;
    })(DataToReturn);
    return DataToReturn;
}
exports.ReadDataFileAsync = ReadDataFileAsync;
//# sourceMappingURL=ReadDataFile.js.map