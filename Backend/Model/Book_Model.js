const mongoose=require('mongoose')

const Bookschema=mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    image:String,
    title:String


})
const Book=mongoose.model('Book',Bookschema)


module.exports = Book;