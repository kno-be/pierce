import { Sequelize } from 'sequelize';
import connection from '../../../utils/database';
import Product from '../../../utils/Models/Product';
import Category from '../../../utils/Models/Category';

connection
  .authenticate()
  .then(() => {
    console.log('Sucessfuly connected!');
  })
  .catch((error) => {
    console.log(error);
  });

const handler = async (req, res) => {
  try {
    const { method } = req;

    switch (method) {
      case 'GET':
        res.status(200).end(`Method ${method} received sucessfuly.`);
        break;

      case 'POST':
        var { name, slug } = req.body;

        if (name != undefined) {
          const newcategory = await Category.create({
            name: name,
            slug: slug,
          })
            .then(() => {
              res.json({
                name,
                slug,
              });
              res.end();
            })
            .catch((err) => console.log(err));
        }
        break;

      case 'DELETE':
        var { name, slug } = req.body;

        if (name != undefined) {
          const delcategory = await Category.destroy({
            where: {
              name: name,
            },
          })
            .then(() => {
              res.json({
                name,
              });
              res.end();
            })
            .catch((err) => console.log(err));
        }
        break;

      default:
        res.status(405).end(`Method ${method} not allowed`);
    }
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
