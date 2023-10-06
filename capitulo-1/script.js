// EXERCÍCIO PESQUISA BINÁRIO

function PesquisaBinaria(lista, item) {
  let baixo = 0;
  let alto = lista.length - 1;

  while (baixo <= alto) {
    let meio = Math.floor((baixo + alto) / 2);
    let chute = lista[meio];

    if (chute == item) {
      return meio;
    } else if (chute > item) {
      alto = meio - 1;
    } else {
      baixo = meio + 1;
    }
  }
}

const minhaLista = [1, 3, 5, 7, 9];

console.log(PesquisaBinaria(minhaLista, 3));
console.log(PesquisaBinaria(minhaLista, -1)); // undefined

// 1.1 Suponha que você tenha uma lista com 128 nomes e esteja fazendo uma pesquisa binária. Qual seria o número máximo de etapas que você levaria para encontrar o nome desejado?

// log2 128
// 2^x = 128
// x = 7
// 7 etapas

// 1.2 Suponha que você duplique o tamanho da lista. Qual seria o número máximo de etapas agora?

// log2 256
// 2^x = 156
// x = 8
// 8 etapas

// Algorítmo 1

// O(n) = 16 etapas

// Algorítmo 2
// O(n) = 4

// 1.3  Você tem um nome e deseja encontrar o número de telefone para esse enome em uma agenda telefônica
//   Pesquisa binária - O(log n)

// 1.4 Você tem um número de telefonee deseja encontrar odono dele em uma agenda telefônica.(Dica: Deve produrar pela agenda inteira!)
//   Pesquisa simples - O(n)

//  1.5 Você quer ler o número de cada pessoa da agenda telefônica.
//  Pesquisa simples - O(n)

// 1.6 Você quer ler os números apenas dos nomes que você começam com A.
// Pesquisa simples - O(n)
