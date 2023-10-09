import Layout from '../components/Layout';
import About from '../components/About';
import Home from '../components/Home';
import Clubs from '../components/Clubs';
import ClubDetails from '../components/ClubDetails';
import FullMap from '../components/FullMap';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import Dashboard from '../components/Dashboard';
import UpdateClub from '../components/UpdateClub';
import EditEvent from '../components/events/EditEvent';
import EventDetails from '../components/events/EventDetails';
import WashroomStatus from '../components/WashroomStatus';
// The routes will be managed in this file
// If there are too many, then the nested routes will be moved to other files within this folder.

import internalApi from 'Lib/internalApi';

import { isAuthed, getUser } from 'Lib/auth';

const routes = [{
    name: 'washroomStatus',
    path: '/washroom-status', // ?id=1
    component: WashroomStatus,
},
{
    name: 'main', // Name of route, can be used instead of the path (in case you need to change your path).
    path: '/',
    component: Layout, // The base(?) component of the webpage.
    children: [
        {
            name: 'home',
            path: '',
            component: Home,
        },
        {
            name: 'about',
            path: 'about',
            component: About,
        },
        {
            name: 'clubs',
            path: 'clubs',
            component: Clubs,
        },
        {
            name: 'clubDetails',
            path: 'club/:slug',
            component: ClubDetails,
        },
        {
            name: 'map',
            path: 'map',
            component: FullMap,
        },
        {
            name: 'signIn',
            path: 'sign-in',
            component: SignIn,
        },
        {
            name: 'signUp',
            path: 'sign-up',
            component: SignUp,
        },
        {
            name: 'dashboard',
            path: 'account',
            component: Dashboard,
            meta: {
                requiresAuth: true,
                unauthRedirect: 'signIn',
            },
        },
        {
            name: 'createClub',
            path: 'new-club',
            component: UpdateClub,
            meta: {
                requiresAuth: true,
                unauthRedirect: 'signIn',
            },
        },
        {
            name: 'editClub',
            path: 'club/:slug/edit',
            component: UpdateClub,
            beforeEnter: async (to, from) => {
                const { data: clubs } = await internalApi.get('clubs/', { query: to.params.slug });
                const clubId = clubs[0].id;
                const user = getUser();
                // console.log(user.clubs, clubId);
                const clubBelongsToUser = user.clubs.some((club) => club === clubId);

                if (!clubBelongsToUser) return { name: 'clubDetails', params: to.params };
            },
            meta: {
                requiresAuth: true,
                unauthRedirect: 'clubDetails',
            },
        },
        {
            name: 'editEvent',
            path: 'event/:id/edit',
            component: EditEvent,
            beforeEnter: async (to, from) => {
                const { data: events } = await internalApi.get('events/', { id: to.params.id });
                const user = getUser();
                const eventBelongsToUser = user.clubs.some((club) => club === events[0].ClubId);

                if (!eventBelongsToUser) return { name: 'eventDetails', params: to.params };
            },
            meta: {
                requiresAuth: true,
                unauthRedirect: 'eventDetails',
            },
        },
        {
            name: 'eventDetails',
            path: 'event/:id',
            component: EventDetails,
        },
    ] // Add more routes here.
}];

export default routes;