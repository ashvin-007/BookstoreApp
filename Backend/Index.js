const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors=require('cors')

const bookRoute = require('./Router/Book_Router'); // Change to CommonJS syntax
const signup=require('./Router/User_Router')

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();
const PORT = process.env.PORT || 4002;
const URI = process.env.MONGOURI;

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Mongodb connected');
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB:', error);
  });

app.use('/Book', bookRoute);
app.use('/user', signup);


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
