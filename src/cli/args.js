const parseArgs = () => {
    const args = process.argv.slice(2);
    const propValueConnector = ' is ';
    const nextPropConnector = ', '

    let result = '';
    for (let i = 0; i < args.length; i++) {
        if (i % 2 === 0) {
            result += args[i].trim().slice(2) + propValueConnector;
        } else {
            result += args[i].trim() + nextPropConnector;
        }
    }

    if (result.length > 2) {
        result = result.slice(0, -2);
    }

    console.log(result);
};

parseArgs();