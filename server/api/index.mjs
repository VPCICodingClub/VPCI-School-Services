import express from 'express';

import GetClubs from './GetClubs.mjs';

const router = express.Router();

const apiPath = '/api/v1';

router.get(apiPath + '/clubs', GetClubs);

export default router;

// This api is how we'll get data from the database and add data to it.
// Will be explained more later :/
