const km = parseFloat(prompt('Quanti Km vuoi percorrere:'));
const age = parseInt(prompt('Quanti anni hai ?'));
const price = km * 0.21

let distance;
let strangeAge;
let finalPrice;
let sale; 
let saleMessage;

// Se eta e distanza NON sono numerici -> messaggio di errore
if (!Number.isFinite(km) && !Number.isFinite(age)) {
    // error mex
    document.getElementById('message').innerHTML = `Errore nell'inserimento dei dati`;

    // altrimenti partono i controlli
} else {
    
    // controllo sulla distanza
    if ( km > 1000 ) {
        distance = `Prendi un aereo baby`;

    } else if ( km < 5 ) {
        distance = `Camminaaaaaa, pochi km, devi fare almeno 5 km`; 

    } else {
        distance = `Hai inserito una distanza percorribile dai nostri treni`;
        
        // controllo eta    
        if (age <= 8 || age >= 99) {
            strangeAge = `ERRORE età deve essere compresa tra 8 e 99 anni`

        } else {
            strangeAge = `Hai inserito correttamente l'età`;
            
            // prezzo finale
            if ( age < 18 ) {
                sale = (price / 100) * 20;
                finalPrice = price - sale;
                saleMessage = `Sconto under 18 (${price}€ - ${sale.toFixed(2)}€ (sconto))`;
                
            } else if( age >= 65 ) {
                sale = (price / 100) * 40;
                finalPrice = price - sale;
                saleMessage = `Sconto over 65 (${price}€ - ${sale.toFixed(2)}€ (sconto))`;
                
            } else {
                finalPrice = price;
                saleMessage = `Non c'è sconto`;
            }
        }
        document.getElementById('age').innerHTML = `Validazione età: ${strangeAge} (${age} anni)`;
    }
    document.getElementById('distance').innerHTML = `Validazione distanza: ${distance} (${km} Km)`;
    document.getElementById('finalPrice').innerHTML = `Prezzo Finale: ${finalPrice.toFixed(2)} € => ${saleMessage}`;
}





