import db from '../../database/models/index.js'; // The models are used in the api.

const { Events } = db;

export default async (req, res) => {
  const { query } = req.query;
  let options = {};
  // console.log(typeof startDate);

  if (query) //{
    options.where = { id: query };
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
