var https = require('https');

function getAndPrintHTML(options) {

https.get(requestOptions, function (response) {
var myString = '';

    response.setEncoding('utf8');

    // the callbaxk is invoked when a `data` chunk is received
    response.on('data', function (data) {
      myString += data, '\n';
    });


    // the callback is invoked when all of the data has been received
    // (the `end` of the stream)
    response.on('end', function() {
      console.log('Response stream complete.');
      console.log('Chunk Received', myString, '\n');
    });
});

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML();