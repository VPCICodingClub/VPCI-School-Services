import express from 'express'; // Using express cuz this is the backend I already have code for :)
import { URL } from 'url';

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';

import api from './api/index.mjs'; // this is importing the express.Router

const app = express();
const port = 3000;

// The module bundler. It's used to compile all the js and html stuff into one file so it's faster to send.
// It also manages dependencies and stuff.
import config from './webpack.config.js';
const compiler = webpack(config);

// === For dev only === //
// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
}));
// Tell express to serve the static files in the build folder which were created by webpack.
app.use(express.static(new URL('../build', import.meta.url).pathname));
// These files need to be compiled through the command line with `npm run build`, then you can start the server.
// ==================== //

// https://www.geeksforgeeks.org/express-js-app-use-function/
// app.use() is used to mount middleware
// https://expressjs.com/en/guide/using-middleware.html
app.use(express.json()); // For parsing body as JSON because it comes as a string otherwise.
app.use(api); // Need to add the api here otherwise you can't use it.

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

// Also, .mjs is a module javascript file (only for node), that is what allows you to use these import statements,
// otherwise you need to use require() and it's a little more annoying. .mjs files will only be used in the server,
// not frontend since these import statements work there already since it's all executed in the browser.