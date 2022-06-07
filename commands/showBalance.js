const fs = require('fs');
const showBalance = () => {
    let data = fs.readFileSync('./config.json'),
    balance;
    
    try {
        balance = JSON.parse(data);
        console.log(`Your balance is: ${balance}`)
        
    }
    catch (err) {
        console.log('There has been an error parsing your JSON.')
        console.log(err)
    }
    
}
module.exports = showBalance;