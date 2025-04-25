import fs from 'fs/promises';

const create = async () => {

    const filePath = './files/fresh.txt';
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

    if (!await fileExists(filePath)) {
        await fs.writeFile(filePath, 'I am fresh and young');
    } else {
        throw new Error('FS operation failed');
    }

};

await create();


