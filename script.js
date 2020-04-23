  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCJHH27qHSwO8FLal5p8wf5aPQEEf7lpGY",
    authDomain: "ece122l-carsecurity.firebaseapp.com",
    databaseURL: "https://ece122l-carsecurity.firebaseio.com",
    projectId: "ece122l-carsecurity",
    storageBucket: "ece122l-carsecurity.appspot.com",
    messagingSenderId: "153625676348",
    appId: "1:153625676348:web:284878b5724681a154d139",
    measurementId: "G-W4QKDKQD74"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
  function Login(){
      var database = firebase.database();
      var user_name;
      var user_secret;
    	
    	database.ref("users").on("value", function(snap){
        
    	if (document.getElementById("usname").value==uName && document.getElementById("psword").value==pWord){
    	window.location.assign('userGUI.html');
    	}
    	else{
    	document.getElementById("errorMSG").innerHTML = "Username and Password do not match";
    	}
    	});
  });

  
  
  
