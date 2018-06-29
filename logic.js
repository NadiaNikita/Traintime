





  
  var config = {
    apiKey: "AIzaSyCgeYILA7H2DTXOQJGrujsGc_d44u-Aj4E",
    authDomain: "myfirebasemeet.firebaseapp.com",
    databaseURL: "https://myfirebasemeet.firebaseio.com",
    projectId: "myfirebasemeet",
    storageBucket: "myfirebasemeet.appspot.com",
    messagingSenderId: "674007746257"
  };
  firebase.initializeApp(config);

 




var database = firebase.database();


var name = "";
var role = "";
var date = "";
var rate = "";


$("#add-user").on("click", function(event) {
    event.preventDefault();

    name = $("#employee-name").val().trim();
    email = $("#role").val().trim();
    age = $("#start-date").val().trim();
    comment = $("#monthly-rate").val().trim();


// Code for handling the push
database.ref().push({
    name: name,
    role: role,
    date: date,
    rate: rate,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
  });

});

// Firebase watcher .on("child_added"
database.ref().on("child_added", function(snapshot) {
  // storing the snapshot.val() in a variable for convenience
  var sv = snapshot.val();

  // Console.loging the last user's data
  console.log(sv.name);
  console.log(sv.role);
  console.log(sv.date);
  console.log(sv.rate);

  // Change the HTML to reflect
  $("#employee-name").text(sv.name);
  $("#role").text(sv.role);
  $("#start-date").text(sv.date);
  $("#monthly-rate").text(sv.rate);

  // Handle the errors
}, function(errorObject) {
  console.log("Errors handled: " + errorObject.code);
});




