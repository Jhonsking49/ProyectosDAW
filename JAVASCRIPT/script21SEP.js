/**
 * @description: Codigo realizado el 28-09-2023
 * @argument: Revisar y anotar los metodos: every(), filter(),
 */


const animales = new Set(["perro","gato","loro"]);
typeof animales;
animales.add("canario");
animales.add("canario");
animales.delete("canario");
animales.add("canario");
animales.size();
animales.has("perroooo");

for(let animal of animales){
    console.log(animal);
}
arrayAnimales = Array.from(animales);

arrayAnimales2 = [ ...animales ];

const a = [1,2,3,2,1,4,5,2,1];
// convierto a set y luego vuelvo a a Array?

const aSet = new Set(a);
const a1 = Array.from(aSet);
// Operaciones con set

const c = new Set([1,2,3]);
const d = new Set([6,2,1]);
//UNION --> c + d
const cd = new Set([ ...c , ...d]);
//DIFERENCIA --> c - d // filter (aprenderlo)
const c_d = new Set([ ...c].filter((num) => !d.has(num)));
//INTERSECCION --> C_i_D
const cId = new Set([ ...c].filter((num) => d.has(num)));

//EJERCICIO 
//Dados dos conjuntos de da dtos set, comprobar si son iguales elemento por elemento
const f = new Set([1,2,3]);
const g = new Set([4,2,1]);

const v = (s1,s2) => s1.size !== s2.size ? false : f.has(...g);
function v2(s1,s2) {
    if ( s1.size !== s2.size ){
        return false;
    } else {
        for(let num of s1){
            if (!s2,has(num)){
                return false;
            }
            return true;
        }
    }
}
// Comprobar si un subconjunto esta en un conjunto.
// Comprobar si un conjunto(b) es subconjunto de un conjunto dado(a).

const CdS = (s1,s2) => [ ...f.every((num) => g.has(num))];

// For each //SUMAR

const numeros = new Set([2,3,4]);
function sumar (...numeros){
    return [...numeros].reduce((acumulador,num) => acumulador += num,0);
}
