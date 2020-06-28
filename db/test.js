console.log(__dirname);

const path = require("path");

const pathToDbJson = path.join(__dirname, "/db.json");
console.log(pathToDbJson);

const fs = require("fs");

const db = fs.readFileSync(pathToDbJson);
console.log(JSON.parse(db));

const a = { prop1: "abc", prop2: 1, prop3: () => {} };
const aSerialized = JSON.stringify([a, a, a, a]);
console.log(aSerialized);

console.log("Value of prop1 of a:", a.prop1);
console.log("Value of prop1 of aSerialized:", aSerialized.prop1);

const aParsed = JSON.parse(aSerialized);
console.log(aParsed);

console.log("Value of prop1 of aParsed:", aParsed[0].prop1);
