// this is an improved and clean logic version with comments and some help from online community!!! //
//1. had problems with firebase permission but got it fixed with changing rules. // 


//firebase 

var config = {
    apiKey: "AIzaSyCYq4xrAdA1b_VgTUfHa9aIrAoQbH2Z6vw",
    authDomain: "train-project-409dd.firebaseapp.com",
    databaseURL: "https://train-project-409dd.firebaseio.com",
    projectId: "train-project-409dd",
    storageBucket: "train-project-409dd.appspot.com",
    messagingSenderId: "492492143383"

};
// firebase init.

firebase.initializeApp(config);

$(document).ready(function(){

    //adding variable for firebase. 

var rootREf = firebase.database().ref();

//var firebase = firebase(database); not sure if this one works ==== will come back to it




// adding Qready function for button to work =)

//  add train when clicking + funtion that takes from html//

$("#add-train").on("click", function() {

    //creating variables for user imput + changed variable names to less confusing ones. 
    // val trim fucntion for this . 
    var name2  = $("#name").val().trim();
    var destination2 =$("#destination").val().trim();
    var time2 =$("#time").val().trim();
    var frequency2=$("#frequency").val().trim();



console.log(name2);
console.log(destination2);
console.log(time2);
console.log(frequency2);

/////////place to store data //////

var newTrain = {
    namestore:  name2,
    linestore: destination2,
    destinationstore: time2,
    frequencystore: frequency2,
}

rootREf.push(newTrain);

// =======================================
//clear back after data has been pushed to the console. 

$("#name").val("");
$("#destination").val("");
$("#time").val("");
$("#frequency").val("");

return false;

});
});


// to do 

//
