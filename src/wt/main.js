import os from 'os';
import {Worker} from 'worker_threads';

const performCalculations = async () => {

    const cpuInfo = os.cpus();
    const numberOfCores = cpuInfo.length;

    const runWorker = (n) => {
        return new Promise((resolve, reject) => {
            const worker = new Worker('./worker.js');
            const time = new Date();

            let result = {
                status: 'resolved'
            };

            worker.on('message', (message) => {
                result.data = message;
                resolve({time, result});
            });

            worker.on('error', (err) => {
                result.status = 'error';
                result.data = null;
                resolve({time, result});
                worker.terminate();
            });

            worker.on('exit', (code) => {
                if (code !== 0) {
                    result.status = 'error';
                    result.data = null;
                    resolve({time, result});
                } else {
                    worker.terminate();
                }
            });

            worker.postMessage(n);
        });
    };

    const workersPromises = [];
    for (let n = 10; n < 10 + numberOfCores; n++) {
        workersPromises.push(runWorker(n, n - 10));
    }

    let results = [];

    await Promise.all(workersPromises).then(array => {
        const sortedByTime = array.sort((a, b) => a.time - b.time);
        sortedByTime.forEach(element => {
            results.push(element.result)
        });
    });

    return results;
};

await performCalculations();
