const router = require('express').Router();
const signIn = require('../controllers/signIn')

router.post('/signIn',signIn)
module.exports = router;