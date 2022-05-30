
// Задание 1
let finalAmount = 0;
let finalProfit = 0;
let amount = +prompt('Enter the amount of the deposit', '');
let minAmount = 1000;
let year = +prompt('Enter number of years', '');
let percent = +prompt('Enyer percentage of a year', '');
let maxPercent =100;

if (amount < minAmount || !amount) {
  alert( 'Invalid input data' );
}else if (year < 1 || !year) {
  alert( 'Invalid input data' );
}else if (percent > maxPercent || !percent) {
  alert( 'Invalid input data' );
} else {
  calcIncome();
}
function calcIncome() {
  let fixed = 2;
  let calcRate = 0.01;
  let initialRate = percent * calcRate;/* считаем процент*/
  finalAmount = (amount * Math.pow(1 + initialRate, year)).toFixed(fixed);
  finalProfit = (finalAmount - amount).toFixed(fixed);

  alert(
    'Initial amount:' + ' ' + amount +
    '\n' + 'Number of year:' + ' ' + year +
    '\n' + 'Percent of year:' + ' ' + percent + '\n' +
    '\n' + 'Total profit:' + ' ' + finalProfit +
    '\n' + 'Total amount:' + ' ' + finalAmount
  );

}

