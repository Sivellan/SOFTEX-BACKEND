let banco = {
    numeroConta: 123456,
    saldo: 5000,
    tipoConta: 'corrente',
    agencia: '001',
  
    buscarSaldo: function () {
      return this.saldo;
    },
  
    deposito: function (valor) {
      this.saldo += valor;
      return `Depósito de ${valor} realizado. Novo saldo: ${this.saldo}`;
    },
  
    saque: function (valor) {
      if (valor > this.saldo) {
        return 'Saldo insuficiente';
      } else {
        this.saldo -= valor;
        return `Saque de ${valor} realizado. Novo saldo: ${this.saldo}`;
      }
    },
  
    numeroDaConta: function () {
      return this.numeroConta;
    }
  };

  
  console.log('Saldo atual:', banco.buscarSaldo());
  
  console.log(banco.deposito(500)); 
  
  console.log(banco.saque(200));
  
  console.log('Número da conta:', banco.numeroDaConta()); 