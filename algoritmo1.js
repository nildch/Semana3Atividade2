// aqui eu tenho uma lista que solicita ao usuário ao tamanho da lista e armazena na variável 'tamanho'.
const tamanho = [1,2,3];

// aqui cria um array com o tamanho fornecido e preenche-o com 'null'.
const lista = new Array(tamanho).fill(null);

// temos uma aplicação a função 'map' para gerar um novo array baseado no índice dos itens.
lista
 .map(function (item, index) {
   // retornamos o índice + 1 para cada item da lista.
   return index + 1;
 })
 // aqui temos o falado reduce. aplica o 'reduce' e a função para calcular o produto dos números.
 .reduce(function (acumulador, item) {
   // retorna a função acumulador vezes item, que aqui se eu não engano, é um callback.
   return acumulador * item;
 });

 // fiz os ajustes com arrow function.