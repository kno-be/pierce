import connect, {} from "../../utils/mongodb";

export default async function (req, res) {
    if (req.method === 'POST') {
      const {
        title=true,
        price=true,
        color=true,
        tags=true  
      } = req.body;
      // Process a POST request
      const {db} = await connect();
      res.statusCode = 200;      
      const response = await db.insertOne({
         title,
         price,
         color,
         tags
         })
      res.json({ name: 'success'})
      res.end();  
    }    else {
      // Handle any other HTTP method
      res.statusCode = 200;
      res.json({ name: 'error'})
    }
}