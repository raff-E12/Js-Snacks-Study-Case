//TASK DI QUESTO ESERCIZIO: 
//Invertire un Array: Scrivere una funzione che inverta l'ordine degli elementi di un array.
// Unire e Rimuovere Duplicati: Creare una funzione che unisca due array e rimuova eventuali duplicati.

let list_Number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let list_Number_2 = [1, 2, 3, 4, 4, 5, 5, 6, 9, 10, 10, 12];
let list_Number_3 = [4, 14, 15, 16, 17];

const Array_Invert = (array)=> {
    console.log('Lista Invertità:')
    return array.reverse().join('-');
}

console.log(Array_Invert(list_Number));

const Array_Union_list = (list1, list2)=>{
   console.log('Lista Unita e filtrata:');
    let number_new = [];
    const list_vision = [4, ,5, 10];
    for (let index = 0; index < list1.length; index++) {
        if (list_vision.indexOf(list1[index]) !== -1) {
            list1.splice(index, index);
            // console.log(list1)
        }
    }

    list1.forEach((index)=>{
      return number_new = number_new.concat(index);
    })

    list2.forEach((index)=>{
        return number_new = number_new.concat(index);
      })

    return number_new.sort((a,b)=>{return a - b}).join('-');
}

console.log(Array_Union_list(list_Number_2, list_Number_3));