function calculateTip() {
    // Obter o valor da conta e a porcentagem de gorjeta
    var billAmount = parseFloat(document.getElementById('billAmount').value);
    var tipPercentage = parseFloat(document.getElementById('tipPercentage').value);

    // Calcular a gorjeta e o total
    var tipAmount = billAmount * tipPercentage;
    var totalAmount = billAmount + tipAmount;

    // Exibir o resultado na interface do usuário
    document.getElementById('tipAmount').innerText = 'Gorjeta: $' + tipAmount.toFixed(2);
    document.getElementById('totalAmount').innerText = 'Total: $' + totalAmount.toFixed(2);
}
