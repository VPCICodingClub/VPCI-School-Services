import db from '../../database/models/index.js';
import crypto from 'crypto';

const { Accounts } = db;

export default async (req, res) => {
  const { username, password } = req.body;
  console.log(username);
  console.log(password);

  let salt = crypto.randomBytes(16).toString('hex');
  console.log(salt);

  const hash = crypto.scrypt(password, salt, 32, (err, derivedKey) => {

    if (err) throw err;

    console.log("The derived key(1) is:", derivedKey.toString("base64"));
  });

  console.log(hash.toString('base64'));

  //Add hash, salt and username to database

  res.json();
};