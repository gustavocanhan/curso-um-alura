let total = 0;

function adicionar() {
  let produto = document.getElementById("produto").value;
  let nomeProduto = produto.split("-")[0];
  let valorUnitario = produto.split("R$")[1];
  let quantidade = document.getElementById("quantidade").value;
  let valorTotal = document.getElementById("valor-total");

  if (quantidade == 0) {
    quantidade = 1;
  }

  let preco = quantidade * valorUnitario;

  let carrinho = document.getElementById("lista-produtos");
  carrinho.innerHTML =
    carrinho.innerHTML +
    `
  <section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$ ${preco}</span>
        </section>
  `;

  total = total + preco;
  valorTotal.textContent = `R$ ${total}`;
  document.getElementById("quantidade").value = "";
}

function limpar() {
  let total = 0
  let carrinho = document.getElementById("lista-produtos");
  let valorTotal = document.getElementById("valor-total");

  document.getElementById("quantidade").value = "";
  carrinho.innerHTML = `<span class="texto-azul"></span><span class="texto-azul"></span>`;
  valorTotal.textContent = "R$ ";
}
