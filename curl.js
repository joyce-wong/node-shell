const request = require('request');
module.exports = function (url) {
  request(url, function (err, response, body) {
    if (err) {
      throw err;
    } else {
      // process.stdout.write('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      process.stdout.write(body); // Print the HTML for the Google homepage
    }
  });
}