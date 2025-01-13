function retornaValor(idHTML) {
  let inputHTML = document.getElementById(idHTML).value;
  return inputHTML;
}

function exibirValor(tag, texto) {
  let labelHTML = document.querySelector(tag);
  labelHTML.textContent = texto;
}

function gerarNumeroAleatorio(min, max, quantidade) {
  let listaNumerosAleatorios = [];
  let contador = 0;

  while (listaNumerosAleatorios.length != quantidade) {
    let numeroAleatorio = Math.floor(Math.random() * max + 1);

    if (
      numeroAleatorio >= min &&
      !listaNumerosAleatorios.includes(numeroAleatorio)
    ) {
      listaNumerosAleatorios.push(numeroAleatorio);
      contador++;
    }
  }

  return listaNumerosAleatorios;
}

function sortear() {
  let quantidade = retornaValor("quantidade");
  let valorMinimo = retornaValor("de");
  let valorMaximo = retornaValor("ate");

  let numerosSorteados = [];
  numerosSorteados = gerarNumeroAleatorio(valorMinimo, valorMaximo, quantidade);

  mensagem = `Números sorteados: ${numerosSorteados}`;

  exibirValor("#resultado label", mensagem);

  console.log(quantidade);
  console.log(valorMinimo);
  console.log(valorMaximo);
  console.log(numerosSorteados);
}
