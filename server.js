require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app.js');

const url = 'mongodb+srv://$_USERNAME_$:$_PASSWORD_$@cluster0.plibyxt.mongodb.net/$_DB_NAME_$?retryWrites=true&w=majority&appName=Cluster0';



const databaseUser = 'rajaryan26';
const databasePassword = '26012001';
const databaseName = 'Image-backend';

// env not working
// let dbLink = url.replace("$_USERNAME_$", process.env.DB_USER);
// dbLink = dbLink.replace("$_PASSWORD_$", process.env.DB_PASSWORD);
// dbLink = dbLink.replace("$_DB_NAME_$", process.env.DB_NAME);

let dbLink = url.replace("$_USERNAME_$", databaseUser);
dbLink = dbLink.replace("$_PASSWORD_$", databasePassword);
dbLink = dbLink.replace("$_DB_NAME_$", databaseName);


mongoose.connect(dbLink).then(() => {
  console.log('-------- Database Connected --------');
});

app.listen(1600,() => {
    console.log('----------- App Started -----------')
});


// require('dotenv').config();
// const mongoose = require('mongoose');
// const app = require('./app.js');

// const { MONGODB_USERNAME, MONGODB_PASSWORD, MONGODB_DB_NAME } = process.env;
// const url = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@cluster0.dpithd6.mongodb.net/${MONGODB_DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;

// mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('-------- Database Connected --------');
//   })
//   .catch(error => {
//     console.error('Error connecting to database:', error);
//   });

// const PORT = process.env.PORT || 1600;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
