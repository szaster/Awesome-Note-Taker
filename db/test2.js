const fs = require("fs");
const path = require("path");

const destination = path.join(__dirname, "db.json");

function readDB() {
  const buffer = fs.readFileSync(destination);
  const dbData = JSON.parse(buffer);
  return dbData;
}

//This function takes an object, converts it to a string(serialises)
// and then writes it to a file
function writeDB(data) {
  const serialiseData = JSON.stringify(data);
  fs.writeFileSync(destination, serialiseData);
}

const notes = readDB();
console.log("Output of readDb", notes);

// requirenment: delete note with id = 3.
const id = "3";

// Function that takes something and returns true or false
function predicate(note) {
  return note.id !== id;
}

const filteredNotes = notes.filter(predicate);
console.log("Output of the filter function", filteredNotes);

writeDB(filteredNotes);
