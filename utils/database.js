const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

const userSchema = new mongoose.Schema({
    name: {type: String, required:true},
    email: {type: String, required:true},
})

const productSchema = new mongoose.Schema({
    title: {type: String, required:true},
    price: {type: Number, min:0, required:true},
})
