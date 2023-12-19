
interface Sanduiche {
    getDescricao(): string;
    getCusto(): number;
  }
  
  
  class FrangoAssado implements Sanduiche {
    getDescricao(): string {
      return "Sanduíche de Frango Assado";
    }
  
    getCusto(): number {
      return 4.50;
    }
  }
  
 
  class Pepperoni implements Sanduiche {
    constructor(private sanduiche: Sanduiche) {}
  
    getDescricao(): string {
      return `${this.sanduiche.getDescricao()}, Pepperoni`;
    }
  
    getCusto(): number {
      return this.sanduiche.getCusto() + 0.99;
    }
  }
  
  
  class QueijoMussarelaRalado implements Sanduiche {
    constructor(private sanduiche: Sanduiche) {}
  
    getDescricao(): string {
      return `${this.sanduiche.getDescricao()}, Queijo Mussarela Ralado`;
    }
  
    getCusto(): number {
      return this.sanduiche.getCusto() + 2.00;
    }
  }
  
 
  let meuSanduiche: Sanduiche = new FrangoAssado();
  meuSanduiche = new Pepperoni(meuSanduiche);
  meuSanduiche = new QueijoMussarelaRalado(meuSanduiche);
  
 
  console.log(`${meuSanduiche.getDescricao()} custa R$ ${meuSanduiche.getCusto().toFixed(2)}`);