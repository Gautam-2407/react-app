require("dotenv").config();
const express = require("express");
const app = express();
const cors= require("cors");
require("./db/db");
const router = require("./routes/router");
const Port=5000;
/*Use express.js, mongoose, routers, cors, middleware, */
 
app.use(express.json());
app.use(cors());
app.use("/", router);

app.listen(Port, () =>{
  console.log(`Server is running on port ${Port}`);
});