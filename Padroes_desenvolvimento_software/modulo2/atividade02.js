
class Pato {
    grasnar() {
      console.log("Quack! Quack!");
    }
  
    voar() {
      console.log("Voando como um pato");
    }
  }
  
 
  class Galinha {
    cacarejar() {
      console.log("Cocoricó!");
    }
  
    voarCurtoDistancia() {
      console.log("Voando uma pequena distância");
    }
  }
  
  
  class AdaptadorPato {
    constructor(pato) {
      this.pato = pato;
    }
  
    cacarejar() {
      this.pato.grasnar(); 
    }
  
    voarCurtoDistancia() {
      this.pato.voar(); 
    }
  }
  
 
  function testarAdaptadorPato() {
    const patoReal = new Pato(); 
    const adaptadorPato = new AdaptadorPato(patoReal); 
  
    console.log("Testando o adaptador de Pato para Galinha:");
    adaptadorPato.cacarejar(); 
    adaptadorPato.voarCurtoDistancia(); 
  }
  
  
  testarAdaptadorPato();