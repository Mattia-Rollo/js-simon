"use strict"

//alert blocca anche il setTimeout

//setTimeout funziona una volta

// const time = setTimeout(function(){
//     console.log('hai sbagliato');
// }, 10000);

// let timer = 0;
// function myFunction() {
//     console.log('setinterval');
//     timer++;
// }

// const intervall = setInterval(myFunction, 500);


// const btn = document.querySelector('button');
// btn.addEventListener('click', () =>clearInterval(intervall))

//faccio domanda all'utente 
// se risposta è corrette clearTimeout

// let counter = 10;
// let num = document.getElementById('num')

// const countDown = setInterval(() => {
//     console.log(counter)
//     if(counter == 0){
//         num.innerHTML = 'buon anno';
//         clearInterval(countDown);
//     }else{
//         num.innerHTML = counter;
//         counter--;}
// }, 1000);;

// console.log('preparo lo spumante')
// console.log('prendo i bicchieri')



// non funziona non so perchè

// const orologio = document.getElementById('orologio');
// const clock = new Date();




// const time = setInterval(() =>{
//     console.log('ora: ' + clock.getHours(), clock.getMinutes(),  'secondi ' + clock.getSeconds());
//     orologio.innerHTML = `${clock.getSeconds()}`;
// }, 1000);

// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite una casella di input e un bottone
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

const numeriAschermo = document.getElementById('numeri');
const numeriUtente = document.getElementById('numeriUtente');
const btn = document.getElementById('btn');

const listaRandomNumeri = [];
const numeriMax = 5;

while(listaRandomNumeri.length<numeriMax){ 
    let numero = getRndInteger(1,100);
    if(!listaRandomNumeri.includes(numero)){
        listaRandomNumeri.push(numero);
    }
}

console.log(listaRandomNumeri);


let counter = 3;
console.log(counter);

numeriAschermo.innerHTML = `${listaRandomNumeri.join(' ')}`;


const intervall = setInterval(() => {
    counter--;
    console.log(counter);
    if(counter == 0) {
        numeriAschermo.innerHTML = 'riscrivi i numeri';
        clearInterval(intervall);
    }
}, 1000);

btn.addEventListener('click',function (){
    numeriAschermo.innerHTML = '';
    const listaNumeriUtente = numeriUtente.value.split(" ");
    
    
    console.log(listaNumeriUtente);
    for(let i = 0; i < listaNumeriUtente.length; i++){
        console.log(parseInt(listaNumeriUtente[i]));
        if(listaRandomNumeri.includes(parseInt(listaNumeriUtente[i]))) {
            numeriAschermo.innerHTML += listaNumeriUtente[i] + ' ';
            console.log('lista' + listaNumeriUtente[i]);
    }

}



});




//setTimeout function di 3 secondi
//allo scadere dei 3 s i numeri devono sparire
// chiedere i numeri all'utente 
// 