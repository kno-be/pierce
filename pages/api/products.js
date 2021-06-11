import connect, {} from "../../utils/mongodb";


export default async function (req, res) {
    if (req.method === 'POST') {
      var {
        title,
        price,
        img,
        color,
        tags  
      } = req.body;
      // Process a POST request
      const {db} = await connect();
      res.statusCode = 200;      
      const response = await db.insertOne({
        title,
        price,
        img,
        color,
        tags
         })
      res.json({title,
        price,
        img,
        color,
        tags})
      res.end();  
    }    else {
      // Handle any other HTTP method
      res.statusCode = 200;
      res.json({ name: 'error'})
    }
}