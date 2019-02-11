const fs = require("fs");
const path = require("path");
const CHANGELOG = path.join(__dirname, "..", "README.md");

(function main() {
  fs.readFile(CHANGELOG, "utf8", (err, data) => {
    if (err) {
      throw err;
    }

    console.log("README contents:");
    console.log(data);
  });
})();