// INSERTAR ELEMENTOS EN EL LOCAL STORAGE
import { users } from "./assets/modules.js";

//--------DECLARACION DE VARIABLES GLOBALES---------

const myStructurUsers = [];


// creamos una funcion que guarde en el localstorage la estructura usuarios.
/**
 * 
 * @param {Array} estructuraDatos 
 */
function insertUsuarios(clave,estructuraDatos){
    return localStorage.setItem(clave,JSON.stringify(estructuraDatos)); //Para guardar objetos en el localstorage hay que guardarlo en JSON
}

insertUsuarios("misUsuarios",users);

//creamos una funcion que carge del localstorage la estructura usuarios

function sacarUsuarios(clave){
    return JSON.parse(localStorage.getItem(clave))
    ? JSON.parse(localStorage.getItem(clave)) 
    : localStorage.getItem(clave);
}

const myUser = sacarUsuarios("name");

console.log(myUser);

//guardar en una estructura de datos el username y el password codificado 
//de todos los usuarios de mi estructura y de los nuevos usuarios que vaya a introducir sin repetir username

function guardarEstructuraUserPass (clave, estructuraUsuarios){
    const arrayTemporal = [];
    estructuraUsuarios.map(user => 
        arrayTemporal.push({[user.login.username] : [btoa(user.login.password)]})
        //localStorage.setItem(clave,)     (user.login.username,btoa(user.login.password))
    );
    return localStorage.setItem(clave, JSON.stringify(arrayTemporal));

}

guardarEstructuraUserPass("newUsers", myStructurUsers);

//funcion que guarde el formuario de datos en mi estructura de datos con username, password codificado
// no se puede repetir username

function guardarUserPassLocalStorage (clave, username, password) {
    const arrayBasura = JSON.parse(localStorage.getItem(clave));
    let encontrado = false;
    arrayBasura.map(objeto => 
        objeto.hasOwnProperty(username) ? (encontrado = true) : false);

    !encontrado ? arrayBasura.push({[username] : [password]}):alert(`El usuario con username ${username} ya existe`);
    localStorage.setItem(clave, JSON.stringify(arrayBasura));

    
}






















localStorage.setItem("misUsers", JSON.stringify(users));
localStorage.setItem("nombre", "Juan");
const usuario = {name: "Juan", cp: 18300};
localStorage.setItem("user", JSON.stringify(usuario));

alert(localStorage.getItem("nombre"));

localStorage.removeItem("nombre");


/**
 * 1º Crear una pagina web que tenga la siguiente estructura: un header que ocupe todo el ancho de la página, que tenga todo el nombre
 * nuetro proyecto, seguidamente tendremos dos secciones que parten la pagina por la mitad, la parte de la izquierda 
 * dispondremos de un formulario login que contendra los campos username, pass y el boton de guardar, y a la derecha 
 * tendremos un titulo donde salgan los usuarios almacenados, un text area y un boton CARGAR.
 * 
 * La funcionalidad será la siguiente: 
 * 1º cargaremos todos los ususarios de JSON_Placeholder en una variable llamada users, y a traves de una funcion guardara los usersname 
 * y los passwords del localstorage. la password será encriptada antes de ser almaceda
 * 
 * 2º a traves del formulario ingresaré un usuario y una contraseña, si el nombre no aparece almacenaremos el usuario y la contraseña
 * encriptadas en el localstorage. Si ya estuviera almacenada cambia de color algo o muestra un mensaje
 * 
 * 3º 
 * 
 * PARA ENCRIPTAR LA CONTRASEÑA UTILIZAREMOS "btoa" y atdo
 */
// 