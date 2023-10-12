/** PRIMERA FORMA */
const newMap = new Map();
newMap.set("clave","valor");
newMap.set("clave1","valor");
newMap.set("clave2","valor");
newMap.set("clave3","valor");
console.log(newMap);
console.log(newMap.get("clave"));
/** HAS es para saber si un valor está dentro del objeto*/
console.log(newMap.has("clave"));
console.log(newMap.size);



const newMap1 = new Map([["enero",15],["febrero",27],["enero",99]]);
console.log(newMap1)

for (let mes of newMap1.keys()){
    console.log(mes);
}

for (let valor of newMap1.values()){
    console.log(valor);
}

for (let [mes, ip_m] of newMap1.entries()){
    console.log(`mes: ${mes} --> Indice Pluviométrico: {ip_m}`);
}

for (let entrada of newMap1.entries()){
    console.log(entrada);
}

newMap1.forEach((ip_m,mes) => console.log(`messss: ${mes} ---> Indice Pluviométrico: ${ip_m}`)); 
//TRANSFORMAR MAPS EN ARRAYS
const a = [ ...newMap1];


// OBJETOS
// CREACION LITERAL
const color = {
    rojo : 0,
    verde : 50,
    azul : 120,
}

console.log(color);

//funcion constructora
// CREACION CON FUNCION
function Persona(nombre, edad, telefono, cp) {
    this.nombre = nombre;
    this.edad = edad;
    this.telefono = telefono;
    this.cp = cp;

}
//ESTO CAE EN EL EXAMEN
const pepe = new Persona("Pepe",23,61155166,18300);
typeof pepe;
// CREACION CON CLASES
class Persona2 {
    constructor(nombre, edad, telefono, cp) {
    this.nombre = nombre;
    this.edad = edad;
    this.telefono = telefono;
    this.cp = cp;
    }
}

const Pepa = new Persona2("Pepa",23,61155166,18300);


const sara = Object.create(null);
    sara.nombre = "Sara",
    sara.cp = 18000,
    sara.edad = 25,
    console.log(sara)

const luis = {}
luis.nombre = "Luis"
luis.cp = 18000
luis.edad = 27
console.log(typeof luis)

// FORMA OPTIMA

const user = {
    id : 890,
    name : "Luis",
    geo : {
        coord_x: 45,
        coord_y:90,
    },
    books : ["libro1","libro2","libro3","libro4"],
    basura: "menuda m...",
    carnet: true,
}

//user.delete("basura"); --> ASÍ NO
delete user.basura;
console.log(user);
for(let clave of Object.keys(user)){
    console.log(clave);
}

for(let [clave,valor] of Object.entries(user)){
    console.log(`clave: ${clave} valor: ${valor}`);
}

// FREEZE SIRVE PARA CONGEAR UN OBJETO Y EVITAR QUE SE REALIZEN CAMBIOS SOBRE ESTE
const newUser = Object.freeze(user);
newUser.name = "Manolo";
console.log(newUser);

// FOR..IN PARA ITERAR UN OBJETO

for( const clave in user){
    console.log(clave);
}

"strict mode"
const user1 = {
    id : 890,
    name : "Luis",
    geo : {
        coord_x: 45,
        coord_y:90,
    },
    books : ["libro1","libro2","libro3","libro4"],
    basura: "menuda m...",
    carnet: true,
}

//const {id : myId, geo : {coord_x : x}, aaa : {"ahhhhhhh"} } = user; // { id: ,nam: ,};

console.log(x)