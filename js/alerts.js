firebase.database().ref("alert_info").on("value", function(snapshot){
    var alert_info = snapshot.val();
    var alert_table = document.querySelector("#alertTable > tbody");
    alert_table.innerHTML = "";
    for(var key in alert_info){
      var row = alert_table.insertRow();
      var cell = row.insertCell();
      var temp = new Date(alert_info[key]['timestamp']);
      var timestamp = temp.fontsize(7);
      cell.appendChild(document.createTextNode(timestamp.toLocaleString()));

      cell = row.insertCell();
      cell.appendChild(document.createTextNode(alert_info[key]['device_id']));

      cell = row.insertCell();
      var mac_addrs = alert_info[key]['mac_addrs'];
      for(var key in alert_info[key]['mac_addrs']){
        cell.appendChild(document.createTextNode(mac_addrs[key]));
        cell.appendChild(document.createElement('br'))
      }
    }
  })
