import db from '../../../database/models/index.js';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import secrets from '../../../config/secrets.json' assert { type: 'json' };

const { Accounts } = db;

export default async (req, res) => {
  const { username, password } = req.body;

  // Ensure a username and password have been provided.
  if (!username || !password) {
    return res.status(400).json({
      message: 'Please enter a username and password.',
    })
  }

  try {
    const user = await Accounts.findOne({ where: { username } });

    if (!user) {
      return res.status(400).json({
        message: 'Login unsuccessful.',
        error: 'User not found.',
      })
    }

    const salt = user.salt; // Retrieve the salt from the database to to rehash the password.
    const passwordHash = crypto.scryptSync(password, salt, 32).toString('hex');

    // Compare the hashed password in the db to the given hashed password.
    if (passwordHash === user.passwordHash) {
      const maxAge = 3 * 60 * 60; // 3hrs in sec
      const token = jwt.sign(
        { id: user.id, username, isClubAccount },
        secrets.jwtSecret,
        { expiresIn: maxAge, }
      );

      return res
        .status(200)
        .json({
          message: 'Login successful.',
          token
        })
    } else { return res.status(400).json({ message: 'Login unsuccessful.' }) }

  } catch (error) {
    return res.status(400).json({
      message: 'An error occurred.',
      error: error.message,
    })
  }
};
// TODO: Add 2FA.