const db = require('../config/ticket_desc_db.js');


exports.getAllProducts = (req, res) => {
    const sql = 'SELECT ProductID, ProductName, Price, Description, ImageURL FROM Ticket_Descriptions';
    
    // ? buggy

    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(rows);  
        }
    });
};

exports.getProductById = (req, res) => {
    const productId = req.params.id;

    const sql = 'SELECT * FROM Ticket_Descriptions WHERE ProductID = ?';
    
    db.get(sql, [productId], (err, row) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (!row) {
            res.status(404).json({ error: 'Ticket not found' });
        } else {
            res.json(row);  
        }
    });
};
