// console.log('ciao js')  
// backtick = alt+96 --- {   `    } 

// 1 salvare in 3 variabili nome cognome e colore preferito
// 2 aggiungere 23 al nome ottenuto
// 3 stamparlo in pagina


// 1
const outputTag = document.getElementById('output');
const nome = prompt('Digita il tuo nome')
const cognome = prompt('Digita il tuo cognome')
const colore = prompt('Digita il tuo colore preferito')

// 2 
const message = nome + cognome + colore + 23


// 3

outputTag.innerHTML = message;

