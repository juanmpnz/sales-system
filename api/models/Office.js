const S = require("sequelize");
const db = require("../db/index.js");

class Office extends S.Model{}

Office.init(
    {
        officeName: {
            type: S.STRING,
            allowNull: false,
        },
    },
    {
        sequelize: db,
        modelName: "Office",
    }
)

module.exports = Office;