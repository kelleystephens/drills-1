(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#btn').click(go);
  }

  function go(){
    var nums = $('#input').val().split(', ');
    var start = nums[0] * 1;
    var end = nums[1] * 1;
    var x = makeArray(start, end);
    console.log(x);
  }

  function makeArray(x, y){
    var array = [];
    for(var i = x; i <= y; i++){
      array.push(i);
    }
    return array;
  }

})();
