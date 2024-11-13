const letras = [
    ['a', 'b', 'c'],
    ['c', 'd', 'f'],
    ['d', 'f', 'g'],
   ];
   
   // aqui chata o array, e usa 'reduce', para contar a quantidade de ocorrências de cada letra.
   let resultado = letras.flat().reduce((objeto, numero) => {
    if (objeto[numero]) {
      objeto[numero] += 1;  // incremento com a contagem se a letra já foi encontrada.
    } else {
      objeto[numero] = 1;  // aqui temos uma inicialização a contagem caso a letra seja encontrada pela primeira vez.
    }
    return objeto;
   }, {});  // aqui inicia um objeto vazio.

   