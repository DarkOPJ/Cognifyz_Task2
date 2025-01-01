const express = require('express')
const {productRouter} = require('./routes/products.router')
const {products} = require('./models/products.models')
const {reviewsRouter} = require('./routes/reviews.router')
const {getReviewsList} = require('./models/reviews.models')

const PORT = 3000

const app = express()

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(express.json())

app.use(express.static('public'))

app.use((req, res, next) => {
    const start = Date.now()
    next()
    const delta = Date.now() - start
    console.log(req.method + " " + req.baseUrl + " " + delta +"ms")
})

app.get('/', (req, res) => {
    res.render('index', {
        title: 'ShopSavvy',
        products,
        reviews: getReviewsList()
    })
})

// Products
app.use('/products', productRouter)

// Reviews
app.use('/reviews', reviewsRouter)

app.listen(PORT, () => {
    console.log('Server running on port ', PORT)
})