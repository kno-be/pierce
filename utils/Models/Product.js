import Sequelize from "sequelize";
import connection from "../database";
import Category from "./Category";

const Product = connection.define("products", {
        title:{
            type: Sequelize.STRING,
            allowNull: false
        },
        price:{
            type: Sequelize.FLOAT,
            allowNull: false
        },
        image:{
            type: Sequelize.STRING,
            allowNull: false
        },
        color:{
            type: Sequelize.STRING,
            allowNull: false
        },
        tags:{
            type: Sequelize.STRING,
            allowNull: false
        }
})


Product.belongsTo(Category);
Category.hasMany(Product);

Product.sync({force:false})
    .then(() => {})
    .catch((erro) => { console.log(erro) })

module.exports = Product;