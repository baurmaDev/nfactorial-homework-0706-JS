const fs = require('fs');
const withdrawMoney = (amount) => {
    let data = fs.readFileSync('./config.json'),
    output;
    
    try {
        output = JSON.parse(data);
        amount <= output ? output -= amount : console.log("You don't have enough funds"); 
        let d = JSON.stringify(output);
        fs.writeFile('./config.json', d, function (err) {
            if (err) {
            console.log('There has been an error saving your configuration data.');
            console.log(err.message);
            return;
            }
            console.log('Configuration saved successfully.')
        });
        console.log(`Your current balance now: ${output}`)
    }
    catch (err) {
        console.log('There has been an error parsing your JSON.')
        console.log(err)
    }
   
}
module.exports = withdrawMoney;