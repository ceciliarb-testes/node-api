'use strict';

const express = require('express');
const router = express.Router();
const systemMessages = require('../utils/messages');
const endRouter = require('./endereco');

//Importing all application routers
router.use('/endereco', endRouter);

//Default error handling when route is not found
router.use((req, res, next) => {
    if (!req.route)
        return res.status(404).json({
            message: systemMessages.RouterErrors.NOT_FOUND(req.url, req.method)
        });
    next();
});

module.exports = router;
