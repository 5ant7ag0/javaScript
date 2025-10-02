document.writeln("Hola mundo desde un archivo externo")
/*
Variable: Es un espacion de memoria donde se almacena un dato y 
que se puede cambiar durante la ejecucion del progarama y se la puede eliminar cuando ya no se la ncesita.

TIPOS DE VARIABLES:
Variable primitivas: Almacenan datos simples
Variables de tipo objeto: Almacenan datos complejos.

Tipos de datos (Variables simples)

1. Numericas: enteros y decimales
2. de tipo objeto: Cadenas de textos, booleanos, arreglos y objetos
3. Especiales: null y undefinid

Declaracion de Variables:
1. Var. Declaracion de variable con alcance global o local a una funcion, pero no a un bloque
2. Let: Declaracion de variable con alcance de bloque.
3. Const: Declaracion de variable con alcance de bloque, pero su valor no puede cambiar.


Un arreglo es un espacio de memoria que se divide en n partes, 


SINTAXIS:

Una variable no puede iniciar con un numero
NO puede contener espacios
No puede ser una palabra reservada

Se recomienda usar camelCase.
*/


var edad = 30; 
var nombre="Juan";
var estatuta=1.75;
var esSoltero=true;
var hijos=null;
var direcion=undefined;
var paises=["Argentina, Brasil, Colombia"];
document.writeln("<br>");
document.writeln("<h1>Manejo de Java Script </h1>");
document.writeln("<br>");
document.writeln("Mi edad es: "+edad);

//Funcionaes en JavaScript:
function mostrarNombre(){
    let nombre="Pedro" //let va estar disponible dentro de la funcion
    document.writeln("<br>");
    document.writeln("<br>");
    document.writeln("Mi nombre es: "+nombre);
}

//Formas de llamar a una funcion

mostrarNombre();
document.writeln("<br> <br> Mi otro nombre: "+nombre);