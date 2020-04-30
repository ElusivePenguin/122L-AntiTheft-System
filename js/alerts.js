firebase.database().ref("alert_info").on("value", function(snapshot){
    var alert_info = snapshot.val();
    var alert_table = document.querySelector("#alertTable > tbody");
    alert_table.innerHTML = "";
    for(var key in alert_info){

      var row = alert_table.insertRow();
      var cell = row.insertCell();
      var timestamp = new Date(alert_info[key]['timestamp']);
      cell.appendChild(document.createTextNode(timestamp.toLocaleString()));

      cell = row.insertCell();
      cell.appendChild(document.createTextNode(alert_info[key]['car_model']));

      cell = row.insertCell();
      var mac_addrs = alert_info[key]['mac_addrs'];
      var mac_lus = alert_info[key]['mac_lookup'];
      for(var index in alert_info[key]['mac_addrs']){
        var mac_lus_str = "";
        if(mac_lus) mac_lus_str = " ("+mac_lus[index]+")";
        cell.appendChild(document.createTextNode(mac_addrs[index] + mac_lus_str));
        cell.appendChild(document.createElement('br'))
      }
      cell.style.textAlign = "left";

      cell = row.insertCell();
      var img = cell.appendChild(document.createElement("img"));

      img.id = "img"+key;

      const constKey = key;

      firebase.storage().ref('images/'+constKey+'.jpg').getDownloadURL().then(function(url) {
        console.log('key: '+constKey+", url: "+url);
        document.getElementById("img"+constKey).src = url;
        img.src = url;
      }.bind(constKey)).catch(function(error) {
        console.error(error);
      });

    }
  })
