const getReviews =  async (req, res) => {
  try {
    const { postId } = req.params;
    const userReviews = await Review.find({ postId }).exec();
    res.json(userReviews);
  } catch (error) {
    console.error('Error fetching user reviews:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const addReview = async (req, res) => {
  try {
    const { postId } = req.params;
    const { username, userId, comment, rating } = req.body;

    const newReview = new Review({
      username,
      userId,
      postId,
      comment,
      rating,
    });

    const savedReview = await newReview.save();
    res.status(201).json(savedReview);
  } catch (error) {
    console.error('Error adding review:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const editReview = async (req, res) => {
  try {
    const { postId, reviewId } = req.params;
    const { comment, rating } = req.body;

    const updatedReview = await Review.findByIdAndUpdate(
      reviewId,
      { comment, rating },
      { new: true }
    );

    if (!updatedReview) {
      return res.status(404).json({ error: 'Review not found' });
    }

    res.json(updatedReview);
  } catch (error) {
    console.error('Error editing review:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteReview = async (req, res) => {
  try {
    const { reviewId } = req.params;

    const deletedReview = await Review.findByIdAndDelete(reviewId);

    if (!deletedReview) {
      return res.status(404).json({ error: 'Review not found' });
    }

    res.json({ message: 'Review deleted successfully' });
  } catch (error) {
    console.error('Error deleting review:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getReviews,
  addReview,
  editReview,
  deleteReview,
}