const express = require('express')
const countriesController = require('../controller/countries.controller')

const countriesRouter = express.Router()

countriesRouter.get('', countriesController.getCountries)
countriesRouter.get('/:id', countriesController.getOneCountry)
countriesRouter.post('', countriesController.postCountry)

module.exports = {countriesRouter}