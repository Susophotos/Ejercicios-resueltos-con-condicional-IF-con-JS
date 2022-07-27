// Ejercicios con condicionales de  IF & ELSE IF;

//probando si dos numeros son multiplos entre si

let numero1 = 5;
let numero2 = 275;

if (numero1 % numero2 === 0 || numero2 % numero1 === 0) {
    console.log("son multiplos");
} else  {

    console.log("no son multiplos");
    
}

console.log("fin programa");

//__________________________________________________________________________________________

// pedir dos numeros y decir cual es el mayor

let numero12 = 2000;
let numero22 = 1500;

if (numero12 > numero22) {
    console.log("entre " + numero12 + " y " + numero22 + " el numero mayor es " + numero12);

} else {
    console.log("entre " + numero12 + " y " + numero22 + " el numero mayor es " + numero22);
}
console.log("fin programa");


//______________________________________________________________________________________

// pedir un n umero y decir si es un numero positivo, negativo o cero

let numero =  0;

if (numero > 0) {
    console.log(numero + " es un valor positivo");
} else if (numero < 0) {
    console.log(numero + " es un valor negativo");
} else if (numero === 0 ) {
    console.log(numero + " es un valor 0");
}
console.log("fin programa");

//_____________________________________________________________________________________

// pedir una calificacion del uno al 10 y mostrar de la siguiente manera:
// insuficiente, suficiente, buena , excelente.

let calificacion = 10;

if (calificacion > 10) {
    console.log("Calificacion no valida");
}else if (calificacion >= 8) {
    console.log("Calificacion Excelente");
} else if (calificacion >= 7) {
    console.log("Calificacion Buena");
} else if (calificacion >= 4.5) {
    console.log("Calificacion Suficiente");
} else {
    console.log("Calificacion Insuficiente");
} 

console.log("fin programa");

//_________________________________________________________________________________________

// pedir la hora, minuto y segundo y mostrar la hora en el segundo siguiente

let hora = 2;
let min1 = 45;
let sec1 = 59;

sec1++

if (sec1 >= 60) {
    
    sec1 = 0;
    min1++;

    if (min1 >= 60) {
        min1 = 0;
        hora++

        if (hora >= 24) {

            hora = 0;

        }
    }
   
}

console.log("la hora es " + hora + ":" + min1 + ":" + sec1);
console.log(` la hora es  ${hora}: ${min1}: ${sec1} ` );

//_____________________________________________________________________________________________


// Juan tiene N dolares, David tiene la mitad de lo que posee Juan y Jose la mitad de lo que 
// poseen Juan y David juntos. 
// Mostrar el promedio de la cantidad de dinero que tienen entre los tres y redondearlo.


let juan = 9;
let david = juan / 2;
let jose = (juan + david) / 2;

if (juan >= 0) {
    let promedio = (juan + david + jose) / 3;
    console.log(Math.round(promedio));
}
console.log("fin");

//____________________________________________________________________________________________