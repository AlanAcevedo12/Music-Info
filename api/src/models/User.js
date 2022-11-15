const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("user", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      unique: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING
    },
    surname: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      type: DataTypes.STRING
    },
    username: {
      type: DataTypes.STRING,
      unique: true
    },
    age: {
      type: DataTypes.STRING
    },
    favoriteTracks: {
      type: DataTypes.JSON,
      defaultValue: [],
    }
  }, {
    timestamps: false
  });
};