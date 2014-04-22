(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#power').click(answer);
  }

  function answer(){
    var string = $('#nums').val().split(' - ');
    var array1 = string[0].split(', ');
    var array2 = string[1].split(', ');
    getPosition(array1, array2);
  }

   function getPosition(a, b){
    for(var i = 0; i < a.length; i++){
      var x = a[i];
      var y = b[i];
      var z = math(x, y);
      makeDiv(x, y, z);
    }
  }

  function makeDiv(base, exponent, result){
    var x = '<div class = "big"> <div class="little">' + base + '<sup>' + exponent + '</sup> </div> <div class="little">' + result + '</div> </div>';
    $('#container').append(x);
  }

  function math(x, y){
    x *= 1;
    y *= 1;
    return Math.pow(x, y);
  }


})();
