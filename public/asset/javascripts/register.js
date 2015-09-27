
var url = config.ip;

$(document).ready( function(){

  $('html, body').on('click', '#register', function(){

    if( $('input[name="pwd"]').val() !== $('input[name="pwd2"]').val() || $('input[name="pwd2"]').val() === '' ){
      $('#pwdError').transition('fade');
      return false;
    }

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
        $('#networkError').transition('fade'); //註冊失敗顯示
      }
    }); // ajax end

     $('.message .close').on('click', function() {
        $(this).closest('.message').transition('fade');
    });

    return false;
  });

}); //doc ready end


