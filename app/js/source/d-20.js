(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#btn').click(getQuote);
  }

  function getQuote(){
    $('#input').val().split(',').map(strip).map(path).forEach(quote);
  }

  function strip(x){
    return x.trim().toUpperCase();
  }

  function path(symbol){
    return 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol='+symbol+'&callback=?';
  }

  function quote(url){
    $.getJSON(url, receive);
  }

  function receive(quote){
    var price = quote.LastPrice;
    var symbol = quote.Symbol;
    insertSym(symbol);
    placeDot(price);
  }

  function insertSym(sym){
    var div = '<div id="'+sym+'" class="sym">'+sym+'</div>';
    $('#names').append(div);
  }

  function placeDot(pr){
    var dot = $('<div class="hold"><div class="dot"></div></div>').css('bottom', pr).css( 'left', +50);
    $('#graph').append(dot);
    console.log(pr);
  }



})();
