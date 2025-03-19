// Task-Bonus: di Oggi.
// Mostrare il numero di click rimanenti
// partenza da 10
// Al click, numero -1
// a 0 -> pulsante disabilitato per 5 secondi 

let par_graf = document.getElementById("par-id");
const btn_min = document.getElementById("btn-min");
let count = 10;

btn_min.addEventListener("click", ()=>{
    if (count > 0) {
        count--;
        par_graf.innerHTML = `<b>Contatore: </b> ${count}`;
    } else if (count === 0){
        btn_min.setAttribute("disabled", "disabled");
        setTimeout(()=>{
            btn_min.removeAttribute("disabled");
            count = 10;
            par_graf.innerHTML = `<b>Contatore: </b> ${count}`;
        }, 1000);
    }
    console.log(count);
    return count;
})