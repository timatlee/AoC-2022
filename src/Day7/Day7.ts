/*
https://github.com/FriendlyUser1/adventofcode/blob/main/2022/day7/tree.js
*/

import { ReadDataFile, isNumber } from "../ReadDataFile/ReadDataFile"

class Tree {
    view: Object = {}
    pwd: Object[] = []

    constructor() {
        this.view = {};
        this.pwd = [];
    }

    add(item: string[]) {
        let curDir = this.pwd.reduce((curDir: any, d: any) => curDir[d], this.view);
        curDir[item[1]] = isNumber(item[0]) ? parseInt(item[0]) : {};
    }

    cd(name: string) {
        if (name === "/") this.pwd = [];
        else if (name === "..") this.pwd.pop();
        else this.pwd.push(name);
    }
}




export function part1(filename: String): number {
    let datas = ReadDataFile(__dirname + '/' + filename)

    let tree = new Tree();
    for (let i = 0; i < datas.length; i++) {
        let ins: string[] = datas[i].trim().split(" ");
        if (ins[0] === "$") {
            if (ins[1] === "cd") {
                tree.cd(ins[2])
            }
        } else {
            tree.add(ins);
        }
    }

    let dirs: object = {};

    // Get sizes of directories
    const crawl = (dir: string = "", branch: Object = tree.view) => {
        let size = 0;
        for (let [k, v] of Object.entries(branch)) {
            if (isNumber(v)) {
                size += v;
            }
            else {
                size += crawl(`${dir}/${k}`, branch[k])
            }
        }
        dirs[dir ? dir : "/"] = size;
        return size;
    }
    crawl();

    // Sort the `dirs` object
    dirs = Object.fromEntries(Object.entries(dirs).sort((a, b) => a[1] - b[1]));

    let smallDirSizes: number = Object.values(dirs)
        .filter((n) => n < 100000)
        .reduce((a, n) => a + n, 0)

    return smallDirSizes
}

export function part2(filename: String): number {
    let datas = ReadDataFile(__dirname + '/' + filename)

    let tree = new Tree();
    for (let i = 0; i < datas.length; i++) {
        let ins: string[] = datas[i].trim().split(" ");
        if (ins[0] === "$") {
            if (ins[1] === "cd") {
                tree.cd(ins[2])
            }
        } else {
            tree.add(ins);
        }
    }

    let dirs: any = {};

    // Get sizes of directories
    const crawl = (dir: string = "", branch: Object = tree.view) => {
        let size = 0;
        for (let [k, v] of Object.entries(branch)) {
            if (isNumber(v)) {
                size += v;
            }
            else {
                size += crawl(`${dir}/${k}`, branch[k])
            }
        }
        dirs[dir ? dir : "/"] = size;
        return size;
    }
    crawl();

    dirs = Object.fromEntries(Object.entries(dirs).sort((a, b) => a[1] - b[1]));

    let spaceNeeded:number = 30000000 - (70000000 - dirs["/"])
	let deleteDir:string = Object.keys(dirs).filter((dir) => dirs[dir] >= spaceNeeded)[0];

    return dirs[deleteDir]
}

console.log(part1("demo.txt"))
console.log(part1("p1.txt"))

console.log(part2("demo.txt"))
console.log(part2("p1.txt"))
