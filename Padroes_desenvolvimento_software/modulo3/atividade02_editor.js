
class Observer {
    update() {}
  }
  
  
  class Subject {
    constructor() {
      this.observers = [];
    }
  
    attach(observer) {
      this.observers.push(observer);
    }
  
    detach(observer) {
      const index = this.observers.indexOf(observer);
      if (index !== -1) {
        this.observers.splice(index, 1);
      }
    }
  
    notify() {
      for (const observer of this.observers) {
        observer.update();
      }
    }
  }
  
  
  class Editor extends Subject {
    open() {
      console.log("O arquivo foi aberto.");
      this.notify();
    }
  }
  
 
  class TextEditor extends Observer {
    constructor() {
      super();
      this.text = [];
    }
  
    insertLine(lineNumber, text) {
      this.text.splice(lineNumber - 1, 0, text);
    }
  
    removeLine(lineNumber) {
      this.text.splice(lineNumber - 1, 1);
    }
  
    update() {
      console.log("Salvando o conteúdo do arquivo...");
      this.save();
      console.log("Conteúdo do arquivo:");
      this.printContent();
    }
  
    save() {
      
    }
  
    printContent() {
      for (const line of this.text) {
        console.log(line);
      }
    }
  }
  
  
  function textEditorApp() {
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    });
  
    const textEditor = new TextEditor();
    const editor = new Editor();
    editor.attach(textEditor);
  
    editor.open();
  
    readline.on('line', (input) => {
      if (input.toLowerCase() === 'eof') {
        editor.notify();
        readline.close();
      } else {
        textEditor.insertLine(textEditor['text'].length + 1, input);
      }
    });
  }
  
  
  textEditorApp();