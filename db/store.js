const fs = require("fs");
const path = require("path");
const destination = "../public/notes.html";

class Store {
  getAll() {
    return [];
  }
}

function writeDB(data) {
  fs.writeFile(destination, data, (err) => {
    if (err) {
      console.log(err.message);
      console.log("The file has not been saved!");
      process.exit(1);
    } else {
      console.log("The file has been saved!");
    }
  });
}

//Module exports new instance of a class Store
module.exports = new Store();
