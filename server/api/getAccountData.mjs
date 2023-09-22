import db from '../../database/models/index.js'; // The models are used in the api.

const { Accounts } = db;

export default async (req, res) => {
  const { id } = req.user;

  try {
    const user = await Accounts.findOne({
      where: { id },
      include: ['Clubs']
    });

    return res.json(user);
  } catch (error) {
    return res.status(500).json({
      message: 'An error occurred.',
      error: error.message,
    });
  }
};
