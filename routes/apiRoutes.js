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

const store = require("../db/store");

function handleApiNotes(req, res) {
  const notes = store.getAll();
  res.json(notes);
}

function handleDeleteNote(req, res) {
  store.deleteById(req.params.id);
  res.sendStatus(200);
}

function handlePostNote(request, res) {
  store.saveNewNote(request.body);
  res.sendStatus(200);
}

function configureApiRoutes(app) {
  // define a handler for GET /api/notes
  app.get("/api/notes", handleApiNotes);
  // define a handler for DELETE /api/notes
  app.delete("/api/notes/:id", handleDeleteNote);
  // define a handler for POST /api/notes
  app.post("/api/notes", handlePostNote);
}

module.exports = configureApiRoutes;
