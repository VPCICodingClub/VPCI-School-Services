import db from '../../database/models/index.js'; // The models are used in the api.

// Import only the Clubs model from the database.
const { sequelize, Clubs, Accounts } = db;

export default async (req, res) => {
  const { clubId } = req.params;

  try {
    const club = await Clubs.findByPk(clubId);

    if (!club) {
      return res.status(404).json({
        message: 'Club does not exist',
        data: {},
      });
    }

    await club.destroy();
    console.log(club);

    return res.status(200).json({
      message: 'Success!',
      data: {},
    });

  } catch (error) {
    return res.status(500).json({
      message: 'An error occurred.',
      error: error.message,
    });
  }
};