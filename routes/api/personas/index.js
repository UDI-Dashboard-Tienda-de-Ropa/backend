const express = require('express');
const router = express.Router();
// const authorization = require('../../../middleware/authorization.middleware')
module.exports = router.use(
    '/',
    // authorization,
    [
        require('./get.router'),
        require('./findByUid.router'),
        require('./find.router'),
        require('./put.router'),
        require('./delete.router'),
        require('./post.router'),
    ]
);