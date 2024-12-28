const express = require('express')
const friendsController = require('../controller/friends.controller')

const friendsRouter = express.Router()

friendsRouter.get('', friendsController.getFriends)
friendsRouter.get('/:id', friendsController.getOneFriend)
friendsRouter.post('', friendsController.postFriend)

module.exports = {friendsRouter}