const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// 🚀 1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA

const nameGenreAuthor = books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);


// 🚀 2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.
// Dica: use as funções map, sort

function nameAndAge(livros) { 
  const newObject = [];
  livros.map((livro) => newObject.push( {age: `${livro.releaseYear - livro.author.birthYear}`, autor: `${livro.author.name}`}));
  newObject.sort((a, b) => a.age > b.age ? 1: -1);
  return newObject;
}


// 🚀 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
// Dica: use a função filter;

function fantasyOrScienceFiction(livros) {
  const arr = livros.filter((livro) => livro.genre === 'Ficção Científica' || livro.genre === 'Fantasia');
  return arr;
}

// 🚀 4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.

function oldBooksOrdered(livros) {
  const arr = livros.filter((livro) => 2022 - livro.releaseYear >= 60)
  arr.sort((a,b) => a.releaseYear > b.releaseYear ? 1 : -1);
  return arr;
}


// 🚀 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

function fantasyOrScienceFictionAuthors(livros) {
  const arr = livros.filter((livro) => livro.genre === 'Ficção Científica' || livro.genre === 'Fantasia').map((livro) => livro.author.name);
  arr.sort();
  return arr;
  
}

// 🚀 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

function oldBooks(livros) {
  const arr = livros.filter((livro) => 2022 - livro.releaseYear >= 60).map((livro) => livro.name);  
  return arr;
}

// 🚀 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
// Dica: cada inicial termina com um ponto.

function authorWith3DotsOnName(livros) {
  const arr = livros.filter((livro) => livro.author.name.search(/[A-z]\.\s[A-z]\.\s[A-z]\./) >= 0); 
  return arr
}
console.log(authorWith3DotsOnName(books));

