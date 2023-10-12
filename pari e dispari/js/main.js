// console.log('pari e dispari');

const userChoice = prompt('Scegli pari o dipari');
console.log(userChoice);

const userNumber = parseInt(prompt('Scegli un numero da 1 a 5'));
console.log(userNumber);

const pcNumber = getRandomIntInclusive(1, 5); 
console.log(pcNumber);

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const sumNumber = sumCalc(userNumber, pcNumber);

function sumCalc(numA, numB) {
    const sum = numA + numB;

    return sum;
}

console.log(sumNumber);


 function isEven(num) {
     if (num % 2 === 0) {
         return true;
     }
     return false;
 }

 function isOdd(num) {
     if (num % 2 !== 0) {
         return true;
     }
     return false;
 }


 if (isEven(sumNumber)) {
     console.log('il numero è pari');
 } else if (isOdd(sumNumber)) {
     console.log('il numero è dispari');
 }


if (isEven(sumNumber) && userChoice === 'pari') {
    console.log('Hai vinto');
} else if (isOdd(sumNumber) && userChoice === 'dispari') {
    console.log('Hai vinto');
} else {
    console.log('Hai perso');
}
  