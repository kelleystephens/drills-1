(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    createBig();
    createLittle();
    $('.bigBox').click(findBig);
    $('.littleBox').click(findLittle);
    $('body').keydown(arrows);
  }

  var little = [];
  var big = [];

  function findLittle(){
    event.stopPropagation();
    var a = $('.littleBox').css('top');
    var b = $('.littleBox').css('left');
    little.push(a, b);
    console.log(little);
  }

  function findBig(){
    var a = $('.bigBox').css('top');
    var b = $('.bigBox').css('left');
    big.push(a, b);
    console.log(big);
  }

  // function moveBig(x){
  //   $('.bigBox').css( 'top', '+='+x+'px' );
  // }
  //
  // function moveLittle(x){
  //   $('.littleBox').css( 'top', '+='+x+'px' );
  // }

  function arrows(event){
    switch(event.keyCode){
    case 38:
      var x = 5;
      break;
    case 39:
      move(5);
      break;
    case 40:
      move(5);
      break;
    case 37:
      move(-5);
    }

    if(event.keyCode === 37 || event.keyCode === 38 || event.keyCode === 39 || event.keyCode === 40){
      event.preventDefault();
    }
    move(x);
    // moveBig(x);

    return;
  }

  function move(){

  }

  function createBig(){
    var w = window.innerWidth;
    var h = window.innerHeight;
    var div = $('<div class="bigBox"></div>');
    var heightMax = (h - 300);
    var widthMax = (w - 300);
    div.css({left: random(widthMax), top: random(heightMax)});
    $('body').append(div);
  }

  function createLittle(){
    var w = 300;
    var h = 300;
    var div = $('<div class="littleBox"></div>');
    var heightMax = (h - 50);
    var widthMax = (w - 50);
    div.css({left: random(widthMax), top: random(heightMax)});
    $('.bigBox').append(div);
  }

  function random(x){
    return Math.floor(Math.random() * (x + 1));
  }


})();
