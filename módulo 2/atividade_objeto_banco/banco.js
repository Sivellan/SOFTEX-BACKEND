const banco = {
    conta: "9737",
    saldo: 1000, 
    tipoConta: "Conta Corrente",
    agencia: "3548",
    
        buscarSaldo: function() {
      return this.saldo;
    },
    
       deposito: function(valor) {
      if (valor > 0) {
        this.saldo += valor;
        return `Depósito de R$${valor} realizado com sucesso. Novo saldo: R$${this.saldo}`;
      } else {
        return "Valor de depósito inválido. O valor deve ser maior que zero.";
      }
    },
    
       saque: function(valor) {
      if (valor > 0 && valor <= this.saldo) {
        this.saldo -= valor;
        return `Saque de R$${valor} realizado com sucesso. Novo saldo: R$${this.saldo}`;
      } else if (valor <= 0) {
        return "Valor de saque inválido. O valor deve ser maior que zero.";
      } else {
        return "Saldo insuficiente para o saque.";
      }
    },
    
       numeroConta: function() {
      return this.conta;
    }
  };
  
  