const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { Admin, User, Course } = require("../db/index.js");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  try {
    const newUser = await User.create(req.body);
    console.log(newUser);
    res.status(200).json({
      status: "Success",
      msg: newUser,
    });
  } catch (e) {
    console.log("ERROR Creating a new Admin", e);
    res.status(500).json({
      status: "Fail",
      msg: "Erorr ",
    });
  }
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  try {
    const data = await Course.find({});
    res.status(200).json({
      status: "Success",
      msg: data,
    });
  } catch (err) {
    res.status(401).json({
      status: "fail",
      msg: err,
    });
  }
});

router.post("/courses/:courseId", userMiddleware, (req, res) => {
  // Implement course purchase logic
});

router.get("/purchasedCourses", userMiddleware, (req, res) => {
  // Implement fetching purchased courses logic
});

module.exports = router;

