import db from '../../database/models/index.js';

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

    await sequelize.transaction(async (transaction) => {
        observations.push(isOpen);

        const sum = observations.reduce((total, i) => total + i, 0);
        const average = (sum / observations.length) * 100;

        console.log(average);
        console.log(observations);

        await washroom.update({ rating: parseInt(average), observations }, {transaction});
    });

    res.json({
        message: 'Thx!',
        data: washroom,
    });
};

// http://localhost:3000/#/washroom-status?id=6
// T-T make sure the id is correct