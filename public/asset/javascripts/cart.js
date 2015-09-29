var url = config.ip;

$(document).ready( function(){

  // $('html, body').on('click', '.checkout', function(){

  //   $('#checkout').modal('show');
  //   return false;
  // }); // #login click end

  $('html, body').on('change' , 'input.product', sum );

  var $total = $('input#total');

  function sum(){

    var sum = 0;
      var order = '';
      var product = $('input.product');

      for( var i = 0; i < product.length; i++ ){
        var tmp = product[i];
        sum += $(tmp).val() * parseInt( $(tmp).attr('data-cost'), 10)
        order += $(tmp).attr('data-name') + '*' + $(tmp).val() + '/份,  ';
      }

      $total.val(sum);
      $total.attr('data-order', order);

      return false;
  }

  sum();

  // send
  $('html, body').on('click', '#send', function(){


    if( $('#address').val() === '' || $total.val() === 0){
      alert('缺少必要資訊：請填寫送貨地址或位址');
      return false;
    }

    var data = {
        userId: localStorage.getItem("FruitBuyUserName") + '/' + localStorage.getItem("FruitBuyUserEmail"),
        buy: $total.attr('data-order'),
        address: $('#address').val(),
        cost: $total.val()
    };

    $.ajax({
      url: url + 'order',
      type: 'POST',
      data: data,
      success: function( result ){
        console.log('success', result);
        //$('#checkout').modal('show');
        window.location.assign(  url + 'myOrder' ); // 直接導向到 login
        localStorage.setItem('FruitBuyCart', '');
      },
      fail: function( err ){
        console.log('fail', err);
      }
    });


    return false;
  });

}); //doc ready end