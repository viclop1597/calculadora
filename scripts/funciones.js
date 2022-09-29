//Botones y funciones

//Datos
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
const input = document.getElementById("result");

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// FUNCIONES
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++ SUM

//creacion de boton de suma
const buttonSum = document.getElementById("sum");

//funcion suma
function sum(a,b,...resto){
    let suma = a+b;
    resto.forEach(dato => {suma+= dato;})
    return suma;
}
console.log("El resultado de sumar varios numeros es=" + sum(input1,input2));

//Operación
const operacionSuma = () => {
    const x = parseInt(input1.value);
    const y = parseInt(input2.value);
    input.value = sum(x,y);
}

//accionando el botón o dandole la instrucción de cuando te presionen
buttonSum.addEventListener("click", operacionSuma)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++ RESTA
const buttonResta = document.getElementById("resta");

function resta(a,b,...resto){
    let rest = a-b;
    resto.forEach(dato => {rest-= dato;})
    return rest;
}
console.log("El resultado de restar varios numeros es=" + resta(input1,input2));

//Operación
const operacionResta = () => {
    const x = parseInt(input1.value);
    const y = parseInt(input2.value);
    input.value = resta(x,y);
}
buttonResta.addEventListener("click", operacionResta)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++ MULTIPLICAR
const buttonMultiplicar = document.getElementById("multipli");

function multipli(a,b,...resto){
    let multiplicar = a*b;
    resto.forEach(dato => {multiplicar*= dato;})
    return multiplicar;
}
console.log("El resultado de multiplicar varios numeros es=" + multipli(input1,input2));

//Operación
const operacionMultiplicar = () => {
    const x = parseInt(input1.value);
    const y = parseInt(input2.value);
    input.value = multipli(x,y);
}
buttonMultiplicar.addEventListener("click", operacionMultiplicar)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++ DIVIDIR
const buttonDividir = document.getElementById("dividi");

function dividi(a,b,...resto){
    let dividir = a/b;
    resto.forEach(dato => {dividir/= dato;})
    return dividir;
}
console.log("El resultado de multiplicar varios numeros es=" + dividi(input1,input2));

//Operación
const operacionDividir = () => {
    const x = parseInt(input1.value);
    const y = parseInt(input2.value);
    input.value = dividi(x,y);
}
buttonDividir.addEventListener("click", operacionDividir)