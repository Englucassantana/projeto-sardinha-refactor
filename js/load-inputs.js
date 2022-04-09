function loadInputsValue(pairPrice){
  loadMinimumInput(pairPrice);
  loadMaximumInput(pairPrice);
}

function loadMinimumInput(pairPrice) {
  const minimumInputValue = calculateMinimumInputValue(pairPrice);
  $('#minimum-input-value').val(minimumInputValue);
}

function calculateMinimumInputValue(pairPrice) {
  const tax = 0.05;
  return (pairPrice * (1 - tax)).toFixed(2);
}
function loadMaximumInput(pairPrice){
  const maximumInputValue = calculateMaximumInputPrice(pairPrice);
  $('#maximum-input-value').val(maximumInputValue);
}

function calculateMaximumInputPrice(pairPrice) {
  const tax = 0.05;
  return (pairPrice * (1 + tax)).toFixed(2)
}

$("#pair-input").autocomplete({
  select: function (ui) {
    const pairName = ui.item.value;
    let url = `https://api.binance.com/api/v3/ticker/price?symbol=${pairName}`;
    $.get(url, null, (data, textStatus) => {
      if (textStatus) {
        const pairData = data;
        loadInputsValue(pairData.price);
      }
    });
  }
});