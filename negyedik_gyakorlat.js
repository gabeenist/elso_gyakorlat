/*Egy macskának 4 lába van, a tyúknak fele annyi, mint a macskának,
a póknak pedig kétszer annyi, mint a macskának. Van továbbá egy százlábú, 
akinek random 20-50 lába lehet. Írasd ki, 
hogy hány lábuk van az egyes állatoknak külön, és együttesen!
*/
let macska = 4;
let tyuk = macska / 2;
let pok = macska * 2;
let szazlabu = Math.floor(Math.random() * 50) + 20;
let osszesen = macska + tyuk + pok + szazlabu;

console.log("A macskának " + macska + " db lába van.");
console.log("A tyúknak " + tyuk + " db lába van.");
console.log("A póknak " + pok + " db lába van.");
console.log("A százlábunak " + szazlabu + " db lába van.");
console.log("Összesen " + osszesen + " db lábuk van.");