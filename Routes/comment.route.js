const express = require('express');
const { sessionUser } = require('../middleware/session');
const { getComments, uploadComment } = require('../Controller/comment.controller');

const router = express.Router();

router.get('/posting/:id/all_comment', sessionUser, getComments);
router.post('/posting/:id/comment', sessionUser, uploadComment);

module.exports = router;
