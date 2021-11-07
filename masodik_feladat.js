/*Egy macska 4 utódot hoz világra, az ember 3-al kevesebbet, míg egy pók 125x annyit,
 mint a macska. 
 Készíts programot, mely eltárolja változókban a különbözõ élőlények utódainak számát,
írd is ki konzolra, valamint írd ki, hogy összesen hány utód jött világra!
*/
let macska = 4;
let ember = macska - 3;
let pok = macska * 125;
let osszesen = macska + ember + pok;

console.log("A macsaka " + macska + " utódot hoz a világra");
console.log("Az ember " + ember + " utódot hoz a világra");
console.log("A pók " + pok + " utódot hoz a világra");
console.log("A három faj összesen " + osszesen + " utódot hoz a világra");