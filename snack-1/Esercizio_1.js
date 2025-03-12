//TASK DI QUESTO ESERCIZIO:
//1) Crea un array con almeno 5 nomi di frutta.
//2) Aggiungi una nuova frutta alla fine dell'array.
//3) Rimuovi l'ultimo elemento dell'array.
//4) Aggiungi una nuova frutta all'inizio dell'array.
//5) Stampa la lunghezza dell'array.

let list_Fruits = ['Arancia', 'Melone', 'Limone', 'Mela', 'Anguria'];

function List_Mod(array){
    array.pop();
    array.push('Fragola');
    array.unshift('Banana');
    const lenght_list = array.length + 1;
    return '>>'+ array.join(' ') + " Totale della lista comprende " + lenght_list + " elementi.";
}

console.log(List_Mod(list_Fruits));