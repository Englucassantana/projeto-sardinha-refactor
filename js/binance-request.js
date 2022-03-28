let listPair;
let arrayPair = [];
let url = 'https://api.binance.com/api/v3/ticker/price';
let xhr = new XMLHttpRequest();

xhr.open('GET',url,true);
xhr.addEventListener('load',()=>{
  listPair = JSON.parse(xhr.responseText);
  listPair.forEach(element => {
    arrayPair.push(element['symbol']);
  });
  $("#pair-input").autocomplete({
    source:arrayPair
  });
})
xhr.send(null);