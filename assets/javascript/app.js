// Initialize Firebase
var config = {
  apiKey: "AIzaSyDpnU1g-3js3O7MUr7LyECIYUd5C_6twvs",
  authDomain: "train-schedule-8144e.firebaseapp.com",
  databaseURL: "https://train-schedule-8144e.firebaseio.com",
  projectId: "train-schedule-8144e",
  storageBucket: "",
  messagingSenderId: "147421827773"
};
firebase.initializeApp(config);

var database = firebase.database();

$("#submit").on("click", function() {

  //  Store Click Data to Firebase in a JSON property called clickCount
  // Note how we are using the Firebase .set() method
  database.ref().set({
    // clickCount: clickCounter
  });
});

// MAIN PROCESS + INITIAL CODE
// --------------------------------------------------------------------------------

// Using .on("value", function(snapshot)) syntax will retrieve the data
// from the database (both initially and every time something changes)
// This will then store the data inside the variable "snapshot". We could rename "snapshot" to anything.
database.ref().on("value", function(snapshot) {

  // Then we console.log the value of snapshot
  console.log(snapshot.val());

  // Then we change the html associated with the number.
  $("#submit").text(snapshot.val());

  // Then update the clickCounter variable with data from the database.
  // clickCounter = snapshot.val().clickCount;

  // If there is an error that Firebase runs into -- it will be stored in the "errorObject"
  // Again we could have named errorObject anything we wanted.
}, function(errorObject) {

  // In case of error this will print the error
  console.log("The read failed: " + errorObject.code);
});