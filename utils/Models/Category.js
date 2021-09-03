import Sequelize from "sequelize";
import connection from "../database";
import Product from "./Product";

const Category = connection.define("categories", {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

Category.sync({force:false})
    .then( () => {})
    .catch(erro => console.log(erro))


module.exports = Category;
