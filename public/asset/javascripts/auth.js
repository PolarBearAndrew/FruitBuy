$(document).ready(function(){

  // console.log('start scuriry check...');

  var name  = localStorage.getItem("FruitBuyUserName");
  var email = localStorage.getItem("FruitBuyUserEmail");
  var auth = localStorage.getItem("FruitBuyUserAuth");

  if(name){
    $('#user').text( name + '/' + auth );
  }

  var Rules = {
    '員工': [
      { path: '/', auth: true }
    ],

    '主管': [
      { path: '/', auth: true },
    ],

    default: [
      { path: '/', auth: true },
    ]
  };

  var path = location.pathname;
  var myRule = Rules[auth] || Rules['default'];

  for( var r = 0; r < myRule.length; r++){

    if( myRule[r].path === path && myRule[r].auth === true){
      //...
      console.log('scurity pass...');
      break;

    }else if( myRule[r].path === path && myRule[r].auth === false){
      window.location.assign(  url + 'user/login' ); // 直接導向到 login
    }

  }

  console.log('none check...');

});

function back(){
  history.go(-1)　// 返回上一頁
}