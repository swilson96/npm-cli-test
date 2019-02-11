#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const README = "README.md";

(function main() {
  fs.readFile(README, "utf8", (err, data) => {
    if (err) {
      throw err;
    }

    console.log("README contents:");
    console.log(data);
  });
})();