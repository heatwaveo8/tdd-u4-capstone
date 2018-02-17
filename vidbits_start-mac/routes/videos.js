const router = require('express').Router();
const Video = require('../models/video');

router.post('/videos', (request, response) => {
  response.status(400);
});

module.exports = router;
