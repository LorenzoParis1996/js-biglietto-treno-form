



const bottoneCalcola = document.getElementById("my-button");


bottoneCalcola.addEventListener('click', function () {

    const kmPercorsi = document.getElementById("km").value;
    console.log(kmPercorsi);

    const etaUtente = document.getElementById("eta").value;
    console.log(etaUtente);

    let prezzoPerKm = 0.276113;

    let prezzoIntero = (kmPercorsi * prezzoPerKm);

    if (etaUtente < 21) {
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

});

