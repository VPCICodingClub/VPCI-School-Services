import db from '../../database/models/index.js';
import crypto from 'crypto';

const { Accounts } = db;

export default async (req, res) => {
  const { username, password } = req.body.account;

  const account = await Accounts.findOne({ where: { username } });

  const salt = account.salt; // Retrieve the salt from the database to to rehash the password.
  const hash = crypto.scryptSync(password, salt, 32).toString('hex');

  if (hash === account.passwordHash) {
    console.log('authenticated');
  } else {
    console.log('wrong password');
  }

  res.json(hash); // TODO: Change this.
};
// TODO: Add 2FA.