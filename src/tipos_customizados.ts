type aluno = {
    nome: string;
    cursos?: string[];
    idade: number;
}


const alunos: aluno[] = [
    {
        nome: "Carlos",
        cursos: ["Front-end", "UX/UI"],
        idade: 27
    },
    {
        nome: "Ana",
        cursos: ["Front-end", "Python"],
        idade: 23
    },
]


alunos.push({
    nome: "Carlos",
    cursos: ["Arquitetura"],
    idade: 29
})

const novoALuno: aluno = {
    nome: "Lucas",
    idade: 32
}

function exibeAluno(aluno: aluno) {
    console.log(aluno.nome)
}