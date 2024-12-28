const { v4: uuidv4 } = require('uuid');

const friends = [
    { "id": uuidv4(), "name": "Alice", "age": 25 },
    { "id": uuidv4(), "name": "Bob", "age": 30 },
    { "id": uuidv4(), "name": "Charlie", "age": 35 }
]

module.exports = {
    friends
}