'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Job.belongsTo(models.Location)
      Job.hasMany(models.Favorite)
    }
  };
  Job.init({
    title: DataTypes.STRING,
    company: DataTypes.STRING,
    salary: DataTypes.STRING,
    summary: DataTypes.STRING,
    long_description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Job',
  });
  return Job;
};