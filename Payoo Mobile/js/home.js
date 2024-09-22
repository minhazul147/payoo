// add money

document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
    
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);

    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(pinNumberInput);

    // Step-3 veriry Pin Number

    if(pinNumberInput === '1234'){
        console.log('adding money to your account')

         // Step-4 Get the current balance

    const balance = document.getElementById('account-balance').innerText;
    console.log(balance);

    // Step 5- Add addMoneyInput  with balance
    const addMoneyNumber = parseFloat(addMoneyInput);
    const balanceNumber = parseFloat(balance);
    const newBalance = addMoneyNumber + balanceNumber;
    console.log(newBalance);

    // step 6- update the balance in the UI/DOM
    document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Failed to add money.! Please try again.')
    }

   
});