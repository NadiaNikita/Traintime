
$(document).ready(function(){
	// Firebase
	// var trainData = new   !!!Firebase needs a firebase link
	var trainData = {
		apiKey: "AIzaSyCgeYILA7H2DTXOQJGrujsGc_d44u-Aj4E",
		authDomain: "myfirebasemeet.firebaseapp.com",
		databaseURL: "https://myfirebasemeet.firebaseio.com",
		projectId: "myfirebasemeet",
		storageBucket: "myfirebasemeet.appspot.com",
		messagingSenderId: "674007746257"
	  };
	  firebase.initializeApp(config);
	
	//  function for adding a trian button//
	$("#addTrainBtn").on("click", function(){

		// aasign var
		var nameofTrain = $("#trainNameText").val().trim();
		// var lineName = $("#lineText").val().trim();
		var whereTo= $("#whereTo").val().trim();
		var trainTimeInput = moment($("#trainTimes").val().trim(), "HH:mm").subtract(10, "years").format("X");;
		var frequencyInput = $("#frequencyInput").val().trim();

		// var test
		// console.log(nameofTrain);
		// // console.log(lineName);
		// console.log(whereto);
		// console.log(trainTimeInput);
		// console.log(frequencyInput);
	
		var newTrain = {
			nameofTrain: nameofTrain,
			// line: lineName,
			whereTo: whereTo,
			trainTime: trainTimesInput,
			frequency: frequencyInput,
		}

		// pushing train into data
		trainData.push(newTrain);
// wrong code? 
		// var #  = childSnap.val(#).;
		// var # = childSnap.val(#).;
		// var  = childSnap.val().;
		// var  = childSnap.val().;
		// var  = childSnap.val().;
		// var = childSnap.val().;
	
		
		$("#trainNameText").val("");
		// $("#lineInput").val("");
		$("#whereto").val("");
		$("#traintimes").val("");
		$("#frequencyInput").val("");

		// Prevents page from refreshing
		return false;
	});

	trainData.on("child_added", function(childSnapshot, prevChildKey){

		console.log(childSnapshot.val());

		// assign firebase var
		var firebaseName = childSnapshot.val().name;
		// var firebaseLine = childSnapshot.val().line;
		var firebasewhereto = childSnapshot.val().destination;
		var firebaseTrainTimeInput = childSnapshot.val().trainTime;
		var firebaseFrequency = childSnapshot.val().frequency;
		
		var diffTime = moment().diff(moment.unix(firebaseTrainTimeInput), "minutes");
		var timeRemainder = moment().diff(moment.unix(firebaseTrainTimeInput), "minutes") % firebaseFrequency ;
		var minutes = firebaseFrequency - timeRemainder;

		var nextTrainArrival = moment().add(minutes, "m").format("hh:mm A"); 
		
		
		console.log(minutes);
		console.log(nextTrainArrival);
		console.log(moment().format("hh:mm A"));
		console.log(nextTrainArrival);
		console.log(moment().format("X"));

	// 	$("#trainNameInput").val("");
	// 	$("#destinationInput").val("");
	// 	$("#firstInput").val("");
	// $("#frequencyInput").val("");
		
		$("#trainTable > tbody").append("<tr><td>" + firebaseName + "</td><td>" + firebaseLine + "</td><td>"+ firebaseDestination + "</td><td>" + firebaseFrequency + " mins" + "</td><td>" + nextTrainArrival + "</td><td>" + minutes + "</td></tr>");

	});
});




  
 
