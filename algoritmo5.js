// questão a: algoritmo 5: Some os valores das listas a = [1, 2, 3, 4, 5], b = [6, 7, 8, 9, 10].
const a = [1, 2, 3, 4, 5];
const b = [6, 7, 8, 9, 10];

const soma = a.reduce((acumulador, item, index) => acumulador + item + b[index], 0);
console.log(soma);