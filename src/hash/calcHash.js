import fs from 'fs';
import crypto from 'crypto';

const calculateHash = async () => {

    const fileName = './files/fileToCalculateHashFor.txt';
    const fileStream = fs.createReadStream(fileName);
    const hash = crypto.createHash('sha256');

    return new Promise((resolve, reject) => {

        fileStream.on('data', (chunk) => {
            hash.update(chunk);
        });

        fileStream.on('end', () => {
            const hashValue = hash.digest('hex');
            resolve(hashValue);
            console.log(hashValue);
        });

        fileStream.on('error', (error) => {
            reject(error);
        });
    });
}

await calculateHash();

