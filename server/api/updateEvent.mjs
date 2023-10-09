import db from '../../database/models/index.js';

const { sequelize, Clubs, Events } = db;

export default async (req, res) => {
  const { eventId } = req.params;
  const { editedEvent } = req.body;

  if (!editedEvent.ClubId) {
    return res.status(400).json({
      message: 'Events must have a ClubId.',
      data: {},
    });
  }

  try {
    const club = await Clubs.findByPk(editedEvent.ClubId);
    const clubId = club.id;

    if (!club) {
      return res.status(404).json({
        message: 'Invalid ClubId. Club not found.',
        data: {},
      });
    }

    if (!req.user.clubs.some((club) => club.id === clubId)) {
      return res.status(401).json({
        message: 'Your account does not belong to this club.',
        data: {},
      });
    }

    await sequelize.transaction(async (transaction) => {
      const event = await Events.findByPk(eventId, {transaction});
      await event.update(editedEvent, {transaction});
    });

    return res.status(200).json({
      message: 'Success!',
      data: editedEvent,
    });

  } catch (error) {
    return res.status(500).json({
      message: 'An error occurred.',
      error: error.message,
      data: {},
    });
  }
};