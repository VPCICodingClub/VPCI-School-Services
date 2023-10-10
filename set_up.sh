if [[ $1 == "development" ]]; then
    export NODE_ENV=development
    npm install
    createuser root
    createdb database_$1 -O root
    npx sequelize db:migrate
    npm run build

elif [[ $1 == "production" ]]; then
    export NODE_ENV=production
    npm run build

else
    echo "Wrong arg, chose between 'development' and 'production'"
    exit 1
fi