function checkPair(pairName) {
  let check = false;
  listPair.forEach(element => {
    if (element['symbol'] == pairName) {
      check = true;
    }
  });
  return check;
}

$('#load-button').on('click', ()=>{
  const $pairInput = $('#pair-input');
  const pairName = $pairInput.val();
  if(checkPair(pairName)){
    let url = `https://api.binance.com/api/v3/ticker/price?symbol=${pairName}`;
    $.get(url, null, (data, textStatus) => {
      if (textStatus) {
        const pairData = data;
        loadInputsValue(pairData.price);
      }
    });
  }
});