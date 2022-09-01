const request = require("request");
const fs = require("fs");

const link = process.argv[2];
let data;
request(link, (error, response, body) => {
  "error:", error;
  "statusCode:", response && response.statusCode;
  data = body;
});
fs.writeFile(adrress, data, err => {
  if (err) {
    console.error(err);
  }
});
