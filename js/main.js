// console.log('js-paliedispari')

// - chiedo all'utente di inserire una parola 
//   - inizializzo una variabile con la parola inserita dall'utente attraverso il prompt
const userWord = prompt('inserire una parola');
console.log(userWord);
// - creo una funzione
//   - do un nome alla funzione e inserisco l'argomento parola 
function reverseWord(word) {
//   - creo una variabile vuota che avrà la parola
    let wordReversed = '';
    // console.log(word.length);
//   - apro un ciclo for decrescente
    for (let i = word.length - 1; i >= 0; i--) {
        wordReversed += word[i];
        // console.log(i, wordReversed);
    }
//   - restituisco la parola invertita
    return wordReversed;
}

// - inizializzo una varibile che contenga la funzione
const wordBackwards = reverseWord(userWord);
// - istruzioni condizionali
//   - SE la parola inserita è identica a quella invertita
if (userWord === wordBackwards) {
//     - stampo 'la parola è palindroma'
    console.log('La parola è palindroma');
//   - ALTRIMENTI 
} else {
//     - stampo 'la parola non è palindroma'
    console.log('La parola non è palindroma');
}

























