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