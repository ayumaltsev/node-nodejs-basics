import fs from 'fs';

const read = async () => {

    const fileName = './files/fileToRead.txt';
    const readableStream = fs.createReadStream(fileName);

    readableStream.on('data', (chunk) => {
        process.stdout.write(chunk);
    });

    readableStream.on('end', () => {
    });
};

await read();