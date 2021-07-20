const express = require('express');
const router = express.Router();
const {index,detail}= require('../controllers/mainControllers')
/* GET home page. */
router.get('/', index);
router.get('/detail/:id', detail);

module.exports = router;
