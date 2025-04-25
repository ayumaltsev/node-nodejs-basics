const parseEnv = () => {

    let result = '';

    for (const [key, value] of Object.entries(process.env)) {
        if (key.startsWith('RSS_')) {
            result += `${key}=${value}; `
        }
    }

    if (result.length > 2) {
        result = result.slice(0, -2);
    }

    console.log(result);
}

parseEnv();