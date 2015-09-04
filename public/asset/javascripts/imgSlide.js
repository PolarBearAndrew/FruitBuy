$(document).ready( function(){

  var time = 5000;
  var current = 0;
  var $target = $('#imgSlide');

  var path = [
    { src: '/asset/images/wireframe/demo-slide.jpg', url: '/shop?fruit=01' },
    { src: '/asset/images/wireframe/demo-slide2.jpg', url: '/shop?fruit=02' }
  ];

  function hide(){
    $target.animate( { opacity: 0 }, function(){
      change();
    })
  }

  function change(){
    current++;
    if(current >= path.length){ current = 0; }
    $target.attr('style', 'opacity:0; background-image:url("'+path[current].src+'")');
    $target.parent().attr('href', path[current].url );
    setTimeout( show, 0 );
  }

  function show(){
    $target.animate( { opacity: 1 }, function(){
      setTimeout( hide, time);
    })
  }

  setTimeout( change, 0 ); //start

})