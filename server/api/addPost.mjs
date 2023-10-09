import db from '../../database/models/index.js';

const { Clubs, Posts } = db;

export default async (req, res) => {
  const { newPost } = req.body;

  if (!newPost.ClubId) {
    return res.status(400).json({
      message: 'Posts must have a ClubId.',
      data: {},
    });
  }

  try {
    const club = await Clubs.findByPk(newPost.ClubId);
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

    const post = await Posts.create(newPost);

    return res.status(200).json({
      message: 'Success!',
      data: post,
    });

  } catch (error) {
    return res.status(500).json({
      message: 'An error occurred.',
      error: error.message,
      data: {},
    });
  }
};