var https = require('https');

function getHTML (options, callback) {

  https.get(requestOptions, function (response) {
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

}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);