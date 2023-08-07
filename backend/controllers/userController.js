const users = require("../models/userSchema");
            //CHECK PHONE INFORMATION IN DATABASE
            exports.userphone = async (req, res) => {
                  const { username } = req.body;

                  try {
                        const user = await users.findOne({ username: username });

                        if (user) {
                              res.status(201).json({ exists: true, username: user.username });

                        } else {
                              res.status(200).json({ exists: false });
                        }

                  } catch (error) {
                        console.error("Error while querying MongoDB:", error);
                        res.status(500).json({ error: "Unable to connect with DB" });
                  }
            };