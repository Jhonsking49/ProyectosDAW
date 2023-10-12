import { users } from "./assets/modules.js";


/**
 * @description: 
 *  Crear una funcion que le ase como parametro un array de objetos
 *  y me devuelva un Map cuya clave sea: "lastname_firstname"
 *  y cuyo valor sea "email"
 *  de aquellos ususarios cuyo email tenga .es
 */
/*
function ExtraerES (users) {
    const mapeo = new Map();
    for(let i = 0; i <= array.length;i++){
        if(users["email"].endWith(".es")){
            mapeo.push(users["lastname,firstname"]);
        }
    }
    

    return mapeo;
}
*/
/*
const ExtraerES2 = user.filter((user) => user.email.endWith(".es"));
const ExtraerUsers = ExtraerES2.Map((user) => ({lastname: user.lastname , firstname: user.firstname}));

console.log(ExtraerUsers(ExtraerES2(users)));
*/

const buscarSpanishReduce = (arr) => 
    arr.reduce(
        (miMap,{email, lastname, firstname}) => 
            email.slice(-3) === ".es" ? 
                miMap.set(`${lastname}_${firstname}`, 
                user.email) 
                : miMap, 
    new Map() 
);


console.log(buscarSpanishReduce(users));
