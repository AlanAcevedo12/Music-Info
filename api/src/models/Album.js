const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("album", {
        id: {
            type: DataTypes.INTEGER,
            unique: true,
            primaryKey: true
        },
        totalScore: {
            type: DataTypes.FLOAT,
            defautValue: 0
        },
        totalReviews: {
            type: DataTypes.INTEGER,
            defautValue: 0
        }
    }, {
        timestamps: false
    })
};