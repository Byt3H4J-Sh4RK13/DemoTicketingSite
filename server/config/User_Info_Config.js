const sqlite3 = require('sqlite3').verbose();
const path = require('path');


const dbPath = path.join(__dirname, '..', 'database', 'User_Information.db');

const db = new sqlite3.Database(dbPath, (err)=>{
    if (err) {
        console.error('Failed to connect to User Information database', err);
    } else {
        console.log('Connected to User Information database!');
    }
});

module.exports = db;
