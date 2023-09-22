import db from '../../database/models/index.js';
import calculateRating from '../../server/lib/calculateRating.mjs';
const { sequelize, Washrooms } = db;

export default async (req, res) => {
    const { query, isOpen } = req.body;
    let options = {};

    if (!query) {
        return res.status(400).json({
            message: 'Washroom ID in query cannot be empty. sus...',
            data: {},
        });
    }
    options.where = { id: query };

    const washroom = await Washrooms.findOne(options);

    if (!washroom) {
        return res.status(400).json({
            message: 'That is not a valid washroom.',
            data: {},
        });
    }
    const observations = [ ...washroom.observations ];
    const entryDates = [ ...washroom.entryDates];

    await sequelize.transaction(async (transaction) => {
        observations.push(isOpen);
        entryDates.push(new Date());
        const washroomRating = calculateRating(observations, entryDates);

        console.log(washroomRating);

        await washroom.update({ rating: washroomRating, observations, entryDates }, {transaction});
    });
    
    res.json({
        message: 'Thx!',
        data: washroom,
    });
};

// http://localhost:3000/#/washroom-status?id=6
// T-T make sure the id is correct