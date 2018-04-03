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

// Capture Button Click
$("#submit").on("click", function(event) {
  event.preventDefault();

  // YOUR TASK!!!
  // Code in the logic for storing and retrieving the most recent user.
  // Don't forget to provide initial data to your Firebase database.
  var train = $("#train-name").val().trim();
  var dest = $("#destination").val().trim();
  var first = $("#first-time").val().trim();
  var freq = $("#frequency").val().trim();

  var newTrain = {
    name: train,
    destination: dest,
    firstTime: first,
    frequency: freq
  };

  database.ref().push(newTrain);

  console.log(newTrain.name);
  console.log(newTrain.destination);
  console.log(newTrain.firstTime);
  console.log(newTrain.frequency);

  $("#train-name").val("");
  $("#destination").val("");
  $("#first-time").val("");
  $("#frequency").val("");
});

// Firebase watcher + initial loader HINT: .on("value")
database.ref().on("child_added", function(childSnapshot, prevChildKey) {
    // Log everything that's coming out of snapshot

    console.log(childSnapshot.val());

    var train = childSnapshot.val().name;
    var dest = childSnapshot.val().destination;
    var first = childSnapshot.val().firstTime;
    var freq = childSnapshot.val().frequency;

    console.log(train);
    console.log(dest);
    console.log(first);
    console.log(freq);

    // var nextArrival = moment.unix(firstTime).format("HH:mm");

    // // Calculate the months worked using hardcore math
    // // To calculate the months worked
    // var minAway = moment().diff(moment.unix(freq, "X"), "months");

    $("#train-table > tbody").append(
      "<tr><td>" +
        train +
        "</td><td>" +
        dest +
        "</td><td>" +
        freq +
        "</td><td>" +
        "some time" +
        "</td><td>" +
        "some minutes" +
        "</td></tr>"
    );

    // Handle the errors
  },
  function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
  }
);
