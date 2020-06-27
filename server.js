const fs = require("fs");
const express = require("express");
var db = fs.readFileSync("db.json");
console.log(db);

// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./routes/apiRoutes")(app);

require("./routes/htmlRoutes")(app);

// Start our server so that it can begin listening to client requests.
// Log (server-side) when our server has started
app.listen(PORT, function () {
  console.log("Server listening on PORT" + PORT);
});
