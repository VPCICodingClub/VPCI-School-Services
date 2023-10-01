import db from '../../database/models/index.js'; // The models are used in the api.

// Import only the Clubs model from the database.
const { sequelize, Events, Posts } = db;

const models = {
  events: Events,
  posts: Posts,
}

export default async (req, res) => {
  const data = req.body;
  const { model } = req.params;
  let editedData = {};

  if (!data.title) {
    return res.status(400).json({
      message: 'Title cannot be empty.',
      data: {},
    });
  }

  if (!data.ClubId) {
    return res.status(400).json({
      message: 'Must have a valid ClubId.',
      data: {},
    });
  }

  try {
    editedData = await models[`${model}`].upsert(data, { id: data.id });

    return res.status(200).json({
      message: 'Success!',
      data: editedData,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'An error occurred.',
      error: error.message,
      data: {},
    });
  }
};