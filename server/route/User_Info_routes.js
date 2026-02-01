const express = require('express');
const router = express.Router();
const UserController = require('../controller/User_Info_Querry.js');

// Submit the info
router.post('/submit-userinfo', UserController.submitUserInfo);

module.exports = router;