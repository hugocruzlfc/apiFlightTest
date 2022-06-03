const express = require('express');
const { validatorCreateComment } = require('../validators/comment.validator');
const commentController = require('../controllers/comment.controller');

const router = express.Router();

router.get('/comments/:flightId', commentController.commetByFlightId);
router.post('/create', validatorCreateComment, commentController.createComment);

module.exports = router;
