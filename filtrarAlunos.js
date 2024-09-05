const alunos = [
    {nome: 'Jorge', nota:8},
    {nome: 'Maria', nota:7},
    {nome: 'Carlos', nota:3},
    {nome: 'Guilherme', nota:10},
    {nome: 'Victor', nota:5},
    {nome: 'Pedro',nota:4}
]

function filtrarAlunos(notas){
    return alunos.filter(aluno => aluno.nota >= notas)
}

const alunosAprovados = filtrarAlunos(6)

console.log('Alunos aprovados');
console.log(alunosAprovados);

