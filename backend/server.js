const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const swaggerUI = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
require("dotenv").config();


const app = express();

// Use Helmet to protect against well known vulnerabilities
app.use(helmet());
// compress download resources
app.use(compression());
app.use(cors());
// parse requests of content-type - application/json
app.use(bodyParser.json({ limit: 52428800 }));
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false, limit: 52428800 }));

// defining swagger option
const options = {
  definition: {
    info: {
      title: 'Swagger API Address Book',
      version: '1.0.0',
      description: 'Creating CRUD address book'
    }
  },
  apis:['./routes/*.js'] 
  
}

const swaggerSpec = swaggerJSDoc(options);

app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));



// routes

// welcome router
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Address book rest API v1 :)" });
});

require('./routes/Contact.routes')(app);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json(err);
});


// set port, listen for requests
const PORT = process.env.PORT || 5000;

// Starting the server
app.listen(PORT, () => {
    console.log(
      "==> 🌎  Server is running on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
});

module.exports = app;