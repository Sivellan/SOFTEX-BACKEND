let num1 = prompt("Informe o primeiro número:");
let num2 = prompt("Informe o segundo número:");
let operacao = prompt("Informe a operação a ser realizada (+, -, *, /):");

try {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  if (isNaN(num1) || isNaN(num2)) {
    throw new Error("Você precisa informar números válidos!");
  }

  let resultado;

    switch (operacao) {
    case '+':
      resultado = num1 + num2;
      break;
    case '-':
      resultado = num1 - num2;
      break;
    case '*':
      resultado = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        throw new Error("Divisão por zero não é permitida!");
      }
      resultado = num1 / num2;
      break;
    default:
      throw new Error("Operação inválida!");
  }

  console.log(`O resultado da operação ${num1} ${operacao} ${num2} é: ${resultado}`);

} catch (error) {
  console.error("Ocorreu um erro:", error.message);
} finally {
  console.log("Finalizando o código...");
}