const mongoose = require("mongoose");

const db = process.env.database;
mongoose.connect(db, {
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>console.log("Database Connection Established"))

.catch((error)=>{
    console.log("error",error);
})