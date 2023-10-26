const km = parseFloat(prompt('Quanti Km vuoi percorrere:'));
const age = parseInt(prompt('Quanti anni hai ?'));
const price = km * 0.21

// error mex
if (!isFinite(km) && !isFinite(age)) {
    document.getElementById('message').innerHTML = `Errore nell'inserimento dei dati`;
}

// controllo sulla distanza
let distance;

if ( km > 1000 ) {
    distance = `Prendi un aereo baby`;
}else if ( km < 1 ) {
    distance = `Scendi pure dal treno`;
} else {
    distance = `Hai inserito una distanza percorribile dai nostri treni`;
}
document.getElementById('distance').innerHTML = `Validazione distanza: ${distance}`;

// controllo eta
let strangeAge;
if (age <= 8 || age >= 99) {
    strangeAge = `ERRORE: Hai inserito un età sbagliata`
} else {
    strangeAge = ` Hai inserito correttamente l'età`;
}
document.getElementById('age').innerHTML = `Valutazione età: ${strangeAge}`;

// prezzo finale
let finalPrice;
let sale;

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

document.getElementById('finalPrice').innerHTML = `Prezzo Finale: ${finalPrice} Euro => ${sale}`;




