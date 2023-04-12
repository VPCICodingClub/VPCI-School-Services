// This api is used to get data from the database.
import express from 'express';

import getClubs from './getClubs.mjs';
import getWashroomStatus from './getWashroomStatus.mjs';
import updateWashroomStatus from './updateWashroomStatus.mjs';

// https://expressjs.com/en/guide/routing.html (scroll down for express.Router)
const router = express.Router();

const apiPath = '/api/v1';

// .get(path, (req, res) => {})
// getClubs is a callback function.
// So, when a GET request is made, the server's response is getClubs.
router.get(apiPath + '/clubs', getClubs);
router.get(apiPath + '/washrooms', getWashroomStatus);
router.post(apiPath + '/washroom-status', updateWashroomStatus);

export default router;
