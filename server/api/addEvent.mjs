import db from '../../database/models/index.js'; // The models are used in the api.

const { sequelize, Clubs, Events } = db;

export default async (req, res) => {
  const { clubId, newEvent } = req.body;

  if (!newEvent.title) {
    return res.status(400).json({
      message: 'Event title cannot be empty.',
      data: {},
    });
  }

  try {
    await sequelize.transaction(async (transaction) => {
      const event = await Events.create(newEvent, {transaction});
      const club = await Clubs.findOne({
        where: { id: clubId },
        transaction,
      });
      await club.addEvent(event, {transaction});
    });

    return res.status(200).json({
      message: 'Success!',
      data: newEvent,
    });

  } catch (error) {
    return res.status(500).json({
      message: 'An error occurred.',
      error: error.message,
    });
  }
};