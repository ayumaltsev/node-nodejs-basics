import fs from 'fs/promises';

const list = async () => {

    const folderName = './files';
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

    if (await fileExists(folderName)) {
        try {
            const files = await fs.readdir(folderName);
            files.forEach(file => {
                console.log(file);
            });
        } catch (error) {
            console.error('Folder reading error:', error.message);
        }
    } else {
        throw new Error('FS operation failed');
    }
};

await list();