import {spawn} from 'child_process';

const spawnChildProcess = async (args) => {

    const child = spawn('node', ['./files/script.js', ...args], {
        stdio: ['pipe', 'pipe', 'inherit']
    });

    process.stdin.pipe(child.stdin); // Направляем ввод главного процесса в дочерний

    child.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });

    child.on('close', (code) => {
        console.log(`Error ${code}`);
    });

};

// Put your arguments in function call to test this functionality
spawnChildProcess(['First Argument', 'Second Argument', 'Third Argument']);
