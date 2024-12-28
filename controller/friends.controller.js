const { v4: uuidv4 } = require('uuid');

const { friends } = require("../models/friends.models");

function getFriends(req, res) {
  res.json(friends);
}

function getOneFriend(req, res) {
//   const id = req.params.id;
  const oneFriend = friends.find((f) => f.id === req.params.id);

  if (oneFriend) {
    res.json(oneFriend);
  } else {
    res.status(404).json({
      error: "Data was not found",
    });
  }
}

function postFriend(req, res) {
    if(!req.body.name || !req.body.age){
        return res.status(400).json({
            error: "Data invalid"
        })
    }

    const newFriend = {
        id: uuidv4(),
        name: req.body.name,
        age: req.body.age
    }
    friends.push(newFriend)

    res.json(newFriend)
}

module.exports = {
  getFriends,
  getOneFriend,
  postFriend
};
