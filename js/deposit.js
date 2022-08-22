//step-1:add event listener to the deposit button

document.getElementById('btn-deposit').addEventListener('click', function () {

    //step-2: get the deposit amount from the deposit input field
    //For input field use .value inside the input field

    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    //step-3: get the currten deposit total
    // For non-input(element other than input,textarea) use innerText to get the text

    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    //step-4: add number set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;

    //set the deposit total
    depositTotalElement.innerText = currentDepositTotal;

    //step-5: get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotalAmount = parseFloat(previousBalanceTotalString);


    //setp-6: calculate current total balance
    const newBalanceTotal = previousBalanceTotalAmount + newDepositAmount;

    //set the balance total
    balanceTotalElement.innerText = newBalanceTotal;

    //step-7: clear the deposit field
    depositField.value = '';
})