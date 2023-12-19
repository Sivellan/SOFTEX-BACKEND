
class FrangoAssado {
    getDescricao() {
      return "Sanduíche de Frango Assado";
    }
  
    getCusto() {
      return 4.50;
    }
  }
  
  
  class Pepperoni {
    constructor(sanduiche) {
      this.sanduiche = sanduiche;
    }
  
    getDescricao() {
      return `${this.sanduiche.getDescricao()}, Pepperoni`;
    }
  
    getCusto() {
      return this.sanduiche.getCusto() + 0.99;
    }
  }
  
  
  class QueijoMussarelaRalado {
    constructor(sanduiche) {
      this.sanduiche = sanduiche;
    }
  
    getDescricao() {
      return `${this.sanduiche.getDescricao()}, Queijo Mussarela Ralado`;
    }
  
    getCusto() {
      return this.sanduiche.getCusto() + 2.00;
    }
  }
  
  
  let meuSanduiche = new FrangoAssado();
  meuSanduiche = new Pepperoni(meuSanduiche);
  meuSanduiche = new QueijoMussarelaRalado(meuSanduiche);
  

  console.log(`${meuSanduiche.getDescricao()} custa R$ ${meuSanduiche.getCusto().toFixed(2)}`);