const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({
    username: { type: 'String', unique: true, required: true },
    password: { type: 'string', reqiured: true }
});

const users = new mongoose.model('users', postSchema);

module.exports = users; 