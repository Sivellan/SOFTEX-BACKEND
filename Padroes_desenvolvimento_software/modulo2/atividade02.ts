
interface Pato {
    grasnar(): void;
    voar(): void;
  }
  
  
  class PatoReal implements Pato {
    grasnar(): void {
      console.log("Quack! Quack!");
    }
  
    voar(): void {
      console.log("Voando como um pato");
    }
  }
  
  
  interface Galinha {
    cacarejar(): void;
    voarCurtoDistancia(): void;
  }
  
  
  class GalinhaReal implements Galinha {
    cacarejar(): void {
      console.log("Cocoricó!");
    }
  
    voarCurtoDistancia(): void {
      console.log("Voando uma pequena distância");
    }
  }
  
  
  class AdaptadorPato implements Galinha {
    constructor(private pato: Pato) {}
  
    cacarejar(): void {
      this.pato.grasnar(); 
    }
  
    voarCurtoDistancia(): void {
      this.pato.voar(); 
    }
  }
  
  
  class AdaptadorPatoDemo {
    static testarAdaptadorPato(): void {
      const patoReal: Pato = new PatoReal(); 
      const adaptadorPato: Galinha = new AdaptadorPato(patoReal); 
  
      console.log("Testando o adaptador de Pato para Galinha:");
      adaptadorPato.cacarejar(); 
      adaptadorPato.voarCurtoDistancia(); 
    }
  }
  
 
  AdaptadorPatoDemo.testarAdaptadorPato();