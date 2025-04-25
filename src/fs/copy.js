import fs from 'fs/promises';
import path from 'path';

const copy = async () => {

    const sourceFolder = './files';
    const destinationFolder = './files_copy';
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

    if (await fileExists(sourceFolder) && (!await fileExists(destinationFolder))) {

        try {
            await fs.mkdir(destinationFolder);
        } catch (error) {
            console.error('Folder creation error:', error.message);
        }

        const files = await fs.readdir(sourceFolder);

        for (const currentFile of files) {
            const sourcePath = path.join(sourceFolder, currentFile);
            const targetPath = path.join(destinationFolder, currentFile);

            try {
                await fs.copyFile(sourcePath, targetPath);
            } catch (error) {
                console.error('File copying error:', error.message);
            }
        }

    } else {
        throw new Error('FS operation failed');
    }
};

await copy();