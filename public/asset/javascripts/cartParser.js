var url = config.ip;

$(document).ready( function(){

  var data = localStorage.getItem("FruitBuyCart") || '';

  // console.log('cartParser', data);

  $.ajax({
    url: url + 'cart',
    type: 'POST',
    data: { cart: data },
    success: function( result ){
      // console.log('result', result );
      $('html').html(result);
    },
    error: function( err ){
      console.log('cartParser fail', err);
    }
  })

}); //doc ready end