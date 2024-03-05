let express = require("express");
let router = express.Router();
let admin = require("firebase-admin");

var db = admin.database();

// testing routes
router.get("/test", (req, res) => {
  // create a new collection in firebase database
  db.ref("testing").set("hello jay this is working");

  res.send(
    "Hello World, this will call will work only when you press the button because it is requesting to AppApiService (From Index) that is also fetching our data from the  endpoint to send to you!"
  );
});

module.exports = router;
