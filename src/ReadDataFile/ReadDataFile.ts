const lineByLine = require('n-readlines');
export function ReadDataFile(filename: string):string[] {
    let DataToReturn:string[] = []
    let liner = new lineByLine(filename)

    let line:string
    // let lineNumber:number = 0;

    while (line = liner.next()) {
        //console.log('Line ' + lineNumber + ': ' + line.toString());
        //lineNumber++;
        DataToReturn.push(line.toString())
    }

    return DataToReturn
}



const fs = require('fs');
const readline = require('readline');
export function ReadDataFileAsync(filename: string):string[] {
    let DataToReturn:Array<string> = []

    console.log("Reading from " + filename)

    void (async function(return_data:Array<string>) {
        const rl = readline.createInterface({
            input: fs.createReadStream(filename),
            crlfDelay: Infinity,
        });

        for await (const line of rl) {
            console.log(line)
            return_data.push(line)
        }

        await new Promise((res) => rl.once('close', res));

        return return_data
    })(DataToReturn);

    return DataToReturn;
}

