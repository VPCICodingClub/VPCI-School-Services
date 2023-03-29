'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clubs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Clubs.init({ // You can add more attributes here, but also add them in migrations.
    name: { type: DataTypes.TEXT, allowNull: false },
    description: DataTypes.TEXT,
    logo: DataTypes.TEXT,
    slug: { type: DataTypes.TEXT, allowNull: false },
  }, {
    sequelize,
    modelName: 'Clubs',
  });
  return Clubs;
};

// npx sequelize model:generate --name Clubs --attributes name:string,description:string