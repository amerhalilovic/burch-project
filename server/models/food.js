const mongoose = require('mongoose');

const Schema = mongoose.Schema
const foodSchema = new Schema({
    name: String,
    img: String,
    price: Number

})

module.exports = mongoose.model('food', foodSchema, 'food')