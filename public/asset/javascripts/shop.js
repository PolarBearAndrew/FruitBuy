$(document).ready( function(){

  $('html, body').on('click', '.add2cart', function(){

    $('#add2cart').modal('show');

    var item = {
      title: $(this).attr('data-name'),
      url: $(this).attr('data-url'),
      info: $(this).attr('data-info'),
      cost: $(this).attr('data-cost'),
      id: $(this).attr('data-id')
    }

    // console.log('add item', item);

    var data = JSON.parse( localStorage.getItem("FruitBuyCart") ) || [];
    data.push( item );
    localStorage.setItem("FruitBuyCart", JSON.stringify(data) );

    // console.log('cart', data);

    return false;
  }); // #login click end

}); //doc ready end