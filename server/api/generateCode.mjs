import db from '../../database/models/index.js';
import { randomBytes } from 'crypto';

const { Codes } = db;

export default async (req, res) => {
  console.log(req.user.type);
  try {
    const newCode = randomBytes(6).toString('base64');
    const code = await Codes.create({ code: newCode });

    return res.status(200).json({
      message: 'Success!',
      data: code,
    });

  } catch (error) {
    return res.status(500).json({
      message: 'An error occurred.',
      error: error.message,
      data: {},
    });
  }
};
