const users = require("../models/userSchema");
exports.login= async (req, res) => {
      const { username, password } = req.body;} //code

// const jwt = require("jsonwebtoken");
// const SECRET_KEY = "NOTESAPI";

// exports.userregister = async (req, res) => {
//   const { fname, email, phone } = req.body;

//   if (!fname || !email || !phone) {
//     res.status(400).json({ error: "Fill all Fields" });
//   }

//   try {
//     const preuser = await users.findOne({ phone: phone});

//     if (preuser) {
//       res.status(400).json({ error: "User already exist" });
//     } else {
//       const userregister = new users({
//         fname,
//         email,
//         phone,
//       });

//       const storeData = await userregister.save();
//       //   res.status(200).json(storeData);
//       const register_token = jwt.sign(
//         {
//           phone: userregister.phone,
//           id: userregister._id,
//         },
//         SECRET_KEY
//       );
//       res.status(201).json({ user: userregister, token: register_token });
//     }
//   } catch (error) {
//     res.status(400).json({ error: "Invalid Details", error });
//   }
// };

// //CHECK PHONE INFORMATION IN DATABASE
// exports.userphone = async (req, res) => {
//   const { phone } = req.body;

//   try {
//     const user = await users.findOne({ phone: phone });

//     if (user) {
//       //   res.status(200).json({ exists: true, phone: user.phone });
//       const login_token = jwt.sign(
//         {
//           phone: user.phone,
//           id: user._id,
//         },
//         SECRET_KEY
//       );
//       res.status(201).json({ exists: true, phone:user.phone, user: user, token: login_token });
//     } else {
//       const new_token = jwt.sign(
//         {},
//         SECRET_KEY,
//         {
//           expiresIn: "1h"
//         }
//       );
//       res.status(200).json({ exists: false, token: new_token});
//     }
//   } catch (error) {
//     console.error("Error while querying MongoDB:", error);
//     res.status(500).json({ error: "Unable to connect with DB" });
//   }
// };
