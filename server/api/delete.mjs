import db from '../../database/models/index.js';

const { sequelize, Posts, Events, Clubs } = db;

// The allowed models.
const models = {
  events: Events,
  posts: Posts,
}

export default async (req, res) => {
  const { model, id } = req.params;

  try {
    const data = await models[model].findByPk(id);

    if (!data) {
      return res.status(404).json({
        message: `${model} does not exist`,
        data: {},
      });
    }

    if (!req.user.clubs.some((clubId) => clubId === data.ClubId)) {
      return res.status(401).json({
        message: 'Your account does not belong to this club.',
        data: {},
      });
    }

    await data.destroy();

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
