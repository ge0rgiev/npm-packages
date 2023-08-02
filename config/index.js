const config = require('config');

const {host, port} = config.get('Init.Connection');

console.log(
    host, port
);