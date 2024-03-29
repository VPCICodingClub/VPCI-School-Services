'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Events extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Events.belongsTo(models.Clubs);
    }
  }
  Events.init({
    title: {type: DataTypes.TEXT, allowNull:false},
    description: DataTypes.TEXT,
    location: DataTypes.TEXT,
    link: DataTypes.TEXT,
    start: DataTypes.DATE,
    end: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Events',
  });
  return Events;
};