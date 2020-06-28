const fs = require("fs");
const path = require("path");
const destination = path.join(__dirname, "db.json");

class Store {
  getAll() {
    return readDB();
  }
}

function readDB() {
  const buffer = fs.readFileSync(destination);
  const dbData = JSON.parse(buffer);
  return dbData;
}

//Module exports new instance of a class Store
module.exports = new Store();
