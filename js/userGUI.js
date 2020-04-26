var uName;
firebase.database().ref("Users").on("value", function(snapshot){
  uName = snapshot.val().userName;

  var combine = "Welcome  " + uName;
  var changeText = combine.fontsize(7).bold().fontcolor("red");
  var welcomeBanner = changeText;
  document.getElementById("usersName").innerHTML = welcomeBanner;
})