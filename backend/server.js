// server configs and set up
let express = require("express");
var cors = require("cors");
let admin = require("firebase-admin");

var serviceAccount = require("./lmnop-d1562-firebase-adminsdk-7qhuq-56a7099ced.json");

// Default configuration for production
let config = {
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://lmnop-d1562-default-rtdb.firebaseio.com",
};

// Modify config for non-production environments
if (process.env.NODE_ENV !== "production") {
  // Point to the local Firebase emulator for database
  config = {
    databaseURL: "http://127.0.0.1:9000",
    credential: admin.credential.cert(serviceAccount),
  };

  // Point to the local Firebase Auth emulator
  process.env.FIREBASE_AUTH_EMULATOR_HOST = "localhost:9099";

  // Point to the local Firebase Database emulator
  process.env.FIREBASE_DATABASE_EMULATOR_HOST = "localhost:9000";
}

// Initialize Firebase Admin with the configured settings
admin.initializeApp(config);

// Import the API routes from the routes/endpoint.js file
let api = require("./routes/endpoint");

let app = express();

app.use(cors());

app.use(express.json());
app.use("/api", api);

app.use((req, res, next) => {
  res.status(404).send("Not Found");
});

app.use((err, req, res, next) => {
  res.status(500).send("Server error: " + err.message); // Improved error handling
});

// Start server on the specified port or default to 5001
let server = app.listen(process.env.PORT || 5001, function () {
  console.log("server running on port " + server.address().port);
});
