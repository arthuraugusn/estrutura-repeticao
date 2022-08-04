/* 
- Objetivo: Aplicar estruturas de repetição com laço for
- Autor:        Arthur Augusto
- Data Criação: 04/08/2022
- Version:      1.0
*/

console.log('Calcular uma tabuada')

const { parse } = require('path');
const { exit } = require('process');
var readline = require('readline');
const { calcularTabuada } = require('./modulos/tabuada');
var entradaDados= readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDados.question('Digite o número que você deseja calcular a tabuada: \n', function(numero1){
    let resultado;

    if(resultado = calcularTabuada(numero1)){
        console.log(resultado);
    }
})