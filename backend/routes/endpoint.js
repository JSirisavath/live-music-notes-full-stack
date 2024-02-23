let express = require("express");
let router = express.Router();

// testing server
router.get("/test", (req, res) => {
  res.send("Hello World");
});

module.exports = router;
