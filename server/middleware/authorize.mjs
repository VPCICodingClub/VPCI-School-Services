import jwt from 'jsonwebtoken';
import secrets from '../../config/secrets.json' assert { type: 'json' };

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      message: 'Missing Authorization header',
    });
  }

  const [authType, token] = authHeader.split(' ');

  try {

    const data = jwt.verify(token, secrets.jwtSecret);
    req.user = data;
    return next();

  } catch (err) {
    return res.status(401).json({
      message: 'Unauthorized',
    });
  }

};