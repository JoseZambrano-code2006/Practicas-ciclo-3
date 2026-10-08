console.log('hello world');
/* UpperCamelCase, camelCase, snake_case  convenciones = estructuras */
let nombre = "hello world";
console.log('Soy un String', nombre);
let apellidos;//declaración de variable 
let apellidoCompleto;

apellidos = "Sanchez";
apellidos = "Tarrillo";
console.log('Soy un String B', apellidos);

// Datos primitivos
let numero = 1;
let text = "soy un texto";
let verdadero = true;
let falso = false;
let noDefinido;
let undef = undefined;
let nullo = null;

//constantes

let numero1 = 100;
 numero1 = 200;
console.log(numero1);

const nombre1 = "Pedro";
console.log(nombre1);

let animal = {
    id:1,
    name:"Comotú",
    color:"Negro",
    Race: "Pastor Aleman",
    Age: "1 año",
    size: "60 cm",
    
}
console.log("objeto",animal);
console.log("objeto1",animal['name']);

//cambio de propiedades

animal.Age=10;
animal['Age']=15;
console.log("objeto",animal);

delete animal.size;
console.log("objeto",animal);

//ARRAYS 02
let persona = [];//array vacio
persona = ['piero', 'fernando', 'karol', 'Vanessa', 'Elber', 'Cesia', 'Fabricio', 'Josue']

console.log(persona);
console.log(persona[0]);
persona[3]='Fassabi';
console.log(persona);

//funciones
function calcular(a,b){

  return (a<b)?a:b;//if simplificado
}
let result = calcular(10,2);
console.log(result);

//operadores
let a = 10;
let b = 2;
console.log("suma",a+b);
console.log("resta",a-b);
console.log("multiplacion",a*b);
console.log("division",a/b);
console.log("potencia",a**b);
console.log("modulo",a%b);

console.log("incrementar",++a);
console.log("incrementar",--a);

//operadores lógicos AND , OR, NOT

console.log(true && true);//result verdadero
console.log(false && false);//result falso

let suscrito = true;
let mayor = false;
//AND
 console.log("operador AND",suscrito && mayor);

 //OR
 console.log("operador OR",suscrito || mayor);

 //NOT
 console.log("operador NOT",!mayor);

 //operadores ternarios
//la expresion ? 'si es true': 'si es false'
let edad = 16;

let acceso = edad > 17 ? 'permitir acceso' : 'No ingresar';

console.log(acceso);

//flujos

let edad1 = 5;

if(edad1 > 17){
    console.log('usuario mayor de edad');
}else if(edad1 > 13){
    console.log('ingresar con adulto responsable');
}else if(edad1 > 6){
    console.log('No debe ir sin sus padres');
}else{
    console.log('son menores de edad');
}

// flujo while
let i = 0;

while (i < 10) {
    if (i % 2 !== 0) {
        console.log('impares', i);
    }
    i++;
}
console.log('salio del while')

//Do while

do {
    if (i % 2 == 0) {
        console.log('pares', i);
    }
    i++;
} while (i < 5) {

}
//for
for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        console.log('pares', i);
    }
}
//for of

let animales = ['perro', 'gato', 'gallina','loro'];

for(let ani of animales){
    console.log(ani);
}
//for in

let user = {
    id: 2,
    name: 'Juan',
    Age: 20,
};

for (let prop in user) {
    console.log(prop, user[prop]);

}

//switch

let action = 'editar';

switch (action) {
    case 'listar':
        console.log('Accion listar');
        break;
    case 'editar':
        console.log('Accion editar');
        break;
    default:
        console.log('no definido');
        break;
}