
class Observer {
    update() {}
  }
  
  
  class Subject {
    private observers: Observer[] = [];
  
    attach(observer: Observer): void {
      this.observers.push(observer);
    }
  
    detach(observer: Observer): void {
      const index = this.observers.indexOf(observer);
      if (index !== -1) {
        this.observers.splice(index, 1);
      }
    }
  
    notify(): void {
      for (const observer of this.observers) {
        observer.update();
      }
    }
  }
  
  
  class Editor extends Subject {
    open(): void {
      console.log("O arquivo foi aberto.");
      this.notify();
    }
  }
  
  
  class TextEditor extends Observer {
    private text: string[] = [];
  
    insertLine(lineNumber: number, text: string): void {
      this.text.splice(lineNumber - 1, 0, text);
    }
  
    removeLine(lineNumber: number): void {
      this.text.splice(lineNumber - 1, 1);
    }
  
    update(): void {
      console.log("Salvando o conteúdo do arquivo...");
      this.save();
      console.log("Conteúdo do arquivo:");
      this.printContent();
    }
  
    private save(): void {
      
    }
  
    private printContent(): void {
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