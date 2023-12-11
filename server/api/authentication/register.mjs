import { randomBytes } from 'crypto';
import db from '../../../database/models/index.js';
import hashPassword from '../../lib/hashPassword.mjs';
import jwt from 'jsonwebtoken';
import secrets from '../../../config/secrets.json' assert { type: 'json' };

const { Accounts, Codes } = db;

export default async (req, res) => {
  const { username, password, code } = req.body;
    
  if (!username || ! password) {
    return res.status(400).json({
      message: 'Please enter a username and password.'
    });
  }

  if (password.length < 2) {
    return res.status(418).json({
      message: 'Password is too short.'
    });
  }

  try {
    const codeExists = await Codes.findOne({ where: { code }});
    if (!codeExists) {
      return res.status(400).json({
        message: 'Invalid code.'
      });
    }

    const salt = randomBytes(16).toString('hex');
    const passwordHash = await hashPassword(password, salt);
    const expiresIn = 3 * 60 * 60;

    const user = await Accounts.create({
      username,
      passwordHash,
      salt,
      type: 'normal',
    });

    await codeExists.destroy();

    const token = jwt.sign({
      id: user.id,
      username,
      type: user.type,
      // clubs: [],
    }, secrets.jwtSecret, { expiresIn });

    return res.status(200).json ({
      message: 'Account creation successful.',
      token,
    });

  } catch (error) {
    return res.status(401).json({
      message: "Account creation unsuccessful.",
      error: error.message,
    });
  }
};
