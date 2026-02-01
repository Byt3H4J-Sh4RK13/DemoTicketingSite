const express = require('express');
const app = express();
const path = require('path');
// Newly Added
app.use(express.json());      // Parses JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parses form data

const productRoutes = require('./route/ticket_desc_routes.js');
app.use('/api', productRoutes);

// Newly Added 
const UserInfoRoutes = require('./route/User_Info_routes.js');
app.use('/api', UserInfoRoutes);

app.use(express.static(path.join(__dirname, '..')));

// Home redirect
app.get('/', (req, res) => {
    res.redirect('/Home.html');
});


app.listen(3000, () => {
    console.log('Server: http://localhost:3000');
});

// Not very good way of resolving an issue I had from mis-organising my files
app.get('/Home.html', (req, res) => {
    res.redirect('client/Home.html');
});



