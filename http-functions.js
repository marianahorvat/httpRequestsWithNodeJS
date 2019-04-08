var https = require('https');


function getHTML(options, callback) {
//console.log("Line 5: ")

  https.get(options, function (response) {
  var myString = '';

    response.setEncoding('utf8');

    response.on('data', function (data) {
      myString += data, '\n';
    });

    response.on('end', function() {
      callback(myString);
      //console.log('Response stream complete.');
      //console.log('Chunk Received', myString, '\n');
    });
  });

    /* Your code here */
};


function printHTML (html) {
  console.log(html);
}

var requestOptions = {
host: 'sytantris.github.io',
path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);
module.exports = getHTML;
//console.log("Line 38");
