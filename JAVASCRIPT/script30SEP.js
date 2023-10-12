/**
 * @description: Segunda relación de ejercicios
 * @author: Juan Rey González
 * 
 */


/**
 * @argument: EJERCICIO 11
 * @description: La funcion mapearNumeros realiza la funcion ejemplo a cada elemento del array introducido
 * @param {1} array 
 * @param {2} function 
 * @returns array
 */
function mapearNumeros(arr, funct){
    const result = [];
    arr.forEach(element => {
        result.push(funct(element));
    });
    return result;
}
/**
 * @description: FUNCION EJEMPLO
 * @param {*} numero 
 * @returns numero
 */
function numeroAlCuadrado(numero){
    return numero**2;
}
array = [1,2,3,4,5]
console.log(mapearNumeros(array,numeroAlCuadrado))



/**
 * @argument: EJERCICIO 12
 * @description: Escribe una función llamada combinarObjetos que tome dos objetos (tanto arrays como objetos) obj1 y obj2. La función debe combinar ambos objetos en uno solo y devolverlo.
 * @author: CHAT GPT
 * @param {*} obj1 || @param {*} array
 * @param {*} obj2 || @param {*} array
 * @returns 
 */
/**
function combinarObjetos(obj1, obj2) {
  if ((typeof obj1 === 'object' || Array.isArray(obj1)) &&
      (typeof obj2 === 'object' || Array.isArray(obj2))) {
    if (Array.isArray(obj1) && Array.isArray(obj2)) {
      return obj1.concat(obj2);
    } else if (Array.isArray(obj1) && typeof obj2 === 'object') {
      const arr2 = Object.values(obj2);
      return obj1.concat(arr2);
    } else if (typeof obj1 === 'object' && Array.isArray(obj2)) {
      const arr1 = Object.values(obj1);
      return arr1.concat(obj2);
    } else {
      const resultado = {};

      for (const clave in obj1) {
        resultado[clave] = obj1[clave];
      }

      for (const clave in obj2) {
        resultado[clave] = obj2[clave];
      }

      return resultado;
    }
  } else {
    throw new Error('Ambos argumentos deben ser objetos o arrays.');
  }
}

const objeto1 = { a: 1, b: 2 };
const objeto2 = { b: 3, c: 4 };
const resultadoObjetos = combinarObjetos(objeto1, objeto2);
console.log(resultadoObjetos); // Resultado: { a: 1, b: 3, c: 4 }

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const resultadoArrays = combinarObjetos(array1, array2);
console.log(resultadoArrays); // Resultado: [1, 2, 3, 4, 5, 6]
*/

function combinarObjetos(obj1, obj2) {
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
    throw new Error('Ambos argumentos deben ser objetos o arrays.');
  }

  if (Array.isArray(obj1) && Array.isArray(obj2)) {
    return obj1.concat(obj2); // Combinar dos arrays
  } else if (!Array.isArray(obj1) && !Array.isArray(obj2)) {
    return { ...obj1, ...obj2 }; // Combinar dos objetos
  } else {
    if (Array.isArray(obj1)) {
      return [...obj1, obj2]; // Convertir obj2 en array y combinar con obj1
    } else {
      return [obj1, ...Object.values(obj2)]; // Convertir obj1 en array y combinar con obj2
    }
  }
}

// Ejemplo de uso con objetos:
const objeto1 = { a: 1, b: 2 };
const objeto2 = { b: 3, c: 4 };
const resultadoObjetos = combinarObjetos(objeto1, objeto2);
console.log(resultadoObjetos); // Resultado: { a: 1, b: 3, c: 4 }

// Ejemplo de uso con arrays:
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const resultadoArrays = combinarObjetos(array1, array2);
console.log(resultadoArrays); // Resultado: [1, 2, 3, 4, 5, 6]
console.log(combinarObjetos(array1,objeto2));
console.log(combinarObjetos(objeto1,array2));

/**
 * @description: Define una función llamada extraerPropiedades que tome un objeto obj y un array de propiedades. 
 *               La función debe devolver un nuevo objeto que contenga solo las propiedades especificadas en el array. Si una propiedad no existe en el objeto original, debe ser omitida en el nuevo objeto.
 * @param {*} obj 
 * @param {*} arr 
 * @returns 
 */
function extraerPropiedades(obj, arr) {
  const resultado = {};

  for (const propiedad of arr) {
    if (obj.hasOwnProperty(propiedad)) {//El método hasOwnProperty() devuelve un booleano indicando si el objeto tiene la propiedad especificada.
      resultado[propiedad] = obj[propiedad];
    }
  }

  return resultado;
}
const miObjeto = {
  nombre: "Paco",
  edad: 30,
  ciudad: "Granada",
  ocupacion: "Programador"
};

const propiedadesDeseadas = ["nombre", "edad", "ciudad"];

console.log(extraerPropiedades(miObjeto, propiedadesDeseadas))


function rangoNumeros(inicio, fin){
  const rango = [];
  for(let i = inicio; i <= fin; i++){
    rango.push(i);
  }
  return rango;
}

const inicio = 16;
const fin = 122;
console.log(rangoNumeros(inicio,fin));


function invertirCadena(array){
  const cadenaInvertida = [];
  for(let i = 0; i <= array.length; i++){
    array.push(array.map)
  }
}

