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
    console.log('get data =====');
    const data = await models[model].findByPk(id);

    if (!data) {
      return res.status(404).json({
        message: `${model} does not exist`,
        data: {},
      });
    }

    console.log('get club =====');
    const club = await data.getClub();
    console.log('get account =====');
    const accounts = await club.getAccounts();

    let authorized = false;
    for (let i = 0; i < accounts.length; i++) {
      if (req.user.id === accounts[i].id) authorized = true;
    }

    console.log('authorized =====');

    if (authorized) {
      console.log('delete data =====');
      const deleted = await data.destroy();
      console.log(deleted);
      console.log('search data =====');
      const data2 = await models[model].findByPk(id);
      console.log(data2);

      return res.status(200).json({
        message: 'Success!',
        data: {},
      });
    } else {
      return res.status(401).json({
        message: 'Your account is not part of this club.',
        data: {},
      });
    }

  } catch (error) {
    return res.status(500).json({
      message: 'An error occurred.',
      error: error.message,
    });
  }
};
