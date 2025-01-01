const express = require('express');
const reviewsController = require('../controller/reviews.controller');

const reviewsRouter = express.Router();

// GET all reviews
// reviewsRouter.get('', reviewsController.getReviews);

// POST review
reviewsRouter.post('', reviewsController.addReview);

module.exports = { reviewsRouter };