const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, reqiured: true }
});

const users = new mongoose.model('users', postSchema);

module.exports = users; 