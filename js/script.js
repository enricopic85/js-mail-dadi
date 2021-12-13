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


 //variante dadi con switch case(da finire)
const punteggioUser=Math.floor(Math.random() * 6) + 1;
const punteggioPc=Math.floor(Math.random() * 6) + 1;
switch (punteggioUser) {
    case 1:
        // let punteggio1=document.getElementById("punteggio");
        // punteggio1.innerHTML=`caro umano, hai fatto ${punteggioUser}!`;
        let img1= document.createElement("img");
        img1.src="dadi/dice1.png";
        let div1=document.querySelector(".img_dado");
        div1.append(img1);
        break;
    case 2:
        // let punteggio2=document.getElementById("punteggio");
        // punteggio2.innerHTML=`caro umano, hai fatto ${punteggioUser}!`;
        let img2= document.createElement("img");
        img2.src="dadi/dice2.png";
        let div2=document.querySelector(".img_dado");
        div2.append(img2);
        break;
    case 3:
        // let punteggio3=document.getElementById("punteggio");
        // punteggio3.innerHTML=`caro umano, hai fatto ${punteggioUser}!`;
        let img3= document.createElement("img");
        img3.src="dadi/dice3.png";
        let div3=document.querySelector(".img_dado");
        div3.append(img3);
        break;
    case 4:
        // let punteggio4=document.getElementById("punteggio");
        // punteggio4.innerHTML=`caro umano, hai fatto ${punteggioUser}!`;
        let img4= document.createElement("img");
        img4.src="dadi/dice4.png";
        let div4=document.querySelector(".img_dado");
        div4.append(img4);
        break;   
    case 5:
        // let punteggio5=document.getElementById("punteggio");
        // punteggio5.innerHTML=`caro umano, hai fatto ${punteggioUser}!`;
        let img5= document.createElement("img");
        img5.src="dadi/dice5.png";
        let div5=document.querySelector(".img_dado");
        div5.append(img5);
        break;    
    case 6:
        // let punteggio6=document.getElementById("punteggio");
        // punteggio6.innerHTML=`caro umano, hai fatto ${punteggioUser}!`;
        let img6= document.createElement("img");
        img6.src="dadi/dice6.png";
        let div6=document.querySelector(".img_dado");
        div6.append(img6);
        break;   
    
    default:
        break;
}

switch (punteggioPc) {
    case 1:
        // let punteggio1=document.getElementById("punteggio");
        // punteggio1.innerHTML=`caro umano, hai fatto ${punteggioUser}!`;
        let img1= document.createElement("img");
        img1.src="dadi/dice1.png";
        let div1=document.querySelector(".img_dado_pc");
        div1.append(img1);
        break;
    case 2:
        // let punteggio2=document.getElementById("punteggio");
        // punteggio2.innerHTML=`caro umano, hai fatto ${punteggioPc}!`;
        let img2= document.createElement("img");
        img2.src="dadi/dice2.png";
        let div2=document.querySelector(".img_dado_pc");
        div2.append(img2);
        break;
    case 3:
        // let punteggio3=document.getElementById("punteggio");
        // punteggio3.innerHTML=`caro umano, hai fatto ${punteggioPc}!`;
        let img3= document.createElement("img");
        img3.src="dadi/dice3.png";
        let div3=document.querySelector(".img_dado_pc");
        div3.append(img3);
        break;
    case 4:
        // let punteggio4=document.getElementById("punteggio");
        // punteggio4.innerHTML=`caro umano, hai fatto ${punteggioPc}!`;
        let img4= document.createElement("img");
        img4.src="dadi/dice4.png";
        let div4=document.querySelector(".img_dado_pc");
        div4.append(img4);
        break;   
    case 5:
        // let punteggio5=document.getElementById("punteggio");
        // punteggio5.innerHTML=`caro umano, hai fatto ${punteggioPc}!`;
        let img5= document.createElement("img");
        img5.src="dadi/dice5.png";
        let div5=document.querySelector(".img_dado_pc");
        div5.append(img5);
        break;    
    case 6:
        // let punteggio6=document.getElementById("punteggio");
        // punteggio6.innerHTML=`caro umano, hai fatto ${punteggioPc}!`;
        let img6= document.createElement("img");
        img6.src="dadi/dice6.png";
        let div6=document.querySelector(".img_dado_pc");
        div6.append(img6);
        break;   
}

if (punteggioUser > punteggioPc) {
    let win=document.getElementById("titolo");
    win.innerHTML("Complimenti umano hai vinto")
} else if (punteggioUser < punteggioPc) {
   let win=document.getElementById("titolo");
   win.innerHTML("Complimenti macchina hai vinto")
} else{
   let win=document.getElementById("titolo");
   win.innerHTML("Pareggio!")
}
