function calculojuros() {
    const nome = document.querySelector("#nome").value;
    const tempo = parseFloat(document.querySelector("#tempocontribuicao").value);
    const mensalidade = parseFloat(document.querySelector("#mensalidade").value);

    const total = mensalidade * (((1 + 0.517) / (tempo - 1)) / 0.517);
    alert('Olá ' + nome + ', seu valor de investimento é R$ : ' + total.toFixed(2));
}


