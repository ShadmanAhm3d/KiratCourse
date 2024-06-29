const { Admin } = require("../db/index.js");

async function adminMiddleware(req, res, next) {
  // Extract username and password from request headers
  const userName = req.headers["username"];
  const passWord = req.headers["password"];

  try {
    // Check if there's a user with the provided username
    const user = await Admin.findOne({ userName: userName }).exec();
    if (user) {
      // Here you can check if the password matches, if required
      // For simplicity, let's assume that the username is sufficient for authentication
      next(); // Move to the next middleware or route handler
    } else {
      // If no user found with the provided username
      console.log("User does not exist");
      res.status(401).json({ status: "Unauthorized", msg: "User does not exist" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: "Failed", msg: "Internal Server Error" });
  }
}

module.exports = adminMiddleware;
// Middleware for handling auth
