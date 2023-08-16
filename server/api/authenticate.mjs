import db from '../../database/models/index.js';
import crypto from 'crypto';

const { Accounts } = db;

export default async (req, res) => {
  const { username, password } = req.body;
  // console.log(username);
  // console.log(password);

  const account = await Accounts.findOne({ where: { username } });

  const salt = account.salt;
  // console.log(salt);

  const hash = crypto.scrypt(password, salt, 32); // idk if the callback is necessary..

  // const hash = crypto.scrypt(password, salt, 32, (err, derivedKey) => {
  //   if (err) throw err;
  //   console.log("The derived key(1) is:", derivedKey.toString("base64"));
  // });

  if (hash === account.passwordHash) {
    console.log('authenticated');
  } else {
    console.log('wrong password');
  }

  // console.log(hash.toString('base64'));

  res.json(hash);
};
