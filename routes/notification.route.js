const express = require('express');
const router = express.Router();
const notificationsController = require('../controller/notifications.controller');
const login = require('../middleware/usuarios.middleware');


// Rota GET protegida com login.required
router.get("/",  notificationsController.notificationsRoute);

module.exports = router;
