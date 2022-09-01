const request = require("request");

const link = process.argv[2];

request(link, (error, response, body) => {
  "error:", error;
  "statusCode:", response && response.statusCode;
  console.log("body:", body);
});
