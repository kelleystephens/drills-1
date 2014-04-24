(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#btn').click(go);
  }

  function go(){
    var nums = $('#input').val().split(',').map(strip).map(isOdd).map(div);
    $('#container').append(nums);
  }

  function strip(x){
    return x.trim();
  }

  function isOdd(x){
    for(var i = 0; i < x.length; i++){
      return (x % 2) ? math(x, 3) : math(x, 2);
    }
  }

  function math(x, y){
    x *= 1;
    y *= 1;
    return Math.pow(x, y);
  }

  // function square(x){
  //   x *= 1;
  //   return Math.pow(x, 2);
  // }
  //
  // function cube(x){
  //   x *= 1;
  //   return Math.pow(x, 3);
  // }

  function div(x){
    var cls = (x % 2) ? 'odd' : 'even';
    return '<div class ="'+cls+'">'+ x +'</div>';
  }

})();
