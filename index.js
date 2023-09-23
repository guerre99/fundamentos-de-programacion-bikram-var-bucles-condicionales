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

/* Ej 12 */

let sumaPares = 0;

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        sumaPares += i;
    }
}

/* Ej 13 */

let variableValorNumerico = 24;

/* Ej 14 */

const MiNombre = "David";

/* Ej 15 */

const MiNumeroFav = 7;

/* Ej 16 */

let booleanoOr = (booleano1||booleano2);

/* Ej 17 */

let booleanoMix1 = (booleano1 && (TAU/2 == PI)||(variableValorNumerico>=MiNumeroFav));

/* Ej 18 */

let seisNoEsNueve = (6!==9);

/* Ej 19 */

let booleanoMix2 = (variableValorNumerico>0||variableValorNumerico<-(MiNumeroFav*TAU));

/* Ej 20 */

let valorSuma = (MiNumeroFav + variableValorNumerico);

/* Ej 21 */

let valorResta = (MiNumeroFav - variableValorNumerico);

/* Ej 22 */

let valorMultiplicacion = (MiNumeroFav*variableValorNumerico);

/* Ej 23 */

let valorDivision = (MiNumeroFav/3);

/* Ej 24 */

let contarHasta10 = 0;

while(contarHasta10 <=10){
    if(contarHasta10<10){
    contarHasta10 += 1;
    continue
    }
    else if (contarHasta10 === 10){
        break
    }
}

/* Ej 25 */


let preI = 0, preJ = 0;

for(i=0;i<11;i++){
    preI += ++preJ
}

/* Ej 26 */

let sumaImpares = 0;

for (let i = 0; i < 10; i++) {
    if (i % 2 !== 0) {
        sumaImpares += i;
    }
}
