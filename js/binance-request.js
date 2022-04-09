let listPair;
let arrayPair = [];
let url = 'https://api.binance.com/api/v3/ticker/price';

$.get(url, null,
  function (data, textStatus) {
    if(textStatus == 'success'){
      listPair = data;
      listPair.forEach(element => {
        if(element['symbol'].indexOf('USDT') != -1){
          arrayPair.push(element['symbol']);
        }
      });
    }
  },
  "JSON"
);