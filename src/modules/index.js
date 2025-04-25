import {unknownObject, myServer} from './esm.mjs';

console.log('Импортированный объект:', unknownObject);

console.log('Сервер уже слушает на порту 3000, если он был запущен в модуле.');

setTimeout(() => {
    myServer.close(() => {
        console.log('Сервер остановлен из index.js');
    });
}, 5000);