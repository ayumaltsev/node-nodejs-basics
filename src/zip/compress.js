import fs from 'fs';
import zlib from 'zlib';

const compress = async () => {

    const fileToCompressName = './files/fileToCompress.txt';
    const archiveFileName = './files/archive.gz';

    const readableStream = fs.createReadStream(fileToCompressName);
    const writeableStream = fs.createWriteStream(archiveFileName);
    const gzip = zlib.createGzip();

    readableStream.pipe(gzip).pipe(writeableStream);
};

await compress();