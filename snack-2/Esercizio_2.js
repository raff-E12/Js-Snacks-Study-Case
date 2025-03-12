//TASK DI QUESTO ESERCIZIO:
// Crea una variabile chiamata eta e assegnale un valore numerico.
// Scrivi una condizione che controlla se l'età è maggiore di 18. Se sì, stampa "Sei maggiorenne", altrimenti stampa "Sei minorenne".
// Modifica la condizione in modo da controllare se l'età è tra 13 e 19. Se sì, stampa "Sei un adolescente".

const age_cond = 20;
let result_cond = '';

const Fun_Age_Comp = (age, result)=>{
    if (age >= 13 && age <= 19) {
        result = '>>Sei Maggiorenne, cosiderando che sei un adolescente.';
    } else if(age >= 18){
        result = '>>Sei Maggiorenne.';
    } else {
        result = '>>Sei Minorenne, mi dispiace';
    }
    return result;
}

console.log(Fun_Age_Comp(age_cond, result_cond));