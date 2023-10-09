import db from '../../database/models/index.js';

const { sequelize, Clubs, Posts } = db;

export default async (req, res) => {
  const { postId } = req.params;
  const { editedPost } = req.body;

  if (!editedPost.ClubId) {
    return res.status(400).json({
      message: 'Posts must have a ClubId.',
      data: {},
    });
  }

  try {
    const club = await Clubs.findByPk(editedPost.ClubId);
    const clubId = club.id;

    if (!club) {
      return res.status(404).json({
        message: 'Invalid ClubId. Club not found.',
        data: {},
      });
    }

    if (!req.user.clubs.some((club) => club.id === clubId)) {
      return res.status(401).json({
        message: 'Your account does not belong to this club.',
        data: {},
      });
    }

    await sequelize.transaction(async (transaction) => {
      const post = await Posts.findByPk(postId, {transaction});
      await post.update(editedPost, {transaction});
    });

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