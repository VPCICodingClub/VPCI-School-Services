import db from '../../database/models/index.js'; // The models are used in the api.

const { Codes } = db;

export default async (req, res) => {
  try {
    const codes = await Codes.findAll();

    return res.json(codes);
  } catch (error) {
    return res.status(500).json({
      message: 'An error occurred.',
      error: error.message,
    });
  }
};
