import db from '../../database/models/index.js'; // The models are used in the api.

// Import only the Clubs model from the database.
const { Clubs } = db;

export default async (req, res) => {
  const { query } = req.query; // Search query.
  let options = {};

  // If there is no specific search query (empty string),
  // then there will he no 'where' specification and all clubs will be selected.
  if (query) {
    options.where = { slug: query };
  }

  const clubs = await Clubs.findAll(options);

  res.json(clubs);
};
