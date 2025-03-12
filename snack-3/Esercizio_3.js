//TASK DI QUESTO ESERCIZIO:
//Crea un ciclo for che stampi i numeri da 1 a 10.
// Modifica il ciclo for per stampare solo i numeri pari da 1 a 10.
// Crea un ciclo while che stampi i numeri da 10 a 1.

let index = 0;
let result_cond = "";

//Ciclo For
const Loop_for_Count = (result, i)=>{
    let list_number = [];
    for (i = 0; i < 10 + 1; i++) {
        list_number.push(i);
    }
    result = `>>[${list_number.join('-').toString().trim()}] = Ciclo compiuto con il For.`;
    return result;
}

//Ciclo While
const Loop_while_Count = (result, i)=>{
    let list_number = [];
    while (i < 10 + 1) {
        list_number.push(i);
        i++
    }
    result = `[${list_number.join('-').toString().trim()}] = Ciclo compiuto con il While.`;
    return result;
}

console.log(Loop_for_Count(result_cond, index));
console.log(Loop_while_Count(result_cond, index));