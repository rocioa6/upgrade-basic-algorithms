let myFavoriteHero = "Hulk";
let x = 50;
let h = 5;
let y = 10;
let z = h + y;

/* ------- */

/* 1.2 Declara 3 variables con los nombres y valores siguientes 
	firstName = 'Jon'; 
	lastName = 'Snow'; 
	age = 24; 
Muestralos por consola de esta forma: 
	'Soy Jon Snow, tengo 24 años y me gustan los lobos.' */

const character = { name: "Jack Sparrow", age: 25 };
let firstName = "Jon";
lastName = "Snow";
age = 24;

console.log(
  "Soy " + firstName,
  lastName + ", tengo " + age,
  "años y me gustan los lobos. "
);

/* 1.3 Dado el siguiente javascript, imprime con un console.log la suma del precio de
ambos juguetes.*/

const toy1 = { name: "Buss myYear", price: 19 };
const toy2 = { name: "Rallo mcKing", price: 29 };

console.log(toy1.price + toy2.price);

/* 1.4 Dado el siguiente javascript, actualiza el valor de la variable globalBasePrice a 25000 
y actualiza la propiedad finalPrice de todos los coches con el valor de su propiedad 
basePrice más el valor de la variable globalBasePrice. */

let globalBasePrice = 10000;
globalBasePrice = 25000;
const car1 = { name: "BMW m&m", basePrice: 50000, finalPrice: 60000 };
const car2 = { name: "Chevrolet Corbina", basePrice: 70000, finalPrice: 80000 };

car1.finalPrice = car1.basePrice + globalBasePrice;
car2.finalPrice = car1.basePrice + globalBasePrice;

console.log(
  "precio coche 1: " + car1.finalPrice + " precio coche 2: " + car2.finalPrice
);

/* 1.1 Multiplica 10 por 5 y muestra el resultado mediante alert.*/

let multiplicar = 10 * 5;
alert("Resultado de multiplicar = " + multiplicar);

/* 1.2 Divide 10 por 2 y muestra el resultado en un alert. */
let dividir = 10 / 2;
alert("Resultado de dividir = " + dividir);

/* 1.3 Muestra mediante un alert el resto de dividir 15 por 9. */

let dividir2 = 15 / 9;
alert("Resultado de dividir 2 = " + dividir2);

/* 1.4 Usa el correcto operador de asignación que resultará en x = 15, 
teniendo dos variables y = 10 y z = 5. */

y = 10;
z = 5;
x = y + z;
console.log("Ejercicio 1.4 " + x);

/* 1.5 Usa el correcto operador de asignación que resultará en x = 50,
teniendo dos variables y = 10 y z = 5. */

x = y * z;
console.log("Ejercicio 1.5 " + x);

/*----------*/

const number1 = 10;
const number2 = 20;
const number3 = 2;

// ejemplo
if (number1 === 10) {
  console.log("number1 es estrictamente igual a 10");
}

if (number2 / number1 == 2) {
  console.log("number2 dividido entre number1 es igual a 2");
}

if (number1 !== number2) {
  console.log("number1 es estrictamente distinto a number2");
}

if (number3 != number1) {
  console.log("number3 es distinto number1");
}

if (number3 * 5 == number1) {
  console.log("number3 por 5 es igual a number1");
}

if (number3 * 5 == number1 && number1 * 2 == number2) {
  console.log(
    "number3 por 5 es igual a number1 Y number1 por 2 es igual a number2"
  );
}

if (number2 / 2 == number1 || number1 / 5 == number3) {
  console.log(
    "number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3"
  );
}

/*-------------*/
/* 1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.

1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo 
cuando el resto del numero dividido entre 2 sea 0.

1.3 Crea un bucle para conseguir dormir contando ovejas. 
Este bucle empieza en 0 y termina en 10. 
Muestra por consola un mensaje diciendo 'Intentando dormir' en cada vuelta del bucle 
y cambia el mensaje en la última vuelta a 'Dormido!'. */

for (let i = 0; i <= 9; i++) {
  console.log(i);
}

for (i = 0; i <= 9; i++) {
    if ( i % 2 === 0) {
        console.log(i);
    }
}

for (i = 0; i <= 10; i++) {
  if (i <= 9) {
  console.log("Intentando dormir");
}
  else {
    console.log("Dormido!");
  }
}
