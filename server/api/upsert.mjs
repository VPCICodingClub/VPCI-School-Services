import db from '../../database/models/index.js'; // The models are used in the api.

// Import only the Clubs model from the database.
const { sequelize, Events, Posts, Clubs } = db;

const models = {
  events: Events,
  posts: Posts,
}

export default async (req, res) => {
  const { model } = req.params;
  const data = req.body;
  let editedData = {};

  if (!data.title) {
    return res.status(400).json({
      message: 'Title cannot be empty.',
      data: {},
    });
  }

  if (!data.ClubId) {
    return res.status(400).json({
      message: 'Must have a ClubId.',
      data: {},
    });
  }

  try {
    const club = await Clubs.findByPk(data.ClubId);
    if (!club) {
      return res.status(404).json({
        message: 'Club not found.',
        data: {},
      });
    }

    if (!req.user.clubs.some((clubId) => clubId === data.ClubId)) {
      return res.status(401).json({
        message: 'Your account does not belong to this club.',
        data: {},
      });
    }

    editedData = await models[`${model}`].upsert(data, { id: data.id });

    return res.status(200).json({
      message: 'Success!',
      data: editedData
    });
  } catch (error) {
    return res.status(500).json({
      message: 'An error occurred.',
      error: error.message,
      data: {},
    });
  }
};
