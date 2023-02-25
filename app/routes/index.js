import Layout from '../components/Layout';
// The routes will be managed in this file
// If there are too many, then the nested routes will be moved to other files within this folder.

const routes = [{
    name: 'main', // Name of route, can be used instead of the path (in case you need to change your path).
    path: '/',
    component: Layout, // The base(?) component of the webpage.
    // children: [] // Add more routes here.
}];

export default routes;