import connect, {} from "../../utils/database";

export default async function (req, res) {
    if (req.method === 'POST') {
      const {
        name,
      } = req.body;
      // Process a POST request
      const {db} = await connect();
      res.statusCode = 200;      
      const response = await db.insertOne({
         name
         })
      res.json({ name: 'success'})
      res.end();  
    }    else {
      // Handle any other HTTP method
      res.statusCode = 200;
      res.json({ name: 'error'})
    }
}