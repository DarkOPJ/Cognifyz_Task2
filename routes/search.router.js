const express = require('express');
const searchController = require('../controller/search.controller');

const searchRouter = express.Router();

// POST search
searchRouter.post('', searchController.searchProduct);

module.exports = { searchRouter };