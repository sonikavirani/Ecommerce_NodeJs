const express = require('express');
const router = express.Router();
const userAction = require('../actions/userActions');

router.get('/', userAction.getAllUser);
router.get('/:id', userAction.getUser);
router.post('/', userAction.signUpUser);
router.delete('/:id', userAction.deleteUserById);
router.put('/:id', userAction.updateUserById)

module.exports = router;
