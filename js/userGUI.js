var uName;
firebase.database().ref("Users").on("value", function(snapshot){
  uName = snapshot.val().userName;

  var combine = "Welcome  " + uName;
  var changeText = combine.bold().fontcolor("#d4870a");
  var welcomeBanner = changeText.fontsize(7);
  document.getElementById("usersName").style.fontSize = "xx-large;
  document.getElementById("usersName").innerHTML = welcomeBanner;
})
