import connect, {} from "../../utils/database";
import createProduct from "../../utils/product-api";


export default async function (req, res) {
    
    if (req.method === 'POST') {
     
      const {name,price} = req.body;

      const {db} = await connect();
      res.statusCode = 200;      
      const response = await db.insertOne({
          product
        })
       res.end();  
    }    else {
      // Handle any other HTTP method
      res.statusCode = 200;
      res.json({ name: 'error'})
    }
}