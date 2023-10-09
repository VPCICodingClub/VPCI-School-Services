import db from '../../database/models/index.js';

const { Events } = db;

export default async (req, res) => {
  const { eventId } = req.params;

  try {

    const event = await Events.findByPk(eventId);

    if (!event) {
      return res.status(404).json({
        message: 'This event does not exist.',
        data: {},
      });
    }

    const club = await event.getClub();
    const clubId = club.id;

    if (!req.user.clubs.some((club) => club.id === clubId)) {
      return res.status(401).json({
        message: 'Your account does not belong to this club.',
        data: {},
      });
    }

    await event.destroy();

    return res.status(200).json({
      message: `Success! Event ${event.id} was deleted.`,
      data: {},
    });

  } catch (error) {
    return res.status(500).json({
      message: 'An error occurred.',
      error: error.message,
    });
  }
};