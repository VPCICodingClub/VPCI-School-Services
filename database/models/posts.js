'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Posts.belongsTo(models.Clubs);
    }
  }
  Posts.init({
    title: {type: DataTypes.TEXT, allowNull: false},
    description: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Posts',
  });
  return Posts;
};