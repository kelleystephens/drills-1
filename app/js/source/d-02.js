(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#push').click(complete);
  }

  function complete(){
    var words = $('#words').val();
    var array = words.split(',');
    $('#container').append(array.map(div));
  }

  function div(x){
    return $('<div>').addClass('new').text(x);
  }


})();
