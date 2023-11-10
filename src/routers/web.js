const express = require('express');
const { getHomepage, getABC, hotdanit, postCreateUser, getCreatePage, getUpdatePage, postUpdateUser,
    postDeleteUser, postHandlRemoveUser
} = require('../controllers/homeController');
const router = express.Router();

router.get('/', (getHomepage))
router.get('/abc', getABC)
router.get('/hoidanit', hotdanit);
router.get('/create', getCreatePage);
router.get('/update/:id', getUpdatePage);

router.post('/create-user', postCreateUser)
router.post('/update-user', postUpdateUser)
router.post('/delete-user/:id', postDeleteUser)
router.post('/delete-user', postHandlRemoveUser)

module.exports = router;//exports default