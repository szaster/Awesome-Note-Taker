// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on previous notes

// var noteStorage = require("../data/noteStorage");

// ROUTING

// API GET Requests
// Below code handles when users "visit" a page.
// In each of the below cases when a user visits a link
// (ex: localhost:PORT/api/admin... they are shown a
//JSON of the data in the table)

function configureApiRoutes(app) {
  app.get("/api/notes", function (req, res) {
    res.json(mynotes);
  });
  app.get("/api/*", function (req, res) {
    res.json(mynotes);
  });
  app.post("/api/notes"),
    function (req, res) {
      fs;
    };
}

module.exports = configureApiRoutes;
