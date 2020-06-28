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

function handleApiNotes(req, res) {
  const notes = [];
  res.json(notes);
}

function configureApiRoutes(app) {
  app.get("/api/notes", handleApiNotes);
}

// app.get("/api/*", function (req, res) {
//   res.json(notes);
// });

//   app.post("/api/notes"),
//     function (req, res) {
//       const newNote = req.bo;
//       fs.writeFile();
//     };
// }

module.exports = configureApiRoutes;
