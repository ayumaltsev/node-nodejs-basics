import fs from 'fs/promises';

const read = async () => {

    const fileName = './files/fileToRead.txt';
    const fileExists = async (filePath) => {
        try {
            await fs.access(filePath);
            return true;
        } catch (error) {
            if (error.code === 'ENOENT') {
                return false;
            }
            throw error;
        }
    }

    if (await fileExists(fileName)) {
        const data = await fs.readFile(fileName, 'utf-8');
        console.log(data);
    } else {
        throw new Error('FS operation failed');
    }
};

await read();
