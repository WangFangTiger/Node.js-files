const fs = require('node:fs');

// Asynchronous read (non-blocking)
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error("Could not read file:", err);
    return;
  }
  console.log("File content:", data);
});

console.log("I run BEFORE the file is finished reading!");
