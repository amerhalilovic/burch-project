const mongoose = require('mongoose');

const Schema = mongoose.Schema
const eventsSchema = new Schema({
    name: String,
    img: String,
    description: String,
    date: Date

})

module.exports = mongoose.model('event', eventsSchema, 'events')