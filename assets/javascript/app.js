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

// Initial Values
var trainName = "";
var destination = "";
var firstTime = "";
var frequency = "";

// Capture Button Click
$("#submit").on("click", function() {
  // Don't refresh the page!
  event.preventDefault();

  // YOUR TASK!!!
  // Code in the logic for storing and retrieving the most recent user.
  // Don't forget to provide initial data to your Firebase database.
  trainName = $("#train-name").val().trim();
  destination = $("#destination").val().trim();
  firstTime = $("#first-time").val().trim();
  frequency = $("#frequency").val().trim();

  database.ref().push({
    trainName: trainName,
    destination: destination,
    firstTime: firstTime,
    frequency: frequency
  });

  $("#train-name").val("");
  $("#destination").val("");
  $("#first-time").val("");
  $("#frequency").val("");

});

// Firebase watcher + initial loader HINT: .on("value")
database.ref().on("value", function(snapshot) {

  // Log everything that's coming out of snapshot
  console.log(snapshot.val());
  console.log(snapshot.val().trainName);
  console.log(snapshot.val().destination);
  console.log(snapshot.val().firstTime);
  console.log(snapshot.val().frequency);

  // Change the HTML to reflect
  $("#train-name").text(snapshot.val().trainName);
  $("#destination").text(snapshot.val().destination);
  $("#first-time").text(snapshot.val().firstTime);
  $("#frequency").text(snapshot.val().frequency);

  // Handle the errors
}, function(errorObject) {
  console.log("Errors handled: " + errorObject.code);
});
