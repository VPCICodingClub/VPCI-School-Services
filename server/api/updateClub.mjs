import db from '../../database/models/index.js'; // The models are used in the api.

// Import only the Clubs model from the database.
const { sequelize, Clubs } = db;

export default async (req, res) => {
  const { editedClub } = req.body;
  const { clubId } = req.params;
  console.log(clubId);

  if (!editedClub.name.length) {
    return res.status(400).json({
      message: 'Club name cannot be empty.',
      data: {},
    });
  }

  if (!editedClub.slug.length) {
    return res.status(400).json({
      message: 'URL slug cannot be empty.',
      data: {},
    });
  }

  try {
    await sequelize.transaction(async (transaction) => {
      const club = await Clubs.findByPk(clubId, {transaction});
      await club.update(editedClub, {transaction});
    });

    return res.status(200).json({
      message: 'Success!',
      data: editedClub,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'An error occurred.',
      error: error.message,
      data: {},
    });
  }
};