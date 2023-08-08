const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({
    fname: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, reqiured: true }
});

const users = new mongoose.model('users', postSchema);

module.exports = users; 