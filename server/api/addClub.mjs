import db from '../../database/models/index.js'; // The models are used in the api.

// Import only the Clubs model from the database.
const { sequelize, Clubs, Accounts } = db;

export default async (req, res) => {
  const { newClub } = req.body;

  if (!newClub.name.length) {
    return res.status(400).json({
      message: 'Club name cannot be empty.',
      data: {},
    });
  }

  if (!newClub.slug.length) {
    return res.status(400).json({
      message: 'URL slug cannot be empty.',
      data: {},
    });
  }

  try {
    await sequelize.transaction(async (transaction) => {
      const club = await Clubs.create(newClub, {transaction});
      const user = await Accounts.findOne({
        where: { id: req.user.id },
        transaction,
      });
      await user.addClub(club, {transaction});
    });

    return res.status(200).json({
      message: 'Success!',
      data: newClub,
    });

  } catch (error) {
    return res.status(500).json({
      message: 'An error occurred.',
      error: error.message,
    });
  }
};