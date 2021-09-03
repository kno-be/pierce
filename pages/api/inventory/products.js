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
        // let data = await db.collection('Products').find().toArray();
        Product.findAll()
          .then((products) => {
            console.log('acho que deu certo');
          })
          .catch((error) => console.log(error));
        res.status(200).end(`Method ${method} received sucessfuly.`);
        break;

      case 'POST':
        var { category, title, price, image, color, tags } = req.body;

        if (title != undefined) {
          const newproduct = await Product.create({
            title: title,
            price: price,
            image: image,
            color: color,
            tags: tags,
            categoryId: category,
          })
            .then(() => {
              res.json({ title, price, image, color, tags });
              res.end();
            })
            .catch((err) => console.log(err));
        }
        break;

      case 'DELETE':
        var { category, title } = req.body;

        if (title != undefined) {
          const delproduct = await Product.destroy({
            where: {
              title: title,
              categoryId: category,
            },
          })
            .then(() => {
              res.json({ title });
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
