(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#get').click(getQuote);
  }

  var timer;

  function getQuote(){
    $('#symbol').val().split(',').map(strip).map(path).forEach(quote);
  }

  function quote(url){
    $.getJSON(url, receive);
  }

  function receive(quote){
    var sym = quote.Symbol;
    var price = quote.LastPrice;
    table(sym, price);
  }

  function strip(word){
    return word.trim().toUpperCase();
  }

  function path(symbol){
    return 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol='+symbol+'&callback=?';
  }

  function table(sym, pr){
    $('tbody').append('<tr><td>'+sym+'</td><td class="'+sym+'">$'+pr+'</td></tr>');
    timer = setInterval(update, 1000);
  }

  function update(){

  }


})();
