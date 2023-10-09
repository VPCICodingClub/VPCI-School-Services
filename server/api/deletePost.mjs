import db from '../../database/models/index.js';

const { Posts } = db;

export default async (req, res) => {
  const { postId } = req.params;

  try {

    const post = await Posts.findByPk(postId);

    if (!post) {
      return res.status(404).json({
        message: 'This post does not exist.',
        data: {},
      });
    }

    const club = await post.getClub();
    const clubId = club.id;

    if (!req.user.clubs.some((club) => club.id === clubId)) {
      return res.status(401).json({
        message: 'Your account does not belong to this club.',
        data: {},
      });
    }

    await post.destroy();

    return res.status(200).json({
      message: `Success! Post ${post.id} was deleted.`,
      data: {},
    });

  } catch (error) {
    return res.status(500).json({
      message: 'An error occurred.',
      error: error.message,
    });
  }
};