document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();
    console.log('cash Button Clicked')

    const cashOut = document.getElementById('input-cash-out').value;
    const cashOutNumber = parseFloat(cashOut);
    const pinNumber = document.getElementById('input-cash-out-pin').value;

    console.log(cashOut, pinNumber);

    if(pinNumber === '1234'){
        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);

        // reduce the balance
        const newBalance = balanceNumber - cashOutNumber;

        // updated the UI
        document.getElementById('account-balance').innerText = newBalance;
        
    }
    else{
        alert('Failed to cash Out . Please try again later.')
    }
})