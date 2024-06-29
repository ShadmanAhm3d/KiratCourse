const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, User, Course } = require("../db/index.js");
const router = Router();

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  try {
    const newAdmin = await Admin.create(req.body);
    console.log(newAdmin);
    res.status(200).json({
      status: "Success",
      msg: newAdmin,
    });
  } catch (e) {
    console.log("ERROR Creating a new Admin", e);
    res.status(500).json({
      status: "Fail",
      msg: "Erorr ",
    });
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic

  console.log("yaha post pe");
  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;

  try {
    console.log("yaha post try pe");
    const result = await Course.create({
      title: title,
      description: description,
      price: price,
    });
    res.status(200).json({
      status: "Success",
      msg: "New Course Created",
    });
  } catch (err) {
    // Handle the error
    console.error(err);
    res.status(500).json({
      status: "Failed",
      msg: "Failed",
    });
  }
});

router.get("/courses", adminMiddleware, async(req, res) => {
  // Implement fetching all courses logic
  const x = await Course.find({});
  res.json({
    msg: x,
  });
});

module.exports = router;
