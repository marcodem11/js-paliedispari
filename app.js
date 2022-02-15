console.log('Pari E Dispari')

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log (getRandomIntInclusive(1,5) )
const ePari = function(numero) {
    console.log(numero)

    if(numero%2 === 0) {
        return true;
    }
    return false;
}