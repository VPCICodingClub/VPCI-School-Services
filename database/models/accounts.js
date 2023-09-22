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
      Accounts.belongsToMany(models.Clubs, { through: 'AccountsClubs' });
      // models.Clubs.belongsToAccounts = Accounts.hasOne(models.Clubs);
      // models.Posts.belongsToAccounts = Accounts.hasMany(models.Posts);
      // models.Events.belongsToAccounts = Accounts.hasMany(models.Events);
    }
  }
  Accounts.init({
    username: { type: DataTypes.TEXT, allowNull: false, unique: true },
    passwordHash: { type: DataTypes.TEXT, allowNull: false },
    salt: { type: DataTypes.TEXT, allowNull: false },
    email: { type: DataTypes.TEXT, allowNull: false },
    // type: { type: DataTypes.TEXT, allowNull: false },
  }, {
    sequelize,
    modelName: 'Accounts',
  });
  return Accounts;
};

