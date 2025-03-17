// //TASK DI QUESTO ESERCIZIO:
// //Somma delle cifre fino a un singolo numero
// // Dato un numero intero positivo, somma le sue cifre fino a ottenere un singolo numero.

const Number_Vl = 42;

// //Prima Soluzione

    function HandleNumberList(value){
        let Number_list = [];
        let Number_VL_string = value.toString();
        let index = 0;
        while(index < Number_VL_string.length){
        Number_list.push(Number(Number_VL_string[index]));
            index++
        }
    return Number_list
    }

    const HandleOperationNumberSingle = (value)=>{
        let Number_Operation = 0;
        let List_Number_Op = HandleNumberList(value);
        for (let i = 0; i < List_Number_Op.length; i++) {
            Number_Operation += List_Number_Op[i];
        }
        return "Il risultato Stampato: " + Number_Operation;
    }

console.log(HandleOperationNumberSingle(Number_Vl));

// // Seconda Soluzione

// // const HandleOperationNumberSingle = (Num)=>{
// //     let addtion = 0;
// //     while (Num > 0 || addtion >= 10) {
// //         if (Num === 0) {
// //             Num = addtion;
// //             addtion = 0;
// //         }
// //         addtion += Num % 10;
// //         Num = Math.floor(Num / 10);
// //         console.log("Numero:",Num);
// //         console.log("Addizione:",addtion);
// //     }
// //     return "Il risultato Stampato: " + addtion;
// // }

// // console.log(HandleOperationNumberSingle(Number_Vl));



// // Numero: 12
// // Addizione: 3
// // Numero: 1
// // Addizione: 5
// // Numero: 0
// // Addizione: 6

// // console.log(42 % 10)
// // console.log(4 + 2)
// // console.log(Math.floor(5/10))

// //TASK DI QUESTO ESERCIZIO:
// // Rimuovere duplicati da un array
// // Scrivi una funzione che rimuove i duplicati da un array mantenendo l'ordine originale degli elementi.

const list_letter = ["a", "b", "a", "c", "b"];

// //Prima Soluzione
// // const HandleFunctionArray = ()=>{
// //     let index_list = list_letter.join('');
// //     let new_list = [];
// //     let result = "";
// //     for (let index = 0; index < list_letter.length; index++) {
// //         if (index_list.indexOf(list_letter[index]) !== -1) {
// //             new_list.push(list_letter[index]);
// //         }
// //     }
// //     result = `Ecco la lista completa: [${new_list.join("-")}]`;
// //     return result
// // } 

// // console.log(HandleFunctionArray())

// //Seconda soluzione

const HandleFunctionArray = ()=>{
    let new_letter = [];
    let result = "";
    list_letter.forEach((element)=>{
       if (!new_letter.includes(element)) {
           new_letter.push(element);
       }
    })
    result = `Ecco la lista completa: [${new_letter.join("-")}]`;
    return result
}

console.log(HandleFunctionArray())

// //TASK DI QUESTO ESERCIZIO:
// //Dato un array di numeri in ordine crescente, in cui manca un numero, trova il numero mancante.

let list_number_1 = [1, 2, 3, 4, 6, 7, 8];

// //Prima Soluzione

const HandleFilterListNumber = ()=>{
    let list_search = [];

    for (let index = 1; index <= list_number_1.length; index++) {
        if (list_number_1.indexOf(index) === -1) {
            list_search.push(index);
            break
        }
    }

    return "Nella lista manca il: " + list_search.join("");
}

console.log(HandleFilterListNumber())

// //Seconda Soluzione

// const FilterHandle = (list, search)=>{
//     for (let i = 1; i < list.length; i++) {
//         if (!list.includes(i) && !search.includes(i)) {
//             search.push(i);
//             break
//         }
//     }
//     return search
// }

// const HandleFilterListNumber = (list)=>{
//     let list_search = [];
//    list.forEach(()=>{
//     FilterHandle(list, list_search)
//    })
//     return "Nella lista manca il: " + list_search.join("")
// }

// console.log(HandleFilterListNumber(list_number_1))

// // Terza Soluzione

// const HandleFilterListNumber = ()=>{
//     const length = list_number_1.length;
//     const total_length = (length * (length + 1)) / 2;
//     const total_list = list_number_1.reduce((a, b)=> a + b) ---> Somma definitiva di tutti gli array per ogni valore
//     let result = total_list - total_length;
//     return result
// }

// console.log(HandleFilterListNumber());

// // TASK DEL GIORNO:
// // Conta le vocali
// // Scrivi una funzione che conta quante vocali (a, e, i, o, u) ci sono in una stringa.

// //Prima Soluzione

const String_calls = "Italia";

// // const HandleInputVocals = ()=>{
// //     const vocals = ["a", "e", "i", "o", "u"];
// //     let Number_index = 0;
// //     let index = 0;
// //     let result = "";
// //     while (index < String_calls.length) {
// //         if (vocals.indexOf(String_calls[index]) !== -1) {
// //             Number_index++;
// //         }
// //         index++
// //     }

// //     result = 'Il numero di vocali rappresentati nella stringa è di ' + Number_index;

// //     return result
// // }

// // console.log(HandleInputVocals());

// //Seconda Soluzione

// const StringtoArray = ()=>{
//     let String_scomp = [];
//     for (let index = 0; index < String_calls.length; index++) {
//         String_scomp.push(String_calls[index]);
//     }
//     return String_scomp;
// }

const HandleInputVocals = ()=>{
    const list_letter = StringtoArray();
    const vocals = ["a", "e", "i", "o", "u"];
    let number_vocals = 0;
    list_letter.forEach((index)=>{
        if (vocals.includes(index)) {
            number_vocals++;
        }
    })
    return 'Il numero di vocali rappresentati nella stringa è di ' + number_vocals
}

// console.log(HandleInputVocals())

// const loremIpsumText =
//         `Lorem ipsum dolor sit amet, consectetur 
//         adipiscing elit, sed do eiusmod tempor 
//         incididunt ut labore et dolore magna 
//         aliqua. Diam in arcu cursus euismod 
//         quis viverra nibh. Nunc aliquet bibendum
//         enim facilisis gravida neque convallis 
//         a cras. Sagittis purus sit amet volutpat
//         Consequat mauris. Duis ultricies lacus 
//         sed turpis tincidunt id. Consequat interdum
//         varius sit amet mattis vulputate. Enim sed
//         faucibus turpis in eu. Ridiculus mus mauris
//         vitae ultricies leo integer malesuada nunc vel.
//         Nulla pharetra diam sit amet nisl suscipit.
//         Lobortis elementum nibh tellus molestie nunc
//         non blandit massa enim. Dis parturient montes
//         nascetur ridiculus mus. Justo nec ultrices dui
//         sapien eget. Enim tortor at auctor urna nunc.
//         Dictumst quisque sagittis purus sit amet volutpat
//         consequat mauris nunc.`;

//     const hello = 'hello world, a see you again';

//     const string_name = 'Hello World';

//     console.log(string_name.split(" "))

// TASK DEL GIORNO:
// Trova il primo numero maggiore di 10:
// Scrivi una funzione che trovi il primo numero nell’array che sia maggiore di 10.

const list_number_2 = [2, 5, 12, 8, 30];

const HandleFindProperty = (list)=>{
    return list.find((element) => element > 10);
}

console.log(HandleFindProperty(list_number_2));

const HandleFindPropertyMax = ()=>{
    let result = undefined;
    let number_max = list_number_2.forEach(element => element > 20 && result === undefined ? result = element : result = undefined);
    return result
}

console.log(HandleFindPropertyMax())