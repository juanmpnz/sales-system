const S = require("sequelize");
const db = require("../db/index.js");

class Sale extends S.Model{}

Sale.init(
    {
        date: {
            type: S.DATE,
            allowNull: false,
        },
        ticket:{
            type: S.STRING,
            allowNull: false,
        },
        code:{
            type: S.STRING,
            allowNull: false,
        },
        delivered:{
            type: S.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        model:{
            type: S.STRING,
            allowNull: false,
        },
        clientName : {
            type: S.STRING,
            allowNull: false,
        },
        clientPhone:{
            type: S.NUMBER,
            allowNull: false,
            defaultValue: 0
        },
        observations:{
            type: S.TEXT,
            allowNull: true,
        },
        paymentMethod:{
            type: S.STRING,
            allowNull: false,
        },
        totalPrice:{
            type: S.NUMBER,
            allowNull: false,
            defaultValue: 0
        },
        prePayment:{
            type: S.NUMBER,
            allowNull: false,
            defaultValue: 0
        },
        restPay:{
            type: S.NUMBER,
            allowNull: false,
            defaultValue: 0
        }
    },
    {
        sequelize: db,
        modelName: "Sale",
    }
)

module.exports = Sale;