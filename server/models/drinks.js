const mongoose = require('mongoose');

const Schema = mongoose.Schema
const drinkSchema = new Schema({
    name: String,
    img: String,
    price: Number

})

module.exports = mongoose.model('drink', drinkSchema, 'drinks')