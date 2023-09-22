import { scrypt } from 'crypto';

export default function hashPassword(password, salt) {
  return new Promise((resolve, reject) => {
    const keyLength = 64;
    const cost = 2 ** 14;

    scrypt(password, salt, keyLength, { cost }, (err, derivedKey) => {
      if (err) reject(err);
      resolve(derivedKey.toString('hex'));
    });
  });
}
