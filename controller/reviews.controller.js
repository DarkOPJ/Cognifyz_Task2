const { v4: uuidv4 } = require("uuid");
const { reviews } = require("../models/reviews.models");

// GET all reviews
// function getReviews(req, res) {
//   res.json(reviews);
// }

// POST review
function addReview(req, res) {
  const { name, rating, description } = req.body;
  if (!name || !rating || !description) {
    return res.status(400).json({ error: "Data invalid" });
  }

  const newReview = {
    id: uuidv4(),
    name,
    rating,
    description,
  };
  reviews.push(newReview);
  res.redirect("/");
}

module.exports = {
  // getReviews,
  addReview,
};
