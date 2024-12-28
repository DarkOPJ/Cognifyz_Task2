const { v4: uuidv4 } = require('uuid');

const {countries} = require("../models/countries.models");

function getCountries(req, res) {
  res.json(countries);
}

function getOneCountry(req, res) {
//   const id = req.params.id;
  const oneCountry = countries.find((f) => f.id === req.params.id);

  if (oneCountry) {
    res.json(oneCountry);
  } else {
    res.status(404).json({
      error: "Data was not found",
    });
  }
}

function postCountry(req, res) {
    if(!req.body.name || !req.body.population){
        return res.status(400).json({
            error: "Data invalid"
        })
    }

    const newCountry = {
        id: uuidv4(),
        name: req.body.name,
        population: req.body.population
    }
    countries.push(newCountry)

    res.json(newCountry)
}

module.exports = {
  getCountries,
  getOneCountry,
  postCountry
};
