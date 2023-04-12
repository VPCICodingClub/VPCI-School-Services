# VPCI-Student-Services

## Requirements
- Node.js - (https://nodejs.org/en/download)
- Postgres - (https://postgresapp.com/) <- macOS link, for Windows, search up a tutorial...

## Setup and Run

- `git clone <link>` to clone the repo get the link from the green `Code` button above.

Assuming you also have Node.js installed,
- `npm install` to download all the dependencies.

Assuming you have Postgres installed,
1. `npx sequelize init` to create the config folder, (DO NOT USE `--force`)
1. then run `createuser <username>`
1. then run `createdb <database-name> -O <username>`
1. In config/database.json, change "username" to the username used in the above commands.
1. Change "database" to the name you gave to the database.
1. Change "dialect" to "postgres"
1. The models are already made, run `npx sequelize db:migrate` which will translate the migrations into tables in the database
1. run `npx sequelize db:seed:all` to add the dummy data (this won't overwrite anything, it'll only add data). `npx sequelize db:seed:undo:all` to undo.
Read the txt file in database/ for more information.

Now that the database works,
1. `npm run build` to bundle the javascript and HTML. (Don't touch the build folder)
1. `npm start` to start the application.
1. Visit `localhost` in your browser.

When making changes to the backend, restart the server for them to work.
