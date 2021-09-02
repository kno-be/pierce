import Sequelize from "sequelize";
import connection from "../database";
import Product from "./Product";

const Category = connection.define("categories", {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

Category.hasMany(Product);
Product.belongsTo(Category);

Category.sync({force:false})
    .then( () => {})
    .catch(erro => console.log(erro))


module.exports = Category;
