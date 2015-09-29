
var url = config.ip;

$(document).ready( function(){

  $('input[name="phone"]').val(localStorage.getItem("FruitBuyUserPhone"));
  $('input[name="name"]').val(localStorage.getItem("FruitBuyUserName"));

  $('html, body').on('click', '#register', function(){

    if( $('input[name="newPwd"]').val() !== $('input[name="newPwd2"]').val() || $('input[name="newPwd2"]').val() === '' ){
      console.log('pwd 錯誤')
      $('#pwdError').transition('fade');
      return false;
    }

    var data = {
      email: localStorage.getItem("FruitBuyUserEmail"),
      newPwd: $('input[name="newPwd"]').val() || '',
      phone: $('input[name="phone"]').val() || '',
      name: $('input[name="name"]').val() || '',
      pwd: $('input[name="pwd"]').val() || ''
    };

    $.ajax({
      url: url + 'user/update',
      type: 'PUT',
      data: data,

      success: function( result ){
        // console.log('succss', result );
        window.location.assign(  url + 'login' ); // 直接導向到 login
      },

      fail: function( err ){
        console.log('fail', err );
        $('#networkError').transition('fade'); //註冊失敗顯示
      }
    }); // ajax end

    return false;
  });

}); //doc ready end


