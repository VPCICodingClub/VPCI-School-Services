import db from '../../database/models/index.js'; // The models are used in the api.

const { Events } = db;

export default async (req, res) => {
  const { id, ClubId } = req.query;
  let options = {};
  // console.log(typeof startDate);

  if (id) //{
    options.where = { id };
  if (ClubId)
    options.where = { ClubId };
  // } else if (startDate && endDate && startDate != 'undefined' && endDate != 'undefined') {
  //   options.where = {
  //     from: {
  //       $between: [startDate, endDate]
  //     }
  //   };
  // }

  const events = await Events.findAll(options);

  res.json(events);
};
