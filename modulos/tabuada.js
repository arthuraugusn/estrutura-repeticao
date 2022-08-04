/* 
- Objetivo:     Criação de funções para calcular uma tabuada
- Autor:        Arthur Augusto
- Data Criação: 04/08/2022
- Version:      1.0
*/

const { exit } = require("process");


const calcularTabuada = function(numero1){
    let tabuada = parseFloat(numero1);
    let resultado;
    if(isNaN(numero1)){
        console.log('Você não digitou um número :(');
        exit();
    }
    //Uso Laço For:
    for (let cont = 0; cont < 11; cont++) {
        resultado = tabuada*cont;
        console.log(tabuada+ ' x '+ cont+ ' = '+resultado);
    }
    
    /* Usando laço while: 

    while(let cont <=10){
        resultado = tabuada*cont;
        console.log(tabuada + ' x '+ cont + ' = '+ resultado)
        cont = cont+1;
        cont +=1; 
    } */
    
}
module.exports = {
    calcularTabuada
}