const express = require('express');
const router = express.Router();
const { getReviews, addReview, editReview, deleteReview } = require('../controllers/reviewController');
const auth = require('../middlewares/authMiddleware');

router.get('/:postid', getReviews);
router.post('/:postid', auth, addReview);
router.put('/:postid', auth, editReview);
router.delete('/:postid', auth, deleteReview);

module.exports = router;