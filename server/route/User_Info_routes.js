const express = require('express');
const router = express.Router();
const UserController = require('../controller/User_Info_Querry.js');

// Submit the info
router.post('/submit-userinfo', UserController.submitUserInfo);
// Obtain count of unavailable seats
router.get('/seatcount', UserController.GetUserCount)

module.exports = router;