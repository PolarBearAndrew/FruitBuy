
var url = config.ip;

$(document).ready( function(){

  $('html, body').on('click', '#register', function(){

    var data = {
      email: $('input[name="email"]').val() || '',
      phone: $('input[name="phone"]').val() || '',
      name: $('input[name="name"]').val() || '',
      pwd: $('input[name="pwd"]').val() || ''
    };

    $.ajax({
      url: url + 'user',
      type: 'POST',
      data: data,

      success: function( result ){
        // console.log('succss', result );
        window.location.assign(  url + 'login' ); // 直接導向到 order
      },

      fail: function( err ){
        console.log('fail', err );
        $('.message').transition('fade'); //註冊失敗顯示
      }
    });

    return false;
  });

}); //doc ready end