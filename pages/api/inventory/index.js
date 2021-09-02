import { Sequelize } from "sequelize";
import connection from "../../../utils/database";
import Product from "../../../utils/Models/Product"
import Category from "../../../utils/Models/Category"

connection
    .authenticate()
    .then(() => {
      console.log("Sucessfuly connected!")
    }).catch((error) => {
      console.log(error)
    })

const handler = async (req, res) => {
  
  try {

    

    const {method} = req;

    switch (method) {
      //LIST PRODUCTS
      case "GET":
        // let data = await db.collection('Products').find().toArray();
        res.status(200).end(`Method ${method} received sucessfuly.`);
      break; 

      //CREATE PRODUCT
      case "POST":
        var {
          prodTitle,
          prodPrice,
          prodImg,
          prodColor,
          prodTags 
                } = req.body;
         let create = await db.collection('Products').insertOne({
         prodTitle,
         prodPrice,
         prodImg,
         prodColor,
         prodTags
        });
        res.json(create);
      break;

      default:
        res.status(405).end(`Method ${method} not allowed`);
    }
  } catch (err) {
    res.status(500).json({statusCode: 500, message: err.message });
  }
}
;


export default handler;

// export default async function (req, res) {
//     if (req.method === 'POST') {
//       var {
//         title,
//         price,
//         img,
//         color,
//         tags  
//       } = req.body;
//       // Process a POST request
//       const {db} = await connectToDatabase();
//       res.statusCode = 200;      
//       const response = await db.insertOne({
//         title,
//         price,
//         img,
//         color,
//         tags
//          })
//       res.json({title,
//         price,
//         img,
//         color,
//         tags})
//       res.end();  
//     }    else {
//       // Handle any other HTTP method
//       res.statusCode = 200;
//       const {db} = await connectToDatabase();
//       const response = await db.Products.find({ })
//       res.json({ name: 'error'})
//     }
// }