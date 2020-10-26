const { Router, response } = require('express');
const router = Router();

const people = require('../example.json');

router.get('/', (require, response) => {
    response.status(200).json(people);
});

module.exports = router;