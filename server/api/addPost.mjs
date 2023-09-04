import db from '../../database/models/index.js'; // The models are used in the api.

// Import only the Clubs model from the database.
const { sequelize, Clubs, Posts } = db;

export default async (req, res) => {
  const { clubId, newPost } = req.body;

  // TODO: Verify user relation to club.

  if (!newPost.title) {
    return res.status(400).json({
      message: 'Post title cannot be empty.',
      data: {},
    });
  }

  try {
    await sequelize.transaction(async (transaction) => {
      const post = await Posts.create(newPost, {transaction});
      const club = await Clubs.findOne({
        where: { id: clubId },
        transaction,
      });
      await club.addPost(post, {transaction});
    });

    return res.status(200).json({
      message: 'Success!',
      data: newPost,
    });

  } catch (error) {
    return res.status(500).json({
      message: 'An error occurred.',
      error: error.message,
    });
  }
};