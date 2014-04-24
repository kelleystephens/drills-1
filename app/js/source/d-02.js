(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#push').click(complete);
  }

  function complete(){
    var words = $('#words').val();
    var array = words.split(',').map(strip).map(casing).map(div);
    $('#container').append(array);
  }

  function div(word){
    var cls = (word.length % 2) ? 'odd' : 'even';
    return '<div class = "'+cls+'">'+word+'</div>';
  }

  function strip(word){
    return word.trim();
  }

  function casing(word){
    return (word.length % 2) ? word.toUpperCase() : word.toLowerCase();
  }

})();
