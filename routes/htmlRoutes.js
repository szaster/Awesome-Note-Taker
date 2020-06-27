// Importing path module to be able to use its join function
var path = require("path");

// This function expects to get express server as an argument. It takes that server
// and defines routes that are going to serve html files.

function configureHtmlRoutes(app) {
  app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
}

module.exports = configureHtmlRoutes;
