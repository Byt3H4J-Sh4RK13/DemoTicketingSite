const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// ill prob not key in eg: "./database/Ticket_Desc.db" directly

const dbPath = path.join(__dirname, '..', 'database', 'Ticket_Desc.db');

const db = new sqlite3.Database(dbPath, (err)=>{
    if (err) {
        console.error('Failed to connect to ticket description database', err);
    } else {
        console.log('Connected to ticket description database!');
    }
});

module.exports = db;
