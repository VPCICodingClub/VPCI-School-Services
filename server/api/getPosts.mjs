import db from '../../database/models/index.js'; // The models are used in the api.

// Import only the Clubs model from the database.
const { Posts } = db;

export default async (req, res) => {
  const { query: ClubId } = req.query; // Search query.
  let options = { order: [
      ['id', 'DESC'], // sort in ascending order of ID's
    ], };

  if (ClubId) {
    options.where = { ClubId };
  }

  const posts = await Posts.findAll(options);

  res.json(posts);
};
