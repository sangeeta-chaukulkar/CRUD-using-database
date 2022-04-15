const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'nodecomplete',
    password: 'Yash123$'
});

module.exports = pool.promise();