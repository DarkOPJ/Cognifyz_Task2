const express = require('express')
const multer = require('multer')
const path = require('path')

const productController = require('../controller/product.controller');

// Define product routes
const productRouter = express.Router()

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(process.cwd(), 'public', 'images', 'products'))
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

const upload = multer({ storage: storage })

productRouter.post('', upload.single("image") ,productController.postProduct)

module.exports = {productRouter}