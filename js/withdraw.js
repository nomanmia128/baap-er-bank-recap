// 
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // step-2
    const withdrawfield = document.getElementById('widthdraw-field');
    const newWithdrawAmountString = withdrawfield.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // step-3
    withdrawfield.value = '';

    // ----------
    if(isNaN(newWithdrawAmount)){
        alert('please vesit a valid number');
        return;
    }

    // step-4
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previosWithdrawTotalString = withdrawTotalElement.innerText;
    const previosWithdrawTotal = parseFloat(previosWithdrawTotalString);
    
   

    // step-5
    const newWithdrawTotal = previosWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = newWithdrawTotal;

    // step-6 
    const balenceTotalElement = document.getElementById('balence-total');
    const balenceTotalString = balenceTotalElement.innerText;
    const balenceTotal = parseFloat(balenceTotalString);


     // -----------
     if(newWithdrawAmount > balenceTotal){
        alert('Baap er Banke Ato Taka Nai.')
        return;
    }

    // step-7
    const cuntBalence = balenceTotal - newWithdrawAmount;
    balenceTotalElement.innerText = cuntBalence;
})