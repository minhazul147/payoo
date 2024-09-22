// show the cash out form

document.getElementById('btn-show-cash-out').addEventListener('click', function(){

    // Show cash out Button Clicked
    console.log('Clicked cashout')
    document.getElementById('cash-out-form').classList.remove('hidden');

    // hide add money form
    document.getElementById('add-money-form').classList.add('hidden')
});

// Show add money from hide cash out form
document.getElementById('btn-show-add-money').addEventListener('click', function(){
    document.getElementById('add-money-form').classList.remove('hidden');

    document.getElementById('cash-out-form').classList.add('hidden');
})