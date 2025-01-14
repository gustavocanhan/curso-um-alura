function retornaValor(idHTML) {
  let inputHTML = document.getElementById(idHTML).value;
  return inputHTML;
}

function limparValorInput(id){
  let inputHTML = document.getElementById(id).value = ""
}

function exibirValorLabel(id, texto) {
  let labelHTML = document.querySelector(id);
  labelHTML.textContent = texto;
}

function limparLabel(tag, texto){
  let labelHTML = document.querySelector(tag)
  labelHTML.textContent = texto;
}

function alterarStatusBotao(id){
  let buttonHTML = document.getElementById(id)
  if (buttonHTML.classList.contains("container__botao-desabilitado")){
    buttonHTML.classList.remove("container__botao-desabilitado")
    buttonHTML.classList.add("container__botao")
  } else{
    buttonHTML.classList.remove("container__botao")
    buttonHTML.classList.add("container__botao-desabilitado")
  }
}

function gerarNumeroAleatorio(min, max, quantidade) {
  let listaNumerosAleatorios = [];

  while (listaNumerosAleatorios.length != quantidade) {
    let numeroAleatorio = Math.floor(Math.random() * (max - min + 1) + min);

    if (numeroAleatorio >= min && !(listaNumerosAleatorios.includes(numeroAleatorio))) {
      listaNumerosAleatorios.push(numeroAleatorio);
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

  console.log(quantidade)
  console.log(valorMinimo)
  console.log(valorMaximo)
  console.log(numerosSorteados)

  mensagem = `Números sorteados: ${numerosSorteados}`;

  exibirValorLabel("#resultado label", mensagem);

  alterarStatusBotao("btn-reiniciar")
  alterarStatusBotao("btn-sortear")
}

function reiniciar(){
  alterarStatusBotao("btn-reiniciar")
  alterarStatusBotao("btn-sortear")

  limparValorInput("quantidade")
  limparValorInput("de")
  limparValorInput("ate")

  limparLabel("#resultado label", "Números sorteados: nenhum até agora")
}
