const express = require('express');
const router = express.Router();
const userController = require('../../controllers/admin/users')

router.get('/', userController.index);
router.get('/create', userController.new);
router.post('/store', userController.store);
router.get('/delete/:userID', userController.remove);
router.get('/edit/:userID', userController.edit);
router.post('/update/:userID', userController.update);

module.exports = router;    