//step-1:add event listener to the deposit button

document.getElementById('btn-withdraw').addEventListener('click', function () {

    //step-2: get the deposit amount from the deposit input field
    //For input field use .value inside the input field

    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    //step-3: get the currten deposit total
    // For non-input(element other than input,textarea) use innerText to get the text

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    //step-4: add number set the total deposit
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    //set the deposit total
    withdrawTotalElement.innerText = currentWithdrawTotal;

    //step-5: get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotalAmount = parseFloat(previousBalanceTotalString);

    //setp-6: calculate current total balance
    const newBalanceTotal = previousBalanceTotalAmount - newWithdrawAmount;

    //set the balance total
    // balanceTotalElement.innertext = newBalanceTotal;
    balanceTotalElement.innerText = newBalanceTotal;



    //step-7: clear the deposit field
    withdrawField.value = '';
})
