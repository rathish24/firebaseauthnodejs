const express = require('express');
const {signup, 
    login, 
    logout,
     
      } = require('../controllers/authController');

const router = express.Router();

router.post('/auth', signup);
router.post('/auth', login);
router.get('/auth', logout);



module.exports = {
    routes: router
}