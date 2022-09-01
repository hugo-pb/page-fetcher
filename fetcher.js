const request = require("request");
const fs = require("fs");
const adrress = process.argv[3];
const link = process.argv[2];

request(link, (error, response, body) => {
  "error:", error;
  "statusCode:", response && response.statusCode;
  fs.writeFile(adrress, body, err => {
    if (err) {
      console.error(err);
    }

    console.log(`was aadded? ${body.length}`);
  });
});
