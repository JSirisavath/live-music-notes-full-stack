let express = require('express');
let router = express.Router();

// testing server - Redirects to testing  page
router.get('/test', (req, res) => {
  res.send(
    'Hello World, this will call will work only when you press the button because it is requesting to AppApiService (From Index) that is also fetching our data from the  endpoint to send to you!'
  );
});

module.exports = router;
