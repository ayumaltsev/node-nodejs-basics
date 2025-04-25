import fs from 'fs';
import zlib from 'zlib';

const decompress = async () => {

    const uncompressedFileName = './files/fileToCompress.txt';
    const compressedFileName = './files/archive.gz';

    const readableStream = fs.createReadStream(compressedFileName);
    const writeableStream = fs.createWriteStream(uncompressedFileName);
    const gzip = zlib.createUnzip();

    readableStream.pipe(gzip).pipe(writeableStream);
};

await decompress();