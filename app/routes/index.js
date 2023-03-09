import Layout from '../components/Layout';
import About from '../components/About';
import Home from '../components/Home';
// The routes will be managed in this file
// If there are too many, then the nested routes will be moved to other files within this folder.

const routes = [{
    name: 'main', // Name of route, can be used instead of the path (in case you need to change your path).
    path: '/',
    component: Layout, // The base(?) component of the webpage.
    children: [
        {
        name: 'About',
        path: '/about',
        component: About,
        },
        {
        name: 'Home',
        path: '/',
        component: Home,
        },
    ] // Add more routes here.
}];

export default routes;