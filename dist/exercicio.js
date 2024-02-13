"use strict";

var alunos = [{
  nome: 'Luiz',
  nota: 5.5
}, {
  nome: 'Monica',
  nota: 7.0
}, {
  nome: 'Gil',
  nota: 6.0
}, {
  nome: 'Ana',
  nota: 4.0
}, {
  nome: 'Lucas',
  nota: 9.5
}];
var notasBoas = alunos.filter(function (nome) {
  return nome.nota >= 6;
});
console.log(notasBoas);

/*
function alunosComNotasBoas(aluno) {
    return aluno.nota >= 6
}

const alunosAprovados = alunos.filter(alunosComNotasBoas)

console.log(alunosAprovados)
*/