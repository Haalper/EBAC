const redesSociais = ['Facebook', 'Instagram', 'Twitter']

for (let i = 0; i < redesSociais.length; i++) {
    console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`)
}

redesSociais.forEach(function(nomeDaRedeSocial, indice) {
    console.log(`#${indice} Eu tenho perfil na rede social: ${nomeDaRedeSocial}`)

})

const alunos = ['Gustavo', 'Julia', 'Paula', 'Wagner']

const alunos2 = alunos.map(function(itemAtual) {
    return {
        nome: itemAtual,
        curso: 'Frontend'
    }
})

console.log(alunos2)

const paula = alunos2.find(function(item) {
    return item.nome == 'Paula'
})

console.log(paula)

const indiceDaPaula = alunos2.findIndex(function(item) {
    return item.nome == 'Paula'
})

console.log(indiceDaPaula)

alunos2.push( {
    nome: 'Lucio',
    curso: 'Backend'
})

const todosAlunosSaoDeFrontend = alunos2.every(function(item) {
    return item.curso === 'Frontend'
})


console.log(todosAlunosSaoDeFrontend)

const existeAlgumAlunodeBackend = alunos2.some(function(item){
    return item.curso === 'Backend' && item.curso === 'Frontend'
})

console.log(existeAlgumAlunodeBackend)

function filtraAlunosDeBackend(aluno) {
    return aluno.curso === 'Backend'
}

const alunosDeBackend = alunos2.filter(filtraAlunosDeBackend)

console.log(alunosDeBackend)

const nums = [10, 20, 30, 10]

const soma = nums.reduce(function(acumulador, itemAtual) {
    acumulador += itemAtual;
    return acumulador;
}, 0)

console.log(soma)

let somaComFor = 0

for (let i = 0; 1 < nums.length; i++) {
    somaComFor += nums(i)
}

console.log(somaComFor)