document.getElementById('deposit-button').addEventListener('click', function () {

    const depositInput = document.getElementById('deposit-input')
    const depositAmount = depositInput.value

    const depositTotal = document.getElementById('deposit-total')
    const depositTotalText = depositTotal.innerText

    depositTotal.innerText = parseFloat(depositTotalText) + parseFloat(depositAmount)

    const balanceTotal = document.getElementById('balance-total')
    const balanceToatlText = balanceTotal.innerText

    balanceTotal.innerText = parseFloat(depositAmount) + parseFloat(balanceToatlText)

    depositInput.value = '';
})

document.getElementById('withdraw-button').addEventListener('click', function () {

    const withdrawInput = document.getElementById('withdraw-input')
    const withdrawAmount = withdrawInput.value

    const withdrawTotal = document.getElementById('withdraw-total')
    const withdrawTotalText = withdrawTotal.innerText

    withdrawTotal.innerText = parseFloat(withdrawAmount) + parseFloat(withdrawTotalText)

    const balanceTotal = document.getElementById('balance-total')
    const balanceToatlText = balanceTotal.innerText

    balanceTotal.innerText = parseFloat(balanceToatlText) - parseFloat(withdrawAmount)

    withdrawInput.value = '';
})