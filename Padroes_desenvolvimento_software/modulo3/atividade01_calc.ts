
interface Strategy {
    execute(a: number, b: number): number;
  }
  
  
  class Soma implements Strategy {
    execute(a: number, b: number): number {
      return a + b;
    }
  }
  
  
  class Subtracao implements Strategy {
    execute(a: number, b: number): number {
      return a - b;
    }
  }
  
  
  class Multiplicacao implements Strategy {
    execute(a: number, b: number): number {
      return a * b;
    }
  }
  
  
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Digite o primeiro número: ', (num1) => {
    readline.question('Digite o segundo número: ', (num2) => {
      readline.question('Digite a operação (+ para soma, - para subtração, * para multiplicação): ', (operacao) => {
        const numero1 = parseInt(num1);
        const numero2 = parseInt(num2);
  
        let strategy: Strategy;
  
        
        if (operacao === '+') {
          strategy = new Soma();
        } else if (operacao === '-') {
          strategy = new Subtracao();
        } else if (operacao === '*') {
          strategy = new Multiplicacao();
        } else {
          console.log('Operação inválida.');
          readline.close();
          return;
        }
  
        const resultado = strategy.execute(numero1, numero2);
        console.log(`Resultado da operação: ${resultado}`);
        readline.close();
      });
    });
  });