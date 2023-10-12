console.log("Hola mundo")
console.log(1)
var nombre = "Juan";
let apellidos = "RG"; // Para datos de tipo primitivo
const cp = '18300';
let nombreApellidos = nombre + apellidos;
console.log(nombreApellidos)
/**
 * 3 + "4"
 * 34
 * 3 + 2 + "4"
 * 54
 * "4" + 2 + 3
 * 423
 */

let a = 10;
let b = 20;
let c = `Tengo ${a} y ${b}: `;
//typeof c
console.log(a,b)
console.log(a + b)

/**DIFERENCIA ENTRE == Y ===
 * 
 *  === comprueba que el contenido y el tipo de dato es el mismo
 *  == comprueba que el contenido es el ismo
 */

let A = 10n; /** NO ES RECOMENDABLE CREAR NUMEROS CON NUMBER YA QUE NO ES CAPAZ DE DISTINGUIR ENTRE NÚMEROS Y LETRAS AL CREARLOS */
//Number(A) + 10;
//typeof A


let n = '${a}'; // Esto es un string ya que las comillas simples transforman intrinsecamente el contenido de estas sin que le especifiquemos nada, lo mismo ocurre si le ponemos un + o un - delante de una letra


