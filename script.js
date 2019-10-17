// functions
const calcGrowth = (pastVal, currentVal) =>
  ((currentVal - pastVal) / pastVal) * 100;

document
  .querySelector('.investment__btn')
  .addEventListener('click', function() {
    // 1. select and read data from the UI
    const btcUsdBought = document.querySelector('.price__input--bought').value;
    const btcUsdNow = document.querySelector('.price__input--now').value;
    const btc = document.querySelector('.investment__btc').value;

    // 2. calculate the profits
    const invested = btc * btcUsdBought;
    const current = btc * btcUsdNow;
    const profit = current - invested;
    const growth = calcGrowth(invested, current);

    // 3. write the results to the UI
    let message = '';
    if (profit > 0) {
      message = `Great! You made a profit of $${profit} (${growth})`;
      document.querySelector('.result').style.color = 'green';
    } else if (profit < 0) {
      message = `Oh no you're at a loss of $${profit} (${growth})`;
      document.querySelector('.result').style.color = 'red';
    } else {
      message = "Looks like you're breaking even";
    }

    document.querySelector('.result').textContent = message;
  });
