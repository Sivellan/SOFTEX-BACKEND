// Interface comum para os produtos
class Computador {
    constructor(ram, hdd, cpu) {
      this.ram = ram;
      this.hdd = hdd;
      this.cpu = cpu;
    }
  
    toString() {
      return `Tipo: ${this.type}, RAM: ${this.ram}GB, HDD: ${this.hdd}GB, CPU: ${this.cpu}GHz`;
    }
  }
  
  // Classe para o tipo de computador PC
  class PC extends Computador {
    constructor(ram, hdd, cpu) {
      super(ram, hdd, cpu);
      this.type = 'PC';
    }
  }
  
  // Classe para o tipo de computador Server
  class Server extends Computador {
    constructor(ram, hdd, cpu) {
      super(ram, hdd, cpu);
      this.type = 'Server';
    }
  }
  
  // Fábrica para criar instâncias dos tipos de computador
  class ComputadorFactory {
    criarComputador(tipo, ram, hdd, cpu) {
      switch (tipo.toLowerCase()) {
        case 'pc':
          return new PC(ram, hdd, cpu);
        case 'server':
          return new Server(ram, hdd, cpu);
        default:
          throw new Error('Tipo de computador não suportado');
      }
    }
  }
  
  // Exemplo de uso:
  const fabrica = new ComputadorFactory();
  
  const meuPC = fabrica.criarComputador('pc', 8, 512, 3.4);
  console.log(meuPC.toString()); // Saída: Tipo: PC, RAM: 8GB, HDD: 512GB, CPU: 3.4GHz
  
  const meuServer = fabrica.criarComputador('server', 16, 1024, 4.8);
  console.log(meuServer.toString()); // Saída: Tipo: Server, RAM: 16GB, HDD: 1024GB, CPU: 4.8GHz