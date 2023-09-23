/* Ej 1 */

let variableSinValor;

/* Ej 2 */

let booleano1=true;

let booleano2=false;

/* Ej 3 */

const PI = 3.14;

/* Ej 4 */

const TAU = 2 * PI;

/* Ej 5 */

let booleanoAnd = booleano1 && booleano2;

/* Ej 6 */

let booleanoNot = !booleano1;

/* Ej 7 */

let booleanoMix0 = (booleano1 || booleano2) && (booleano1 || (!booleano1 && !booleano2));

/* Ej 8 */

let incrementarDesp = 2;
let resultadoDesp = incrementarDesp;
incrementarDesp++;

/* Ej 9 */

let incrementarAntes = 2;
incrementarAntes++;
let resultadoAntes = incrementarAntes;

/* Ej 10 */

let contarHasta10_2 = 0;

while (contarHasta10_2 <= 10){
   if (contarHasta10_2 < 10){
    contarHasta10_2++;
    continue;
   }
   if (contarHasta10_2 === 10){
    break;
   }
}

/* Ej 11 */

let postI = 0, postJ = 0;

for (let i = 0; i < 11;i++){
    postI += postJ++
}


