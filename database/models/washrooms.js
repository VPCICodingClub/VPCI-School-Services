'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Washrooms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Washrooms.init({
    location: DataTypes.TEXT,
    rating: DataTypes.FLOAT,
    entryDates: DataTypes.ARRAY(DataTypes.DATE),
    observations: DataTypes.ARRAY(DataTypes.BOOLEAN), // true mean WR is open, false is closed.
    observationDates: DataTypes.ARRAY(DataTypes.DATE),
  }, {
    sequelize,
    modelName: 'Washrooms',
  });
  return Washrooms;
};