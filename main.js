(() => {
    //HTMLのid値を使って以下のDOM要素を取得
    const balance = document.getElementById('balance');
    const withdraw = document.getElementById('withdraw-btn');
    const deposit = document.getElementById('deposit-btn');

    //入金ボタンが押された時
    deposit.addEventListener('click', (event) => {
        let depositAmount = document.getElementById('inputAmount').value;
        balance.value = parseInt(balance.value) + parseInt(depositAmount);
    })

    //出金ボタンが押された時
    withdraw.addEventListener('click', (event) => {
        let withdrawAmount = document.getElementById('withdrawAmount').value;
        let tmpAmount = parseInt(balance.value) - parseInt(withdrawAmount);
        //ATMの仕様上 残高を超えるできないように分岐
        if (tmpAmount > 0) {
            balance.value = tmpAmount;
        } else {
            window.alert("残高が不足しています");
        }
    });
  })();
  