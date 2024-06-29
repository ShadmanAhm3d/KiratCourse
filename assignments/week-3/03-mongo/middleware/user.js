const { User } = require("../db/index.js");

async function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const username = req.headers["username"];
  const password = req.headers["password"];
  try {
    const res = await User.findOne({ username: username });
    if (res) {
      next();
    } else {
      console.log("User does not exist");
      res
        .status(401)
        .json({ status: "Unauthorized", msg: "User does not exist" });
    }
  } catch (err) {
        res.status(500).json({
            msg : err,
        })
    }
}

module.exports = userMiddleware;

