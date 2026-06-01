const fs = require('fs');
const data = fs.readFileSync('File.txt');
console.log(data.toString());