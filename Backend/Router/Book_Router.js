const express = require('express');
const { getBook } = require('../Controllar/Book_Controllar');

const router = express.Router(); // Ensure it's a function call

router.get('/', getBook);

module.exports = router; // Change to CommonJS syntax
