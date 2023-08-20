import jwt from 'jsonwebtoken';
import secrets from '../../../config/secrets.json' assert { type: 'json' };

export default async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(403).json({
      message: 'Ur dum';
    });
  }

  try {
    const data = jwt.verify(token, secrets.jwtSecret);
    req.user = data;
    return next();
  } catch {
    return res.status(403).json({
      message: 'Ur dum';
    });
  }

};