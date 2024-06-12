/*
1. add event listener to the deposit button
2. get deposit amount from the deposit input field
5. convert string deposit amount to a number type

3. clear the deposit input field after getting the value

4. get the previos total

5. calculate new deposite total and set the value to the deposit total

6.get the balence total 

7.calculate the new balence and set it to the balence total element

*/

// step-1
document.getElementById('btn-deposit').addEventListener('click', function(){
    //step-2
    const depositField = document.getElementById('deposit-field')
    const newDepositAmountString = depositField.value;
    const newDepositAmounT = parseFloat(newDepositAmountString);

    // step-3
    depositField.value = '';

    // ---------
    if(isNaN(newDepositAmounT)){
        alert('please vesite a valied number.')
        return;
    }

    // step-4 
    const DepositTotalElement = document.getElementById('deposit-total');
    const previosDepositTotalString = DepositTotalElement.innerText;
    const previosDepositTotal = parseFloat(previosDepositTotalString);
    
    // step-5
    const newDepositTotal = previosDepositTotal + newDepositAmounT;
    DepositTotalElement.innerText = newDepositTotal;
    
    // step-6
    const balenceTotalElement = document.getElementById('balence-total');
    const balenceTotalString = balenceTotalElement.innerText;
    const balenceTotal = parseFloat(balenceTotalString);

    // step-7
    const newBalenceTotal = balenceTotal + newDepositTotal;
    balenceTotalElement.innerText = newBalenceTotal;
})