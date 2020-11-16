const express = require('express');
const router = express.Router();
const { math_handler } = require('../middleware');
const { render } = require('../controllers');

router.get('/number/:number', math_handler.number, render);

router.get('/operator/:operand', math_handler.operator, render);

router.get('/function/clear', math_handler.clear, render);
router.get('/function/del', math_handler.del, render);
router.get('/function/equal', math_handler.equal, render);

router.get('/', render);

module.exports = router;
