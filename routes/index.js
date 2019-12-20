const { Router } = require('express');
const ApiController = require('../controller/ApiController');

const route = Router();

route.use('/', ApiController(route));

module.exports = route;
