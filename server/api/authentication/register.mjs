import db from '../../../database/models/index.js';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import secrets from '../../../config/secrets.json' assert { type: 'json' };

const { Accounts } = db;

export default async (req, res) => {
  const { username, password, email, isClubAccount } = req.body;

  if (!username || ! password) {
    return res.status(400).json({ message: 'Please enter a username and password.' })
  }

  if (password.length < 2) {
    return res.status(418).json({ message: 'Password is too short.' })
  }

  try {
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto.scryptSync(account.password, salt, 32).toString('hex');

    const user = await Accounts.create({
      username,
      passwordHash,
      salt,
      email,
      isClubAccount,
    })

    const token = jwt.sign(
          { id: user.id, username, isClubAccount },
          secrets.jwtSecret,
          { expiresIn: 3 * 60 * 60, } // 3 hours
        );

    return res.status(200).json ({
      message: 'Account creation successful.',
      token,
    })

  } catch (error) {
    return res.status(401).json({
      message: "Account creation unsuccessful.",
      error: error.message,
    })
  }
};