//TASK DI QUESTO ESERCIZIO: 
// Somma a Scatti: Creare una funzione che accetti un numero e restituisca un'altra funzione che, 
// chiamata ripetutamente, incrementa la somma interna.
// Fattoriale Ricorsivo: 
// Scrivere una funzione ricorsiva per calcolare il fattoriale di un numero.

const Number_1 = 12;
const Number_2 = 20;
let text_sting = '';

//Operazione di Incremento di Somma Intera

function OpHandleAdd(num1, num2){
    let result = num1 + num2;
    return OpHandleIncrement(result);
}

function OpHandleIncrement(res){
    return res += 1;
}

text_sting = '>>La somma viene incrementa: ' + OpHandleAdd(Number_1, Number_2);
console.log(text_sting);

//Operazione in Fattoriale

const Number_Op = 5;

const OpHandleFattorial = (Number)=>{
    let result = 1;
    if (!isNaN(Number) && 0 < Number) {
        for (let index = 2 ; index <= Number; index++){
            result *= index;
        }
        return result.toFixed(0);
    } else{
        return result = 0;
    }
}

text_sting = '>>Il fattoriale calcolato è di: ' + OpHandleFattorial(Number_Op);

console.log(text_sting);

//TASK DI QUESTO ESERCIZIO:
//Trova le persone più anziane in un oggetto
// Scrivi una funzione che, dato un oggetto con nomi e età, restituisca il nome della 
// persona più anziana. Se ci sono più persone con la stessa età, restituiscile in un array.

const House = { Alice: 10, Bob: 40, Charlie: 50, Luigi: 60, Matteo: 60};

const HandleObjectAgeFun = ()=>{
    let result_name = [];
    let max = -1;
    console.log("Inizio Ciclo");

    for (const key in House) {
        if (House[key] > max) { // Confronto fra due numeri per chi è maggiore
            max = House[key]; // Incremento del valore
            console.log(max)
            result_name = [key]
        } else if(House[key] === max){ // Valore di uguaglianza tra i diversi valori
            result_name.push(key);
        }
    }

    return result_name;
}

console.log(HandleObjectAgeFun())

//TASK DI QUESTO ESERCIZIO:
// Verifica se due oggetti sono uguali
// Scrivi una funzione che controlla se due oggetti hanno le stesse chiavi e valori.

const object_1 = {a: "Mario", b: "Luigi", c:"Giovanni", d:"Gennaro", e:"Lorenzo"};
const object_2 = {a: "Mario", b:"Luigi", c:"Giada", d:"Sara", e:"Fabrizio"};

const HandleObjectCodEquelsFun = (obj1, obj2)=>{
    let condition_result = true;
    let rappresentation = "";

    for (const key in obj1) {
        if (obj1[key] === obj2[key]) {
            condition_result = true;
        } else{
            condition_result = false;
        }
    }

    console.log({...obj1, ...obj2});
    rappresentation = `I due oggetti citati sono ${condition_result ? "Sono Uguali" : "Non Sono Uguali"} tra loro.`;

    return rappresentation;
}

console.log(HandleObjectCodEquelsFun(object_1, object_2));

//TASK DI QUESTO ESERCIZIO:
// Mappare un oggetto trasformando i valori
// Scrivi una funzione che prende un oggetto e una funzione di callback, 
// applica la funzione a ogni valore e restituisce un nuovo oggetto.

const object_3 = {a: 12, b: 20, c: 36, d: 43, e: 56, f: 90};
const object_4 = {a: "Nicolo", b:"Petunia", c:"Giada", d:"Sara", e:"Fabrizio", f: "Maria"};

const HandleCompObjGen = ()=>{
    let new_House = {};
    let name = HandleCompsionPr();
    let num = HandleCompsionNum();

    console.log("Ecco la lista completa:");

    for (const key in object_3) {
        // new_House[name] = {name: name.shift(), age: num.shift()};
        new_House[name.shift(key)] = num.shift();
    }

    return new_House;
}

const HandleCompsionNum = ()=>{
    let pr = [];
    for (const key in object_3) {
        pr.push(object_3[key]);
    }

    return pr;
}

const HandleCompsionPr = ()=>{
    let name = [];
    for (const key in object_4) {
        name.push(object_4[key]);
    }

    return name;
}

console.log(HandleCompObjGen());

// Soluzione dell'esercizio

const HandleCallBacksGen = (obj, callback)=>{
    let new_obj = {};

    console.log("Oggetto in CallBacks:");

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            // new_obj[key] =  obj[key] * 2;
            new_obj[key] = callback(obj[key], key);
        }
    }

    return new_obj;
}

console.log(HandleCallBacksGen(object_3, (value)=>(value * 20))); // Callback in funzione

//TASK DI QUESTO ESERCIZIO:
// Raggruppare gli elementi di un array in base a una funzione
// Scrivi una funzione che prende un array e una funzione di callback, e 
// raggruppa gli elementi in un oggetto in base al risultato della funzione.

const list_number = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
const list_letter = ["Omar", "Topolino", "Dario", "Francesco", "Enrico", "Mario", "Gianni", "Halo", "Valeria", "Giusy", "Tiziano", "Nano"];

const HandleObjectGenFun = (obj, callbacks)=>{
    let new_object = {};

    for (const key in obj) {
        new_object[key] = callbacks(list_letter, list_number);
    }

    return new_object;
}