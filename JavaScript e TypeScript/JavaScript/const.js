

const nome = "João";
// const é uma variável imutável, ou seja, não pode ser reatribuída

const sobrenome = "Silva";

let idade = 30;
let peso = 70;
const altura = 1.75;

let imc = peso / (altura * altura);

console.log(`Meu nome é ${nome} ${sobrenome}, tenho ${idade} anos, peso ${peso} kg e altura de ${altura} Meu IMC é ${imc.toFixed(2)}`);