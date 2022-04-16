/*
npm install mongoose
*/

const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express()
const port = 3000;

mongoose.connect('mongodb://localhost:27017/test'); //new database or connect to existed database

app.use(cors());
app.use(express.json());

//const Cat = mongoose.model('Cat', { name: String }); //new collection created
const Dog = mongoose.model('Dog', { name: String }); //new collection created

//const kitty = new Cat({ name: 'Zildjian' });
//kitty.save().then(() => console.log('meow')); //new data into the collection

app.post('/api/dog', (req, res) => {
    const puppy = new Dog({ name: req.body.name });
    puppy.save().then(() => res.send('created'));

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})