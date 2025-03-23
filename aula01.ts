let nome: string = "Matheus Costa";

let idade: number | string = 30;
let ativo: boolean = true;
let indefinido: undefined = undefined;
let nulo: null = null;
let qualquer: any = "Aceita qqr merda";
let desconhecido: unknown = 10;

console.log(`Nome: ${nome} - Idade: ${idade} anos`);
console.log(null == undefined);
console.log(null === undefined);

// type

// type Aluno = {
//   matricula: number;
//   nome: string;
//   nota: number;
//   aprovado: boolean;
// };

// const aluno: Aluno = {
//   matricula: 1,
//   nome: "Matheus",
//   nota: 8,
//   aprovado: true,
// };
// console.log(aluno);

// if (typeof qualquer == "string") {
//   console.log("É uma string");
// } else {
//   console.log("Não é uma string");
// }

// class Animal {
//   nome: string;
//   constructor(nome: string) {
//     this.nome = nome;
//   }
// }

// const animal = new Animal("Girafa");
// console.log(animal instanceof Animal)

type Produto = {
  nome: string;
  preco: number;
  categoria: string | number;
};

function verificarProduto(produto: Produto) {
  if (typeof produto.categoria == "string") {
    console.log(`Categoria: ${produto.categoria}`);
  } else if (typeof produto.categoria == "number") {
    console.log(`Categoria ID: ${produto.categoria}`);
  }
}

const produto: Produto = {
  nome: "Teclado",
  preco: 150,
  categoria: "PC",
};

const produto2: Produto = {
  nome: "Mouse",
  preco: 50,
  categoria: 1,
};

verificarProduto(produto)
verificarProduto(produto2)