let biblioteca = {
    livros:
    [
    {titulo: 'how to tame a gay person',
        autor: "Mr potato",
        ano: 2009
    },

    {titulo: 'hamothamothamothabibihamot',
        autor: 'hamut',
        ano: 2067
    },
    {titulo: 'As profecias de lorenzzeti',
        autor: 'Sr Pedro Erly',
    ano: 2011
    }
]}
function escreverlivro(biblioteca) {
    for(let livro of biblioteca.livros) {
if (livro.ano > 2010){
    console.log(livro.titulo)
}
    }
} escreverlivro(biblioteca)