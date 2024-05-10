import * as fs from "fs/promises";

//creating directory

try {
    const info = await fs.stat("info.txt");
    console.log(info.isFile());
    }
 catch (error) {
    console.log(error)
}