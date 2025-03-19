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
    return count;
})

// replicare lo stesso procedimento con il max creando uno oggetto:

// La funzione restituisce un selettore css valido dai passargli gli elementi, se esistono. 
function elementquery(element) {
    return document.querySelector(element) || null;
}

class ContMax {
    constructor(id, count) {
        this.count = count; // valore di indice 
        this.element = elementquery(id); //elemento padre corrispondente con tutti i suoi figli etichettati.
        this.btn_max = document.getElementById("btn-max"); // Bottone di incremento.
        this.par_max = document.getElementById("par-id-1"); // indice di contatore nella rappresentazione di testo.

        this.BtnEvent = this.BtnEvent.bind(this); 
        // Per fare in modo che la funzione della classe interagisca correttamente con l'HTML,
        // è necessario usare il metodo bind(). Questo assicura che "this" faccia riferimento
        // all'istanza della classe, permettendoci di accedere correttamente agli elementi
        // e completare l'evento senza errori. (elementi nominati nella classe);
        this.btn_max.addEventListener("click", this.BtnEvent); // chiamata del evento in funzione.
    }

    // funzione di incremento con la stessa funzione di implementagio fatta in precedenza.
    BtnEvent() {
        if (this.count < 10) {
            this.count++;
            this.par_max.innerHTML = `<b>Contatore:</b> ${this.count}`;
        } else{
            this.btn_max.setAttribute("disabled", "disabled");
            this.par_max.innerHTML = `<b>Contatore:</b> ${this.count}`;
            setTimeout(()=>{
                this.btn_max.removeAttribute("disabled");
                this.count = 0;
                this.par_max.innerHTML = `<b>Contatore:</b> ${this.count}`;
            }, 1000);
        }
    }
}

const count_1 = new ContMax(".box-cont", 0);

// scopri parola nascosa attraveso il box
// replica del esercizio fatto di sopra:

class ShowPar {
    constructor(frase, element){
        this.frase = frase;
        this.element = element;
        this.list = ["Hello World!!", "Ciao mondo!!", "Ciao, è grazie per avermi cliccato.", "Hai rotto le scatole, non cliccarmi più!!"];
        this.btn = document.getElementById("btn-show");
        this.par = document.getElementById("par-show");

        this.Show = this.Show.bind(this);
        this.btn.addEventListener("click", this.Show);
    }

    Show(){
        this.btn.setAttribute("disabled", "disabled");
        return this.par.innerHTML = `<b>${this.frase}</b>`;
    }

   Random(){
        let this_par = this.list[Math.floor(Math.random() * this.list.length)];
        return this.frase = this_par;
    }
}

const show_par = new ShowPar("Corriere della Sera", `${document.querySelector(".container-ex" ? ".container-ex" : null)}`);
show_par.Random();

// Aggiungi una lista di paragrafi con le classi:

class Add_Par{
    constructor(parent){
        this.parent = document.querySelector(parent);
        this.input = document.getElementById("text");
        this.btn_add = document.getElementById("add-btn");
        this.InputCheck = this.InputCheck.bind(this);
        this.color = document.getElementById("color-inp");
        this.btn_add.addEventListener("click", this.InputCheck);
        this.reset = document.getElementById("reset-btn");
        this.InputReset = this.InputReset.bind(this);
        this.reset.addEventListener("click", this.InputReset);
    }

    InputCheck(){
        let value = this.input.value;
        // console.log(value);
        let value_color = this.color.value;
        // console.log(value_color)
        if (value !== "") {
            let pargrafo_box = document.createElement("p");
            pargrafo_box.className = "par-box";
            pargrafo_box.style.backgroundColor = value_color;
            let text_node = document.createTextNode(value);
            pargrafo_box.append(text_node);
            this.parent.appendChild(pargrafo_box);
            return this.parent
        } else{
            window.alert("Inserisci come qualcosa di input");
        }
        }

        InputReset(){
            // return console.log("hello");
            this.input.value = "";  // this.input viene inizializzato dopo
            this.parent.innerHTML = "";
            window.alert("La lista è stata resettata.");
        }    
}

// class reset extends Add_Par{
//     constructor(parent){
//         super(parent);
//         this.reset = document.getElementById("reset-btn");
//         this.InputReset = this.InputReset.bind(this);
//         this.reset.addEventListener("click", this.InputReset);
//     }

//     InputReset(){
//         // return console.log("hello");
//         this.input.value = "";  // this.input viene inizializzato dopo
//         this.parent.innerHTML = "";
//         window.alert("La lista è stata resettata.")
//     }
// }

const parent_node_list = new Add_Par(".par-list");
// const reset_Btn = new reset(".par-list");

// Crea un lista della spesa con le classi:

class Spesa_obj{
    constructor(parent){
        this.parent = document.querySelector(parent);
        this.input = document.getElementById("text-add");
        this.add_btn = document.getElementById("add-btn-list");
        this.par_text = document.getElementById("text-id-add");

        // elemento delegato su vari elementi che hanno come classe "remove-btn"
        this.parent.addEventListener("click", (e)=>{
            if (e.target.classList.contains("remove-btn")) {
                e.target.parentElement.remove();
            }
        })

        this.InputCheckAdd = this.InputCheckAdd.bind(this);
        this.add_btn.addEventListener("click", this.InputCheckAdd);
    }

    InputCheckAdd(){
        let value = this.input.value;
        if (value !== ""){
            let element_p = document.createElement("p");
            let bold_text = document.createElement("b");
            bold_text.textContent = value;

            let remove_btn = document.createElement("button");
            remove_btn.className = "remove-btn";
            remove_btn.textContent = "remove";

            element_p.appendChild(bold_text);
            element_p.appendChild(remove_btn);
            element_p.className = "par-box-list";
            this.parent.appendChild(element_p);
            return this.parent;
        } else{
            window.alert("La lista è stata resettata.");
        }
    } 
}

const new_box_list = new Spesa_obj("#list-add");