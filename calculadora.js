import somar from "./somar.js";
import dividir from "./dividir.js";
import subtrair from "./subtrair.js";
import multiplicar from "./multiplicar.js";

window.alert("Bem vindo a Calculadora!")
window.alert("Escolha a seguir a operação que deseja realizar")
let operacao = window.prompt("1: Somar; 2: Subtrair; 3: Multiplicar; 4: Dividir")
let vl1= parseInt(window.prompt ("Qual o primeiro valor a ser utilizado?"))
let vl2= parseInt(window.prompt ("Qual o segundo valor a ser utilizado?"))
switch(operacao){
    case '1':
        somar(vl1, vl2)
        break
    case '2':
        subtrair(vl1, vl2)
        break
    case '3':
        multiplicar(vl1,vl2)
        break
    case '4':
        dividir(vl1,vl2)
        break
    default:
        window.alert("Operacao invalida, reinicia a calculadora")
        break
}