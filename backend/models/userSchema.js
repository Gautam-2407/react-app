import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const postSchema = new Schema({
    username: { type: 'String', unique , required: true },
    password: {type:'string', reqiured: true}
});

let Post = mongoose.model('users', postSchema);

module.exports=Post ;