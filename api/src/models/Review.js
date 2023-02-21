const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("review", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            unique: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING
        },
        score: {
            type: DataTypes.INTEGER
        },
        description: {
            type: DataTypes.TEXT
        },
        date: {
            type: DataTypes.DATE
        }
    }, {
        timestamps: false
    })
};