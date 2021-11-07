/*3. Feri, Géza, és Máté diszkrét matek zh-t írtak,
 melyen maximum 20 pontot lehetett szerezni.
  Feri 12 pontot szerzett, Géza 5 ponttal kevesebbet,
   Máté pedig random kapott pontot 10 és 20 között.
    Tárold le változókban a három hallgató eredményét,
     írasd ki, valamint számold ki,
      hogy ki hány százalékosan teljesítette a zh-t!
*/
let feri = 12;
let geza = feri - 5;
let mate = Math.floor(Math.random() * 20)+10;
let max_pont= 20;
let feri_percent = (100 / max_pont) * 12;
let geza_percent = (100 / max_pont) * geza;
let mate_percent = (100 / max_pont) * mate;

console.log("Feri " + feri + " pontot kapott a zh-ra.");
console.log("Géza " + geza + " pontot kapott a zh-ra.");
console.log("Máté " + mate + " pontot kapott a zh-ra.");
console.log("Feri zh-ja " + feri_percent + "%-os lett.");
console.log("Géza zh-ja " + geza_percent + "%-os lett.");
console.log("Máté zh-ja " + mate_percent + "%-os lett.");