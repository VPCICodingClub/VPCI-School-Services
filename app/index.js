import './styles.css';
import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import routes from './routes'; // All routes will be in this folder to keep things tidy.

// The router is what allows you to go to different pages on the website.
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

const app = createApp({
    template: '<router-view></router-view>' // This is where the component that corresponds to the current route will be displayed.
});
// In this case, the component of the '/' path (landing page path) is Layout, so it will be put in the place of this router-view.
// The Layout component will have another router-view in it for other components.

// All the components are in ./app/components, each has an index.js and <ComponentName>.html file.
// You could combine these two files, but it's cleaner to separate the logic from the styling and layout.

app.use(router);

app.mount('#app'); // The template from above is put in the div with this id (in index.html).
