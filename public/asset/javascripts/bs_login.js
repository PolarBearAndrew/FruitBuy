
var url = config.ip;

$(document).ready( function(){

  $('html, body').on('click', '#login', function(){

    var data = {
      account: $('input[name="account"]').val() || '',
      pwd: $('input[name="pwd"]').val() || ''
    };

    $.ajax({
      url: url + 'em/login',
      type: 'POST',
      data: data,

      success: function( result ){

        // console.log('result', result);

        if( result.login === true){

          window.location.assign(  url + 'product' ); // 直接導向到 order

          // set local storage
          localStorage.setItem("FruitBuyUserName", result.account );
          localStorage.setItem("FruitBuyUserEmail", result.account );
          localStorage.setItem("FruitBuyUserAuth", result.auth );
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