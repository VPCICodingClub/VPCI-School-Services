// DON'T EDIT THIS FILE

import './styles';
import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import routes from './routes'; // All routes will be in this folder to keep things tidy.
import internalApi from 'Lib/internalApi';

import { isAuthed, isAuthorized } from 'Lib/auth';

// The router is what allows you to go to different pages on the website.
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});


router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthed()) {
    return next({ name: to.meta.unauthRedirect, params: to.params });
  }

  return next();
});

const app = createApp({
    template: '<router-view></router-view>' // This is where the component that corresponds to the current route will be displayed.
});
// In this case, the component of the '/' path (landing page path) is Layout, so it will be put in the place of this router-view.
// The Layout component will be used for containing the general layout of the page, so it will include components that will
// be on every page. It will also have another router-view which will change depending on the path.

// All the components are in ./app/components, each has an index.js and <ComponentName>.html file.
// You could combine these two files, but it's cleaner to separate the logic from the styling and layout.

app.use(router);

app.mount('#app'); // The template from above is put in the div with this id (in index.html).
