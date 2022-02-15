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

const scelta = prompt('Scegli pari o dispari');
const uNumero = parseInt( prompt('Scegli un numero da 1 a 5'));
const pcNumero = getRandomIntInclusive(1,5);

console.log(scelta,uNumero,pcNumero);
const risultato = uNumero + pcNumero;

if(
  (scelta === 'pari' && ePari(risultato) ) ||
  (scelta === 'dispari' && !ePari(risultato))
  ){
      console.log('Hai vinto')
  } else{
      console.log('Hai perso')
  }
  