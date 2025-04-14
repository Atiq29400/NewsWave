// // const express = require('express');
// // const mongoose = require('mongoose');
// // const app = express();
// // const path = require('path');

// // // Connect to MongoDB
// // mongoose.connect('mongodb://localhost:27017/newswave', {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// // });

// // const db = mongoose.connection;
// // db.on('error', console.error.bind(console, 'connection error:'));
// // db.once('open', function () {
// //   console.log('Connected to MongoDB');
// // });

// // // Define a schema for users
// // const userSchema = new mongoose.Schema({
// //   fullName: String,
// //   email: String,
// //   password: String,
// // });

// // const User = mongoose.model('User', userSchema);

// // // API endpoint for user signup
// // app.post('/signup', (req, res) => {
// //   const { fullName, email, password } = req.body;
// //   const user = new User({ fullName, email, password });
// //   user.save((err, newUser) => {
// //     if (err) {
// //       console.error(err);
// //       res.status(500).send('Error occurred during signup');
// //     } else {
// //       console.log('User signed up:', newUser);
// //       res.redirect('/login');
// //     }
// //   });
// // });

// // // Serve the static files from the React app
// // app.use(express.static(path.join(__dirname, 'client/build')));

// // // Handles any requests that don't match the ones above
// // app.get('*', (req, res) => {
// //   res.sendFile(path.join(__dirname + '/client/build/index.html'));
// // });

// // // Start the server
// // const PORT = process.env.PORT || 5000;
// // app.listen(PORT, () => {
// //   console.log(`Server is running on port ${PORT}`);
// // });


// const express = require("express");
// const app = express();
// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost/your_database_name", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });