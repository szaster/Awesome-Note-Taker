const fs = require("fs");
const path = require("path");
const uuid = require("uuid");
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

class Store {
  getAll() {
    // return Object.values(readDB());
    return readDB();
  }
  deleteById(id) {
    //read current notes
    const notes = readDB();
    //  delete a note with given id
    const filteredNotes = notes.filter((note) => {
      return note.id !== id;
    });
    //  writes notes back to the file
    writeDB(filteredNotes);
  }
  saveNewNote(newNote) {
    //read current notes
    const myNotes = readDB();
    // save a new note
    newNote["id"] = uuid.v4();
    myNotes.push(newNote);
    writeDB(myNotes);
  }
}

//Module exports new instance of a class Store
module.exports = new Store();
