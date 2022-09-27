function obtenerMayor(x, y) {
  // "x" e "y" son números enteros .
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
	if(x>y){
		return x;
	}else if(y>x){
		return y;
	}else if(x===y) {
		return x;
	}
}

console.log(obtenerMayor(1,1))


function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
 

  return (edad > 18) ? "Allowed" : "Not allowed"
}

console.log(mayoriaDeEdad(parseInt(prompt('indiqu su edad'))))
  
let status = parseInt(prompt('Indique su estado de conexion'))

function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
  if(status===1) {
      return 'USER ONLINE'
  }else if (status===2) {
      return "USER IS AWAY"
  }else {
      return "USER OFFLINE"
  }
}
console.log(conection(status))


let idioma = prompt('Choose the language').toLowerCase()

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
if(idioma==="aleman") {
    return "Guten Tag!"
}else if (idioma==="mandarin") {
    return "Ni Hao!"
}else if (idioma==="ingles") {
    return  "Hello!"
}else {
    return "Hola!"
}

}
console.log(saludo(idioma))

const pedirColor = () => {
    let colorPedido = prompt('indique el color')
    return colorPedido.toLowerCase();
}

let color = pedirColor()

function colors(color) {
    
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuelve --> "This is blue"
  //En caso que el color recibido sea "red", devuelve --> "This is red"
  //En caso que el color recibido sea "green", devuelve --> "This is green"
  //En caso que el color recibido sea "orange", devuelve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
  switch(color) {
    case "blue":
        console.log("This is blue")
        break;
    case "red":
        console.log("This is red")
        break;
    case "green":
        console.log("This is green")
        break;
    case "orange":
        console.log('This is orange')
        break;
    default :
        console.log("Color NOT FOUND -404")
        break;
}
}
colors(color)


function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  return numero === 10 || numero === 5 ? "true" : "false"

}
console.log(esDiezOCinco(parseInt(prompt('ingresa un numero'))))



const pedirNum = () => {
	let numPedido = parseInt(prompt('ingrese un numero'))
	return numPedido;
}

let numero = pedirNum()

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  
while(numero<=50&&numero>=20) {//mientras q es true entra, cuando es false sale 
	console.log(true)
	numero = pedirNum()
	
	
}
	console.log(false)
}

console.log(estaEnRango(numero))

const numero = prompt("ingrese un numero");
const coma = '.';

			//problemas cuando pongo por ejemplo 1- ======================================================================
function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:

return (`${numero.includes(coma) ? 'es decimal' : 'es entero'}`);

}
console.log(esEntero(numero))


function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  if(numero%5===0&&numero%3===0) {
	  return "fizzbuzz"
  }else if(numero%5===0){
	  return "buzz"
  }else if(numero%3===0) {
	  return "fizz"
  }else {
	  "No es divisible ni por 3 ni por 5"
  }

}

console.log(fizzBuzz(parseInt(prompt('Ingrese un numero'))))


const PedirNumero1 = () => {
    let numeroPedido1 =  parseInt(prompt('ingrese un numero para ser evaluado'))
    return numeroPedido1
    
}
const PedirNumero2 = () => {
    let numeroPedido2 =  parseInt(prompt('ingrese un numero para ser evaluado'))
    return numeroPedido2
    
}
const PedirNumero3 = () => {
    let numeroPedido3 =  parseInt(prompt('ingrese un numero para ser evaluado'))
    return numeroPedido3
    
}
let num1 = PedirNumero1()
let num2 = PedirNumero2()
let num3 = PedirNumero3()


function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
  
  if((num1>num2||num1>num3)&&num1>0) {
      return `${num1} es mayor a todos y es positivo`
  }else if(num1<0||num2<0||num3<0) {
      return "Hay negativos"
  }else if(num3>num1&&num3>num2) {
      num3 += 1
      return num3
  }else if(num1===0||num2===0||num3===0) {
      return "Error"
      
  }else {
      return false
  }
    
}

console.log(operadoresLogicos(num1,num2,num3))

				//problemas en la condicion no funciona ======================================================================

   let numero= parseInt(prompt('Ingrese un numero para saber si es primo'))
function esPrimo(numero) {

    
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  while(numero!==0&&numero!==1){
  if(numero%(!numero)!==0) {
	  return "Es primo"
  }else {
	  return " Es compuesto"
  }
}
}
console.log(esPrimo(numero))
//es decir, que si intentamos dividirlos por cualquier otro número, 
//el resultado no es entero. Dicho de otra forma, si haces la división por 
//cualquier número que no sea 1 o él mismo, se obtiene un resto distinto de cero.
//son primos 2 3 5 7 11 13 17

function esVerdadero(valor){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
  return valor ? "Soy Verdadero" : "Soy Falso"

}

console.log(esVerdadero(true))

function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí   
for(let i = 0; i<=10; i++) {
	console.log(`6X${i}={6*i}`)
}

}
tablaDelSeis()

	let arr=[]
function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí   
for(let i = 0; i<=10; i++) {

	arr.push(6*i)
	
}
console.log(arr)
}
tablaDelSeis()
function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí   
for(let i = 0; i<=10; i++) {
	console.log(`6X${i}=${6*i}`)
}

}
tablaDelSeis()


let numero = prompt('ingrese un numero')
let numero = parseInt(prompt('ingrese un numero')).toString()
function tieneTresDigitos(numero){
  //Leer un número entero y determinar si tiene 3 dígitos.
  //Escribe tu código aquí
	if (numero.length===3) {
	    console.log('El numero tiene 3 digitos')
	}else {
	    console.log('El numero no tiene 3 digitos ')
	}
}

tieneTresDigitos(numero)

let numero = parseInt(prompt('ingrese un numero'))
function doWhile(numero) {
	let i = 0;
	
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
 do {
	 i++;
	 numero +=5;
	
	 
 }
 while(i<8) 

console.log(numero)
}

console.log(doWhile(numero))
