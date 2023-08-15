import Layout from '../components/Layout';
import About from '../components/About';
import Home from '../components/Home';
import Clubs from '../components/Clubs';
import ClubDetails from '../components/ClubDetails';
import FullMap from '../components/FullMap';
import WashroomStatus from '../components/WashroomStatus';
// The routes will be managed in this file
// If there are too many, then the nested routes will be moved to other files within this folder.

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
            path: 'clubs/:id',
            component: ClubDetails,
        },
        {
            name: 'map',
            path: 'map',
            component: FullMap,
        },
    ] // Add more routes here.
}];

export default routes;