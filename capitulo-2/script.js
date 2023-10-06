// 2.1 Suponha que você esteja criando um aplicativo para acompanhar as suas finanças. Todos os dias você anotará tudo o que gastou e onde gastou. No final do mês, você deverá revisar os seus gastos e resumir o quanto gastou. Logo, você terá um monte de inserções e poucas leituras. Você deverá usar um array ou uma lista para implementar este aplicativo?

// Lista encadeada

// 2.2 Suponha que você esteja criando um aplicatico para anotar os pedidos dos clientes em um restaurante. Seu aplicativo precisa de uma lista de pedidos. Os garçons adicionam os pedidos a essa lista e os chefes retiram os pedidos da lista. Funciona como uma fila. Os garçons colocam os pedidos no final da fila e os chefes retiram os pedidos do começo dela para cozinhá-los. Você usaria um array ou uma lista encadeada para implementar essa lista? (Dica: listas encadeadas são boas para inserções/eliminações e array são bons para acessos aleatórios. O que fazer neste caso?)

// Lista encadeada

// 2.3 Vamos analisar um experimento. Imagine que o Facebook guarda uma lista de usuários. Quando alguém tenta acessar o Facebook, uma busca é feita pelo nome do usuário. Se o nome da pessoa está na lista, ela pode continuar o acesso. As pessoas acessam o Facebook com muita frequência, então existem muitas buscas nessa lista. Presuma que o Facebook usa a pesquisa binária para producara um nome na lista. A pesquisa binária requer acesso aleatório - você precisa ser capax de acessar o meio da lista de nomes instantaneamente. Sabendo disso, você implementaria essa lista como um array ou uma lista encadeada?

// Array ordenado.

// 2.4 As pessoas se inscrevem no Facbook com muita frequência também. Suponha que você decida usar um array para armazenar a lista de usuários. Quais desvantagens de um array em relação às inserções? Em particular, imagine que você está usando a pesquisa binária para buscar os logins. O que acontece quando você adiciona novos usuários em um array?

// Primeiro acredito que está relacionado a velocidade do array, que já a sua inserção é naturalmente lento. O array precisará ser ordenado toda vez que um usuário for inserido.

// 2.5 Na verdade, o Facebook não usa nem array nem listas encadeadas para armazenar informações. Vamos considerar uma estrutura de dados híbrida: um array de listas encadeadas. Você tem um array de 26 slotes. Cada slote aponta para uma lista encadeada. Por exemplo, o primeiro slot do array aponta para uma lista encadeada que contém os usuários que começam com a letra A. O segundo slot, aponta para a lista encadeada que contém os usuários que começam com a letra B, e assim por diante.
// Suponha que o Adit B se inscreva no Facebook e você queira adicionálo ã lista. Você ai ao slot 1 do array, a seguir para lista encadeada do slot 1, e adiciona Adit B no final. Agora suponha que você queira procurar Zakhir H. Você vai ao slot 26, que aponta para a lista encadeada de todos os nomes começados em Z. Então, procura pela lista até encontrar o Zakhir H.
// Compare esta estrutura híbrida com arrays e listas encadeadas. É mais lento ou mais rápido fazer inserções e eliminações nesse caso? Você não precisa responder dando o tempo de execução Big(0), apenas diga se a nova estrutura de dados é mais rápida ou mais lenta do que os arrays e listas encadeadas.

// Acredito que é mais lento do que as listas encadeadas e mais rápido do que os arrays para inserções. E mais lenta do que arrays e mais rápidas do que listas encadeadas para buscas.

// CÓDIGO PARA ORDERNAR LISTA DE MÚSICAS

function buscarMenor(array) {
  let menor = array[0];
  let menorIndice = 0;

  for (let i = 1; i < array.length; i++) {
    if (array[i] < menor) {
      menor = array[i];
      menorIndice = i;
    }
  }
  return menorIndice;
}

function ordernarporSelecao(array) {
  let novoArray = [];

  for (let i = 0; i < array.length; i++) {
    let menor = buscarMenor(array);
    novoArray.push(array.splice(menor, 1)[0]);
  }
  return novoArray;
}

console.log(ordernarporSelecao([5, 3, 8, 2, 1, 4]));
