'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Accounts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Accounts.init({
    username: { type: DataTypes.TEXT, allowNull: false },
    passwordHash: { type: DataTypes.TEXT, allowNull: false },
    salt: { type: DataTypes.TEXT, allowNull: false },
    email: { type: DataTypes.TEXT, allowNull: false },
    isClubAccount: { type: DataTypes.BOOLEAN, allowNull: false },
  }, {
    sequelize,
    modelName: 'Accounts',
  });
  return Accounts;
};