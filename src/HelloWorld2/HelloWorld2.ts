import { ReadDataFile } from "../ReadDataFile/ReadDataFile"

export function Step1():void {
    console.log("Hello step 1.")

    // Read the file
    let datas:Array<string> = ReadDataFile(__dirname + '/' + "ReadLineInput.txt")

    console.log(datas)

}

Step1()
