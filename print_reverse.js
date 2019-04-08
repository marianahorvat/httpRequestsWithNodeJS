var getHTML = require('./http-functions');

//Reverses the html string and then prints it to the console.

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printUpperCase (html) {
  var splitString = html.split("");
  var revArray = splitString.reverse();
  var myString = revArray.join("");

  console.log(myString);

  /* Write your code here! */

}

getHTML(requestOptions, printUpperCase);