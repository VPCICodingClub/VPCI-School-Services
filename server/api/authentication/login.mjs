import db from '../../../database/models/index.js';
import jwt from 'jsonwebtoken';
import secrets from '../../../config/secrets.json' assert { type: 'json' };
import hashPassword from '../../lib/hashPassword.mjs';

const { Accounts } = db;

export default async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      message: 'Please enter a username and password.',
    });
  }

  try {
    const user = await Accounts.findOne({ where: { username } });
    // const clubs = await user.getClubs({ attributes: ['id'] });
    // // console.log(clubs);
    // const clubIds = [];
    // for (let i = 0; i < clubs.length; i++) {
    //   clubIds.push(clubs[i].id);
    // }
    // // console.log(clubIds);

    if (!user) {
      return res.status(400).json({
        message: 'Login unsuccessful.',
        error: 'User not found.',
      });
    }

    const passwordHash = await hashPassword(password, user.salt);

    if (passwordHash === user.passwordHash) {
      const maxAge = 3 * 60 * 60; // 3 hours
      const token = jwt.sign({
        id: user.id,
        username,
        // clubs: clubIds,
      }, secrets.jwtSecret, { expiresIn: maxAge, });

      return res.status(200).json({
        message: 'Login successful.',
        token
      });
    } else {
      return res.status(400).json({ message: 'Login unsuccessful. Wrong password.' });
    }
  } catch (error) {
    return res.status(500).json({
      message: 'An error occurred.',
      error: error.message,
    });
  }
};