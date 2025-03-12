//TASK DI QUESTO ESERCIZIO: 
//Scrivi i passaggi per creare un oggetto persona con un 
// metodo che restituisce una stringa contenente il nome e l'età della persona.

const persona = [
    {nome: 'Alessia', età: 12},
    {nome: 'Simona', età:14},
    {nome: 'Mario', età:22},
    {nome: 'Rocco', età:23},
    {nome: 'Anna', età:19},
]

function PresentazionePersona(){
    let indice = 0;
    let risultato = '';
    while (indice < persona.length) {
        risultato += `Io mi chiamo ${persona[indice].nome} è ho ${persona[indice].età},`;
        indice++
    }
    return risultato
}

console.log(PresentazionePersona());

//TASK DI QUESTO ESERCIZIO: 
// Invertire le chiavi e i valori di un oggetto
// Scrivi una funzione che prende un oggetto e restituisce un nuovo 
// oggetto con chiavi e valori invertiti.

const object__font = {a: 1, b: 2, c: 3, d:4};

const HandleObjectFunction = ()=>{
    let objet_make = {};
    for(const key in object__font){ 
        if (object__font.hasOwnProperty(key)) { // Serve a verificare se un oggetto possiede una proprietà diretta, evitando di considerare,
            objet_make[object__font[key]]= key; // la proprietà ereditata dallo stesso valore che hanno parte della catena.
        } // output ---> obj[obj1[chiave]] = chiave (proprietatio allo oggetto ereditato)
    }

    console.log("Ecco l'oggetto rappresentato:")
    return objet_make;
}

console.log(HandleObjectFunction());

// for (const key in object__font) {
//     console.log(object__font[key]) ---> ciclo di lettura per gli oggetti
// }

// object__font["a"] = 1 ---> 1 (Output)

//TASK DI QUESTO ESERCIZIO: 
//Inverti le parole (Stringhe)
// Scrivi una funzione che inverte l'ordine delle parole in una frase, mantenendo le parole invariate.

const String_comp = "Hello World";

const HandleStringReverseFun = ()=>{
    const List_reverse = String_comp.split(" ").reverse().join(" ");
    return "Ecco la Stringa invertità: " + List_reverse;
}

console.log(HandleStringReverseFun());

//TASK DI QUESTO ESERCIZIO: 
// Unire due oggetti con somma dei valori
// Scrivi una funzione che unisce due oggetti, sommando i valori se hanno la stessa chiave.

const object_1 = {a: 1, b: 2, c: 3, d: 4, e: 5};
const object_2 = {f: 6, g: 7, h: 8, i: 9, l: 10, m: 11};

const HandleObjectUnion = (obj1, obj2)=>{
    console.log("Ecco l'oggetto unito:")
    const obj_new = {};
    for (const key in obj1) {
        if (obj1.hasOwnProperty(key)) {
            obj_new[key] = obj1[key];
        }
    }

    for (const key in obj2) {
      if (obj2.hasOwnProperty(key)) {
        if (obj_new.hasOwnProperty(key)) {
            obj_new[key] += obj2[key];
        } else {
             obj_new[key] = obj2[key];
        }
      }
    }

    return obj_new;
}

console.log(HandleObjectUnion(object_1, object_2));
// console.log(object_1.hasOwnProperty("f")) ---> verifica di proprietà esistente


//TASK DI QUESTO ESERCIZIO: 
// Trovare la chiave con il valore massimo
// Scrivi una funzione che prende un oggetto e restituisce la chiave corrispondente al valore più alto.

const object_3 = {c: 73, d: 64, e: 35, f: 10, g: 20};

const HandleObjectMaxPr = (obj)=>{
    let max = 0;
    let par_max = "";
    for (const key in obj) {
        max = Math.max(obj[key]);
        if (obj[key] <= max) {
            par_max = obj[obj[key] = key];
        }
    }
    return "Ecco la prorietà della lista maggiore: " + par_max;
}


// console.log(object_3[Object.keys(object_3)[1]]) //---> presa di solo valore
// console.log(Object.keys(object_3), Object.values(object_3)); ---> presa di solo valore e chiave

const HandleObjectUnionV1 = (obj)=>{
    let max = obj[Object.keys(obj)[0]];
    
    for (const key in obj) {
        if (obj[key] >= max - 1) {
            max = obj[key];
            // console.log(max)
        }
        max = obj[obj[key] = key];
    }

    return "Ecco la proprietà con il numero più della lista: " + max;
}

console.log(HandleObjectMaxPr(object_3));
// console.log(object_3.d >= object_3.c) --> per ogni arco di loop

//TASK DI QUESTO ESERCIZIO:
// Filtrare un oggetto in base ai valori
// Scrivi una funzione che prende un oggetto e un numero n, e 
// restituisce un nuovo oggetto contenente solo le coppie chiave-valore in cui il valore è maggiore di n.

const object_4 = { a: 10, b: 5, c: 20, d: 6 };

const HandleOBJMaxList = (obj)=>{
    let obj_new = {};
    const max = Math.max(...Object.values(obj));
    console.log("Ecco la lista con i numeri maggiori presenti:");

    for (const key in obj) {
       if (obj[key] >= max - 3) {
           obj_new[key] = obj[key];
       }
    }

    return obj_new;
}

// console.log(HandleOBJMaxList(object_4))

const HandleOBJMaxListV1 = (obj)=>{
    let obj_new = {};
    let max = Math.ceil(Math.random() * Math.max(...Object.values(obj))); // Valore Massimo Casuale espresso nella condizione.
    console.log("Massimo di valore:", max);
    console.log("Ecco i numer massimi: ");

    for (const key in obj) {
        if (obj[key] >= max) {
            obj_new[key] = obj[key];
        }
    }

    return obj_new;
}

console.log(HandleOBJMaxListV1(object_4))


// const Object_new = {a: 10, b: 22, c: 30, d: 40};

// const value_obj = ()=>{
//     let num = {}
//     for (const key in Object_new) {
//         num[Object_new[key]] = key;
//     }
//     return num
// };
// console.log(value_obj());