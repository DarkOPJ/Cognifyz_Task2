const path = require("path");

function getImage(req, res) {
  const image = path.join(
    __dirname,
    "..",
    "public",
    "images",
    "skimountain.jpg"
  );

  res.sendFile(image);
}

module.exports = {getImage};