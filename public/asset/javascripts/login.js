
var url = config.ip;

$(document).ready( function(){

  if( localStorage.getItem("FruitBuyUserName") ){
    localStorage.clear();
    $('#logout').modal('show');
    $('#user').html();
  }


  $('html, body').on('click', '#login', function(){

    var data = {
      email: $('input[name="email"]').val() || '',
      pwd: $('input[name="pwd"]').val() || ''
    };

    $.ajax({
      url: url + 'user/login',
      type: 'POST',
      data: data,

      success: function( result ){

        console.log('result', result);

        if( result.login === true){

          window.location.assign(  url + 'shop' ); // 直接導向到 order

          // set local storage
          localStorage.setItem("FruitBuyUserName", result.name );
          localStorage.setItem("FruitBuyUserEmail", result.email );
          localStorage.setItem("FruitBuyUserPhone", result.phone );
        }
        else{
          $('#loginFail').modal('show');
        }
      },

      fail: function( err ){
        console.log('fail', err );
        $('#loginFail').modal('show');
      }
    }); // ajax end

    return false;
  }); // #login click end

}); //doc ready end