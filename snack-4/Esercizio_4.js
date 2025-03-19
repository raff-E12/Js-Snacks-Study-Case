//TASK DI QUESTO ESERCIZIO:
// Scrivi una funzione che accetti una stringa e restituisca il 
// numero di vocali contenute al suo interno

const Name_string = 'Alessio';

const Vocals_Import = (Name)=>{
    const vocals = ['a', 'e', 'i', 'o', 'u'];
    let number_vocals = 0;
    let result_par = '';
    for (let index = 0; index < Name.length; index++) {
        if (vocals.indexOf(Name[index]) !== -1) {
            number_vocals++;
        }
    }
    result_par = '>>Il numero di vocali rappresentati nella stringa è di ' + number_vocals;
    return result_par;
}

console.log(Vocals_Import(Name_string))

//TASK DI QUESTO ESERCIZIO:
// Crea una classe Persona con un metodo di saluto:
// Un costruttore che prende nome e età
// Un metodo saluta() che restituisce "Ciao, sono [nome] e ho [età] anni!"

class Persona{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    Saluto_Persona(){
        let frase = `Ciao, Sono ${this.name} e ho ${this.age} anni!.`;
        return frase
    }
}

let persona_1 = new Persona("Mario", 22);
let persona_2 = new Persona("Giovanni", 23);

console.log(persona_1.Saluto_Persona());
console.log(persona_2.Saluto_Persona());

// ESTENSIONE ESERCIZIO:
// Crea una classe Studente che estende Persona e aggiunge:
// Una proprietà corso
// Un metodo info() che restituisce "Sono [nome] e studio [corso]"

class Studente_Universitario{
    constructor(nome, corso, anni){
        this.nome = nome;
        this.corso = corso;
        this.anni = anni;
    }
    Saluto(){
        let frase = `Ciao mi chiamo ${this.nome}, è ho ${this.anni} è frequento il corso di ${this.corso} all'università.`;
        return frase
    }
}

let Studente_1 = new Studente_Universitario("Mario", "biochimica", 22);
console.log(Studente_1.Saluto());

// Terza caraterristica:

class Corso extends Persona{
    constructor(name, corso, hobby){
        super(name); //Esportazione della proprietà
        super.corso = corso;
        super.hobby = hobby;
    }

    Passioni(){
        let passione = `Ciao mi chiamo ${this.name},La mia passione è ${this.hobby}, è il corso universitario che frequento è ${this.corso}.`;
        return passione
    }
}

let persona_3 = new Corso("Larry", "Ingegneria", "giocare a calcio");
console.log(persona_3.Passioni());

// ESTENSIONE ESERCIZIO:
// Conta il numero di istanze create (variabile statica)
// Modifica la classe Persona per tenere traccia di quante istanze vengono create.

class Scuola{
  static componenti = 0; // La variabile viene accedere solo grazie alla classe.

  constructor(nome, anni){
    this.nome = nome;
    this.anni = anni;
    this.comp = Scuola.componenti++;
  }

  Gruppo(){
    let result = `Il mio nome è ${this.nome}, è ho ${this.anni} anni.`;
    return result;
  }
}

console.log("Benvenuti a scuola:")
let persona_4 = new Scuola("Alice", 22);
let persona_5 = new Scuola("Angelo", 23);
let persona_6 = new Scuola("Mario", 25);
let persona_7 = new Scuola("Giovanni", 21);
let count = Scuola.componenti;
console.log(persona_4.Gruppo());
console.log(persona_5.Gruppo());
console.log(persona_6.Gruppo());
console.log(persona_7.Gruppo());
console.log("Numero di persone in classe: ",count);

// ESTENSIONE ESERCIZIO:
// Crea una classe Cerchio con:
// Un costruttore che prende raggio
// Un getter area che calcola l’area
// Un getter perimetro che calcola il perimetro

class Cerchio{
    static PI = 3.14;
    constructor(raggio){
        this.raggio = raggio;
    }

    set Numero_Ver(raggio_new) {  //Set: Serve ad impostare un valore quando la proprietà viene modificata in vari momenti.
        if (typeof raggio_new === "number" && raggio_new > 0) {
            this.raggio = raggio_new;
        } else {
            console.log("Il parametro deve essere un numero positivo.");
        }
    }

    // perimetro_v1(){
    //     let perimeter = (2 * Cerchio.PI) * this.raggio;
    //     return perimeter;
    // }

    // area_v1(){
    //     let area = (Cerchio.PI * this.raggio) * 2;
    //     return area;
    // }

    get Numero_Ver(){  //Get: Serve leggere una proprietà di cui sia stata ottenuta.
        return this.raggio;
    }

    get perimetro(){
        let perimeter = (2 * Cerchio.PI) * this.raggio;
        return perimeter;
    }

    get area(){
        let area = (Cerchio.PI * this.raggio) * 2;
        return area;
    }
}

let cerchio_1 = new Cerchio(22); // Ovviamente va sempre in base a quando è stato creato l'oggetto contenuto nella variabile.
cerchio_1.Numero_Ver = 42;
console.log("Raggio del cerchio:", cerchio_1.raggio);
console.log("L'Area è di: ", cerchio_1.area);

// ESTENSIONE ESERCIZIO:
// Crea una classe Contatore che ha:
// Una proprietà privata _valore
// Metodi incrementa(), decrementa() e reset()
// Un metodo getValore() che restituisce il valore corrente

class Contatore{
    constructor(){
        this.contatore = 0;
    }

    aggiungi(){
        return this.contatore++;
    }

    diminuisci(){
        return this.contatore--;
    }

    resetta(){
        return this.contatore = 0;
    }

    get GetValore (){
        return this.contatore;
    }
}

let indice = new Contatore();
indice.aggiungi();
indice.aggiungi();
indice.aggiungi();
indice.aggiungi();
indice.aggiungi();
indice.aggiungi();
console.log("Numero di indice:", indice.GetValore);

// ESTENSIONE ESERCIZIO:
// Crea una classe Libro che ha:
// Proprietà titolo, autore, disponibile (inizialmente true)
// Metodo prendiInPrestito() che imposta disponibile a false
// Metodo restituisci() che imposta disponibile a true
// Metodo stato() che dice se il libro è disponibile

class Libro{
    constructor(nome, autore){
        this.libro = nome;
        this.autore = autore;
        this.decisione = false;
    }

    prendiinprestito(){
        let decisione = Math.ceil(Math.random() * 20);
        let risultato = true;

        if (decisione < 20) {
            risultato = true;
        } else {
            risultato = false;
        }
        
        return risultato;
    }

    set decisione_agg(decision){
        return this.decisione = decision;
    }

    get decisione_agg(){
        return this.decisione;
    }

    
    restituisci(){
        let decisione = this.decisione;
        let risultato = "";
        if (decisione) {
            risultato = "il libro è stato restituito.";
        } else {
            risultato = "il libro non è stato restituito.";
        }
        
        return risultato;
    }

    stato(){
        let decisione = this.decisione;
        let risultato = "";
        if (decisione) {
            risultato = "il libro è disponibile.";
        } else {
            risultato = "il libro non è disponibile.";
        }
        
        return risultato;
    }
}

let libro_1 = new Libro("Il Signore degli Anelli", "Tolkien");
libro_1.decisione_agg = true;
console.log("Libro in evidenzia: ", libro_1.libro);
console.log(libro_1.stato());
console.log(libro_1.restituisci());