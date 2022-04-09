$("#pair-input").autocomplete({
  select: function (event,ui) {
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