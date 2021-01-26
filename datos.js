/**
 * DATOS
 */

// {} => objeto
let persona = {
    nombre: "juan",
    apellidos: "martinez",
    fecha_nacimiento: "17/03/1992",
    trabajo: [],
    pais_nacimiento: [],
    casado: false
};

// paises por defecto
const paises = ["España", "Francia", "Italia", "Alemania", "Otro"];
const trabajos = ["enfermera", "medico", "maestro"];

// comprobamos que datos tiene la persona
console.log(persona);
console.log(typeof persona );
console.log("Apellidos de: " + persona.apellidos + " Nombre de: " + persona.nombre);

//asignacion del trabao 
persona.trabajo = trabajos[1];
persona.pais_nacimiento = paises[1];

// creamos una nueva persona a partir de los datos de la persona anterior
let nueva_persona = persona;

nueva_persona.casado = true;
nueva_persona.trabajo = trabajos[2];
nueva_persona.fecha_nacimiento = "15/04/1995";

nueva_persona.pais_nacimiento = paises[0];

//Esperamos que el usuario introducza varios variables
nueva_persona.nombre = String(prompt("Escriba su nombre:"));
nueva_persona.apellidos = String(prompt("Escriba sus apellidos:"));

//Introducir datos de la fecha nacimiento, de momento la pasamos a variable numerica
//para despues poder sumarla
const anyo = Number(prompt("Escriba su año nacimiento:"));
const mes = Number(prompt("Escriba su mes nacimiento:"));
const dia = Number(prompt("Escriba su dia nacimiento:"));

//concateamos variables numericas
nueva_persona.fecha_nacimiento = dia + "/" + mes + "/" + anyo;
// la concatenacion la asinamos para usarlo mas tarde
const str_suma = dia + "/" + mes + "/" + anyo;

//realizamos la suma
const suma = dia + mes + anyo;

console.log(nueva_persona);
console.log("La suma de su dia/mes/año es: " + suma + " " + str_suma);

