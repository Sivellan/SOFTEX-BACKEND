// Classe abstrata Veiculo
class Veiculo {
    constructor(modelo, marca, cor, numeroRodas) {
      this.modelo = modelo;
      this.marca = marca;
      this.cor = cor;
      this.numeroRodas = numeroRodas;
    }
  
    clone() {
      return Object.create(this);
    }
  
    represent() {
      return `Modelo: ${this.modelo}, Marca: ${this.marca}, Cor: ${this.cor}, Rodas: ${this.numeroRodas}`;
    }
  }
  
  // Subclasse Carro que acrescenta numeroPortas
  class Carro extends Veiculo {
    constructor(modelo, marca, cor, numeroRodas, numeroPortas) {
      super(modelo, marca, cor, numeroRodas);
      this.numeroPortas = numeroPortas;
    }
  
    represent() {
      return `${super.represent()}, Portas: ${this.numeroPortas}`;
    }
  }
  
  // Subclasse Moto que acrescenta tipo
  class Moto extends Veiculo {
    constructor(modelo, marca, cor, numeroRodas, tipo) {
      super(modelo, marca, cor, numeroRodas);
      this.tipo = tipo;
    }
  
    represent() {
      return `${super.represent()}, Tipo: ${this.tipo}`;
    }
  }
  
  // Classe Aplicação
  class Aplicacao {
    constructor() {
      this.veiculos = [
        new Carro("SUV", "Ford", "Prata", 4, 5),
        new Carro("Caminhonete", "Chevrolet", "Preto", 4, 4),
        new Carro("Compacto", "Honda", "Azul", 4, 3),
        new Moto("Esportiva", "Kawasaki", "Verde", 2, "Esportiva"),
        new Moto("Custom", "Suzuki", "Preto", 2, "Custom"),
        new Moto("Scooter", "BMW", "Branco", 2, "Scooter"),
      ];
    }
  
    cloneVeiculos() {
      return this.veiculos.map((veiculo) => veiculo.clone());
    }
  
    representarVeiculos(veiculos) {
      veiculos.forEach((veiculo) => {
        console.log(veiculo.represent());
      });
    }
  
    run() {
      const clones = this.cloneVeiculos();
      this.representarVeiculos(clones);
    }
  }
  
  const app = new Aplicacao();
  app.run();