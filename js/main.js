// Calcolo del prezzo del biglietto del treno

// Variabili
const container = document.getElementById("container");
const nameField = document.getElementById("name");
const tripField = document.getElementById("trip");
const ageField = document.getElementById("age");
const myButton = document.querySelector("button");
const myButtonReset = document.getElementById("reset");
const joke = document.getElementById("joke");

// Interazione con button Genera e Annulla

myButton.addEventListener("click",
    function(){
        const nome = nameField.value;
        const kmViaggio = tripField.value;
        var prezzo = 0.21 * kmViaggio; 
        
        // Output
        container.innerHTML = ` Ciao ${nome}, hai selezionato un viaggio da ${kmViaggio} km, il prezzo del tuo biglietto sar&aacute; ${prezzo.toFixed(2)} &euro; `;

        joke.innerHTML = ` Siamo dei simpaticoni, abbiamo nascosto il risultato del calcolo del tuo biglietto proprio qua sotto. Si sa, l'essenziale è invisibile agli occhi. Per scovarlo muovi il cursore nel campo blu. `

        console.log("nome e cognome: " , nome);
        console.log("durata viaggio: " , kmViaggio);
        console.log("prezzo del biglietto: " , prezzo.toFixed(2));
        
        // Condizioni

        if (ageField.value == "under") { //Sconto del 20%
            const etaPasseggero = ageField.value;
            prezzo -= prezzo * 0.2;
            const msgCaption = "e hai diritto ad uno sconto del 20% secondo la tariffa " + etaPasseggero;
            
            // Output
            container.innerHTML = ` Ciao ${nome}, hai selezionato un viaggio da ${kmViaggio} km ${msgCaption}, pertanto il prezzo del tuo biglietto sar&aacute; ${prezzo.toFixed(2)} &euro; `;

            console.log("tariffa: " , etaPasseggero);

        } else if (ageField.value == "over") { //Sconto del 40%
            const etaPasseggero = ageField.value;
            prezzo -= prezzo * 0.4;
            const msgCaption = "e hai diritto ad uno sconto del 40% secondo la tariffa " + etaPasseggero;
            
            // Output
            container.innerHTML = ` Ciao ${nome}, hai selezionato un viaggio da ${kmViaggio} km ${msgCaption}, pertanto il prezzo del tuo biglietto sar&aacute; ${prezzo.toFixed(2)} &euro; `;

            console.log("tariffa: " , etaPasseggero);

        }
    }
);

myButtonReset.addEventListener("click",
    function(){
        nameField.value = null;
        tripField.value = null;
    }
);

