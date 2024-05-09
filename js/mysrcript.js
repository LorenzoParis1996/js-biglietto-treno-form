/*creo delle varibiali con prompt che da stringa si trasformeranno in numeri*/

const kmPercorsi = parseInt(prompt('Quanti kilometri devi percorrere?'));
console.log(kmPercorsi);

const etaUtente = parseInt(prompt('Quanti anni hai?'));
console.log(etaUtente);


/*creo variabile col prezzo per km */

let prezzoPerKm = 0.276113;

/*creo variabile per definire il prezzo intero senza sconti*/

let prezzoIntero = (kmPercorsi * prezzoPerKm);


/*creo delle condizioni in cui essere under 21 oppure over 63 comporta degli sconti*/

if (etaUtente < 21) {

    /*queste variabili create per le due scontistiche vengono applicate solamente dentro le istruzioni delle condizioni che metto*/
    let scontoUnder = ((prezzoIntero * 24.552) / 100);
    let prezzoUnder = (prezzoIntero - scontoUnder);
    document.getElementById("prezzoBiglietto").innerHTML = `il tuo biglietto costa ${prezzoUnder.toFixed(2)}`;
    console.log(prezzoUnder.toFixed(2));
} else if (etaUtente > 63) {
    let scontoOver = ((prezzoIntero * 37.893) / 100);
    let prezzoOver = (prezzoIntero - scontoOver);
    document.getElementById("prezzoBiglietto").innerHTML = `il tuo biglietto costa ${prezzoOver.toFixed(2)}`;
    console.log(prezzoOver.toFixed(2));
} else {
    document.getElementById("prezzoBiglietto").innerHTML = `il tuo biglietto costa ${prezzoIntero.toFixed(2)}`;
    console.log(prezzoIntero.toFixed(2));
}
