function clock() {
  var a = new Date();
  var h = a.getHours();
  var m = a.getMinutes();
  var s = a.getSeconds();
  if(s<10){
    s = '0' + s;
  }
  if(m < 10){
    m = '0' + m;
  }
  if (h<10){
    h = '0' + h;
  }
  if(h >12){
    h = h-12;
  }
  if(h == 0){
    h = 12;
    }
  let current_time = h + ':' + m + ':' + s;    
  document.getElementById("time").innerHTML = current_time;
  }
  setInterval(clock, 1000);