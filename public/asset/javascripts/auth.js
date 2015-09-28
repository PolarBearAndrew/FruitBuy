var url = config.ip;

$(document).ready(function(){

  // console.log('start scuriry check...');
  var name  = localStorage.getItem("FruitBuyUserName");
  var email = localStorage.getItem("FruitBuyUserEmail");
  var auth = localStorage.getItem("FruitBuyUserAuth") || 'default';

  console.log('auth info', name, email, auth);


  if(name){
    $('#user').text( name + '/' + auth );
  }

  var Rules = {
    '員工': [
      { path: '/cart', auth: true },
      { path: '/detail', auth: true },
      { path: '/myOrder', auth: true },

      { path: '/em', auth: true },
      { path: '/user', auth: true },
      { path: '/face', auth: true },
      { path: '/order', auth: true },
      { path: '/product', auth: true }
    ],

    '主管': [
      { path: '/cart', auth: true },
      { path: '/detail', auth: true },
      { path: '/myOrder', auth: true },

      { path: '/em', auth: true },
      { path: '/user', auth: true },
      { path: '/face', auth: true },
      { path: '/order', auth: true },
      { path: '/product', auth: true }
    ],

    default: [
      { path: '/cart', auth: true },
      { path: '/detail', auth: true },
      { path: '/myOrder', auth: true },

      { path: '/em', auth: true },
      { path: '/user', auth: true },
      { path: '/face', auth: true },
      { path: '/order', auth: true },
      { path: '/product', auth: true }
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
      window.location.assign(  url + 'login' ); // 直接導向到 login
    }

  }

  console.log('none check...');

});

function back(){
  history.go(-1)　// 返回上一頁
}