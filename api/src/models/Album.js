const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("album", {
        id: {
            type: DataTypes.INTEGER,
            unique: true,
            primaryKey: true
        },
        totalScore: {
            type: DataTypes.INTEGER,
        },
        totalReviews: {
            type: DataTypes.INTEGER,
        }
    }, {
        timestamps: false
    })
};