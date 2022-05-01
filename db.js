//const firebase = require('firebase');
const config = require('./config');
const admin = require("firebase-admin");
var serviceAccount = require("../graphinion/graphinion-dev-197ba-firebase-adminsdk-n64tp-8f7be2dba1.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    // The database URL depends on the location of the database
    databaseURL: "https://graphinion-dev-197ba.firebaseio.com/"
  });
//Firestore db
//const fireStore = firebase.initializeApp(config.firebaseConfig);

//Admin db
const db = admin.firestore()

module.exports = {admin,db};