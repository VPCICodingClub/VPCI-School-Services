import db from '../../database/models/index.js';
import crypto from 'crypto';

const { Accounts } = db;

export default async (req, res) => {
  const { account } = req.body;
  console.log(account.username);
  console.log(account.password);

  const salt = crypto.randomBytes(16).toString('hex');
  console.log(salt);

  const hash = crypto.scryptSync(account.password, salt, 32).toString('hex');
  console.log(hash);

  const newAccount = await Accounts.create({
    username: account.username,
    passwordHash: hash,
    salt,
    email: account.email,
    isClubAccount: account.isClubAccount,
  });

  res.json(newAccount); // TODO: Change this.
};