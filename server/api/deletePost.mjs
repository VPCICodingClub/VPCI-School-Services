import db from '../../database/models/index.js'; // The models are used in the api.

// Import only the Clubs model from the database.
const { sequelize, Clubs, Posts } = db;

export default async (req, res) => {
  const { postId } = req.params;

  try {
    const post = await Posts.findByPk(postId);

    if (!post) {
      return res.status(404).json({
        message: 'Post does not exist',
        data: {},
      });
    }

    await post.destroy();
    // console.log(club);

    return res.status(200).json({
      message: 'Success!',
      data: {},
    });

  } catch (error) {
    return res.status(500).json({
      message: 'An error occurred.',
      error: error.message,
    });
  }
};