// PRATICA GUIADA 1



const estudante = {
    nome: 'Buda',
    sobrenome: 'Peste',
    numeroDeMatricula: 8995959595,
    notasDoSemestre: [6,7,8,9,2,4]
}
//PRATICA GUIADA 2
estudante.modulo = 3


//console.log(estudante.nome)

//console.log(estudante.notasDoSemestre[1])

//console.log(estudante.modulo)


// PRATICA GUIADA 3

const novoNomeDeEstudante = {
    ...estudante
}

novoNomeDeEstudante.nome = 'Astrodev'
novoNomeDeEstudante.notasDoSemestre.push(9)
novoNomeDeEstudante.modulo = 4


//console.log(novoNomeDeEstudante)

const estudanteLabenu = [estudante,novoNomeDeEstudante]
//console.log(estudanteLabenu)



//EXERCICIO DE FIXACAO

const carrinho = {
    nome: 'Felipe',
    formaPagamento: 'Debito',
    endereco: 'Rua da Padaria'

    
}

carrinho.compras = {
    nomeDoProduto: 'Melancia',
    precoDoProduto: 420,
    quantidadeUnidadeComprada: 10
}
//console.log(carrinho)

console.log(carrinho.compras.quantidadeUnidadeComprada)

const carrinhoPresente = {
    ...carrinho
}
carrinhoPresente.nome = 'Fofa'
carrinhoPresente.formaPagamento = 'Cartao Presente'

console.log(carrinho,carrinhoPresente)