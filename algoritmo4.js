// um array de objetos.
const funcionarios = [
  { nome: 'João', salario: 30000, departamento: 'TI' },
  { nome: 'Janete', salario: 70000, departamento: 'RH' },
  { nome: 'Sofia', salario: 100000, departamento: 'RH' },
 ];
 
 // aqui grupa os funcionários por departamento.
 const funcionariosPorDepartamento = funcionarios.reduce(
  (acumulador, funcionario) => {
    const departamento = funcionario.departamento;
    if (!acumulador[departamento]) {
      acumulador[departamento] = [];  // aqui nicializa o departamento se não existir.
    }
    acumulador[departamento].push(funcionario);  // o push diciona o funcionário ao departamento.
    return acumulador;  // return ao acumulador.
  },
  {},  // objeto vazio.
 );
 
 // aqui tem um calculo para média salarial por departamento usando o metodo map.
 const mediasSalarioPorDepartamento = Object.keys(funcionariosPorDepartamento).map((departamento) => {
  const total = funcionariosPorDepartamento[departamento].reduce(
    (acumulador, funcionario) => acumulador + funcionario.salario, 0);  // aqui tem a soma dos salários.
  return {
    departamento: departamento,
    media: total / funcionariosPorDepartamento[departamento].length,  // calcula a média salarial.
  };
 });
 
 // usando o metodo filtter ele vai filtrar os departamentos com média salarial maior que 65.000.
 const maioresPagamentos = mediasSalarioPorDepartamento.filter(
  (departamento) => departamento.media > 65000  // uma condição de média salarial maior que 65.000.
 );
 