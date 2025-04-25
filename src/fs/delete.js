import fs from 'fs/promises';

const remove = async () => {

    const fileName = './files/fileToRemove.txt';
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
        await fs.unlink(fileName);
    } else {
        throw new Error('FS operation failed');
    }

};

await remove();
