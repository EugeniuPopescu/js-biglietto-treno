const km = parseFloat(prompt('Quanti Km vuoi percorrere:'));
const age = parseInt(prompt('Quanti anni hai ?'));
const price = km * 0.21

let distance;
let strangeAge;
let finalPrice; 
let sale;

if (!isFinite(km) && !isFinite(age)) {
    // error mex
    document.getElementById('message').innerHTML = `Errore nell'inserimento dei dati`;
} else {
    
    // controllo sulla distanza
    if ( km > 1000 ) {
        distance = `Prendi un aereo baby`;
    }else if ( km < 5 ) {
        distance = `Camminaaaaaa, pochi km per fare in treno`; 
    } else {
        distance = `Hai inserito una distanza percorribile dai nostri treni`;
        
        // controllo eta    
        if (age <= 8 || age >= 99) {
            strangeAge = `ERRORE Hai inserito un età sbagliata`
        } else {
            strangeAge = ` Hai inserito correttamente l'età`;
            
            // prezzo finale
            if ( age <= 18 ) {
                finalPrice = (price * 20)/100;
                sale = `Sconto under 18`;
                
            } else if( age >= 65 ) {
                finalPrice = (price * 40)/100;
                sale = `Sconto over 65`;
                
            } else {
                finalPrice = price;
                sale = `Non c'è sconto`;
            }
        }
    }
}
document.getElementById('distance').innerHTML = `Validazione distanza: ${distance} (${km}Km)`;
document.getElementById('age').innerHTML = `Validazione età: ${strangeAge} (${age} anni)`;
document.getElementById('finalPrice').innerHTML = `Prezzo Finale: ${finalPrice.toFixed(2)} Euro => ${sale}`;





