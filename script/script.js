/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).



const numberKm
const passengerAge
let priceTicket (0.21€)
const discountUnderage  (*0.2)
const discountOverSixtyFive (*0.4)
let priceFinal in output
*/

//const numberKm in input prompt
const numberKm = prompt("Enter the distance to travel in km");

//const passenger in input prompt
const passengerAge= prompt("Please enter your age");

//let priceTicket
let priceTicket = numberKm * 0.21;

//let discount
let discount = 0;

//const discountUnderage
const discountUnderage = 18;

//const discountOverSixtyFive
const discountOverSixtyFive = 65;

//let messageDiscount
let messageDiscount;

//Apply discount for Underage and  OverSixtyFive
if(!isNaN(numberKm) && !isNaN(passengerAge)){
    if(passengerAge < discountUnderage){
        discount = priceTicket * 0.2;
        discount = discount.toFixed(2);
        priceTicket -= discount;
        messageDiscount = `The discount (${discount}) has been applied to your ticket,` + ' thank you for choosing us:' + ' ' + priceTicket.toFixed(2) + '€';
    } else if(passengerAge >= discountOverSixtyFive){
        discount = priceTicket * 0.4;
        discount = discount.toFixed(2);
        priceTicket -= discount;
        messageDiscount = `The discount (${discount}) has been applied to your ticket,` + ' thank you for choosing us:' + ' ' + priceTicket.toFixed(2) + '€';
    } else{
        messageDiscount = 'No discount has been applied to your ticket,' + ' ' + priceTicket.toFixed(2) + '€';
    }

} else{
    messageDiscount = "Invalid data entered, please try again";
}



//print the priceFinal in human format with two decimals
let priceFinal = messageDiscount;
console.log(priceFinal);

document.getElementById("ticket").innerHTML = priceFinal;