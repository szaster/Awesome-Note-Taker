const fs = require("fs");
const path = require("path");

const uuid = require("uuid");
console.log(uuid.v4);

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

const a = ["a", "b", "c"];
const b = a.push("d");

console.log("Array a", a);
console.log("Return value of push function", b);

const note = { title: "Rhino", text: "They are cute." };

//read current notes
const myNotes = readDB();
note["id"] = uuid.v4();
console.log("Updated notes with id", note);
myNotes.push(note);

writeDB(myNotes);
