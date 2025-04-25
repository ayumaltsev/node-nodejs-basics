import {Transform} from 'stream';

const transform = async () => {

    class ReverseInputTransform extends Transform {
        constructor() {
            super();
        };

        _transform(chunk, encoding, callback) {
            const input = chunk.toString().split('').reverse().join('') + '\n';
            this.push(input);
            callback();
        }
    };

    const transformerStream = new ReverseInputTransform();

    process.stdin.pipe(transformerStream).pipe(process.stdout);
};

await transform();