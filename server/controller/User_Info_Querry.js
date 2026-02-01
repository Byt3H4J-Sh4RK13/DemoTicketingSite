const db = require('../config/User_Info_Config.js');

// Add this new function
exports.submitUserInfo = (req, res) => {
    const { firstName, lastName, phone, email } = req.body;
    
    const sql = `
        INSERT INTO User_InfoTable 
        (FirstName, LastName, PhoneNumber, Email)
        VALUES (?, ?, ?, ?)
    `;
    
    db.run(sql, [firstName, lastName, phone, email], function(err) {
        if (err) {
            console.error('SQLite error:', err);
            return res.status(500).json({ error: err.message });
        }
        
        res.json({ 
            success: true, 
            id: this.lastID,
            message: 'User saved with ID: ' + this.lastID
        });
    });
};