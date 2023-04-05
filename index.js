// 1- Crear un array llamado meses y que almacene el nombre de los doce meses del
// año. Mostrar por pantalla en forma de lista los doce nombres del arreglo. 

// const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

// console.log("Lista de Meses\n");
// for(let i = 0; i < meses.length; i++) {
//     console.log("* " + meses[i]);
// } 

//************************************************************************************************* */

// 2- Crear un script que solicite al usuario mediante un prompt el nombre de
// ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se
// debe mostrar el arreglo generado, luego realizar las siguientes acciones:
// ● Mostrar la longitud del arreglo.
// ● Mostrar en el documento web los ítems de las posiciones primera, tercera y
// última.
// ● Añade en última posición la ciudad de París.
// ● Escribe por pantalla el elemento que ocupa la segunda posición.
// ● Sustituye el elemento que ocupa la segunda posición por la ciudad de
// 'Barcelona'

// let ciudades = [];
// let continuar = true;
// while(continuar) {
//     let ciudad = prompt("Ingrese el nombre de una ciudad:");

//     if (ciudad !== null) {
//         ciudades.push(ciudad);
//     } else {
//         continuar = false;
//     }
// }

// console.log(ciudades);

// console.log(`La longitud del arreglo es: ${ciudades.length}`);
// document.write(`El arreglo de ciudades tiene 10 elementos<br><br>`);
// document.write(`* La primera ciudad es: ${ciudades[0]}<br>`);
// document.write(`* La tercera ciudad es: ${ciudades[2]}<br>`);
// document.write(`* La última ciudad es: ${ciudades[ciudades.length - 1]}<br><br>1`);

// ciudades.push("París");
// document.write(`Elemento ultima posición: ${ciudades[ciudades.length - 1]}<br>`);

// ciudades[1] = "Barcelona";

// console.log(ciudades);

//************************************************************************************************* */

// 4- Escribir el código de una función a la que se pasa como parámetro un número
// entero y devuelve como resultado una cadena de texto que indica si el número es
// par o impar. Mostrar por pantalla el resultado devuelto por la función.

// function parOImpar (number) {
// if (number % 2 === 0) {
//     return "El número es par";
// } else {
//     return "El número es impar";
// }
// }

//************************************************************************************************* */

// 5- Definir una función que muestre información sobre una cadena de texto que se
// le pasa como argumento. A partir de la cadena que se le pasa, la función
// determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o
// por una mezcla de ambas.

// function checkStrings(str){
//     if (str === str.toUpperCase()){
//         return "La cadena está formada por mayúsculas en su totalidad";
//     } else if (str === str.toLowerCase()){
//         return "La cadena está formada por minúsculas en su totalidad";
//     } else {
//         return "La cadena está formada por mayúsculas y minúsculas";
//     }
// }

//************************************************************************************************* */

// 6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo,
// luego crear una función para calcular su perímetro y mostrarlo por pantalla

// let ladoA = parseFloat(prompt("Ingrese el valor del lado A del rectángulo:"));
// let ladoB = parseFloat(prompt("Ingrese el valor del lado B del rectángulo:"));


// function calcularPerimetro(a, b) {
//   let perimetro = 2 * (a + b);
//   return perimetro;
// }


// let perimetro = calcularPerimetro(ladoA, ladoB);
// console.log("El perímetro del rectángulo es:", perimetro);

//************************************************************************************************* */


// 7- Escriba un script que muestre la tabla de multiplicar de un número ingresado
// por pantalla, la creación de la tabla debe ser realizada con una función y mostrar
// solo los resultados del 1 al 10 del número elegido por el usuario.

// const numb = parseInt(prompt("Por favor ingrese un número: "));

// function crearTabla(numb) {
//     for(let i = 1; i <= 10; i++){

//         const producto = numb * i;

//         console.log(numb + " x "+ i + " = " + producto);
//     }
// }

// //Llamamos la función con el nro ingresado por el usuario 

// crearTabla(numb);

//*************************************************************************************************

