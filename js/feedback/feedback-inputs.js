function checkErrorOnInputsValue() {
  const minimumInputValue = parseFloat($('#minimum-input-value').val());
  const maximumInputValue = parseFloat($('#maximum-input-value').val());
  let errorMessage = '';
  
  if(!minimumInputValue){
    errorMessage += 'Entre com o valor mínimo de entrada';
    return errorMessage;
  }
  
  if(!maximumInputValue){
    errorMessage += '\nEntre com o valor máximo de entrada'
    return errorMessage;
  }

  if(minimumInputValue > maximumInputValue){
    errorMessage += '\nO Valor da entrada mínima é maior que o valor da entrada máxima';
    return errorMessage;
  }
  return errorMessage;
}

function showInputsFeedback() {
  const errorMessage = checkErrorOnInputsValue();
  const $intervalInput = $('#interval-input');
  const $feedback = $('#interval-input .feedback');

  if(errorMessage){
    $feedback.text(errorMessage); 
    $feedback.addClass('feedback-error');
    $intervalInput.addClass('item-box-error');
  }else{
    $feedback.text('');
    $feedback.removeClass('feedback-error');
    $intervalInput.removeClass('item-box-error');
  }
}

$('#minimum-input-value').on('input',()=>{
  showInputsFeedback();
})
$('#maximum-input-value').on('input',()=>{
  showInputsFeedback();
})