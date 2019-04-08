var getHTML = require('./http-functions');

//Transforms the html string into ALL CAPS and prints it to the console.

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase (html) {
  var myString = html.toString().toUpperCase();
  console.log(myString);


  /* Write your code here! */

}

getHTML(requestOptions, printUpperCase);