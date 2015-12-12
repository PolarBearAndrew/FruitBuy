var url = config.ip;

$(document).ready( function(){

  var time = 5000;
  var current = 0;
  var $target = $('#imgSlide');


  var path = [];
  // { src: '/asset/images/wireframe/demo-slide.jpg', url: '/shop?fruit=01' },
  // { src: '/asset/images/wireframe/demo-slide2.jpg', url: '/shop?fruit=02' }

  $.ajax({
    url: url + 'face/all',
    type: 'GET',
    success: function( result ){
      for( var i = 0; i < result.length; i++ ){
        var tmp = {
          src: result[i].img.toString().replace(/<img src="/, '').replace(/">/, '').replace(/\\/, '\/'),
          url: '#'
        };
        path.push(tmp);
      }

      setTimeout( change, 0 ); //start
    },
    fail: function( err ){
      console.log('load imgSlide fail', err);
    }
  }); // ajax end


  function hide(){
    $target.animate( { opacity: 0 }, function(){
      change();
    });
  }

  function change(){
    current++;
    if(current >= path.length){ current = 0; }
    // console.log('use', path[current].src);
    $target.attr('style', 'opacity:0; background-image:url("'+path[current].src+'")');
    $target.parent().attr('href', path[current].url );
    setTimeout( show, 0 );
  }

  function show(){
    $target.animate( { opacity: 1 }, function(){
      setTimeout( hide, time);
    });
  }

}); //  doc ready end
