import db from '../../database/models/index.js'; // The models are used in the api.
import jwt from 'jsonwebtoken';
import secrets from '../../config/secrets.json' assert { type: 'json' };

// Import only the Clubs model from the database.
const { sequelize, Sequelize, Clubs, Accounts } = db;

function removeEmptyString(el){
  return el != "";
}

export default async (req, res) => {
  const { newClub } = req.body;

  console.log(req.user);

  if (!newClub.name) {
    return res.status(400).json({
      message: 'Club name cannot be empty.',
      data: {},
    });
  }

  if (!newClub.slug) {
    return res.status(400).json({
      message: 'URL slug cannot be empty.',
      data: {},
    });
  }

  const existingClub = await Clubs.findOne({
    where: { [Sequelize.Op.or]: [
      { name: { [Sequelize.Op.iLike]: newClub.name } }, // Maybe do regex.
      { slug: { [Sequelize.Op.like]: newClub.slug } }]
    },
  });

  if (existingClub) {
    return res.status(400).json({
      message: 'This club already exists.',
      data: {},
    });
  }

  newClub.executives = newClub.executives.filter(removeEmptyString);
  newClub.supervisors = newClub.supervisors.filter(removeEmptyString);
  newClub.socialMedias = newClub.socialMedias.filter(removeEmptyString);

  try {
    await sequelize.transaction(async (transaction) => {
      const club = await Clubs.create(newClub, {transaction});
      const user = await Accounts.findOne({
        where: { id: req.user.id },
        transaction,
      });
      await user.addClub(club, {transaction});
      req.user.clubs.push(club.id);
    });


    return res.status(200).json({
      message: 'Success!',
      data: newClub,
    });

  } catch (error) {
    return res.status(500).json({
      message: 'An error occurred.',
      error: error.message,
    });
  }
};