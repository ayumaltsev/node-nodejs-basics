import fs from 'fs/promises';

const rename = async () => {

    const wrongFilename = './files/wrongFilename.txt';
    const properFilename = './files/properFilename.md';

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

    if ((await fileExists(wrongFilename)) && (!await fileExists(properFilename))) {
        await fs.rename(wrongFilename, properFilename);
    } else {
        throw new Error('FS operation failed');
    }
};

await rename();