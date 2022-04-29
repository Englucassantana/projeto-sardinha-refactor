// calcular o percentual do alvo
// Avisar se o alvo estiver com valor menor que a maior entrada
// Avisar caso o alvo de menor indice estiver maior que o alvo de maior indice

function calculateTargetPercentual(targetValue, maximumInputValue) {
  return (100 * targetValue / maximumInputValue).toFixed(2);
}

function checkTargetValueErrors($currentTargetElement, $prevTargetElement, $maximumInputElement) {
  let errorMessage = '';

  if($currentTargetElement.val() === ''){
    errorMessage += 'Preencha o campo do alvo';
    return errorMessage;
  }

  const targetValue = parseFloat($currentTargetElement.val());
  const maximumInputValue = parseFloat($maximumInputElement.val());

  if (targetValue < maximumInputValue) {
    errorMessage += 'Preencha um valor para o alvo maior que o Valor Máximo de Entrada';
    return errorMessage;
  }

  const prevTargetValue = parseFloat($prevTargetElement.val());

  if (targetValue < prevTargetValue) {
    errorMessage += 'Preencha o alvo com um valor maior que o alvo anterior';
    return errorMessage;
  }

  return errorMessage;
}

function showTargetFeedback(e) {
  const $currentTargetElement = $(e.target);
  const $prevTargetElement = $(e.target).parent().parent().prev().find(".target");
  const $maximumInputElement = $('#maximum-input-value');
  const $feedback = $currentTargetElement.parent().next().find('.feedback');
  const errorMessage = checkTargetValueErrors($currentTargetElement, $prevTargetElement, $maximumInputElement);
  const $targetBox = $('#targets-box');
  if(errorMessage){
    $feedback.text(errorMessage); 
    $feedback.addClass('feedback-error');
    $targetBox.addClass('item-box-error');
  }else{
    $feedback.text('');
    $feedback.removeClass('feedback-error');
    $targetBox.removeClass('item-box-error');
  }
}

$('.target').on('input', (e)=>{
  showTargetFeedback(e);
})