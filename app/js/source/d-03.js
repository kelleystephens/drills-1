(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#fourth').click(answer);
  }

  function answer(){
    var nums = $('#nums').val();
    var array = nums.split(', ');
    var x = array.map(fourth).map(div);
    $('#container').append(x);
  }

  function fourth(x){
    x *= 1;
    return Math.pow(x, 4);
  }

  function div(x){
    return '<div>' + x + '</div>';
  }


})();
