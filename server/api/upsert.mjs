import db from '../../database/models/index.js'; // The models are used in the api.

// Import only the Clubs model from the database.
const { sequelize, Events, Posts, Clubs } = db;

const models = {
  events: Events,
  posts: Posts,
}

export default async (req, res) => {
  const data = req.body;
  const { model } = req.params;
  let editedData = {};

  console.log('inside upsert =====')

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

    const accounts = await club.getAccounts();

    let authorized = false;
    for (let i = 0; i < accounts.length; i++) {
      if (req.user.id === accounts[i].id) authorized = true;
    }

    if (authorized) {
      // let where = {};
      // console.log(data.id, data.id !== null, typeof data.id)
      // if (data.id !== null) where = { id: data.id };
      editedData = await models[`${model}`].upsert(data, { id: data.id });

      return res.status(200).json({
        message: 'Success!',
        data: editedData
      });
    } else {
      return res.status(401).json({
        message: 'Your account does not belong to this club.',
        data: {},
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: 'An error occurred.',
      error: error.message,
      data: {},
    });
  }
};
