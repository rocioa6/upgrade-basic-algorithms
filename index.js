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

    const character = {name: 'Jack Sparrow', age: 25};
let firstName = 'Jon';
lastName = 'Snow';
age = 24;

console.log ('Soy ' + firstName, lastName + ', tengo ' + age, 'años y me gustan los lobos. ');

/* 1.3 Dado el siguiente javascript, imprime con un console.log la suma del precio de
ambos juguetes.*/

const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};

console.log(toy1.price + toy2.price);

/* 1.4 Dado el siguiente javascript, actualiza el valor de la variable globalBasePrice a 25000 
y actualiza la propiedad finalPrice de todos los coches con el valor de su propiedad 
basePrice más el valor de la variable globalBasePrice. */

let globalBasePrice = 10000;
globalBasePrice = 25000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

car1.finalPrice = car1.basePrice + globalBasePrice;
car2.finalPrice = car1.basePrice + globalBasePrice;

console.log('precio coche 1: ' + car1.finalPrice + ' precio coche 2: ' + car2.finalPrice);

/* 1.1 Multiplica 10 por 5 y muestra el resultado mediante alert.*/

let multiplicar = 10 * 5;
alert('Resultado de multiplicar = ' + multiplicar);


/* 1.2 Divide 10 por 2 y muestra el resultado en un alert. */
let dividir = 10 / 2;
alert('Resultado de dividir = ' + dividir);

/* 1.3 Muestra mediante un alert el resto de dividir 15 por 9. */

let dividir2 = 15 / 9;
alert('Resultado de dividir 2 = ' + dividir2);

/* 1.4 Usa el correcto operador de asignación que resultará en x = 15, 
teniendo dos variables y = 10 y z = 5. */

y = 10;
z = 5;
x = y + z;
console.log('Ejercicio 1.4 ' + x);

/* 1.5 Usa el correcto operador de asignación que resultará en x = 50,
teniendo dos variables y = 10 y z = 5. */ 

x = y * z;
console.log('Ejercicio 1.5 ' + x);