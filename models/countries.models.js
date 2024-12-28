const { v4: uuidv4 } = require('uuid');

const countries = [
    { "id": uuidv4(), "name": "USA", "population": 331000000 },
    { "id": uuidv4(), "name": "Canada", "population": 37700000 },
    { "id": uuidv4(), "name": "Mexico", "population": 128000000 }
]

module.exports = {
    countries
}