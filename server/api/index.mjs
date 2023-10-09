// This api is used to get data from the database.
import express from 'express';

import authorize from '../middleware/authorize.mjs';

import getClubs from './getClubs.mjs';
import addClub from './addClub.mjs';
import updateClub from './updateClub.mjs';
import deleteClub from './deleteClub.mjs';

import getWashroomStatus from './getWashroomStatus.mjs';
import updateWashroomStatus from './updateWashroomStatus.mjs';

import register from './authentication/register.mjs';
import login from './authentication/login.mjs';
import getAccountData from './getAccountData.mjs';

import getPosts from './getPosts.mjs';
import getEvents from './getEvents.mjs';
import upsert from './upsert.mjs'
import del from './delete.mjs';

// https://expressjs.com/en/guide/routing.html (scroll down for express.Router)
const router = express.Router();

const apiPath = '/api/v1';

// .get(path, (req, res) => {})
// getClubs is a callback function.
// So, when a GET request is made, the server's response is getClubs.
router.get(apiPath + '/clubs', getClubs);
router.post(apiPath + '/clubs', authorize, addClub);
router.put(apiPath + '/clubs/:clubId', authorize, updateClub);
router.delete(apiPath + '/clubs/:clubId', authorize, deleteClub);

router.get(apiPath + '/washrooms', getWashroomStatus);
router.post(apiPath + '/washroom-status', updateWashroomStatus);

router.post(apiPath + '/register', register);
router.post(apiPath + '/login', login);
router.get(apiPath + '/accounts', authorize, getAccountData);

router.get(apiPath + '/events', getEvents);
router.get(apiPath + '/posts', getPosts);
router.put(apiPath + '/resource/:model', authorize, upsert);
router.delete(apiPath + '/resource/:model/:id', authorize, del);

export default router;
