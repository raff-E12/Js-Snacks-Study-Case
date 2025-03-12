//TASK DI QUESTO ESERCIZIO: 
// sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana 
// (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

const price_km_bg = 0.21;
let Km_number = 180;
let Age_User = 10;

function Calc_price_bg(km, age, price){
    let Calc_Km_Op = 0;
    let Comp_price = 0;
    let result = '';

    if (age <= 18) {
        Calc_Km_Op = km * price;
        Comp_price = (Calc_Km_Op * 20) / 100;
        result = `Il totale calcolato è:  €${Comp_price.toFixed(2)}(Per i minorenni)`;
    } else if(age <= 40){
        Calc_Km_Op =  km * price;
        Comp_price =  (Calc_Km_Op * 40) / 100;
        result = `Il totale calcolato è:  €${Comp_price.toFixed(2)}(Per gli adulti)`;
    } else {
        Comp_price =  '€ ' + Calc_Km_Op;
        result = `Il totale calcolato è: ${Comp_price}`;
    }

    return result; 
}

console.log(Calc_price_bg(Km_number, Age_User, price_km_bg))