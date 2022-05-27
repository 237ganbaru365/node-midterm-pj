const router = require("express").Router();
const Favorite = require("../models/Favorite");

router.post("/", async (req, res) => {
  const newFav = new Favorite(req.body);
  try {
    const savedFav = await newFav.save();
    res.status(200).json(savedFav);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
