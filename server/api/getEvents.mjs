import db from '../../database/models/index.js'; // The models are used in the api.

const { Events } = db;

export default async (req, res) => {
  const { startDate, endDate } = req.query;
  let options = {};
  // console.log(typeof startDate);

  if (startDate != 'undefined' && endDate != 'undefined') {
    options.where = {
      from: {
        $between: [startDate, endDate]
      }
    };
  }

  const events = await Events.findAll(options);

  res.json(events);
};
