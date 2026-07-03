const aluno = {
    nome: "Ana",
    nota1: 8,
    nota2: 7,
    nota3: 9
  };
for(let chave in aluno){
    console.log(`${chave}: ${aluno[chave]}`)
}