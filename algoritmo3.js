const estudantes = [
    { nome: 'Alice', notas: [100, 60, 92] },
    { nome: 'João', notas: [75, 30, 85] },
    { nome: 'Charles', notas: [90, 95, 85] },
    { nome: 'Paulo', notas: [100, 100, 100] },
   ];
   
   // aqui calacula a média das notas de cada estudante, pois é isso o que o map faz, ele executa em cada elemento do array.
   const estudantesMedias = estudantes.map((estudante) => {
    const total = estudante.notas.reduce((soma, nota) => soma + nota, 0);  // aqui tenho uma soma de todas as notas.
    let { nome } = estudante;  // aqui temos desestruturação com o nome do estudante com objeto.
    return { nome, media: total / estudante.notas.length };  // um return que vai retornar um novo objeto com nome e média.
   });
   
   // o filtter que filtra os estudantes com média maior a 90.
   const melhoresMedias = estudantesMedias.filter(
    (student) => student.media > 90  // arrow function que estudent pra obter a media maior que noventa.
   );
   
   