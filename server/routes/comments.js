const router = require("express").Router();
const Comment = require("../models/Comment");

//POST
router.post("/", async (req, res) => {
  const newCom = new Comment(req.body);
  try {
    const savedCom = await newCom.save();
    res.status(200).json(savedCom);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET
router.get("/", async (req, res) => {
  try {
    const coms = await Comment.find();
    res.status(200).json(coms);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
