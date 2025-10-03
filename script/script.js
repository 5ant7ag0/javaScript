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
    document.writeln
}

//Formas de llamar a una funcion

mostrarNombre();
document.writeln("<br> <br> Mi otro nombre: "+nombre);

// funcion que recibe parametros
function sumar(a,b){
    let resultado;
    resultado=a+b;
    resultado=a+b;
    return resultado;

}

//Llamamos a la funcion 
var suma=sumar(40,50);
document.writeln("<br><br> La suma es: "+suma);
/*OPERADOERES ARITMETICOS
+ Suma 
- resta
* Multiplicacion 
/ Division
% Modulo: residuo de una division 
++ Incremento
-- Decremento 

Operadores de asignacion:
Estos operadores se utilizan para asignar valores a las variables.
= signacion simple
+= Asignacion con suma (y+= b es equivalente y y=y+b)
-= Asiganacion de resta (y -=b es equivalente a y=y-b)
=== Igualdad estricta (Compara valor y tipo 6) 6==== "6": no es igual

OPERADORES DE COMPARACION:
Estos operadores se utilizan para comparar valores y devuelven un valor booleano (True o false).
== Igualdad (Compara solo valor)
!= Desigualdad (Compara solo el valor)
> Mayor que
> Menor que
<= Mayor o igual que
>= Menor o igual que

OPERADORES LOGICOS 
Estos operadores se utilizan para combinar expresiones booleanas

&& AND devuelve true si ambas condiciones son verdaderas 
|| OR Devuelve true si al menos una condicion es verdaddera 
! NOT Invierte el valor de una condion*/


//La condicional nos permite ejecutar un bloque de codigo si se cumole una condicion.

/*SINTAXIS:
if(condicion){
    Bloque de codigo a ejecutar si la condicion es verdaddera
    }else{
        Bloque de codigo a ejecutar si la condicion es falsa
    }
        */
//


//crear un script donde se verifique la edad entre dos personas 
var edadElvis=29;
var edadJustin=40;
if(edadElvis>edadJustin){
    document.writeln("<br> Elvis es mayor que Justin");
    
}else{
    document.writeln("<br> Justin es mayor que Elvis");
}