//1^ esercizio

 const validEmail=["arturo@gino.it","gennarosavastano@gomorra.it","enricopic@live.it"];
 let emailUser=prompt("inserisci la tua mail");
 let validUser=false;
 
 for(let i=0; i < validEmail.length; i++){ 
         if (emailUser.toLowerCase()===validEmail[i].toLowerCase()) {
             validUser=true;
     } 
 }
 if (validUser) {
     const nav=document.querySelector("nav");
     const element=document.createElement("h1");
     nav.append(element);
     element.append(emailUser);
     alert("la tua mail è valida");
 } else{
     alert("la tua mail non è valida");
 }

/* 2^ esercizio Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. */
 const punteggioUser=Math.floor(Math.random() * 6) + 1;
 alert(`caro umano, hai fatto ${punteggioUser}!`);

 const punteggioPc=Math.floor(Math.random() * 6) + 1;
 alert(`cara macchina, hai fatto ${punteggioPc}!`);

 if (punteggioUser > punteggioPc) {
     alert("complimenti umano hai sconfitto il computer!")
 } else if (punteggioUser < punteggioPc) {
     alert("cara macchina sei la vincitrice!")
 } else{
     alert("Pareggio!");
 }
