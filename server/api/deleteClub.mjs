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

    if (!req.user.clubs.some((clubId) => clubId === club.id)) {
      return res.status(401).json({
        message: 'Your account does not belong to this club.',
        data: {},
      });
    }

    await club.destroy();

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