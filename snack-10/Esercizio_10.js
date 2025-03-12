// TASK DI QUESTO ESERCIZIO:
// Scrivi una funzione che prende in input una stringa e restituisce 
// una nuova stringa in cui ogni lettera ha un caso alternato, 
// partendo da una lettera maiuscola.

const string_name = 'Hello World';

//Prima soluzione

// const HandleAlternateLetter = (string)=>{
//     let string_comp = "";
//     let Upper_Condi = true;
//     for (let index = 0; index < string.length; index++) {
//         let pattern = /[a-zA-z]/.test(string[index]);
//         if (pattern) {
//           if (Upper_Condi) {
//             string_comp += string[index].toUpperCase();
//             // console.log(Upper_Condi);
//           } else{
//             string_comp += string[index].toLowerCase();
//             // console.log(Upper_Condi);
//           }
//           Upper_Condi = !Upper_Condi;
//         }else{
//             string_comp += string[index];
//         }
//     }

//     return string_comp;
// }

// console.log(HandleAlternateLetter(string_name));

//Seconda soluzione

function ScompString(String){
    let Scomp_list = String.split("");
    return Scomp_list

}

const HandleAlternateLetter = (String)=>{
    let String_Scomp = "";
    let String_Scomp_list = ScompString(String);
    let Word_Scompo_list = [];
    let UpperCase_Alt = true;
    for (let i = 0; i < String_Scomp_list.length; i++) {
        const pattern_cod = /[a-zA-Z]/g.test(String_Scomp_list[i]); //Concetto Centrale di Condizione
        if (pattern_cod) {
            if (UpperCase_Alt) {
                Word_Scompo_list.push(String_Scomp_list[i].toUpperCase());
                // console.log(UpperCase_Alt)
            } else{
                Word_Scompo_list.push(String_Scomp_list[i].toLowerCase());
                // console.log(UpperCase_Alt)
            }
            UpperCase_Alt = !UpperCase_Alt;
        } else{
            Word_Scompo_list.push(String_Scomp_list[i]);
        }
    }

    String_Scomp = Word_Scompo_list.join('');
    return String_Scomp;
}

console.log(HandleAlternateLetter(string_name))