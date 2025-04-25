import fs from 'fs';
import {Transform} from 'stream';

const write = async () => {
    const fileName = './files/fileToWrite.txt';
    const writableStream = fs.createWriteStream(fileName);


    process.stdin.pipe(writableStream);
};

await write();