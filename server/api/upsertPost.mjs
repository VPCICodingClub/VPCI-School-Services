import db from '../../database/models/index.js'; // The models are used in the api.

// Import only the Clubs model from the database.
const { sequelize, Posts } = db;

export default async (req, res) => {
  const { post } = req.body;
  let editedPost = {};
  // const { postId } = req.params;

  if (!post.title) {
    return res.status(400).json({
      message: 'Club name cannot be empty.',
      data: {},
    });
  }

  try {
    editedPost = await Posts.upsert(post, { id: post.id });

    return res.status(200).json({
      message: 'Success!',
      data: editedPost,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'An error occurred.',
      error: error.message,
      data: {},
    });
  }
};