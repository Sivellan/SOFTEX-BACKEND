class SistemaSeguranca {
    constructor() {
      this.senhaBaseSecreta = "SenhaUltraSecreta123";
    }
  
    acessarBaseSecreta(senhaInserida) {
      if (senhaInserida === this.senhaBaseSecreta) {
        console.log("Acesso concedido à Base Secreta. Bem-vindo, agente!");
      } else {
        console.log("Acesso negado. Senha incorreta. Intruso detectado!");
      }
    }
  }
  
  SistemaSeguranca.instancia = null;
  
  SistemaSeguranca.getInstance = function () {
    if (!SistemaSeguranca.instancia) {
      SistemaSeguranca.instancia = new SistemaSeguranca();
    }
    return SistemaSeguranca.instancia;
  };
  
  // Programa principal para demonstrar o uso do Singleton SistemaSeguranca
  const agente007 = SistemaSeguranca.getInstance();
  
  // Agente tentando acessar a Base Secreta com diferentes senhas
  agente007.acessarBaseSecreta("SenhaIncorreta"); // Acesso negado
  agente007.acessarBaseSecreta("SenhaUltraSecreta123"); // Acesso concedido