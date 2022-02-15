console.log('Palindroma')

const gerry = prompt('Inserisci parola');
console.log(gerry);

if(ePalindroma(gerry) ) {
    console.log('La parola è palindroma');
} else {
    console.log('La parola non è palindroma');
}

function invertiParola( parola){
    const chars = parola.split('');
    const rejoin = chars.reverse().join('');
    return rejoin
}

function ePalindroma( parola) {
    const invertita = invertiParola(parola);
    if(parola === invertita) {
        return true;
    } else{
        return false;
    }
}

