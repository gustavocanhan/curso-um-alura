let pistaTotal = document.getElementById("qtd-pista").textContent;
let superiorTotal = document.getElementById("qtd-superior").textContent;
let inferiorTotal = document.getElementById("qtd-inferior").textContent;

function comprar() {
  let inputIngresso = document.getElementById("tipo-ingresso").value;
  let inputQuantidade = document.getElementById("qtd").value;
  alert(inputQuantidade)

  let = mensagem = "Quantidade solicitada não esta disponivel!";

  // Quantidade disponivel
  if (inputIngresso == "inferior") {
    if (inputQuantidade > inferiorTotal) {
      alert(mensagem);
    } else {
      document.getElementById("qtd-inferior").textContent =
        inferiorTotal - inputQuantidade;
    }
  } else if (inputIngresso == "superior") {
    if (inputQuantidade > superiorTotal) {
      alert(mensagem);
    } else {
      document.getElementById("qtd-superior").textContent =
        superiorTotal - inputQuantidade;
    }
  } else {
    if (inputQuantidade > pistaTotal) {
      alert(mensagem);
    } else {
      document.getElementById("qtd-pista").textContent =
        pistaTotal - inputQuantidade;
    }
  }
}
