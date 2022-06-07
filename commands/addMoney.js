const fs = require('fs');
const addMoney = (amount) => {
        
    let balance = 0;
    balance += Number(amount);
    let data = JSON.stringify(balance);
    fs.writeFile('./config.json', data, function (err) {
        if (err) {
          console.log('There has been an error saving your configuration data.');
          console.log(err.message);
          return;
        }
        console.log('Configuration saved successfully.')
      });
    console.log(`Your current balance now: ${balance}`)
}
module.exports = addMoney