const { products } = require("../models/products.models");
const { getReviewsList } = require("../models/reviews.models");

// POST Search
function searchProduct(req, res) {
  try {
    const searchTerm = req.body.searchTerm;
    const searchNoSpecialCharacters = searchTerm.replace(/[^a-zA-Z0-9. ]/g, "");

    // Perform the search on the products array
    const data = products.filter(
      (product) =>
        product.product_name.match(new RegExp(searchNoSpecialCharacters, "i"))
    );

    res.render("search", {
      title: "Search",
      products: data,
      searchTerm,
      reviews: getReviewsList(),
      fragment: "category",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
}

module.exports = {
  searchProduct,
};
