'use strict';

var usersController = require('../controllers/usersController');
var itemsController = require('../controllers/itemsController');
var categoriesController = require('../controllers/categoriesController');
var uploadController = require('../controllers/uploadController');
var messagesController = require('../controllers/messagesController');


module.exports = {
    users: usersController,
    items: itemsController,
    categories: categoriesController,
    upload: uploadController,
    messages: messagesController
};