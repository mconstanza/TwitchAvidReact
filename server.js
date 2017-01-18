var express = require('express')
var app = express()
var PORT = 3001;

import request from 'request';

var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var passport = require('passport');
var Promise = require("bluebird");
mongoose.Promise = Promise;
const path = require('path');
var twitch_controller = require("./client/src/controllers/twitch_controller");


// PRODUCTION SETTINGS
// if (process.env.NODE_ENV === 'production') {
app.use(express.static('client/build'));
// }

// Middleware

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(logger(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Database configuration with mongoose
// var options = {
//     server: {
//         socketOptions: {
//             keepAlive: 300000,
//             connectTimeoutMS: 30000
//         }
//     },
//     replset: {
//         socketOptions: {
//             keepAlive: 300000,
//             connectTimeoutMS: 30000
//         }
//     }
// };
//
// var mongodburi = "";
// mongoose.connect(mongodburi, options);
// var db = mongoose.connection;

// Show any mongoose errors
// db.on("error", function(error) {
//     console.log("Mongoose Error: ", error);
// });
//
// // Once logged in to the db through mongoose, log a success message
// db.once("open", function() {
//     console.log("Mongoose connection successful.");
// });

// var expressSession = require('express-session');
// var MongoStore = require('connect-mongo')(expressSession);
//
// app.use(expressSession({
//     secret: 'darkKnight',
//     store: new MongoStore({mongooseConnection: mongoose.connection}),
//     resave: false,
//     saveUninitialized: false
// }));

// Configuring Passport

// require('./src/Auth/passport.js')(passport);
//
// app.use(passport.initialize());
// app.use(passport.session());

//====================================================================
// ROUTES
// ===================================================================

app.get('/*', function(req, res) {
	res.sendFile(path.join(__dirname,'./build', 'index.html'));
});

app.use('/', twitch_controller);

// TEST route to ensure API calls are functioning correctly
// app.get('/test', (req, res) => {
//   var test = {
//     success: 'YES!'
//   };
//   res.json(test);
// });

// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
// });


app.get('/:channel/streams', function(req, res) {
  // var url = 'https://www.twitch.tv/' + req.params.channel;
  //
  // request
  // .get(streamAPI, {url: url})
  // .on('response', function(response){
  //   console.log(response);
  //   res.send(response.text);
  // })
  // var args = [url]
  // var python = exec(streamAPI, args, (error, stdout, stderr) => {
  //   if(error) {
  //     throw error;
  //   }
  //   console.log(stdout);
  //   res.send(stdout);
  // });
  // var streams = '';
  // python.stdout.on('data', function(data){
  //     streams += data;
  // } );
  // python.stdout.on('close', function( ){
  //     console.log(streams);
  //     res.json(streams);
  // } );
  // var streams = streamAPI.streams('https://www.twitch.tv/' + req.params.channel);
  // res.send(streams);
})

require('./client/src/config/connection');


app.listen(PORT, function() {
    console.log('Example app listening on port 3001!')
})
