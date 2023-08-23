const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        trim:true,
        required: true,
    },
    email:{
        type: String,
        unique: true,
        validator(value){
            if(!validator.isEmail(value)){
                throw new Error("Not valid Email")
            }
        },
        required: true,
    },
    password:{
        type: String,
        unique: true,
        required: true,
    }
});




userSchema.pre('save',  async function (next) {
    if(!this.isModified("password"))
        return next();
    try{
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(this.password, salt);
    this.password = hash;
    next();
}
    catch(err){
        next(err);
    }
}); 



  


//CREATING MODEL
const users = new mongoose.model("users",userSchema);

module.exports = users;