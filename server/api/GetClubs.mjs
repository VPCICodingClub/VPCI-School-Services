import db from '../../database/models/index.js'; // The models are used in the api.

const { Clubs } = db;

export default async (req, res) => {
  const { query } = req.query;
  let options = {};

  if (query) {
    options.where = { name: query };
  }

  const clubs = await Clubs.findAll(options);

  res.json(clubs);
};