"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Step1 = void 0;
const ReadDataFile_1 = require("../ReadDataFile/ReadDataFile");
function Step1() {
    console.log("Hello step 1.");
    // Read the file
    let datas = (0, ReadDataFile_1.ReadDataFile)(__dirname + '/' + "ReadLineInput.txt");
    console.log(datas);
}
exports.Step1 = Step1;
Step1();
//# sourceMappingURL=HelloWorld2.js.map