const express = require('express');
const auth = require('../middlewares/authMiddleware');
const { signin, signup, update, allUsers, del } = require('../controllers/userController');
const router = express.Router();

router.get('/all', allUsers);
router.post('/login', signin).post('/register', signup);
router.put('/update', auth, update);
router.delete('/delete', auth, del);

module.exports = router;