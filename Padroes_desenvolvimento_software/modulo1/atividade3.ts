class SistemaSeguranca {
    private static instancia: SistemaSeguranca | null = null;
    private senhaBaseSecreta: string = "SenhaUltraSecreta123";
  
    private constructor() {}
  
    static getInstance(): SistemaSeguranca {
      if (!SistemaSeguranca.instancia) {
        SistemaSeguranca.instancia = new SistemaSeguranca();
      }
      return SistemaSeguranca.instancia;
    }
  
    acessarBaseSecreta(senhaInserida: string): void {
      if (senhaInserida === this.senhaBaseSecreta) {
        console.log("Acesso concedido à Base Secreta. Bem-vindo, agente!");
      } else {
        console.log("Acesso negado. Senha incorreta. Intruso detectado!");
      }
    }
  }
  
  // Programa principal para demonstrar o uso do Singleton SistemaSeguranca
  const agente007 = SistemaSeguranca.getInstance();
  
  // Agente tentando acessar a Base Secreta com diferentes senhas
  agente007.acessarBaseSecreta("SenhaIncorreta"); // Acesso negado
  agente007.acessarBaseSecreta("SenhaUltraSecreta123"); // Acesso concedido