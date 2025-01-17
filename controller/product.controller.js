const { v4: uuidv4 } = require("uuid");
const { products } = require("../models/products.models");

function postProduct(req, res) {
  try {
    const { name, product_name, product_price, product_description } = req.body;
    // console.log(req.file, req.body);

    if (!name || !req.file || !product_name || !product_price) {
      return res.status(400).json({
        error: "Data invalid",
      });
    }

    const imagePath = `/images/products/${req.file.filename}`;
    const newProduct = {
      id: uuidv4(),
      name,
      image: imagePath,
      product_name,
      product_price,
      product_description,
    };
    products.push(newProduct);
    console.log(products)
    
    res.redirect("/");
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
}

module.exports = {
  postProduct,
};
