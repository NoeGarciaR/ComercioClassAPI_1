const { Router, response } = require('express');
const router = Router();

const bers = require('../beers.json');

router.get('/', (require, response) => {
    response.status(200).json(bers);
});

module.exports = router;