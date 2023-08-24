const users = require("../models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SecretKey = "GAUTAM";

exports.userregister = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400).json({ error: "Fill all Fields" });
  }

  try {
    const preuser = await users.findOne({ username: username });

    if (preuser) {
      res.status(400).json({ error: "User already exist" });
    } else {
      const userregister = new users({
        username,
        email,
        password,
      });

      const storeData = await userregister.save();
      res.status(200).json(storeData);
    }
  } catch (error) {
    res.status(400).json({ error: "Invalid Details", error });
  }
};


//CHECK PHONE INFORMATION IN DATABASE
exports.userlogin = async (req, res) => {
  const { username, password } = req.body;

  const user = await users.findOne({ username: username });
  if (!user) {
    return res.send("Username not found")
  }

  try {
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (isPasswordValid) {
      

      console.log("Valid");
      const login_token = jwt.sign({username: user.username,},
        SecretKey);
        res.status(201).json({ exists: true, username: user.username, token:login_token});

    }
    else {
      res.status(201).json({ exists: false });
      console.log("Password didn't Match");
    }
  }
  catch (error) {
    console.error("Error while querying MongoDB:", error);
    res.status(500).json({ error: "Unable to connect with DB" });
  }

  
};
