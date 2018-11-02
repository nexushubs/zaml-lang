const fs = require('fs');

function readFile(path) {
  return fs.readFileSync(`${__dirname}/${path}`, { encoding: 'utf8' });
}

function readJSON(path) {
  return JSON.parse(readFile(path));
}

exports.readFile = readFile;
exports.readJSON = readJSON;
