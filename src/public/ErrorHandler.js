

const ErrorHandler = require('express-error-handler');


// define below all other routes
export default errorHandler = ErrorHandler
{
  static: {
    '404'= 'error.html', // put this file in your Public folder
    '500'= 'error.html' // ditto
  }
}

 

