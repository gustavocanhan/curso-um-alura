function comprar() {
  let inputIngresso = document.getElementById("tipo-ingresso").value;
  let inputQuantidade = parseInt(document.getElementById("qtd").value);

  if (inputIngresso == "inferior") {
    comprarIgresso(inputQuantidade, "qtd-inferior");
  } else if (inputIngresso == "superior") {
    comprarIgresso(inputQuantidade, "qtd-superior");
  } else {
    comprarIgresso(inputQuantidade, "qtd-pista");
  }
}

function comprarIgresso(quantidade, ingresso) {
  let ingressoTotal = parseInt(document.getElementById(ingresso).textContent);
  if (quantidade > ingressoTotal) {
    return alert("Quantidade solicitada não esta disponivel!");
  } else {
    ingressoTotal = ingressoTotal - quantidade;
    return (document.getElementById(ingresso).textContent = ingressoTotal);
  }
}

///////
//////
/////
// OUTRA FORMA DE FAZER
//////
////
//
// function comprar() {
//   let inputIngresso = document.getElementById("tipo-ingresso").value;
//   let inputQuantidade = document.getElementById("qtd").value;
//   let quantidade = parseInt(inputQuantidade);

//   if (inputIngresso == "inferior") {
//     comprarInferior(quantidade);
//   } else if (inputIngresso == "superior") {
//     comprarSuperior(quantidade);
//   } else {
//     comprarPista(quantidade);
//   }
// }

// function comprarInferior(quantidade) {
//   let inferiorTotal = document.getElementById("qtd-inferior").textContent;
//   if (quantidade > inferiorTotal) {
//     ingressoIndisponivel();
//   } else {
//     inferiorTotal = inferiorTotal - quantidade;
//     return (document.getElementById("qtd-inferior").textContent =
//       inferiorTotal);
//   }
// }

// function comprarSuperior(quantidade) {
//   let superiorTotal = document.getElementById("qtd-superior").textContent;
//   if (quantidade > superiorTotal) {
//     ingressoIndisponivel();
//   } else {
//     superiorTotal = superiorTotal - quantidade;
//     return (document.getElementById("qtd-superior").textContent =
//       superiorTotal);
//   }
// }

// function comprarPista(quantidade) {
//   let pistaTotal = document.getElementById("qtd-pista").textContent;
//   if (quantidade > pistaTotal) {
//     ingressoIndisponivel();
//   } else {
//     pistaTotal = pistaTotal - quantidade;
//     return (document.getElementById("qtd-pista").textContent = pistaTotal);
//   }
// }

// function ingressoIndisponivel() {
//   return alert("Quantidade solicitada não esta disponivel!");
// }
