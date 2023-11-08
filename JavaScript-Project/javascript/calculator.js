function updateCalculation(number) {
  document.querySelector('.jsCalculation')
  .innerHTML = Calculation += number;
}
let Calculation ='';

function calculateTot() {
  Calculation = eval(Calculation);
  document.querySelector('.jsCalculationTot')
  .innerHTML = Calculation;
}
function cancellation() {
  Calculation = '';
  document.querySelector('.jsCalculation')
  .innerHTML = '0';
  document.querySelector('.jsCalculationTot')
  .innerHTML = '';

}


