$(document).ready( function(){

  $('html, body').on('click', '#login', function(){

    $('#loginFail').modal('show');
    return false;
  }); // #login click end

}); //doc ready end