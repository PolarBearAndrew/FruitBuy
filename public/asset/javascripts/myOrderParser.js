var url = config.ip;

$(document).ready(function(){
  var name  = localStorage.getItem("FruitBuyUserName");
  var email = localStorage.getItem("FruitBuyUserEmail");

  window.location.assign(  url + 'myOrder?info=' + email + '/' + name );
});