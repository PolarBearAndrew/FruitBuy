$(document).ready( function(){

  // $('html, body').on('click', '.checkout', function(){

  //   $('#checkout').modal('show');
  //   return false;
  // }); // #login click end

  $('html, body').on('change' , 'input.product', sum );

  function sum(){

    var sum = 0;
      var order = '';
      var product = $('input.product');

      for( var i = 0; i < product.length; i++ ){
        var tmp = product[i];
        sum += $(tmp).val() * parseInt( $(tmp).attr('data-cost'), 10)
        order += $(tmp).attr('data-name') + '*' + $(tmp).val() + '/份,  ';
      }

      var $total = $('input#total');
      $total.val(sum);
      $total.attr('data-order', order);

      return false;
  }

  sum();

}); //doc ready end