import db from '../../database/models/index.js';

const { Washrooms } = db;

export default async (req, res) => {
  const { query } = req.query;
  let options = {};

  if (query) { // Gonna be used for the floor.
    options.where = { slug: query };
  }
  
  const washrooms = await Washrooms.findAll(options);

  res.json(washrooms);
};